// let movies = [
//     {
//         name: "falcon and the winter soldier",
//         des: "lorem asdhkjhashf ashdfjsad dsfhkasdjfo sdfk hsadhf",
//         image: "images/slider 3.png"
//     },

//     {
//         name: "falcon and the winter soldier",
//         des: "lorem asdhkjhashf ashdfjsad dsfhkasdjfo sdfk hsadhf",
//         image: "images/slider 2.png"
//     },

//     {
//         name: "falcon and the winter soldier",
//         des: "lorem asdhkjhashf ashdfjsad dsfhkasdjfo sdfk hsadhf",
//         image: "images/slider 1.png"
//     },

//     {
//         name: "yo yo honey singh",
//         des: "lorem asdhkjhashf ashdfjsad dsfhkasdjfo sdfk hsadhf",
//         image: "images/slider 5.png"
//     },
//     {
//         name: "falcon and the winter soldier",
//         des: "lorem asdhkjhashf ashdfjsad dsfhkasdjfo sdfk hsadhf",
//         image: "images/slider 2.png"
//     },
//     {
//         name: "falcon and the winter soldier",
//         des: "lorem asdhkjhashf ashdfjsad dsfhkasdjfo sdfk hsadhf",
//         image: "images/slider 2.png"
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

// 2nd chance for caraousel bar slider

let movies = [
  {
    name: "INDIA  vs AUS 317/8 (50)",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "images/slider11.webp",
  },
  {
    name: "Rudra: The Edge of Darkness",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "images/slider 1xx.PNG",
  },
  {
    name: "YO YO HONEY SINGH",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "images/slider7.webp",
  },
  {
    name: "Ms. Marvel",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "images/slider9.webp",
  },
  {
    name: "The Lion King",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "images/slider8.webp",
  },
];

let carousel = document.querySelector(".carousel");
let sliders = [];
let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // DOM

  let slide = document.createElement("div");

  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all the elements

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up images whsich is in slider-data

  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements

  slide.className = "slider";
  content.className = "slider-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  // adding sliding effect'

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

createSlide();
for (i = 0; i < 6; i++) {
  createSlide();
}
setInterval(() => {
  createSlide();
}, 3000);

// creating sliding bar for carousel

// video cards playing just after carousel(when we will hovwe in it)

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

// card sliders for nxt button and pre button to work

let cardContainers = [
  ...document.querySelectorAll(
    ".card-container,.card-container1,.card-container2,.card-container3,.card-container4,.card-container5,.card-container6"
  ),
];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((items, i) => {
  let containerDimensions = items.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    items.scrollLeft += containerWidth - 200;
  });
  preBtns[i].addEventListener("click", () => {
    items.scrollLeft -= containerWidth + 200;
  });
});

