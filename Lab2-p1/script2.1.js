// JavaScript File



function listfruit(){ 
    var fruits, text, fLen, i;
    fruits = ["Apple","Banana", "Orange",  "Mango"];
    fLen = fruits.length;
    text = "<ul>";
    for (i = 0; i < fLen; i++) {
        text += "<li>" + fruits[i] + "</li>";
        }
    text += "</ul>";
    return text;
}



    
    
function findfruit() {
   document.getElementById("p2").innerHTML = "Paragraph changed.";
}






//indexOf()	Search the array for an element and returns its position