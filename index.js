const sumZero = (arr) => {
    const sumSet = new Set();
  
    let sum = 0;
    for (let i = 0 ; i < arr.length ; i++)
    {
        sum += arr[i];
  
        if (sum === 0 || sumSet.has(sum))
            return true;
  
        sumSet.add(sum);
    }
    return false;
}

console.log(sumZero([1, -1, 2]))

function hasUniqueCharacters(word) {
    let unique = new Set([])
    for (let i = 0; i < word.length; i++) {
      unique.add(word[i])
    }
    return unique.size === word.length
  }

  console.log(hasUniqueCharacters('hello'))

function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

console.log(isPangram('The quick brown fox jumps over the lazy dog!'))


function findLongestWord(array) {
    let longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord.length;
  }
  
  let word = findLongestWord(["The","quick","brown", "fox", "jumped", "over", "the", "lazy", "dog"]);
  console.log(word)