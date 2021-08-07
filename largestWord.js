function findLongestWordLength(str) {
    str = str.split(" ")
    let strLength = []
    for (let i=0;i<str.length;i++){
      strLength.push(str[i].length)
    } 
    return Math.max(...strLength)
    
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));