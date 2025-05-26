
let img1 = () => {
    let image1 = document.getElementById("vediothumbnail");
    image1.innerHTML = `<img src="marshall.webp" style="height: 355px; width: 350px; position: absolute; top: 7%; left: 7%; border: 2px solid whitesmoke; ">`;
}

let img2 = () => {
    let image2 = document.getElementById("vediothumbnail");
    image2.innerHTML = `<iframe style="height: 355px; width: 350px; position: absolute; top: 7%; left: 7%; border: 2px solid whitesmoke;" src="https://www.youtube.com/embed/CbY0vc91l6o?rel=0" frameborder="0" allowfullscreen=""></iframe>`;
}


let img3= () => {
    let image3 = document.getElementById("vediothumbnail");
    image3.innerHTML = `<img src="Marshall ACTONIIIBTBK Action III Bluetooth Speaker - Black.jpeg" style="height: 355px; width: 350px; position: absolute; top: 7%; left: 7%; border: 2px solid whitesmoke;">`;
}

let img4 = () => {
    let image4 = document.getElementById("vediothumbnail");
    image4.innerHTML = `<img src="Kilburn-II-7-mobile.avif" alt="" style="height: 355px; width: 350px; position: absolute; top: 7%; left: 7%; border: 2px solid whitesmoke;">`;
}



let img5 = () => {
    let image5 = document.getElementById("vediothumbnail");
    image5.innerHTML = `<img src="WhatsApp Image 2025-05-25 at 14.45.43_3e3bd1ab.jpg" alt="" style="height: 355px; width: 350px; position: absolute; top: 7%; left: 7%; border: 2px solid whitesmoke;">`;
}
let Single = () => {
    let Vision = document.querySelector(".finest");
    let Button = document.getElementById("Visuals");

    if (Vision.style.display == "none") {
    Vision.style.display = "block";
    Button.innerHTML = `Hide`;
} else {
    Vision.style.display = "none";
    Button.innerHTML = `Show`;
}


}
let count=0
let INCREMENT = () => {
    let value = document.querySelector("#Number");
    count++
    value.innerHTML = count;
};

let DECREMENT = () => {
    let value1 = document.querySelector("#Number");
 count--
    value1.innerHTML = count

    
};
