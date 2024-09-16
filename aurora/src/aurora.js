const aurora = {
  perguntas: [
    "Olá, eu sou a Aurora! Vamos iniciar o seu primeiro acesso?",
    "Você costuma sentir dores no peito quando pratica atividade física?",
    "Você toma atualmente algum medicamento para pressão arterial e/ou problema de coração?",
    "Você possui alguma doença crônica?",
  ],
};

const replies = [];
const options = [
  "Hipertensão",
  "Diabetes",
  "Osteoporose",
  "Doença cardiovascular",
  "Insuficiência renal",
  "Câncer",
  "Colesterol alto",
  "Asma",
  "Fibromialgia",
  "Hipertireoidismo",
  "Gota",
  "Obesidade",
  "Não Possui.",
];

export function askQuestion(question) {
  return aurora.perguntas[question];
}

export function sendOptions() {
  return options;
}

export function saveReply(reply) {
  replies.push(reply);
  console.log(replies)
}

export { options };
