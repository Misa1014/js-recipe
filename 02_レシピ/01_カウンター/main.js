const display = document.getElementById("display")
const plusbutton = document.getElementById("plus-button")

//ここできなかった！！！！
let count = 0
plusbutton.onclick = function() {
  //ここも思い浮かばなかった！
  count += 1
  display.textContent = count
}
//あとからHTML変えられる
