document.getElementById("toPay").addEventListener("click",()=>{
    location.href="./pages/checkout.html";
})


let netP=JSON.parse(localStorage.getItem("promocode"));
// document.getElementById("netP").innerText=netP;
let plan=JSON.parse(localStorage.getItem("plan"));
if(netP==="MASAI500"){
    if(plan==="PREMIUM"){
        document.getElementById("netP").innerText=999;
    } else if(plan==="SUPER"){
        document.getElementById("netP").innerText=399;
    } 
} else {
    if(plan==="PREMIUM"){
        document.getElementById("netP").innerText=1499;
    } else if(plan==="SUPER"){
        document.getElementById("netP").innerText=899;
    } else if(plan==="PREMIUM_MONTHLY"){
        document.getElementById("netP").innerText=299;
    }
}

