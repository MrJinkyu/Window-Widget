{
  const result = document.querySelector(
    ".calculator_result"
  )! as HTMLSpanElement;
  const calculatorBody = document.querySelector(
    ".calculator__body"
  )! as HTMLDivElement;

  function onChangeResult(inputNum: string, isClear = false) {
    if (result.textContent == "0" || isClear) {
      result.textContent = `${inputNum}`;
      return;
    }
    result.textContent += `${inputNum}`;
  }

  function onClickEquals() {
    if (result.textContent !== "0" && !!result.textContent) {
      result.textContent = eval(result.textContent);
    }
  }
  function onClickBody(e: any) {
    if (!e.target.className.includes("calculator__num")) {
      switch (e.target.id) {
        case "clear":
          onChangeResult("0", true);
          break;
        case "sign":
          break;
        case "percentage":
          break;
        case "divide":
          onChangeResult("/");
          break;
        case "multiply":
          onChangeResult("*");
          break;
        case "minus":
          onChangeResult("-");
          break;
        case "plus":
          onChangeResult("+");
          break;
        case "dot":
          break;
        case "equals":
          onClickEquals();
          break;
        default:
          return;
      }
      return;
    }
    onChangeResult(e.target.textContent);
  }
  calculatorBody.addEventListener("click", onClickBody);
}
