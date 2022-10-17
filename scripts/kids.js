
let movies = [
    {
        name: 'INDIA  vs AUS 317/8 (50)',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider1.webp'
    },
    {
        name: 'Rudra: The Edge of Darkness',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider2.webp'
    },
    {
        name: 'YO YO HONEY SINGH',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider3.webp'
    },
    {
        name: 'Ms. Marvel',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider2.webp'
    },
    {
        name: 'The Lion King',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider1.webp'
    }
];


let carousel = document.querySelector('.carousel');
let sliders = [];
let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // DOM

    let slide = document.createElement('div');

    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');



    // attaching all the elements

    imgElement.appendChild(document.createTextNode(''));
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
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)
            }px)`;
    }

}

createSlide();
for (i = 0; i < 6; i++) {
    createSlide();
};
setInterval(() => {
    createSlide();
}, 3000);

// creating sliding bar for carousel






















// video cards playing just after carousel(when we will hovwe in it)

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();

    });
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    });
});


// card sliders for nxt button and pre button to work

let cardContainers = [...document.querySelectorAll(".card-container,.card-container1,.card-container2,.card-container3,.card-container4,.card-container5,.card-container6")];
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




document.querySelector(".sub-btn").addEventListener("click",()=>{
    window.location.href="index.html"

})