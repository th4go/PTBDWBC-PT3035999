
document.addEventListener("DOMContentLoaded", function() {

    const navbarContainer = document.getElementById("navbar-placeholder");
    
    if (navbarContainer) {
        fetch("/navbar.html")
            .then(response => response.text())
            .then(data => {
                navbarContainer.innerHTML = data;
            })
            .catch(error => console.error("Erro ao carregar a navbar:", error));
    }
});