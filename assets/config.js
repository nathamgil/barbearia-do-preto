/* =====================================================================
   Barbearia do Preto — configuração
   Único arquivo que precisa ser editado para o site sair do modo de
   demonstração e entrar no ar de verdade.
   ===================================================================== */

window.TV = {

  /* ---- Negócio ---------------------------------------------------- */
  nome:       'Barbearia do Preto',
  slogan:     'Aqui o corte é do seu gosto!',
  instagram:  'barbeariadopreto',

  // WhatsApp da barbearia em formato internacional, só dígitos.
  // A CONFIRMAR com o Pretão: enquanto estiver vazio, os botões de contato
  // levam para o Direct do Instagram.
  whatsapp:        '',
  whatsappVisivel: '',

  endereco: {
    linha1: 'Av. Francisco Nobre, 562',
    linha2: 'Medeiros, Jundiaí — SP',
    maps:   'https://www.google.com/maps/search/?api=1&query=Av+Francisco+Nobre+562+Medeiros+Jundiai+SP',
    busca:  'Barbearia do Preto, Av. Francisco Nobre, 562, Medeiros, Jundiaí - SP'
  },

  /* ---- Supabase ---------------------------------------------------
     Enquanto estes dois campos estiverem vazios, o site roda em MODO
     DEMONSTRAÇÃO: a agenda funciona de verdade na tela, mas os horários
     ficam guardados só no navegador de quem está olhando.

     Para ligar de verdade:
       1. supabase.com  ->  New project (região: South America / São Paulo)
       2. SQL Editor    ->  cole e rode db/schema.sql inteiro
       3. Settings > API -> copie "Project URL" e a chave "anon public"
       4. cole abaixo e suba pro GitHub

     A chave anon é pública por natureza — ela aparece no código do site.
     Quem protege os dados é o RLS + as funções do schema.sql, não ela.
  ------------------------------------------------------------------ */
  supabaseUrl: '',
  supabaseKey: '',

  /* ---- Regras da agenda (espelham o db/schema.sql) ----------------
     Mudou aqui? Mude no banco também — o banco é quem manda de verdade.
  ------------------------------------------------------------------ */
  regras: {
    passoMin:        30,   // grade de meia em meia hora
    antecedenciaMin: 30,   // não dá para marcar para daqui a 20 min
    janelaDias:      30,   // até 30 dias à frente
    cancelamentoH:   2     // cancela sozinho até 2h antes
  },

  /* ---- Expediente (0 = domingo) ------------------------------------
     Copiado do Booksy da casa (conferido em 23/09/2026), com a pausa
     do meio-dia. Segunda e domingo fechado.
  ------------------------------------------------------------------ */
  expediente: {
    0: { aberto: false },
    1: { aberto: false },
    2: { aberto: true, abre: '08:00', fecha: '19:30', pausa: ['13:00', '14:00'] },
    3: { aberto: true, abre: '08:00', fecha: '21:00', pausa: ['13:00', '14:00'] },
    4: { aberto: true, abre: '08:00', fecha: '21:00', pausa: ['12:00', '14:00'] },
    5: { aberto: true, abre: '08:00', fecha: '21:00', pausa: ['12:00', '14:00'] },
    6: { aberto: true, abre: '08:00', fecha: '17:00', pausa: ['13:00', '14:00'] }
  },

  /* ---- Dados usados no modo demonstração --------------------------
     No ar de verdade, barbeiros e serviços vêm do banco, não daqui.
     Os mesmos dois profissionais do Booksy. Sem foto = iniciais.
  ------------------------------------------------------------------ */
  barbeirosDemo: [
    { id:'pretao', slug:'pretao', nome:'Pretão', foto:'fotos/pretao.jpg', instagram:'pretao_dark' },
    { id:'vitor',  slug:'vitor',  nome:'Vitor',  foto:'fotos/vitor.jpg',  instagram:'vitor16_barber' }
  ],

  // Preços copiados do Booksy da Barbearia do Preto (set/2026).
  // No Booksy o tempo muda por barbeiro (o Vitor leva mais): aqui vale o maior.
  // preco_centavos 0 = "sob consulta".
  servicosDemo: [
    { id:'corte',               nome:'Corte',                            descricao:'Corte de cabelo com o barbeiro que você escolher.',                                   preco_centavos:4999,  a_partir_de:false, duracao_min:40, categoria:'Cabelo' },
    { id:'corte-2-pessoas',     nome:'Corte (para 2 pessoas)',           descricao:'Dois cortes no mesmo horário.',                                                       preco_centavos:9999,  a_partir_de:false, duracao_min:60, categoria:'Cabelo' },
    { id:'pezinho',             nome:'Acabamento Pezinho',               descricao:'Acabamento do contorno entre um corte e outro.',                                      preco_centavos:1500,  a_partir_de:false, duracao_min:10, categoria:'Cabelo' },
    { id:'corte-barba',         nome:'Corte + Barba',                    descricao:'Corte e barba com toalha quente e gel ou loção de barbear, conforme a sua pele.',     preco_centavos:9999,  a_partir_de:false, duracao_min:80, categoria:'Combos' },
    { id:'corte-sobrancelha',   nome:'Corte + Sobrancelha',              descricao:'Corte de cabelo e sobrancelha no mesmo horário.',                                     preco_centavos:5999,  a_partir_de:false, duracao_min:40, categoria:'Combos' },
    { id:'corte-progressiva',   nome:'Corte + Progressiva + Hidratação', descricao:'Corte, progressiva e hidratação no mesmo horário.',                                   preco_centavos:17000, a_partir_de:false, duracao_min:90, categoria:'Combos' },
    { id:'barba',               nome:'Barba',                            descricao:'Barba modelada com o barbeiro que você escolher.',                                                             preco_centavos:4999,  a_partir_de:false, duracao_min:40, categoria:'Barba' },
    { id:'barba-maquina',       nome:'Abaixar a barba com máquina',      descricao:'Só baixar o volume da barba na máquina.',                                             preco_centavos:2500,  a_partir_de:false, duracao_min:10, categoria:'Barba' },
    { id:'sobrancelha',         nome:'Sobrancelha',                      descricao:'Desenho da sobrancelha.',                                                             preco_centavos:1000,  a_partir_de:true,  duracao_min:15, categoria:'Barba' },
    { id:'luzes',               nome:'Luzes',                            descricao:'Luzes no cabelo.',                                                                    preco_centavos:13000, a_partir_de:true,  duracao_min:60, categoria:'Química' },
    { id:'platinado',           nome:'Platinado',                        descricao:'Processo intermitente, feito em etapas.',                                             preco_centavos:20000, a_partir_de:true,  duracao_min:90, categoria:'Química' },
    { id:'progressiva',         nome:'Progressiva',                      descricao:'Alisamento progressivo.',                                                             preco_centavos:12000, a_partir_de:false, duracao_min:60, categoria:'Química' }
  ]
};

window.TV.modoDemo = !(window.TV.supabaseUrl && window.TV.supabaseKey);
