// JavaScript File

var c = 0;
var basket=[];
var fruits = ["apple","banana", "orange", "mango"];

function listfruit(){ 
    var list, fLen, i;

    fLen = fruits.length;
    list = "<ul>";
    for (i = 0; i < fLen; i++) {
        list += "<li>" + fruits[i] + "</li>";
        }
    list += "</ul>";
    return list;
}

function myFunction() {
    var x, text, baslist, basfull, i, j;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (x =="apple" || x =="banana" || x =="orange" || x =="mango") {
        text = "OK";
        
        if( c > 3){ 
            basfull="basket is full";
            document.getElementById("demo3").innerHTML = basfull;
        }else{
            for (i=0; i<=c; i++){
                if(x==basket[i]){
                    basfull="you have already picked this";
                    break;
                }
            }
                if(i>c){
                    basket[c] = x;
                    c++;
                    baslist = "<ul>";
                    for (j = 0; j <c ; j++) {
                        baslist += "<li>" + basket[j] + "</li>";
                    }
                    baslist += "</ul>";
                    document.getElementById("demo3").innerHTML = baslist;                     
                }
               
         }
    } else {
        text = "Input not valid";
     }
    document.getElementById("demo2").innerHTML = text;

}
    
function showbaslist(){
   document.getElementById("p2").innerHTML = "Paragraph changed.";
}






//indexOf()	Search the array for an element and returns its position