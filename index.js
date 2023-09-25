window.addEventListener("scroll", function() {
    var scrollToTopButton = document.getElementById("scrollToTopButton");
    
    // Mostra o botão quando o usuário rolar para baixo
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

document.getElementById("scrollToTopButton").addEventListener("click", function() {
    // Role suavemente para o topo da página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
