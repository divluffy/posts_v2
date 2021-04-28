


// var content_comment = document.querySelector('.content_comment')
var textareaT = document.querySelector('.textareaT')
var send = document.querySelector('.send')
// var imgUser = document.querySelector('.img_user img')
var current_comment = document.querySelector('.current_comment')
var up_img_file = document.querySelector('#up_img_file')

var comments = document.querySelector('.comments')
let hht = 0
textareaT.addEventListener('keyup',()=>{
    textareaT.style.height = "50px"
    textareaT.style.height = (textareaT.scrollHeight)+"px"
    hht = textareaT.scrollHeight
    // console.log(hht)


})
textareaT.addEventListener('keypress',()=>{
    textareaT.style.height = "50px"
    textareaT.style.height = (textareaT.scrollHeight)+"px"

    hht = textareaT.scrollHeight
    // console.log(hht)

})


var newsrc
up_img_file.addEventListener('change',(event)=>{
    
     newsrc = URL.createObjectURL(event.target.files[0])
    // textareaT.innerHTML = `<img src="${newsrc}" alt="">`
})





send.addEventListener('click',(e)=>{
    let getImg =  document.querySelector('.img_user img').src
    let getMsg =  textareaT.value
  
    if(getMsg !=='' || newsrc !==``){
        current_comment.innerHTML += `
            <div class="comment_add">
                <div class="img_user">
                    <img src="${getImg}" class="images">
                </div>
                <div class="msg_others">
                    <textarea disabled>${getMsg}</textarea>
                    <img src="${newsrc}" class="images">
                </div>
                <div class="more_option">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                </div>
            </div>
        `
        textareaT.value = ''
        textareaT.style.height = "52px"
        newsrc =``
        // current_comment.style.height = hht+"px"
        // document.querySelector('.msg_others').style.height = hht+"px"
 
        //  comments.style.height = (comments.scrollHeight)+"px"
    }else{
        alert("enter your comment")
    }
})










