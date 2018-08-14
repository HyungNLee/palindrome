function palindrome(string){
  var array = string.split("");
  array.reverse();
  var reverse = array.join("");
  if (string === reverse){
    $("#result").text("This is a palindrome.");
  }else{
    $("#result").text("This is not a palindrome.");
  }
}

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var string = $("#inputBox").val();
    palindrome(string);
  });
});
