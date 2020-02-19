class Formatter {
  //add static methods here
  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
  }
  static sanitize(str){
    return str.replace(/[^-'\sA-Za-z0-9]+/g, '');
  }
  static titleize(str){
    return str.replace(/[^-,'A-Za-z0-9]+/g, '');
  }
}
