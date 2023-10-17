let chat_holder = document.querySelector('.scrollerInner-2PPAp2')
let cache_size = 1
let caching = []

function message_handle(input){
    console.log(input)
    let regex = /[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}/g;
    if (regex.test(input)){
        var resultado = input.match(regex)
        console.log("codigo parseado: " + resultado)
        try {
            let first_code = String(resultado).substring(0, 22)
            const el = document.createElement('textarea');
            el.value = first_code;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            console.log("texto copiado: " + first_code);

        }catch (err) {
    console.error("Erro ao copiar texto para a área de transferência:", err);  
        }
    }else { console.log("----------!")}
}

function get_last_messages(){
    var getElementos = document.querySelectorAll('.messageListItem-ZZ7v6g')   
    for (let i=1; i<=cache_size;i++){
        var ultimo = getElementos[getElementos.length - i]
        var last_message = get_innerText(ultimo)
        if (!last_message){ return;}
        if(!caching.includes(last_message)){
            message_handle(last_message)
            cache_shifting(last_message)
        }
    }
}

function callback() {
    get_last_messages()
}


function get_innerText(input){
    lastDiv = input.querySelectorAll('div[id*="content"]')
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
    
    let regex = /[a-zA-Z0-9]/
    return regex.test(last_message)?last_message:null;
}

function cache_shifting(input){
    caching.push(input)
    if(caching.length == 5){
        caching.shift()
    }
}

let config = {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
    attributeOldValue: true,
    characterDataOldValue: true,
  };
let observer = new MutationObserver(callback);

observer.observe(chat_holder, config)

