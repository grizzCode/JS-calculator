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


