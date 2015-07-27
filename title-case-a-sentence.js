// FreeCodeCamp.com Basic Bonfire: Title Case a Sentence

// Instructions: Return the provided string with the first letter of each word capitalized. 
// For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.

// Solution created by: Jay Wilson Jr. 7/27/15 

function titleCase(str) {
  var split = str.toLowerCase().split(" ");
  var newArr = [];

  for (var i = 0; i < split.length; i++) {
      var firstLetter = split[i].charAt(0);
      var word = split[i].replace(firstLetter, firstLetter.toUpperCase());
    
      newArr.push(word);
  }
  
   return newArr.join(" ");
}

titleCase("I'm a LITTLE tea pot");