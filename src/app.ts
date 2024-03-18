{
  const app = document.querySelector(".screen__center")! as HTMLDivElement;
  const drawingBoard = document.querySelector(
    ".app__drawing-board"
  )! as HTMLDivElement;
  const musicPlayer = document.querySelector(
    ".app__music-player"
  )! as HTMLDivElement;
  const calculator = document.querySelector(
    ".app_calculator"
  )! as HTMLDivElement;

  function toggleClassName(element: HTMLElement) {
    if (element.className.includes("active")) {
      element.classList.remove("active");
    } else {
      element.classList.add("active");
    }
  }
  app.addEventListener("click", (e: any) => {
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
