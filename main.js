function reverseString(message) {
    var reversedMessage = message.split("").reverse().join("")
    console.log(reversedMessage)
}
reverseString('hello'); // should return 'olleh'
console.log("========================================")
function palindrome(message) {
    var reversedMessage = message.split("").reverse().join("")
    console.log(message === reversedMessage)
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
console.log("========================================")
function alphabetSort(message) {
    var sortedMessage = message.split("").sort().join("")
    console.log(sortedMessage)
}
alphabetSort('hello'); // should return 'ehllo'
console.log("========================================")
function countWords(message) {
    var messengeLength = message.split(" ").length
    console.log(messengeLength)
}
countWords('Good morning, I love JavaScript.');// should return 5