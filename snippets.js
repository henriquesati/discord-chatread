let chat_holder = document.querySelector('.scrollerInner-2PPAp2')
let cache_size = 1
let caching = []

function get_last_messages(){
    var getElementos = document.querySelectorAll('.messageListItem-ZZ7v6g')
    var elemento_caching = []
    for (let i=1; i<=cache_size;i++){
        var ultimo = getElementos[getElementos.length - i]
        var last_message = get_image(ultimo)
        var text = get_innerText(ultimo)
        if (!last_message){
            console.log("nao é imagem, ou é so texto,")
            return;}
        if (last_message && text){
                if(text){
                    console.log("tem imagem e texto")
                    elemento_caching = [last_message, text]
                }
                 elemento_caching = [last_message, ''] 
        }
        if(!caching.includes(last_message)){
            cache_shifting(last_message)
        }
    }
}

function callback() {
    get_last_messages()
}

function get_image(input){
    var tagA = input.querySelector('[data-role="img"')
    if (tagA == null) {return;}
    var linkImg = tagA.getAttribute('href')
    console.log("link da imagem:" +  linkImg)
    return linkImg; //retorna pro cache pra caso mandem repetida nao repetir
}

function get_innerText(input){
    lastDiv = input.querySelectorAll('div[id*="content"]')
    last_message = ""
    if (lastDiv[0].childNodes.length>1){
        for (let i = 0; i < lastDiv[0].childNodes.length; i++) {
            last_message += lastDiv[0].childNodes[i].innerText
        }
        return last_message
    }
    return null
}

function cache_shifting(input){
    caching.push(input)
    if(caching.length == 5){
        caching.shift()
    }
}

let config = {
    childList: true,
  };
let observer = new MutationObserver(callback);

observer.observe(chat_holder, config)

