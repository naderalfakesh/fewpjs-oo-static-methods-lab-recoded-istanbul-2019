class Formatter {
  //add static methods here
  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
  }
  static sanitize(str){
    return str.replace(/[^-'\sA-Za-z0-9]+/g, '');
  }
  static titleize(str){
    const notWanted=['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    const words= str.split(" ");
    const cleanedWords = words.filter(word => !notWanted.includes(word))
    const capital = cleanedWords.map(word =>Formatter.capitalize(word))
    return [Formatter.capitalize(words[0]),...capital.slice(1)].join(" ");
  }
}
