

var fruitsA = ["apple","orange", "banana", "mango"];

$(document).ready(function(){

        for(var i=0; i<fruitsA.length; i++){
           $("#fruits").append("<li>"+fruitsA[i]+"</li>");
        }
});

$("#submit").click(function() {
    var input = $("input").val();
    var count = $("#fruits").children().length;
    for (var i=0; i<count; i++){
        var item = $("#fruits").children("li").eq(i);
        if (input.toLowerCase() ==  item.text().toLowerCase()){
            $("#basket").append("<li>"+item.text()+"</li>");
            item.remove();
            input.remove();
            }
    }
});


$("#reset").click(function(){
    location.reload();
});



//indexOf()	Search the array for an element and returns its position