function checkingTheString(string, length) {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
}
// Cтрока короче 20 символов
checkingTheString('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkingTheString('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkingTheString('проверяемая строка', 10); // false

function isPalindromeString(string){
  string = string.toLowerCase();
  const stringReverse = string.split('').reverse().join('');
  if (string === stringReverse) {
    return true;
  } else {
    return false;
  }
}
// Строка является палиндромом
isPalindromeString('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindromeString('ДовОд'); // true
// Это не палиндром
isPalindromeString('Кекс'); // false
