// 練習問題 １
const plus1 = function(x) {
  return x + 1
}
// 関数名:
// 引数:
// 返り値:

// 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...
const f1 = function(x) {
  return 2 * x + 1
}

// f2: 1, 10, 100, 1000, 10000, ...
const f2 = function(x) {
  return 10 ** x
}

// f3: 2, 14, 107, 1010, 10013, ...
const f3 = function(x) {
  return f1(x) + f2(x)
}

// 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply
const multiply (x, y)= {
  return x*y
}
// ② ２つの引数を受け取り、それらを足し合わせた結果を四捨五入した値を返す関数 plusRound
const plusRound(x, y)= {
  return Math.round(x+y)
}