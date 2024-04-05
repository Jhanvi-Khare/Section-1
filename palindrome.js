let n =343
let s = 0
let r 
let temp = n
while(n!=0)
{
    r=n%10;
    s=(s*10)+r;
    n=parseInt(n/10)
}
if(temp==s)
{
    console.log("palindrome");
}
else{
    console.log("not a palindrome");
}


// 2nd type

function isPalindrome(number) {
    return number.toString() === number.toString().split('').reverse().join('');
}

let num1 = 12321;
let num2 = 12345;
console.log('${num1} is a palindrome: ${isPalindrome(num1)}');
console.log('${num2} is a palindrome: ${isPalindrome(num2)}');