// business logic//////////
function Pizza(topping,size,crust){
  this.topping = topping
  this.size = size
  this.crust = crust

}
function getPrice() {
 var large = 12;
 return large;
}

Pizza.prototype.getCost = function() {
var boom = this.size ;
    return boom;
}
Pizza.prototype.getTopping = function() {
  var chane = getPrice();
var bam = this.topping + this.crust;
return bam + (" pizza");
// if ( chane = 12){
//   return bam + ("large pizza");
}
}

//////ui logic////////////////////////////////////////////



$(document).ready(function() {
$("#form").submit(function(event){
  event.preventDefault();
  var pickTopping = $("#toppings").val();
  var pickCrust = $("#crust").val();
  var pickSize = parseInt($("#size").val());

  var newPizza = new Pizza(pickTopping,pickSize,pickCrust);

  var newOne = newPizza.getTopping();
  var reciept =  newPizza.getCost();

  $("#output").text(newOne);
  $("#prices").text(reciept);
  $(".cost").show(reciept);

});
});
