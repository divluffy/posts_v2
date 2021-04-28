var main = document.querySelector('.main')

let arrPostImg = [
    './assets/post/1.png',
    './assets/post/2.png',
    // './assets/post/3.jpg',
    // './assets/post/4.jpg',
    './assets/post/5.jpg',
    './assets/post/6.jpg',
    // './assets/post/7.gif',
]

for (let i = 0; i < arrPostImg.length; i++) {

    if(arrPostImg.length ==1){
        main.innerHTML +=
        `<div class="img1">
            <div class="img">
                <img src="${arrPostImg[0]}" class="images">
            </div>
        </div>
        `
        break;  
    }

    if(arrPostImg.length ==2){
        main.innerHTML +=
        `<div class="img2">
            <div class="img">
                <img src="${arrPostImg[0]}" class="images">
            </div>
            <div class="img">
                <img src="${arrPostImg[1]}" class="images">
            </div>
        </div>
        `
    break;
    }

    if(arrPostImg.length ==3){
        main.innerHTML +=
        `<div class="img3">
            <div class="img">
                <img src="${arrPostImg[0]}" class="images">
                <img src="${arrPostImg[2]}" class="images">
            </div>
            <div class="img third">
                <img src="${arrPostImg[1]}" class="images">
            </div>
        </div>
        `
        break;
    }

    if(arrPostImg.length ==4){
        main.innerHTML +=
        `<div class="img4">
            <div class="img">
                <img src="${arrPostImg[0]}" class="images" onclick="tester(${0})">
            </div>
            <div class="img">
                <img src="${arrPostImg[1]}" class="images" onclick="tester(${1})">
            </div>
            <div class="img">
                <img src="${arrPostImg[2]}" class="images" onclick="tester(${2})">
                </div>
            <div class="img">
                <img src="${arrPostImg[3]}" class="images" onclick="tester(${3})">
            </div>
        </div>
        `
        break;
    }
    
    if(arrPostImg.length >4){
        main.innerHTML +=
        `<div class="img5">
            <div class="img">
                <img src="${arrPostImg[0]}" class="images">
            </div>
            <div class="img">
                <img src="${arrPostImg[1]}" class="images">
            </div>
            <div class="img">
                <img src="${arrPostImg[2]}" class="images">
                </div>
            <div class="img imglast">
                <img src="${arrPostImg[3]}" class="images">
                <span>+${arrPostImg.length}</span>
            </div>
        </div>
        `
        break;
    }

}




var show_img = document.querySelector('.show_img')
var close_pop = document.querySelector('.close_pop')


var arrow_left = document.querySelector('.arrow_left')
var arrow_right = document.querySelector('.arrow_right')


var mainImg = document.querySelectorAll('.images')
var slideImg = document.querySelector('.slide_img')
var sizeImg = document.querySelector('.show_img .img')



function tester(index){
    console.log(index)
    console.log(index.target)

     show_img.classList.add("active")
     slideImg.src = arrPostImg[index]


}








// function reSize(index){
//     let myimg = new Image()
//     myimg.onload = function(){
//         let height = myimg.height
//         let width = myimg.width
//         console.log(height+"*"+width)
//     }

//     myimg.src = index

// }




close_pop.onclick=()=>{
    show_img.classList.remove("active")
 slideArr = []

}
