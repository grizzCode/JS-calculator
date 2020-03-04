

let args = []

function calcDisplay(x) {
// Displays either entered data from user or result of maths.
document.getElementById('screen').innerHTML = x
}

function buttonPress(value) {
  args.push(value)
  let output = Number(args.join(''))
  calcDisplay(output)
  console.log(output)
}


function multiply() {
  let argOne = Number(args.join(''))
  document.getElementById('screen').innerHTML = " * "
  args = []
  let argTwo = Number(args.join(''))
  result = argOne * args
  console.log(result)
}
function divide() {

}
function add() {

}
function subtract() {

}
function allClear() {
  args = []
  calcDisplay(args)
}
