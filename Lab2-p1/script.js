// JavaScript File



function listfruit(){ 
    var fruits, list, fLen, i;
    fruits = ["apple","banana", "orange", "mango"];
    fLen = fruits.length;
    list = "<ul>";
    for (i = 0; i < fLen; i++) {
        list += "<li>" + fruits[i] + "</li>";
        }
    list += "</ul>";
    return list;
}

function myFunction() {
    var x, text, basket, baslist;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (x =="apple" || x =="banana" || x =="orange" || x =="mango") {
        text = "OK"
        basket = [];
        
    } else {
        text = "Input not valid";
    }
    document.getElementById("demo2").innerHTML = text;
    return baslist;
}
    
function findfruit() {
   document.getElementById("p2").innerHTML = "Paragraph changed.";
}






//indexOf()	Search the array for an element and returns its position