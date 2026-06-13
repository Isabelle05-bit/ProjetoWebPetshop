/* ============================================================
   script.js – BomPraPet PetShop | Fase 2
   Autor: Isabelle Trampusch Bernardo
   Descrição: Funções JavaScript – relógio, saudação,
              máscaras de input e validação de formulário
   ============================================================ */


/* ----------------------------------------------------------
   1. RELÓGIO EM TEMPO REAL
   Atualiza o elemento #relogio a cada 1 segundo com
   data e hora formatadas em português (pt-BR).
   Referência: funções temporais (Aula 9)
---------------------------------------------------------- */
function atualizarRelogio() {
  const el = document.getElementById('relogio');
  if (!el) return;

  const agora = new Date();

  const dataFormatada = agora.toLocaleDateString('pt-BR', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  const horaFormatada = agora.toLocaleTimeString('pt-BR');

  el.textContent = `${dataFormatada} | ${horaFormatada}`;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);


/* ----------------------------------------------------------
   2. SAUDAÇÃO DINÂMICA POR TURNO
   Exibe "Bom dia", "Boa tarde" ou "Boa noite" conforme a hora.
   Referência: funções temporais (Aula 9)
---------------------------------------------------------- */
function exibirSaudacao() {
  const el = document.getElementById('saudacao');
  if (!el) return;

  const hora = new Date().getHours();
  let msg = '';

  if (hora >= 5 && hora < 12)       msg = '☀️ Bom dia! Bem-vindo(a) ao BomPraPet!';
  else if (hora >= 12 && hora < 18) msg = '🌤️ Boa tarde! Bem-vindo(a) ao BomPraPet!';
  else                               msg = '🌙 Boa noite! Bem-vindo(a) ao BomPraPet!';

  el.textContent = msg;
}

exibirSaudacao();


/* ----------------------------------------------------------
   3. VALIDAÇÃO DO FORMULÁRIO
   Verifica os campos obrigatórios antes do envio.
   Referência: formulários com validação (Aula 6)
---------------------------------------------------------- */
function validarFormulario(event) {
  event.preventDefault(); // Impede envio real (projeto acadêmico)

  const form = document.getElementById('form-cadastro');
  let valido = true;

  // Campos de texto obrigatórios
  const camposTexto = [
    'cliente-nome', 'cliente-cpf', 'cliente-telefone',
    'cliente-email', 'cliente-endereco',
    'pet-nome', 'pet-raca', 'pet-idade'
  ];

  camposTexto.forEach(id => {
    const campo = document.getElementById(id);
    if (!campo) return;
    if (!campo.value.trim()) {
      campo.classList.add('is-invalid');
      campo.setAttribute('aria-invalid', 'true');
      valido = false;
    } else {
      campo.classList.remove('is-invalid');
      campo.setAttribute('aria-invalid', 'false');
    }
  });

  // Sexo (radio button)
  const sexoSelecionado = form.querySelector('input[name="cliente-sexo"]:checked');
  const sexoFeedback = document.getElementById('sexo-feedback');
  if (!sexoSelecionado) {
    if (sexoFeedback) sexoFeedback.style.display = 'block';
    valido = false;
  } else {
    if (sexoFeedback) sexoFeedback.style.display = 'none';
  }

  // Serviço (radio button)
  const servicoSelecionado = form.querySelector('input[name="servico"]:checked');
  const servicoFeedback = document.getElementById('servico-feedback');
  if (!servicoSelecionado) {
    if (servicoFeedback) servicoFeedback.style.display = 'block';
    valido = false;
  } else {
    if (servicoFeedback) servicoFeedback.style.display = 'none';
  }

  // Método (radio button)
  const metodoSelecionado = form.querySelector('input[name="metodo"]:checked');
  const metodoFeedback = document.getElementById('metodo-feedback');
  if (!metodoSelecionado) {
    if (metodoFeedback) metodoFeedback.style.display = 'block';
    valido = false;
  } else {
    if (metodoFeedback) metodoFeedback.style.display = 'none';
  }

  // Data/hora do agendamento
  const dataAgendamento = document.getElementById('data-agendamento');
  if (dataAgendamento && !dataAgendamento.value) {
    dataAgendamento.classList.add('is-invalid');
    valido = false;
  } else if (dataAgendamento) {
    dataAgendamento.classList.remove('is-invalid');
  }

  if (valido) {
    exibirToast();
    form.reset();
  }
}


/* ----------------------------------------------------------
   4. TOAST DE CONFIRMAÇÃO (Bootstrap 5)
---------------------------------------------------------- */
function exibirToast() {
  const toastEl = document.getElementById('toast-confirmacao');
  if (!toastEl) return;
  const toast = new bootstrap.Toast(toastEl, { delay: 5000 });
  toast.show();
}


/* ----------------------------------------------------------
   5. MÁSCARA DE CPF  →  000.000.000-00
---------------------------------------------------------- */
function mascaraCPF(event) {
  let v = event.target.value.replace(/\D/g, '');
  if (v.length > 11) v = v.slice(0, 11);
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  event.target.value = v;
}


/* ----------------------------------------------------------
   6. MÁSCARA DE TELEFONE  →  (99) 99999-9999
---------------------------------------------------------- */
function mascaraTelefone(event) {
  let v = event.target.value.replace(/\D/g, '');
  if (v.length > 11) v = v.slice(0, 11);
  v = v.replace(/^(\d{2})(\d)/, '($1) $2');
  v = v.replace(/(\d{5})(\d{1,4})$/, '$1-$2');
  event.target.value = v;
}


/* ----------------------------------------------------------
   7. INICIALIZAÇÃO – vincula eventos após o DOM carregar
---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {

  // Máscara CPF
  const campoCPF = document.getElementById('cliente-cpf');
  if (campoCPF) campoCPF.addEventListener('input', mascaraCPF);

  // Máscara telefone
  const campoTel = document.getElementById('cliente-telefone');
  if (campoTel) campoTel.addEventListener('input', mascaraTelefone);

  // Submit do formulário
  const form = document.getElementById('form-cadastro');
  if (form) form.addEventListener('submit', validarFormulario);

  // Remove is-invalid ao corrigir campo
  document.querySelectorAll('.form-control, .form-select').forEach(el => {
    el.addEventListener('input', () => {
      el.classList.remove('is-invalid');
      el.setAttribute('aria-invalid', 'false');
    });
  });
});
