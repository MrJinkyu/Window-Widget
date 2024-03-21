"use strict";
{
    const app = document.querySelector(".screen__center");
    const drawingBoard = document.querySelector(".app__drawing-board");
    const musicPlayer = document.querySelector(".app__music-player");
    const calculator = document.querySelector(".app_calculator");
    function toggleClassName(element) {
        if (element.className.includes("active")) {
            element.classList.remove("active");
        }
        else {
            element.classList.add("active");
        }
    }
    app.addEventListener("click", (e) => {
        switch (e.target.className) {
            case "fa-solid fa-palette":
                toggleClassName(drawingBoard);
                break;
            case "fa-solid fa-music":
                toggleClassName(musicPlayer);
                break;
            case "fa-solid fa-calculator":
                toggleClassName(calculator);
                break;
            default:
                break;
        }
    });
}
