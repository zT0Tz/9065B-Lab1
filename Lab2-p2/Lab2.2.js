// JavaScript File




$(document).ready(function(){
var allfruits = ["apple","orange", "banana", "mango"];

var fruitlis = $('#fruits');
for(var i = 0; i < allfruits.length; i++ ) {
    var newfruit = $('<li>' + allfruits[i] + '</li>') ;
    fruitlis.append(newfruit);
}


$('#submit').click(function(){
     var childNumber =  fruitlis.children('li').length;
     var basket = $('#mybasket');
         for (var i = 0; i< childNumber;i++)
         {
             ff = fruitlis.children('li').eq(i);
             if($('#input').val()==ff.text())
             {
                 alert(ff.text());
                 ff.remove(); 
                 var x = "<li>" + ff.text() +"</li>";
                 basket.append(x);
             }
         }
     
})

})