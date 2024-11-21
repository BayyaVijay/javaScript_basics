// 1.Reverse a String: Input: 'hello' | Output: 'olleh'. 
let input = "hello";
let reversedString = "";

for (let i = input.length - 1; i >= 0; i--) {
  reversedString += input[i];
}

console.log(reversedString);
// 2.Check Palindrome: Input: 'radar' | Output: True .

var str="radar"
let reversedStr="";
for(i = str.length-1;i>=0;i--){
    reversedStr+= str[i]
}
console.log(reversedStr)
console.log(reversedStr==str ? "palindrome" :" not palindrome")




// 3.Find Length: Input: 'hello' | Output: 5 .
let num="hello"
console.log(num.length)

// 4.Count Vowels and Consonants: Input: 'hello' | Output: Vowels:2, Consonants: 3 .
num1="hello"
vowel =0
constant=0
for(let i=0;i<=num1.length-1;i++){
  if(num1.charAt(i)=="a" ||num1.charAt(i)=="e" ||num1.charAt(i)=="i" ||num1.charAt(i)=="o" ||num1.charAt(i)=="u"){    
    vowel +=1
  }
  else{
    constant +=1
  }
  
}
console.log(vowel)
  console.log(constant)
// 5.Change Case: Input: 'Hello' | Output: 'hELLO' .

input1="hello"
output = input1[0].toUpperCase()+input1.slice(1) 
console.log(output)


// 6.Remove White Spaces: Input: 'hello world' | Output: 'helloworld' 
     
input2='hello world' 
res=input2.replaceAll(" ","")
console.log(res)


// 7.Concatenate Strings: Input: 'hello', 'world' | Output: 'helloworld'.
let concat=  "hello"
let cat="world"
console.log(concat+cat)


// 8.Compare Two Strings: Input: 'abc', 'abc' | Output: True .
let bat="abc"
let con="abc"
console.log(bat==con)
for(i=0;i<=input4.length-1;i++){
  for(j=0;j<=input5.length-1;j++){
     (input4[i] == input5[j]) ? console.log(true):0
        
  }
 
}

// 9.Repeat a String: Input: 'abc', 3 | Output: 'abcabcabc' .
let app ="abc"
console.log(app.repeat(3))
input4="abc"
input5="bca"




// 10. Replace a Character: Input: 'hello', 'l', 'z' | Output: 'hezzo
let ball="hello"
console.log(ball.replace("l","z"))