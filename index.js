 function isPalindrome(string) {
//   // Write your algorithm here
//   //program that checks whether word is a palindrome or not, ie the reverse of the string is same as the original
  
      let reversedString= string.split("").reverse().join("")
       console.log(reversedString)

      if (reversedString=== string){
       return true
          } else{
       return false
        } 
}
 isPalindrome("motto")






/* 
  Add your pseudocode here
  1. Separate the string(word) into an array containing substrings using split()
       
  2.add the substrings into a new variable
  3.reverse the substrings using reverse()

  4.join the substrings into a single string using the join()
  5. return the reversed string 
  6.check if the reversed string is  same as the original
  7. if 6 above is true, return true, else if false, return false
*/

/*
  Add written explanation of your solution here
  1.for the string "motto" the reversed string is "ottom"
  2 "ottom"=== "motto"//false

   
*/

// // You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
