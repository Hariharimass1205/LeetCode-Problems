var isPalindrome = function(s) {
    return filterAlphaNumeric(s) == filterAlphaNumeric(s).split('').reverse().join('')
};

const filterAlphaNumeric = (s, nonAlphaNumeric = new RegExp('[^a-z0-9]','gi')) => s
    .toLowerCase()   
    .replace(nonAlphaNumeric, '')