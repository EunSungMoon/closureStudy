/****************************************************************************************************************
클로저란?
자신을 포함하고 있는 외부함수보다 내부함수가 더 오래 유지되는 경우, 
외부함수 밖에서 내부함수가 호출되더라도 외부함수의 지역변수에 접근할 수 있는 것

클로저란 
함수는 호출되고 실행이 끝나면 종료가 된다. 수명 끝!

이때 [[Environment]]라는 숨겨져 있는 프로퍼티에 외부 변수를 저장해둠
클로저가 필요한 이유
전역변수 줄일수 있음

밑에 예제가 다 클로저를 이야기함
var를 쓸 경우 사람들이 많이 실수하는 부분이 있었으나 let, const로 바뀌면서 없어짐!!

****************************************************************************************************************/
let btn = document.querySelector('.btn');
let handleClick = () => {
  let count = 0;
  return function countFunc() {
    count++
    return console.log(count);
  }
}
btn.addEventListener('click', handleClick())
let newTag = (open, close) => {
  return function (content) {
    return `${open} ${content} ${close}`
  }
}


let bold = newTag('<b>', '</b>')
let italic = newTag('<li>', '</li>')
console.log(bold(italic('this is my content!')));
let funcs = [];
for (let i = 0; i < 3; i++) {
  funcs[i] = function () {
    return i;
  }
}
for (let j = 0; j < funcs.length; j++) {
  console.log(funcs[j]());
}
let outer = () => {
  let title = 'closure'
  return function () {
    console.log(title);
  }
}
let inner = outer();
inner()