// watchlist
function addToWatchlist() {
  location.href = "watchlist.html";
  wishlist.push(JSON.parse(localStorage.getItem("moviename")));
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

// mmovie slider js part starts from here

const img_url = "https://image.tmdb.org/t/p/w500";
const url = "https://abhishek6416.github.io/hotstarapii/db.json";

async function showtodisplay(url) {
  try {
    const a1 = await fetch(url);
    const a2 = await a1.json();
    // console.log(a2.moviedata)
    display1(a2.moviedata.movies);
  } catch (error) {}
}
showtodisplay(url);

function display1(data) {
  data.map(function (el) {
    //event.preventDefault();
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    div.addEventListener("click", function () {
      // event.preventDefault();
      console.log(event.target);
      localStorage.setItem("moviename", JSON.stringify(el));
      location.href = "./anjali/test.html";
    });

    const image = document.createElement("img");
    image.setAttribute("class", "card-img");
    image.src = img_url + el.poster_path;
    // image.addEventListener("click", function () {
    //   localStorage.setItem("moviename", JSON.stringify(el));
    //   location.href = "./anjali/test.html";
    // });

    const div1 = document.createElement("div");
    div1.setAttribute("class", "card-body");

    const h2 = document.createElement("h2");
    h2.setAttribute("class", "name");
    h2.innerText = el.title;

    const h6 = document.createElement("h6");
    h6.setAttribute("class", "des");
    h6.innerText = el.overview.substring(0, 35); // changes

    const btn = document.createElement("button");
    btn.setAttribute("class", "watchlist-btn");
    btn.innerText = "Add to watchlist";
    btn.addEventListener("click", () => {
      // event.preventDefault();
      console.log(event.target);
      console.log("i got clicked");
      localStorage.setItem("moviename", JSON.stringify(el));
      addToWatchlist();
    });

    div1.append(h2, h6, btn); // changes
    div.append(image, div1);

    document.querySelector(".card-container").append(div);
  });
}
// 2nd sliding movie bar

async function showtodisplay1(url) {
  try {
    const a1 = await fetch(url);
    const a2 = await a1.json();
    // console.log(a2.moviedata)
    display2(a2.moviedata.trending);
  } catch (error) {}
}
showtodisplay1(url);

function display2(data) {
  data.map(function (el) {
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    div.addEventListener("click", function () {
      // event.preventDefault();
      console.log(event.target);
      localStorage.setItem("moviename", JSON.stringify(el));
      location.href = "./anjali/test.html";
    });

    const image = document.createElement("img");
    image.setAttribute("class", "card-img");
    image.src = img_url + el.poster_path;
    image.onclick = function () {
      localStorage.setItem("moviename", JSON.stringify(el));
      location.href = "./anjali/test.html";
    };

    const div1 = document.createElement("div");
    div1.setAttribute("class", "card-body");

    const h2 = document.createElement("h2");
    h2.setAttribute("class", "name");
    h2.innerText = el.title;

    const h6 = document.createElement("h6");
    h6.setAttribute("class", "des");
    h6.innerText = el.overview;

    const btn = document.createElement("button");
    btn.setAttribute("class", "watchlist-btn");
    btn.innerText = "Add to watchlist";
    btn.addEventListener("click", () => {
      localStorage.setItem("moviename", JSON.stringify(el));
      addToWatchlist();
    });

    div1.append(h2, h6, btn);
    div.append(image, div1);

    document.querySelector(".card-container1").append(div);
  });
}

// // 3rd sliding bar

async function showtodisplay2(url) {
  try {
    const a1 = await fetch(url);
    const a2 = await a1.json();
    // console.log(a2.moviedata)
    display3(a2.moviedata.tv);
  } catch (error) {}
}
showtodisplay2(url);

function display3(data) {
  data.map(function (el) {
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    div.addEventListener("click", function () {
      // event.preventDefault();
      console.log(event.target);
      localStorage.setItem("moviename", JSON.stringify(el));
      location.href = "./anjali/test.html";
    });

    const image = document.createElement("img");
    image.setAttribute("class", "card-img");
    image.src = img_url + el.poster_path;
    image.onclick = function () {
      localStorage.setItem("moviename", JSON.stringify(el));
      location.href = "./anjali/test.html";
    };

    const div1 = document.createElement("div");
    div1.setAttribute("class", "card-body");

    const h2 = document.createElement("h2");
    h2.setAttribute("class", "name");
    h2.innerText = el.name;

    const h6 = document.createElement("h6");
    h6.setAttribute("class", "des");
    h6.innerText = el.overview;

    const btn = document.createElement("button");
    btn.setAttribute("class", "watchlist-btn");
    btn.innerText = "Add to watchlist";
    btn.addEventListener("click", () => {
      localStorage.setItem("moviename", JSON.stringify(el));
      addToWatchlist();
    });

    div1.append(h2, h6, btn);
    div.append(image, div1);

    document.querySelector(".card-container2").append(div);
  });
}

// display slider 4th bar

async function showtodisplay5(url) {
  try {
    const a1 = await fetch(url);
    const a2 = await a1.json();
    // console.log(a2.moviedata)
    display4(a2.moviedata.Generic);
  } catch (error) {}
}
showtodisplay5(url);

function display4(data) {
  data.map(function (el) {
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    div.addEventListener("click", function () {
      // event.preventDefault();
      console.log(event.target);
      localStorage.setItem("moviename", JSON.stringify(el));
      location.href = "./anjali/test.html";
    });

    const image = document.createElement("img");
    image.setAttribute("class", "card-img");
    image.src = img_url + el.poster_path;
    image.onclick = function () {
      localStorage.setItem("moviename", JSON.stringify(el));
      location.href = "./anjali/test.html";
    };

    const div1 = document.createElement("div");
    div1.setAttribute("class", "card-body");

    const h2 = document.createElement("h2");
    h2.setAttribute("class", "name");
    h2.innerText = el.title;

    const h6 = document.createElement("h6");
    h6.setAttribute("class", "des");
    h6.innerText = el.overview;

    const btn = document.createElement("button");
    btn.setAttribute("class", "watchlist-btn");
    btn.innerText = "Add to watchlist";
    btn.addEventListener("click", () => {
      localStorage.setItem("moviename", JSON.stringify(el));
      addToWatchlist();
    });

    div1.append(h2, h6, btn);
    div.append(image, div1);

    document.querySelector(".card-container3").append(div);
  });
}

// displaying 5th slider bar

async function showtodisplay6(url) {
  try {
    const a1 = await fetch(url);
    const a2 = await a1.json();
    console.log(a2.moviedata);
    display5(a2.moviedata.Popular);
  } catch (error) {}
}
showtodisplay6(url);

function display5(data) {
  data.map(function (el) {
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    div.addEventListener("click", function () {
      // event.preventDefault();
      console.log(event.target);
      localStorage.setItem("moviename", JSON.stringify(el));
      location.href = "./anjali/test.html";
    });

    const image = document.createElement("img");
    image.setAttribute("class", "card-img");
    image.src = img_url + el.poster_path;
    image.onclick = function () {
      localStorage.setItem("moviename", JSON.stringify(el));
      location.href = "./anjali/test.html";
    };

    const div1 = document.createElement("div");
    div1.setAttribute("class", "card-body");

    const h2 = document.createElement("h2");
    h2.setAttribute("class", "name");
    h2.innerText = el.title;

    const h6 = document.createElement("h6");
    h6.setAttribute("class", "des");
    h6.innerText = el.overview;

    const btn = document.createElement("button");
    btn.setAttribute("class", "watchlist-btn");
    btn.innerText = "Add to watchlist";
    btn.addEventListener("click", () => {
      localStorage.setItem("moviename", JSON.stringify(el));
      addToWatchlist();
    });

    div1.append(h2, h6, btn);
    div.append(image, div1);

    document.querySelector(".card-container4").append(div);
  });
}

async function showtodisplay6(url) {
  try {
    const a1 = await fetch(url);
    const a2 = await a1.json();
    // console.log(a2.moviedata)
    display5(a2.moviedata.Romence);
  } catch (error) {}
}
showtodisplay6(url);

function display5(data) {
  data.map(function (el) {
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    div.addEventListener("click", function () {
      // event.preventDefault();
      console.log(event.target);
      localStorage.setItem("moviename", JSON.stringify(el));
      location.href = "./anjali/test.html";
    });

    const image = document.createElement("img");
    image.setAttribute("class", "card-img");
    image.src = img_url + el.poster_path;
    image.onclick = function () {
      localStorage.setItem("moviename", JSON.stringify(el));
      location.href = "./anjali/test.html";
    };

    const div1 = document.createElement("div");
    div1.setAttribute("class", "card-body");

    const h2 = document.createElement("h2");
    h2.setAttribute("class", "name");
    h2.innerText = el.title;

    const h6 = document.createElement("h6");
    h6.setAttribute("class", "des");
    h6.innerText = el.overview;

    const btn = document.createElement("button");
    btn.setAttribute("class", "watchlist-btn");
    btn.innerText = "Add to watchlist";
    btn.addEventListener("click", () => {
      localStorage.setItem("moviename", JSON.stringify(el));
      addToWatchlist();
    });

    div1.append(h2, h6, btn);
    div.append(image, div1);

    document.querySelector(".card-container4").append(div);
  });
}

// displaying 5th sliding bar

async function showtodisplay7(url) {
  try {
    const a1 = await fetch(url);
    const a2 = await a1.json();
    // console.log(a2.moviedata)
    display6(a2.moviedata.Abk);
  } catch (error) {}
}
showtodisplay7(url);

function display6(data) {
  data.map(function (el) {
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    div.addEventListener("click", function () {
      // event.preventDefault();
      console.log(event.target);
      localStorage.setItem("moviename", JSON.stringify(el));
      location.href = "./anjali/test.html";
    });

    const image = document.createElement("img");
    image.setAttribute("class", "card-img");
    image.src = img_url + el.poster_path;
    image.onclick = function () {
      localStorage.setItem("moviename", JSON.stringify(el));
      location.href = "./anjali/test.html";
    };

    const div1 = document.createElement("div");
    div1.setAttribute("class", "card-body");

    const h2 = document.createElement("h2");
    h2.setAttribute("class", "name");
    h2.innerText = el.title;

    const h6 = document.createElement("h6");
    h6.setAttribute("class", "des");
    h6.innerText = el.overview;

    const btn = document.createElement("button");
    btn.setAttribute("class", "watchlist-btn");
    btn.innerText = "Add to watchlist";
    btn.addEventListener("click", () => {
      localStorage.setItem("moviename", JSON.stringify(el));
      addToWatchlist();
    });

    div1.append(h2, h6, btn);
    div.append(image, div1);

    document.querySelector(".card-container5").append(div);
  });
}

// displaying 6th sliding bar

async function showtodisplay8(url) {
  try {
    const a1 = await fetch(url);
    const a2 = await a1.json();
    // console.log(a2.moviedata)
    display7(a2.moviedata.anjali);
  } catch (error) {}
}
showtodisplay8(url);

function display7(data) {
  data.map(function (el) {
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    div.addEventListener("click", function () {
      // event.preventDefault();
      console.log(event.target);
      localStorage.setItem("moviename", JSON.stringify(el));
      location.href = "./anjali/test.html";
    });

    const image = document.createElement("img");
    image.setAttribute("class", "card-img");
    image.src = img_url + el.poster_path;
    image.onclick = function () {
      localStorage.setItem("moviename", JSON.stringify(el));
      location.href = "./anjali/test.html";
    };

    const div1 = document.createElement("div");
    div1.setAttribute("class", "card-body");

    const h2 = document.createElement("h2");
    h2.setAttribute("class", "name");
    h2.innerText = el.name;

    const h6 = document.createElement("h6");
    h6.setAttribute("class", "des");
    h6.innerText = el.overview;

    const btn = document.createElement("button");
    btn.setAttribute("class", "watchlist-btn");
    btn.innerText = "Add to watchlist";
    btn.addEventListener("click", () => {
      localStorage.setItem("moviename", JSON.stringify(el));
      addToWatchlist();
    });

    div1.append(h2, h6, btn);
    div.append(image, div1);

    document.querySelector(".card-container6").append(div);
  });
}

// navbar search functionlity working

// document.querySelector(".search-box").addEventListener("keyup", fun)

// function fun() {

//     const xyz=document.querySelector(".search-box").value
//     console.log(event.target.value)

// }

// get(url);
// async function get(url) {
//     let res = await fetch(url);
//     let data = await res.json();
//     // console.log(data.moviedata.Abk);
//     const inp = document.querySelector(".input");

//     inp.onkeyup = (e) => { // inp.onkeyup = function(e){}
//         let item = e.target.value;
//         // console.log("item", item);
//         let arr = data.moviedata.Abk;

//         let array = [];
//         let array5=[];
//         if (item) {
//             let c = 0;
//             arr.filter((el) => {
//                 if (el.title[0].toLowerCase() ===
//                     item) {
//                     // console.log(el.title);
//                     array.push(el.title)
//                    array5.push(el)
//                 }
//                 // console.log(el, c++);

//             })

//             // console.log(array5)
//             let searchDrop=document.querySelector(".search-drop")

//             let suggestionList=searchDrop.querySelectorAll("li")
//             // console.log(suggestionList)
//             console.log(suggestionList.length,suggestionList)

//              for(let i=1;i<suggestionList.length;i++){
//                 console.log(suggestionList.length)
//                let x=suggestionList[i]

//                 x.addEventListener("click",()=>{
//                     send(i)
//                 })
//              }
//             //  console.log(suggestionList.length)

//             // console.log(array,array.length)
//             let d= array.map((elem) => {
//                 return array = `<li >` + elem + `</li>`

//             })

//             // console.log(array,array.length)

//             suggestion(d)
//             // let dis=d.join('')
//             // console.log(dis)

//         }

//     }

// }
// const input = document.querySelector(".input")
// function suggestion(array1){
//     let dis;
//     if(!array1.length){
//          brr=input.value
//          dis=`<li>`+brr+`<\li>`
//     } else{
//         dis=array1.join()
//     }
//     document.querySelector(".search-drop").innerHTML=dis
// }

// function send(data){
//     alert("yoyo")
//     console.log(data)

// }

// document.querySelector(".input").addEventListener("keyup",fun)
// function fun(){
//     d(url)
// }

async function d(url) {
  const res = await fetch(url);
  const data = await res.json();

  show(data.moviedata.Abk);
}
function show(a) {
  const input = document.querySelector(".input").value;
  if (input == "") {
    // alert("empty")
    document.querySelector(".search-drop").innerHTML = "";
  } else {
    const filter = a.filter(function (el) {
      return el.title[0].toLowerCase().includes(input);
    });
    //   console.log(filter)

    ui(filter);
  }
}
function ui(ar) {
  ar.map(function (el) {
    // const  div=document.createElement("div")
    const title = document.createElement("li");
    title.innerText = el.title;

    const imgtag = document.createElement("img");
    imgtag.src = img_url + el.poster_path;
    // div.append(title,img)
    title.append(imgtag);

    document.querySelector(".search-drop").append(title);

    title.addEventListener("click", function () {
      store(el);
    });
  });
}

const ar = [];

function store(e) {
  console.log(e);

  ar.push(e);

  localStorage.setItem("storeMovies", JSON.stringify(ar));
}
// using debouncing

document.querySelector(".input").addEventListener("keyup", () => {
  // const name = document.querySelector(".input").value;
  // console.log(name);
  bestFunction();
});
const getData = () => {
  // const itemName = document.querySelector(".input").value;
  // document.querySelector(".input").value = "";
  // console.log(itemName);
  const searchUrl = `https://abhishek6416.github.io/hotstarapii/db.json`;
  d(searchUrl);
};
const deBounce = (cb, delay) => {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
};
const bestFunction = deBounce(getData, 2000);
