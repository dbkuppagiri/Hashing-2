 /**
 * @param {string} s
 * @return {number}
 * 
 * Intuition:
 * 
 * Palindrome can be formed using even number of chars or using one odd character count on the even palindrome.
 * So to capture each char count, we can use either hashMap or hashSet. 
 * Here in this approach i am using the hashSet and incrementing the count whenever i identify the second occurance of the same char. 
 * and also deleting it.
 * If we are seeing the current char for the first time we are just storing it in the set and wait to see if we can utilize it in the future.
 * We repeat this process for the length of the string given.
 * If the set size is greater than zero, that says that we have chars with 1 as their freq, we can consider one of them and form odd length palindrome.
 * Otherwise we will return the current count.
 * 
 * T.C: O(n)
 * S.C: O(n)
 
 */
var longestPalindrome = function(s) {
    let freqSet = new Set();
    let palindromeLength = 0;
    for(let char of s){
        if(freqSet.has(char)){
            freqSet.delete(char);
            palindromeLength+=2;
        }else{
         freqSet.add(char);
        }
    }
    if(freqSet.size>0) palindromeLength++;
    return palindromeLength;
};