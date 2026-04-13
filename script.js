const projetos = [
  {
    nome: "Meu Portfólio",
    descricao: "Portfólio profissional desenvolvido com HTML, CSS e JavaScript, incluindo responsividade, animações e modo claro/escuro.",
    link: "https://github.com/mariadejesus02?tab=repositories"
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach((projeto, i) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
  `;

  container.appendChild(card);

  setTimeout(() => {
    card.classList.add("show");
  }, i * 200);
});

/* DARK MODE */
document.getElementById("toggle-theme")
  .addEventListener("click", () => {
    document.body.classList.toggle("light");
  });

/* SCROLL */
function reveal() {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);