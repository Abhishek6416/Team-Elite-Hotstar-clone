document.querySelector("button").addEventListener("click",()=>{

    let name=document.getElementById("name").value;
    let number=document.getElementById("number").value;
    let exp=document.getElementById("exp").value
    let cvv=document.getElementById("cvv").value;

    if(number.length!=16){
        alert("Invalid Card Number!");
    } else if(cvv.length!=3){
        alert("Invalid CVV");
    } else {
        location.href="../pages/otp.html";
    }
})