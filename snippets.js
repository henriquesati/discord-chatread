let chat_holder = document.querySelector('.chat-2ZfjoI')
let caching;

function message_handle(input){
    console.log(input)
    let regex = /[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}/g;
    if (regex.test(input)){
        var resultado = input.match(regex)
        console.log("codigo parseado: " + resultado)
        try {
            const el = document.createElement('textarea');
            el.value = resultado;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            console.log("texto copiado: " + input);
            window.open("http://127.0.0.1:8000", '_blank');

        }catch (err) {
    console.error("Erro ao copiar texto para a área de transferência:", err);  
        }
    }else { console.log("elemento ordinario, nada copiado")}
}

function print_last_message(){
    var getElementos = document.querySelectorAll('.messageListItem-ZZ7v6g')
    var ultimo = getElementos[getElementos.length -1]
    var lastDiv = ultimo.querySelectorAll('div[id*="content"]')
    last_message = ""
    if (lastDiv[0].childNodes.length>1){
        for (let i = 0; i < lastDiv[0].childNodes.length; i++) {
            last_message += lastDiv[0].childNodes[i].innerText
        }
    }
    else{
        for (let i=0; i < lastDiv[0].childNodes.length; i++) {
            last_message += lastDiv[0].childNodes[0].innerText
        }
    }

    last_message == caching? null: message_handle(last_message)
    caching = last_message
}

function callback() {
    print_last_message()
}

function do_fetch(){
    window.open('http://localhost:8000', '_blank')

}
let config = { childList: true, subtree: true }
let observer = new MutationObserver(callback);

observer.observe(chat_holder, config)
