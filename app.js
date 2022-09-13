//  Question #1// Parameter goes in the function() when you declare the function-
// Argument goes in the function() when you  call the function 

// Question #2// console.log() is a function that will display an object and its values in the console when passed into () 

// return is used to reply a value back to the invocation source 

// Question #3//   a function sets actions and conditions to be performed on/determined for a variable that is put within it's () -parameters-
// a function implies that when a variable is placed in its parameters, it now becomes an arugument, to which the function will perform it's action upon 


function checkPalindrome(word){
    let wordLetters = word.split('')
    let reversedText= wordLetters.slice().reverse()

       function compare(word1, word2){

            for(let i = 0; i <= word1.length; i++){
               if (word1[i] != word2[i]){
                    return console.log(`${word} is not a Palindrome`)
                }else{
                    return console.log(`${word} is a Palindrome`)
                }
               }
            }
            console.log(wordLetters, reversedText)
           
        compare(wordLetters, reversedText)
        }
        
function sumDigits(i){
 let digits = (''+i).split("");
   let sum = digits[0] + digits[1]

 console.log(digits)
 console.log(sun)
}

sumDigits(22)



