//display定数宣言、HTMLの文章から
const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")

let count = 0
plusButton.onclick = function() {
  count += 1
  display.textContent = count
}
