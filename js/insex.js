
class Application{
    constructor(){
        this.currentItemMenu = 0;
        this.steps = document.querySelectorAll('.steps__circle');
        this.stick = document.querySelectorAll('.steps__stick'); 
        this.slidesMenu = document.querySelectorAll('.steps__notMenu');
        this.OverviewTextBlock = document.querySelectorAll('.Overview__textBlock '); 


        this.initialSetUpElements()
    }


    initialSetUpElements(){
        this.OverviewTextBlock.forEach((el, id)=>{
            if(id>2){
                el.classList.add('Overview__textBlock_disabled')
            }
            
        })
        this.buttonFunc()
        this.readMore()
    }

    menuDinamic(){
        this.currentItemMenu++;
       
            this.steps.forEach((el, id, ar) =>{
                if(id<this.currentItemMenu){
                    el.classList.add('steps__circle_activated');
                    el.classList.remove('steps__circle_active');
                    this.stick[id].classList.add('steps__stick_active')
                    this.slidesMenu[id].classList.add('displayNone')
                }

                if(id ===this.currentItemMenu ){
                    el.classList.add('steps__circle_active');
                    this.slidesMenu[id].classList.remove('displayNone')
                }
            })
    }

    buttonFunc(){
        debugger
        this.buttons = document.querySelectorAll('.agree');
        this.lastButtons = document.querySelectorAll('.lastButtons');

        this.buttons.forEach(element => {
            element.addEventListener('click', ()=>{
                this.menuDinamic();
            });

        });


        this.lastButtons.forEach(element => {
            element.addEventListener('click', ()=>{
                let stepsBlock = document.getElementById('stepBlock');
                let mainBlock = document.getElementsByClassName('body');
                mainBlock[0].classList.remove('displayNone')
                stepsBlock.classList.add('displayNone')
            });

        });

    }

    readMore(){
        const readElement = document.querySelector('.Overview__readmore');

        readElement.addEventListener('click', ()=>{
            this.OverviewTextBlock.forEach((el, id)=>{
                    el.classList.remove('Overview__textBlock_disabled')
            })

            readElement.parentNode.removeChild(readElement);


        })
    }


}

const instance = new Application();

