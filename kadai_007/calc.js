let num = 11;
 
// &&（かつ）を記述して、すべての条件が成り立つ場合にのみ処理を行う（変数numの値が11～29）
if (num % 3 == 0 && num % 5 == 0) {
    console.log('3と5の倍数です');
} 
else if (num % 3 == 0) {
    console.log('3の倍数です');
}
else if (num % 5 == 0) {
    console.log('5の倍数です');
}
else {
    console.log(num);
}
