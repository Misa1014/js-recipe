//ひとつの数字を判定する
const number = 24
if (number % 3 === 0) {
  console.log(number + "!!!!!!")
} else {
  console.log(number)
}
//1 から 24 までの数字を判定する

for (let n = 1; n <= number; n++) {
  if (n % 3 === 0) {
    console.log(n + "!!!!")
  } else {
    console.log(n)
  }
}

//1 から指定した数までの数字を判定する関数をつくる
const genkiFunktion = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n} !!!!!`)
    } else {
      console.log(n)
    }
  }
}
