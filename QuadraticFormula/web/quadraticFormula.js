/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 

//This is where all the computation takes place 

function quadraticForm(a,b,c){

//display the a,b, and c term
document.getElementById("values1").innerHTML= "aValue: " + parseInt(a);
document.getElementById("values2").innerHTML= "bValue: " + parseInt(b);
document.getElementById("values3").innerHTML= "cValue: " + parseInt(c);
    
    var e= parseInt(a)
    var f= parseInt(b)
    var g= parseInt(c)
    
    //robustness
    if(isNaN(e)){
        document.getElementById("values1").innerHTML= "aValue: Value of a MUST BE AN INTEGER!";
    }
    
    if (isNaN(f)){
        document.getElementById("values2").innerHTML= "bValue: Value of b MUST BE AN INTEGER!";    
    }
    
    if (isNaN(g)){
        document.getElementById("values3").innerHTML= "cValue: Value of c MUST BE AN INTEGER!";    
    }
    
    //computation
    else{
    var answer1 = (-1 * f + Math.sqrt((f * f) - (4 * e * g))) / (2 * e);
    var answer2 = (-1 * f - Math.sqrt((f * f) - (4 * e * g))) / (2 * e);
}
    
    if(isNaN(answer1)){
        answer1= "No Solution"
    }
    else{
        //rounding
        answer1 = Math.round(answer1 * 100) / 100
}
    if (isNaN(answer2)){
        answer2= "No Solution"
    }
    else{
        //rounding
        answer2 = Math.round(answer2 * 100) / 100
}
    
    //display the solutions
    document.getElementById("answer1").innerHTML= "Solution1: " + answer1;
    document.getElementById("answer2").innerHTML= "Solution2: " + answer2;
}


   



