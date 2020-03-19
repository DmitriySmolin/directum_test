/*Задание 1. Калькулятор.*/

function calculate(expression) {
  validation(expression.split(""));

  let expArr = expression.split(/(?= )|\b/);
  let a = 0;
  let b = 0;
  let finish = [];
  let resultSum = sum(expArr);

  function sum(arr) {
    let stack = arr;
    for (let i = 0; i < stack.length; i++) {
      if (stack[i] === "#") {
        a = stack[i - 1];
        b = stack[i + 1];
        stack.splice(stack.indexOf(stack[i - 1]), 3, Number(a) + Number(b));
      }
    }
    stack.includes("#") === false ? stack : sum(stack);
    return stack;
  }

  function sub(resultSum) {
    let stack = resultSum;
    for (let i = 0; i < stack.length; i++) {
      let count = stack.indexOf("~");

      if (stack[i] === "~") {
        if (finish.length === 0) {
          a = stack[i - 1];
          b = stack[i + 1];
        } else {
          a = finish[finish.length - 1];
          b = stack[count + 1];
        }

        finish.push(2 * Number(a) - b);
        stack.splice(0, stack.indexOf(stack[i]) + 2);
      }
    }
    stack.length === 0 ? stack : sub(stack);
    return finish;
  }
  sub(resultSum);

  return finish.pop();
}

function validation(expArr) {
  for (let i = 0; i < expArr.length; i++) {
    if (
      isNaN(Number(expArr[0])) ||
      isNaN(Number(expArr[expArr.length - 1])) ||
      !expArr.includes("~") ||
      !expArr.includes("#")
    )
      throw new Error("Ошибка... Введите данные корректно!");

    if (expArr[i] === "~" && (expArr[i + 1] === "~" || expArr[i + 1] === "#"))
      throw new Error("Ошибка... Введите данные корректно!");
    if (expArr[i] === "#" && (expArr[i + 1] === `#` || expArr[i + 1] === "~"))
      throw new Error("Ошибка... Введите данные корректно!");
  }
}

const result = calculate("3~9#8~4");
console.log(result);