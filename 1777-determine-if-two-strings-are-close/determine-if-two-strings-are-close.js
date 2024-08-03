/**
 * Determines if two strings are close.
 * @param {string} word1 - The first input string.
 * @param {string} word2 - The second input string.
 * @returns {boolean} - True if the strings are close, false otherwise.
 */
var closeStrings = function(word1, word2) {
    // Initialize frequency arrays for each character in the alphabet
    const freq1 = new Array(26).fill(0);
    const freq2 = new Array(26).fill(0);

    // Update frequencies for characters in the first word
    for (const ch of word1) {
        freq1[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Update frequencies for characters in the second word
    for (const ch of word2) {
        freq2[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Check if the characters present in one word are the same as the other
    for (let i = 0; i < 26; i++) {
        if ((freq1[i] === 0 && freq2[i] !== 0) || (freq1[i] !== 0 && freq2[i] === 0)) {
            return false;
        }
    }

    // Sort frequency arrays for comparison
    freq1.sort((a, b) => a - b);
    freq2.sort((a, b) => a - b);

    // Check if the sorted frequency arrays are equal
    for (let i = 0; i < 26; i++) {
        if (freq1[i] !== freq2[i]) {
            return false;
        }
    }

    // If all conditions are satisfied, the strings are close
    return true;
};