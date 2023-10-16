// Truthy and Falsy Values 

// truthy value 
let aTruthy = Boolean(true)
let bTruthy = Boolean("hi")
let cTruthy = Boolean(8)
let dTruthy = Boolean([])
let eTruthy = Boolean([0])
let fTruthy = Boolean({})
let gTruthy = Boolean({a:1})
let hTruthy = Boolean(23n)

console.log(hTruthy)

// Falsy value 
let aFalsy = Boolean(false)
let bFalsy = Boolean(undefined)
let cFalsy = Boolean(null)
let dFalsy = Boolean('')
let eFalsy = Boolean(NaN)
let fFalsy = Boolean(0)
let gFalsy = Boolean(-0)
let hFalsy = Boolean(0n)

console.log(hFalsy)