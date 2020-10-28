
//Seek And Destroy
function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
  
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < args.length; j++) {
        if (arr[i] === args[j]) {
          delete arr[i];
        }
      }
    }
    return arr.filter(Boolean);
  }


  //Spinal Tap Case
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");


spinalCase("This Is Spinal Tap");
//This one was interesting it still confuses me

//Pig Latin I hate it
function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }
  
  translatePigLatin("consonant");