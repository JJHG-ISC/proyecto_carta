document.addEventListener("DOMContentLoaded", function () {
    const heartsContainer = document.querySelector(".hearts-container");
    const botonNo = document.getElementById("botonNo");
    const botonSi = document.getElementById("botonSi");
    const descargar = document.getElementById("descargar");

    descargar.style.display = "none";

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        heart.style.fontSize = (Math.random() * 20 + 10) + "px";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 100);

    botonNo.addEventListener("mouseover", function () {
        const maxX = window.innerWidth - botonNo.offsetWidth - 50; 
        const maxY = window.innerHeight - botonNo.offsetHeight - 50; 

        let x, y;

        do {
            x = Math.random() * maxX;
            y = Math.random() * maxY;
        } while (
            Math.abs(x - botonSi.offsetLeft) < 100 && 
            Math.abs(y - botonSi.offsetTop) < 50
        );

        botonNo.style.left = x + "px";
        botonNo.style.top = y + "px";
    });

    botonSi.addEventListener("click", function () {
        descargar.style.display = "block";
        descargar.style.animation = "fadeIn 1s ease-in-out";
    });

    // Generar PDF dinámicamente
    descargar.addEventListener("click", function (e) {
        e.preventDefault();
        // const { jsPDF } = windw.jspdf;
        const doc = new jsPDF();       

        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text("Carta de San Valentín ❤️", 20, 30);

        doc.setFontSize(14);
        doc.setFont("helvetica", "normal");
        const lines = doc.splitTextToSize(carta, 180);
        doc.text(lines, 20, 50);

        doc.save("carta.pdf");
    });
});
