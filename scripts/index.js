console.log("abk")
const img_url="https://image.tmdb.org/t/p/w500"
const url="https://abhishek6416.github.io/hotstarapii/db.json"
console.log(url)
async function showto(url){
    try {
        const a1=await fetch(url)
        const a2=await a1.json()
        console.log(a2)
        display(a2.moviedata.movies)
        console.log(a2.moviedata.movies)
    } catch (error) {

        
    }
   
}

showto(url)

function display(data){
    // let container = document.querySelector(".trending");
    // container.innerHTML = "";

    data.forEach((el) => {
        let img = document.createElement("img");
        img.setAttribute("class","search-img")
        img.src = img_url+el.poster_path;
        
        let h3 = document.createElement("h3");
        h3.innerText = el.title;

        let div = document.createElement("div");
        div.setAttribute("class","movies-search")
        div.append(img, h3);

        document.querySelector(".latest").append(div)
       
    });
}


var arr=[];
function product(elem){
    arr.push(elem);
    localStorage.setItem("moviename",JSON.stringify(arr));
    
}



// trending movies start from here 


// const img_url1="https://image.tmdb.org/t/p/w500"
// const url1="http://localhost:3000/moviedata"
async function showtotrending(url){
    try {
        const a1=await fetch(url)
        const a2=await a1.json()
        display1(a2.moviedata.trending)
        // console.log(a2.movies)
    } catch (error) {

        
    }
   
}



showtotrending(url)

function display1(data){
   data.map(function(el){
   

    const image=document.createElement("img")
    image.src=img_url+el.poster_path

    image.addEventListener("click" ,function(){
        product(el)
    })
    // div.append(image)
    document.querySelector(".trending").append(image)
   })
}


var arr=[];
function product(elem){
    arr.push(elem);
    localStorage.setItem("moviename",JSON.stringify(arr));
    
}


// trending movies end here






