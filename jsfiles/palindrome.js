function isPalindrome(word) {
    // Convert the word to lowercase and remove non-alphabetic characters
    const Word = word.toLowerCase().replace(/[^a-z]/g, '');
    
    // Check if the clean word is the same in reverse order
    return Word === Word.split('').reverse().join('');
  }
  
  console.log(isPalindrome('Race Car'));
