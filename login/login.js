
const login=document.querySelector("#inputbox");
const logged=document.querySelector("#continue2");
const form = document.querySelector("#form");


function tab2(){
    event.preventDefault();
   
 form.style.marginLeft="-100%";


}








function tab3(){
  event.preventDefault();
  
  var number=document.getElementById("number").value;
  
  document.getElementById("lastfour").innerHTML=`${number[6]}${number[7]}${number[8]}${number[9]}`
  
  if(number.length<=9){
    alert("Please enter a valid number");
  }
  else if(number.length>=11){
    alert("Please enter a valid number");
    
  }
  
  else{
    form.style.marginLeft="-200%";
  
   localStorage.setItem("number",JSON.stringify(number));

    var otp = '';
    
    var digits = '0123456789';

    var otpLength = 4;


    for(let i=1; i<=otpLength; i++)

    {

        var index = Math.floor(Math.random()*(digits.length));

        otp = otp + digits[index];

    }

    console.log(otp);
  alert("Your OTP is :- "+ otp)
 
        JSON.stringify(localStorage.setItem("otp",otp));
  }
  

  
 
}  
   
    // function updateno(){

    //   let number = localStorage.getItem("number") || [];

    //     // console.log(number);


      
    // }


    // updateno();




   function arwnbtn1(){
    event.preventDefault();
    form.style.marginLeft="0%";
   
   
   
}

function arwnbtn2(){
 event.preventDefault();
 form.style.marginLeft="-100%";



   }


   document.getElementById("signup").addEventListener("click", function(){

    document.querySelector(".loginbox").classList.add("active");
    
    })
    
    
    document.getElementById("xbtn").addEventListener("click", function(){
        
        document.querySelector(".loginbox").classList.remove("active") 
    });
    
    
    function checkotp(){
        event.preventDefault();
    
    let otp_receive=localStorage.getItem("otp");
    
    let digit1 = document.getElementById("digit1").value;
    let digit2 = document.getElementById("digit2").value;
    let digit3 = document.getElementById("digit3").value;
    let digit4 = document.getElementById("digit4").value;

    console.log(digit1, digit2, digit3, digit4);
    
    
    if(otp_receive[0]==digit1 && otp_receive[1]==digit2 && otp_receive[2]==digit3  && otp_receive[3]==digit4) {
    
    
        alert("Login Successfully");
    
    
    }

   
    else{

       
        alert("Please enter a valid otp");
    }

    
    }




    var el = document.getElementsByClassName('otpbox')
Array.from(el).forEach(function(el){
  el.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13 || el.value.length == 1) {
      // Focus on the next sibling
      el.nextElementSibling.focus()
    }
    if(event.keyCode === 13 || el.value.length ==0){
        el.previousElementSibling.focus()
    }
  });
})

