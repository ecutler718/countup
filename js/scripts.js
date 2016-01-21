// var countBy = function(input) {
//   return (input = 5);
// };
var counting = function(countTo, countBy) {
  var countUp = [];
// debugger;
   for (var i = countBy; i <= countTo; i += countBy){
     countUp.push(i);
   }
   return countUp;
}


$(document).ready(function() {
  $("form#questions").submit(function(event){
//CAPTURE USER INPUT
  var countTo = parseInt($("#countTo").val());
  var countBy = parseInt($("#countBy").val());

  var userAnswer = counting(countTo, countBy);

   $(".result").text(userAnswer);
 event.preventDefault();
  });
});
