function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img

  const img = document.querySelector(".profile img")
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/perfil-light.png")
    img.setAttribute("alt", "Foto do Itachi 2")
  } else {
    // se tiver sem light mode , manter imagem
    img.setAttribute("src", "./assets/perfil-dark.png")
    img.setAttribute("alt", "Foto do Itachi")
  }

  // Substituir a image
}
