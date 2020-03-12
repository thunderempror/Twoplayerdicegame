var num1=Math.random();
num1=num1*6+1;
num1=Math.floor(num1);

var num2=Math.random();
num2=num2*6+1;
num2=Math.floor(num2);
 


// document.querySelector("h1").style.backgroundColor="red";



if(num1==num2)
{
    document.getElementById("winner").innerHTML="Draw";
    
    switch(num1)
    {
        case 1: document.getElementById("firstimage").innerHTML="🀙";
        break;
        case 2:document.getElementById("firstimage").innerHTML="🀚";
        break;
        case 3:document.getElementById("firstimage").innerHTML="🀛";
        break;
        case 4:document.getElementById("firstimage").innerHTML="🀜";
        break;
        case 5:document.getElementById("firstimage").innerHTML="🀝";
        break;
        case 6:document.getElementById("firstimage").innerHTML="🀞";
        break;
    }
    switch(num2)
    {
        case 1: document.getElementById("secondimage").innerHTML="🀙";
        break;
        case 2:document.getElementById("secondimage").innerHTML="🀚";
        break;
        case 3:document.getElementById("secondimage").innerHTML="🀛";
        break;
        case 4:document.getElementById("secondimage").innerHTML="🀜";
        break;
        case 5:document.getElementById("secondimage").innerHTML="🀝";
        break;
        case 6:document.getElementById("secondimage").innerHTML="🀞";
        break;
    }


}
else if(num1>num2)
{
    document.getElementById("winner").innerHTML="Player 1 Wins";
    switch(num1)
    {
        case 1: document.getElementById("firstimage").innerHTML="🀙";
        break;
        case 2:document.getElementById("firstimage").innerHTML="🀚";
        break;
        case 3:document.getElementById("firstimage").innerHTML="🀛";
        break;
        case 4:document.getElementById("firstimage").innerHTML="🀜";
        break;
        case 5:document.getElementById("firstimage").innerHTML="🀝";
        break;
        case 6:document.getElementById("firstimage").innerHTML="🀞";
        break;
    }
    switch(num2)
    {
        case 1: document.getElementById("secondimage").innerHTML="🀙";
        break;
        case 2:document.getElementById("secondimage").innerHTML="🀚";
        break;
        case 3:document.getElementById("secondimage").innerHTML="🀛";
        break;
        case 4:document.getElementById("secondimage").innerHTML="🀜";
        break;
        case 5:document.getElementById("secondimage").innerHTML="🀝";
        break;
        case 6:document.getElementById("secondimage").innerHTML="🀞";
        break;
    }

}
else
{
    document.getElementById("winner").innerHTML="Player 2 Wins";
   
    switch(num1)
    {
        case 1: document.getElementById("firstimage").innerHTML="🀙";
        break;
        case 2:document.getElementById("firstimage").innerHTML="🀚";
        break;
        case 3:document.getElementById("firstimage").innerHTML="🀛";
        break;
        case 4:document.getElementById("firstimage").innerHTML="🀜";
        break;
        case 5:document.getElementById("firstimage").innerHTML="🀝";
        break;
        case 6:document.getElementById("firstimage").innerHTML="🀞";
        break;
    }
    switch(num2)
    {
        case 1: document.getElementById("secondimage").innerHTML="🀙";
        break;
        case 2:document.getElementById("secondimage").innerHTML="🀚";
        break;
        case 3:document.getElementById("secondimage").innerHTML="🀛";
        break;
        case 4:document.getElementById("secondimage").innerHTML="🀜";
        break;
        case 5:document.getElementById("secondimage").innerHTML="🀝";
        break;
        case 6:document.getElementById("secondimage").innerHTML="🀞";
        break;
    }

}