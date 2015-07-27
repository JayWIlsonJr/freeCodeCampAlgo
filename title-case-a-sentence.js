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