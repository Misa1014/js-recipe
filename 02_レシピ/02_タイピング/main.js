const toMorseCode = function(number) {
  number = number.replace(/0/g, "・")
  number = number.replace(/1/g, "－")
  console.log(number)
}
