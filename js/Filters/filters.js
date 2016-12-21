
app.filter('capitalize', function() {
    return function(input) {
      var formatedString = input.charAt(0).toUpperCase()
      for (var i = 1; i < input.length; i++) {
        if(input[i-1] == " "){
          formatedString += input.charAt(i).toUpperCase();
        }else{
          formatedString += input.charAt(i);
        }
 
      }
      return formatedString;
    }
});