


// var content_comment = document.querySelector('.content_comment')
// var textarea = document.querySelector('.content_comment textarea')
// var send = document.querySelector('.send')
// var imgUser = document.querySelector('.img_user img')
// var current_comment = document.querySelector('.current_comment')
// var up_img_file = document.querySelector('#up_img_file')


// var up_img_test = document.querySelector('.head_post .img img')


// up_img_file.addEventListener('change',(event)=>{

//     if(event.target.files.length > 0){
//         var imgComment = URL.createObjectURL(event.target.files[0])
//        main.innerHTML = `<img src="${imgComment}" >` 
//         console.log(imgComment)
//     }

// })















// var hegitEnter = 0
// var heightLength = 0
// let height = 0
// content_comment.addEventListener('keyup',(event)=>{
//     let msgVal = textarea.value

//     if (event.keyCode === 13) {
//         hegitEnter += 15
//     }
//     if(msgVal.length < 50){
//         heightLength = 30
//     }
//     if(msgVal.length > 50){
//         content_comment.style.height = "50px"
//         heightLength = 50
//     }
//     if(msgVal.length > 120){
//         content_comment.style.height = "70px"
//         heightLength = 60

//     }
//     if(msgVal.length > 200){
//         content_comment.style.height = "90px"
//         heightLength = 80
//     }
//     if(msgVal.length > 280){
//         content_comment.style.height = "110px"
//         heightLength = 110
//     }
//     if(msgVal.length > 350){
//         content_comment.style.height = "130px"
//         heightLength = 130
//     }
//     if(msgVal.length > 420){
//         content_comment.style.height = "150px"
//         heightLength = 150
//     }
//     if(msgVal.length > 490){
//         content_comment.style.height = "170px"
//         heightLength = 170
//     }

//     if(msgVal.length > 560){
//         content_comment.style.height = "190px"
//         content_comment.style.overflow = "auto"
//         heightLength = 190
//     }else{
//         content_comment.style.overflow = "hidden"
//     }

//     if(msgVal.length == 0){
//         content_comment.style.height = "30px"
//     }

// height = hegitEnter+heightLength
// })

// var index = 0
// send.addEventListener('click',()=>{
//     let getImg =  imgUser.src
//     let getMsg =  textarea.value
  
//     if(getMsg !==''){
//         current_comment.innerHTML += `
//             <div class="comment_add">
//                 <div class="img_user">
//                     <img src="${getImg}" class="images">
//                 </div>
//                 <div class="msg_others">
//                     <textarea disabled>${getMsg}</textarea>
//                 </div>
//                 <div class="more_option">
//                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
//                 </div>
//             </div>
//         `
//             textarea.value = ''
//             content_comment.style.overflow = "hidden"
//             content_comment.style.height = "40px"
//             getSize(height)    

//     }else{
//         alert("enter your comment")
//     }
// })


// function getSize(height){
// var msg_others = document.querySelectorAll(`.comment_add .msg_others textarea`)[index]
//     msg_others.style.height = height + "px"
//     // msg_others.style.height += "40px"
//     msg_others.style.overflow = "hidden"
//     index++
//      hegitEnter = 0
//      heightLength = 0
//      height = 0
// }