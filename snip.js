let chat_holder = document.querySelector('.chat-2ZfjoI')
let caching;

function unify_text(input){
    message = ""
    for(let i=0; i<input.children.length;i++){
        message += input.children[i].textContent
    }
    return message
}

function print_last_message(){
    var getElementos = document.querySelectorAll('.messageListItem-ZZ7v6g')
    var ultimo = getElementos[getElementos.length -1]   //retorna div com spans normal sem node
    var lastDiv = ultimo.querySelector('div[id*="content"]')

    last_message = unify_text(lastDiv) 
    console.log(last_message)
    caching = last_message
}

function callback() {
    print_last_message()
}

let config = { childList: true, subtree: true }
let observer = new MutationObserver(callback);

observer.observe(chat_holder, config)
var pai = document.querySelectorAll("message-content-1162103208525709342")

function is_code(input){
  var regex = /[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}/g;

}