var socket=io()


const $message_form=document.querySelector("#message_form")
const $message_input=document.querySelector("#message_input")
const $form_button=document.querySelector("#form_button")
const $messages=document.querySelector("#messages")

const messageTemplate=document.querySelector("#message-template").innerHTML



$message_form.addEventListener('submit',(e)=>{
e.preventDefault()
$form_button.setAttribute('disabled','disabled')
const message=e.target.elements.message.value
socket.emit('sendMessage',message,(error)=>{
$form_button.removeAttribute('disabled')
$message_input.value='';
$message_input.focus();
 if(error){
      return  console.log(error)
    }
  console.log('message delivered!')
})

})

socket.on('message',(message)=>{
    console.log(message.text)

    const html=Mustache.render(messageTemplate, {
      message:message.text,
      username:message.username,
      createdAt:moment(message.createdAt).format('h:mm a')
    })
    $messages.insertAdjacentHTML('beforeend',html)
    })

    socket.emit('join', { username, room }, (error) => {
      if (error) {
        alert(error)
          //req.flash('error',error)
       
      }
  })