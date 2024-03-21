"use strict";
{
    const backgroundImgs = [
        "0.jpg",
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
    ];
    const lockScreen = document.querySelector(".lock-screen");
    const selectedBgURL = backgroundImgs[Math.floor(Math.random() * backgroundImgs.length)];
    function backgroundChange() {
        lockScreen.style.background = `url(/assets/${selectedBgURL}) center/cover no-repeat`;
    }
    backgroundChange();
}
