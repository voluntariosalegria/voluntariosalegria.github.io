


Projects =  function (){
    this.ArrayoOfProjects = [{
        title: 'CRIANÇAS',
        subtitle: 'Orfanatos e Abrigos',
        codBackground: '#E27B86',
        codBotton: '#BE6D75',
        image: 'assets/personagens/crianças.png',
        ref: '#crianças'

    },
    {
        title: 'ANIMAIS',
        subtitle: 'Canis e Feirinhas de Adoção',
        codBackground: '#7BA8E2',
        codBotton: '#5F89BE',
        image: 'assets/personagens/animais.png',
        ref: '#animais'
    },
    {
        title: 'MEIO AMBIENTE',
        subtitle: 'Limpeza de Praia e Reciclagem',
        codBackground: '#7CC991',
        codBotton: '#629F72',
        image: 'assets/personagens/arvores.png',
        ref: '#meio-ambiente'
    },
    {
        title: 'IDOSOS',
        subtitle: 'Asilos e Casas de Repouso',
        codBackground: '#F2E692',
        codBotton: '#D6CC87',
        image: 'assets/personagens/vovo.png',
        ref: '#idosos'
    
    }]
    this.Change = function(element, change, key, style = false) {
        let cod = 0
        setInterval(() => {
            style ? element.style[change] = this.ArrayoOfProjects[cod][key] : element[change] = this.ArrayoOfProjects[cod][key]
            if(cod < this.ArrayoOfProjects.length - 1){
                cod++;
            } else {
                cod = 0
            }
        }, 4000)
    }
    this.ChangeBackground = function () {
        const vertentes = document.querySelector('.vertentes')
        const botton = document.querySelector('.saibaMais a')
        this.Change(vertentes, 'backgroundColor', 'codBackground', true)
        this.Change(botton, 'backgroundColor', 'codBotton', true)
        this.Change(botton, 'href', 'ref')
    }    
    this.ChangeTitleSubtitleRef = function (){
        const title = document.querySelector('.title h1')
        const subtitle = document.querySelector('.subtitle h2')
        this.Change(title, 'innerText', 'title')
        this.Change(subtitle, 'innerText', 'subtitle')
    }
    this.ChangeImage = function (){
        const image = document.querySelector('.imagem-projeto')
        this.Change(image, 'src', 'image')
    }
    this.photosEvent = function(){
        const photos = document.getElementsByClassName('filtro')
        const photosArray = [...photos]
        photosArray.forEach(photo => {

            photo.addEventListener("mouseover", function( event ){
                photo.classList.remove("hidden")
            })
            photo.addEventListener("touchstart", touch)
            photo.addEventListener("touchend", touch)



            function touch( event ){
                if(event.type == 'touchstart'){ 
                    setTimeout(function(){ 
                        photo.classList.remove('hidden'); 
                    }, 200);
                }
                if(event.type == 'touchend'){
                    setTimeout(function(){ 
                        photo.classList.add('hidden'); 
                    }, 3000);
                }
            }
            photo.addEventListener("mouseleave", function( event ){
                photo.classList.add("hidden")
            })
        })
    }
}


projects = new Projects()

projects.ChangeBackground()
projects.ChangeTitleSubtitleRef()
projects.ChangeImage()
projects.photosEvent()


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
  slides[currentSlide].classList.remove('active');

  currentSlide += direction;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  slides[currentSlide].classList.add('active');
}

