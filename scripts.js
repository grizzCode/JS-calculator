console.log("Psytonic Hyperdrive: ACTIVE")

let args = []

function calcDisplay(x) {
// Displays either entered data from user or result of maths.
document.getElementById('screen').innerHTML = x
}

function buttonPress(value) {
  args.push(value)
  let output = args.join('')
  calcDisplay(output)
}

function multiply() {
  let argOne = Number(args.join(''))
  document.getElementById('screen').innerHTML = " * "
  args = []
  console.log(argOne)
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
