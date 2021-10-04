// Factorielle------------------------------------------------------------

// Itérative
const computeFactorialIt = n => {

  let result = 1
  for (let i = 1; i <= n; i++) {
    result *= i
  }
  return result
}
console.log(computeFactorialIt(4))

// Récursive
const computeFactorialRec = n => (n == 0) ? 1 : n * computeFactorialRec(n - 1)
console.log(computeFactorialRec(5))

// Puissance------------------------------------------------------------

// Itérative
const computePowerIt = (n, p) => n ** p
console.log(computePowerIt(3, 2))

// Récursive
const computePowerRec = (n, p) => {
  if (p === 0) return 1
  else return n * computePowerRec(n, (p - 1))
}
console.log(computePowerRec(4, 3))


// Racine carrée------------------------------------------------------------

// Récursive

const computeSquareRoot = (n, it = 10) => {
  if (it == 0) return 2
  else {
    return (computeSquareRoot(n, it - 1) + n / computeSquareRoot(n, it - 1)) / 2
  }
}

console.log(computeSquareRoot(7))

// Nombres premiers------------------------------------------------------------

const isPrimeNumber = (n, d = n - 1) => {
  // console.log(d)
  if (d === 1) return true
  else if (n % d == 0) return false
  else return isPrimeNumber(n, d - 1)
}

// Nombres premiers------------------------------------------------------------


const findNextPrime = (n) => {
  if (isPrimeNumber(n + 1))
    return (n + 1)
  else return findNextPrime(n + 1)
}
