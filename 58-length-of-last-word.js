//58.Length of Last Word
//Given a string s consisting of words and spaces, return the length of the last word in the string.
//A word is a maximal substring consisting of non-space characters only.


var lengthOfLastWord = function(str) {
    let lastW = str.length - 1
    while (lastW >= 0 && str[lastW] === ' ') {
      lastW--
    }

    let start = lastW
    while (start >= 0 && str[start] !== ' ') {
      start--
    }

    return lastW - start
  };
