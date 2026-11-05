-- GLAMAR · dados públicos para o site (rode uma vez no SQL Editor do Supabase)
--
-- O site público NÃO lê a tabela "registros" diretamente. Ele chama só estas
-- duas funções, que devolvem apenas os campos que podem aparecer na internet.
-- Custos, prêmios em dinheiro, chip, proprietário e observações nunca saem.
--
-- Para tirar um animal ou uma competição do site, marque "Publicar no site = Não"
-- no sistema de gestão (campo publicarSite).

-- 1. Plantel: animais próprios, ativos e com registro
create or replace function public.plantel_site()
returns jsonb
language sql stable security definer set search_path = public as $$
  select coalesce(jsonb_agg(jsonb_build_object(
      'id',          r.id,
      'nome',        r.dados->>'nome',
      'raca',        r.dados->>'raca',
      'sexo',        r.dados->>'sexo',
      'nascimento',  r.dados->>'nascimento',
      'pelagem',     nullif(r.dados->>'pelagem', 'Não informada'),
      'registro',    trim(split_part(r.dados->>'registro', '·', 1)),
      'genealogia',  coalesce(r.dados->'genealogia', '{}'::jsonb),
      'foto',        r.dados->>'foto'
    ) order by r.dados->>'nome'), '[]'::jsonb)
  from public.registros r
  where r.colecao = 'animais'
    and r.dados->>'categoria' = 'Próprio'
    and coalesce(r.dados->>'status', 'Ativo') = 'Ativo'
    and coalesce(r.dados->>'registro', '') <> ''
    and r.dados->>'registro' !~* '^\s*sem registro'
    and lower(coalesce(r.dados->>'publicarSite', 'sim')) not in ('false', 'nao', 'não')
$$;

-- 2. Competições: data, evento, local, categoria, animal, resultado e folder
create or replace function public.competicoes_site()
returns jsonb
language sql stable security definer set search_path = public as $$
  select coalesce(jsonb_agg(jsonb_build_object(
      'id',         c.id,
      'data',       c.dados->>'dataCompeticao',
      'evento',     c.dados->>'evento',
      'local',      c.dados->>'local',
      'categoria',  c.dados->>'categoria',
      'resultado',  c.dados->>'resultado',
      'animal',     a.dados->>'nome',
      'animalId',   a.id,
      'folder',     c.dados->>'folder'
    ) order by c.dados->>'dataCompeticao' desc), '[]'::jsonb)
  from public.registros c
  left join public.registros a on a.colecao = 'animais' and a.id = c.dados->>'animal'
  where c.colecao = 'competicoes'
    and coalesce(c.dados->>'dataCompeticao', '') <> ''
    and lower(coalesce(c.dados->>'publicarSite', 'sim')) not in ('false', 'nao', 'não')
$$;

-- 3. Só estas funções ficam abertas ao público
revoke all on function public.plantel_site() from public;
revoke all on function public.competicoes_site() from public;
grant execute on function public.plantel_site() to anon, authenticated;
grant execute on function public.competicoes_site() to anon, authenticated;
