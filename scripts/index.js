// let movies=[
//     {
//         name:"falcon and the winter soldier",
//         des:"lorem asdhkjhashf ashdfjsad dsfhkasdjfo sdfk hsadhf",
//         image:"images/slider 3.png"
//     },

//     {
//         name:"falcon and the winter soldier",
//         des:"lorem asdhkjhashf ashdfjsad dsfhkasdjfo sdfk hsadhf",
//         image:"images/slider 2.png"
//     },

//     {
//         name:"falcon and the winter soldier",
//         des:"lorem asdhkjhashf ashdfjsad dsfhkasdjfo sdfk hsadhf",
//         image:"images/slider 1.png"
//     },

//     {
//         name:"yo yo honey singh",
//         des:"lorem asdhkjhashf ashdfjsad dsfhkasdjfo sdfk hsadhf",
//         image:"images/slider 5.png"
//     },
//     {
//         name:"falcon and the winter soldier",
//         des:"lorem asdhkjhashf ashdfjsad dsfhkasdjfo sdfk hsadhf",
//         image:"images/slider 2.png"
//     },
//     {
//         name:"falcon and the winter soldier",
//         des:"lorem asdhkjhashf ashdfjsad dsfhkasdjfo sdfk hsadhf",
//         image:"images/slider 2.png"
//     }
// ];
// const carousel=document.querySelector('.caraousel');
// let sliders=[];

// let slideIndex=0;//track the current slide

// const createSlide=()=>{
//     if(slideIndex>=movies.length){
//         slideIndex=0;
//     }

//     // creating Dom elements

//     let slide=document.createElement('div');
//     let imgElement=document.createElement('img');
//     let content=document.createElement('div');
//     let h1=document.createElement('h1');
//     let p=document.createElement('p');


//     // attaching all the elements

//     imgElement.appendChild(document.createTextNode(''));
//     h1.appendChild(document.createTextNode(movies[slideIndex].name));
//     p.appendChild(document.createTextNode(movies[slideIndex].des));
//     content.appendChild(h1);
//     content.appendChild(p);
//     slide.appendChild(imgElement);
//     carousel.appendChild(slide);

//     // setting up images



//     imgElement.src=movies[slideIndex].image;
//     slideIndex++;


//     // setting elements classnames

//     slide.className="slider";
//     content.className="slide-content";
//     h1.className="movie-title";
//     p.className="movie-des";

//     sliders.push(slide);

//     if(slide.length)
//     {
//       sliders[0].style.marginLeft=`calc(-${100 * (sliders.length-2)}% - ${
//         30 * (sliders.length-2)
//       }px)`;
//     }

// }

// for(let i=0;i<3;i++){
//     createSlide();

// }

// setInterval(()=>{
//     createSlide();
// },3000);


// video cards playing just after carousel

const videoCards=[...document.querySelectorAll('.video-card')];

videoCards.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let video=item.children[1];
        video.play();

    });
    item.addEventListener('mouseleave',()=>{
        let video=item.children[1];
        video.pause();
    });
});


// card sliders for nxt button and pre button to work

let cardContainers=[...document.querySelectorAll(".card-container")];
let preBtns=[...document.querySelectorAll(".pre-btn")];
let nxtBtns=[...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((items,i)=>{
    let containerDimensions= items.getBoundingClientRect();
    let containerWidth= containerDimensions.width;

    nxtBtns[i].addEventListener("click",()=>{

        items.scrollLeft +=containerWidth - 200;

    });
    preBtns[i].addEventListener("click",()=>{
        items.scrollLeft -= containerWidth + 200;
    });
});

// mmovie slider js part starts from here

const img_url="https://image.tmdb.org/t/p/w500"
const url="https://abhishek6416.github.io/hotstarapii/db.json"

 async function showtodisplay(url){
    try {
        const a1=await fetch(url)
        const a2=await a1.json()
        console.log(a2.moviedata)
        display1(a2.moviedata.movies)
    
    
    } catch (error) {
        
    }
}
showtodisplay(url)

function display1(data){
    data.map(function(el){
     const div=document.createElement("div")
     div.setAttribute("class","card")
     
     const image=document.createElement("img")
     image.setAttribute("class","card-img")
     image.src=img_url+el.poster_path

     const div1=document.createElement("div")
     div1.setAttribute("class","card-body")

     const h2=document.createElement("h2")
     h2.setAttribute("class","name")
     h2.innerText=el.title;


     const h6=document.createElement("h6")
     h6.setAttribute("class","des")
     h6.innerText=el.overview;
       
     const btn=document.createElement("button")
     btn.setAttribute("class","watchlist-btn")
     btn.innerText="Add to watchlist"

     div1.append(h2,h6,btn)
     div.append(image,div1)
     
    
      document.querySelector(".card-container").append(div)
      
    })
}






