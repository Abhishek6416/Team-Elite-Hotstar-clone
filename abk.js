// console.log("himgshuchodagandu")
const b1="https://fakestoreapi.com/products"

async function kbc(url){
    // function bokachoda()
    // console.log(url)
    try {
        const uuu=await fetch(url)//will shows it will return promise
        // console.log(res)
        const data=await uuu.json()//type of promise return
        // console.log(data)
        bokachoda(data)
    } catch (error) {
        // console.log(error);
        
    }
   
}
kbc(b1)


function bokachoda(b1){
    console.log(b1)
    b1.map(function (el){
        const div=document.createElement("div")

        const img=document.createElement("img")
        img.src=el.image

        const h3=document.createElement("h3")
        h3.innerText=el.title
        const price=document.createElement("p")
        price.innerText=el.price

        const btn=document.createElement("button")
        btn.innerText="Buy"

        div.append(img,h3,price,btn)
        document.getElementById("container").append(div)



           

    })


}