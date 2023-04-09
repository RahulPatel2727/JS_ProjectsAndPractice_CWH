let cont = confirm("Do you want to play Snake Water Gun game?");
const fun = (val)=>{
    if(val==1)return "S";
    else if(val==2)return "W";
    else if (val==3)return "G";
}
let str = "WGS";
while(cont){
    let computer = fun(Math.ceil(Math.random()*3));              // computer 
    let usr = prompt("Choose S or W or G").toUpperCase();        // user
    console.log(computer);
    if(!str.includes(usr)){
        alert("you enter wrong.\nenter again...");
        continue;
    }
    if(usr=="G" && computer == "S" || usr == "S" && computer == "W" || usr == "W" && computer=="G"){
        alert("Ooohoo! You win.\nApponent was "+ computer);
        cont = confirm("Do you want to play again!!");
    }
    else if(computer=="G" && usr == "S" || computer == "S" && usr == "W" || computer == "W" && usr=="G"){
        alert("Ooops! You lose.\nApponent was "+ computer);
        cont = confirm("Do you want to play again!!");
    }
    else{
        alert("Ooops! Both are the same.\nApponent was "+ computer);
        cont = confirm("Do you want to play again!!");
    }
}
if(!cont){
    alert("Thank you for playing my game.")
}


