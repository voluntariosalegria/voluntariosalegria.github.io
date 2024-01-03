

function trocarImagemEsfera(id, arrayDeEsferas){
    
    let imagem = document.querySelector(`#foto${id}`)
    imagem.classList.remove("hide")
    for(outraEsfera of arrayDeEsferas){
        if(id != outraEsfera.id){
            outraEsfera.style.backgroundColor = '#C4C4C4'
            let outraImagem = document.querySelector(`#foto${outraEsfera.id}`)
            outraImagem.classList.add("hide")
            
        }
    }
}

function MudarDeImagem(){

    /* Variáveis */
    const esferas = document.querySelectorAll('.ball')
    const arrayDeEsferas = [... esferas]
    const primeiraFoto = document.querySelector('#foto1')
    let ativo = false
    var intervalo

    /* Configurações Iniciais */
    primeiraFoto.classList.remove(`hide`)
    arrayDeEsferas[0].style.backgroundColor = '#474747'

    /* Confgurando Cronometro */
    const cronometro = {
        start(idGerado){
            if(ativo) return
            ativo = true
            intervalo = setInterval(() => {
                idGerado += 1
                if(idGerado > arrayDeEsferas.length){
                    idGerado = 1
                }
                trocarImagemEsfera(idGerado, arrayDeEsferas)
                let esferaParaPintar = document.getElementById(idGerado)
                esferaParaPintar.style.backgroundColor = '#474747'
            }, 4000)

        },
        stop(){
            clearInterval(intervalo)
            ativo = false
        },
        reset(idGerado){
            cronometro.stop()
            ativo = false
            this.start(idGerado)
        }
    }
 
    


    /* Modificando as Bolinhas */
    arrayDeEsferas.forEach(esfera => {
        esfera.onclick = () => {

            esfera.style.backgroundColor = '#474747'
            let idClicado= esfera.id
            trocarImagemEsfera(idClicado, arrayDeEsferas)
            cronometro.reset(Number(idClicado))

        }
    })
      

    /* Iniciando o Cronometro */
    cronometro.start(0)
 
   
}


MudarDeImagem()