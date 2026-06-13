# 🐾 BomPraPet – Sistema Web para PetShop

Site desenvolvido como projeto acadêmico para apresentação de um petshop fictício, evoluído em duas fases.

---

## 📋 Sobre o Projeto

O **BomPraPet** é um sistema web para petshop que permite aos clientes visualizar produtos e serviços, realizar cadastro e agendar atendimentos de banho e tosa — com opção de tele-busca ou entrega no local.

---

## ✅ Funcionalidades

### Fase 1
- Página inicial com listagem de produtos por categoria (rações, brinquedos, higiene)
- Página de serviços com valores e disponibilidade de tele-busca
- Navegação entre páginas

### Fase 2
- Navbar responsiva com menu hambúrguer (mobile)
- Carrossel automático de destaques (Bootstrap)
- Relógio em tempo real com saudação dinâmica por turno (JavaScript)
- Cards interativos de produtos e serviços com efeito hover
- Formulário de **cadastro do cliente e do pet** com validação JavaScript
- Formulário de **agendamento** com escolha de serviço (Banho ou Tosa), método (tele-busca ou entrega no local) e calendário de data/hora
- Máscaras automáticas para CPF e telefone
- Toast de confirmação após envio do formulário
- Acessibilidade para deficientes visuais: atributos `alt`, `aria-label`, `aria-required`, `aria-live`, `role`, foco visível via teclado

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| **HTML5** | — | Estrutura de todas as páginas |
| **CSS3** | — | Estilos personalizados, variáveis CSS, responsividade |
| **JavaScript** | ES6+ | Relógio em tempo real, saudação, máscaras de input, validação de formulário, Toast |
| **Bootstrap** | 5.3.3 | Grid responsivo, navbar, carrossel, cards, formulários, Toast |
| **Bootstrap Icons** | 1.11.3 | Ícones utilizados na interface |
| **Fonte Nunito** | — | Tipografia do projeto (carregada localmente) |

> Todos os arquivos de Bootstrap e fonte Nunito estão incluídos **localmente** no projeto — não é necessária conexão com internet para visualizar o site.

---

## 📁 Estrutura de Pastas

```
Projeto-FaseII/
├── html/
│   ├── index.html          → Página inicial (produtos + carrossel)
│   ├── servicos.html       → Serviços disponíveis
│   ├── cadastro.html       → Formulário de cadastro do cliente e do pet
│   └── agendamento.html    → Agendamento de serviço com calendário
│
├── assets/
│   ├── imagens/            → Fotos dos produtos
│   ├── sans/               → Fonte Nunito (.woff2) carregada localmente
│   └── css/
│       ├── bootstrap/
│       │   ├── bootstrap.min.css
│       │   ├── bootstrap-icons.min.css
│       │   └── fonts/      → Fontes dos ícones Bootstrap
│       ├── estilo.css      → CSS personalizado do projeto
│       └── nunito.css      → Declaração @font-face da fonte Nunito
│
└── js/
    ├── bootstrap.bundle.min.js  → Bootstrap JS (com Popper) local
    └── script.js                → JavaScript do projeto
```

---

## 🚀 Como Visualizar

1. Faça o download ou clone o repositório
2. Abra a pasta `html/`
3. Abra o arquivo `index.html` em qualquer navegador moderno
4. Não é necessário servidor — o site funciona completamente offline

---

## ♿ Acessibilidade

O projeto implementa os seguintes requisitos de acessibilidade para deficientes visuais (Aula 10):

- Atributo `alt` descritivo em **todas** as imagens
- `aria-label` em botões, formulários e seções
- `aria-required="true"` nos campos obrigatórios
- `aria-invalid` para campos com erro de validação
- `aria-live="polite"` no relógio e no toast (anunciados por leitores de tela)
- `role="navigation"`, `role="status"`, `role="article"` nos elementos corretos
- Ícones decorativos com `aria-hidden="true"` (não lidos por leitores de tela)
- `fieldset` + `legend` nos grupos de radio button
- Foco visível ao navegar por teclado (outline laranja via `:focus-visible`)

---

## 👩‍💻 Autora

**Isabelle Trampusch Bernardo**  

