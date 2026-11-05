# Site público GLAMAR

Site de apresentação da GLAMAR com plantel, competições e produtos.

## Arquivos
- `index.html`: o site.
- `config.js`: endereço do Supabase e chave pública (anon).
- `dados.js`: WhatsApp, Instagram e e-mail, mais fotos em boa resolução, vídeos e textos dos animais. Também serve de reserva se o Supabase não responder.
- `fotos/`: fotos e vídeos do plantel.
- `supabase-site-publico.sql`: libera para o site só os dados públicos.

## Ligar ao sistema de gestão (uma vez)
1. Abra o Supabase, vá em **SQL Editor > New query**, cole todo o `supabase-site-publico.sql` e clique em **Run**.
2. Pronto. O site passa a mostrar:
   - **Plantel:** animais da categoria "Próprio", ativos e com registro.
   - **Competições:** data, evento, local, categoria, animal, resultado e folder. Provas futuras aparecem em "Próximas provas" e as passadas em "Participações e resultados".
3. Para esconder um animal ou uma competição, marque **Publicar no site = Não** no sistema de gestão.

Custos, prêmios em dinheiro, chip, proprietário e observações **nunca** aparecem no site.

## Publicar na Vercel
1. Suba esta pasta para o repositório do site no GitHub.
2. Na Vercel, clique em **Add New > Project**, importe o repositório e escolha o framework **Other**. Depois clique em **Deploy**.

Cada alteração enviada ao GitHub é publicada sozinha pela Vercel.
