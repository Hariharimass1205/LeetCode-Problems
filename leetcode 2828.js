// 2828. Check if a String Is an Acronym of Words
// Example 1:

// Input: words = ["alice","bob","charlie"], s = "abc"
// Output: true
// Explanation: The first character in the words "alice", "bob", and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym. 

/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    if(words.length!==s.length) return false
    let wd = ""
    for(i=0;i<words.length;i++){
        wd += words[i][0]
    }
     if(wd==s){
     return true
     }else{
     return false
     }
    };