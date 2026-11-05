// Conexão do site público com o banco do sistema de gestão (Supabase).
// Usa a chave "anon public", feita para ficar em sites. O site só consegue chamar
// as funções plantel_site() e competicoes_site(), que mostram apenas dados públicos.
// Nunca coloque aqui a chave "service_role" ou "secret".
window.GLAMAR_SUPABASE = {
  url: "https://oapjjmawsdezahdbmlnf.supabase.co",
  key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hcGpqbWF3c2RlemFoZGJtbG5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM4OTM4MjYsImV4cCI6MjEwOTQ2OTgyNn0.s_79cY3I2OWR9NxOyqdarC8dEmvficB1mm3tzMN47c0"
};
