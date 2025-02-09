document.addEventListener("DOMContentLoaded", () => {
    console.log("Gallery initialized");
    const figures = document.querySelectorAll("figure");
    
    figures.forEach(fig => {
        fig.setAttribute("tabindex", "0");
        fig.addEventListener("mouseover", () => fig.style.backgroundColor = "#ddd");
        fig.addEventListener("mouseleave", () => fig.style.backgroundColor = "");
        fig.addEventListener("focus", () => fig.style.border = "2px solid blue");
        fig.addEventListener("blur", () => fig.style.border = "1px solid #ccc");
    });
});
