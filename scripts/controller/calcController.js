class CalcController {

    constructor (){
        this._locale ="pt-BR"
        this._displayCalcEl = document.querySelector("#display"); // pegando o display pelo seletor do css
        this._dateEl =  document.querySelector("#data") ;
        this._timeEl =  document.querySelector("#hora") ;
        this._currentdate; // O  _  serve para colocar o atributo como private
        this.initialize();
        this.initButtonsEvents();
    }
 ///  metodo principal , "main" do objeto
    initialize(){
        // colocamos um antes do intervall para que a cauculadora não tenha o delay de 1 segundo para aparecer 
       this.setDisplayDateTime();
       
        // set intervall serve para falar pro javascript executar certo comando de tempos em tempos 
       // ideal para gerar a interatividade dos segundos no relogio da cauculadora 
       setInterval(()=>{
          this.setDisplayDateTime();
       },1000)// neste caso ele vai atualizar isso a cada 1000 milisegundos, ou seja , um segundo.
    }
        // criar eventos dos botões 

        initButtonsEvents(){
            // usar o querrySelectorALL, para buscar mais de um parametro, não so o primeiro que encontrar. 
            let buttons =  document.querySelectorAll("#buttons > g, #parts > g");
           
            buttons.forEach((btn,index)=>{

                btn.addEventListener('click', e=> {
                    console.log(btn.className.baseVal.replace("btn-",""));// como estamos trabalhando com sfg, precisamos da função  baseVal 

                })




            })
          
        }




    // para evitar que o codigo se repita em cima, criaremos um metodo 
     setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this.locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        
     }
 // criação de metodos getters e setters
    get displayCalc(){

        return this._displayCalcEl.innerHTML ;
   
    }
    set displayCalc(value){

        this._displayCalcEl.innerHTML  = value;
    
    }

    get displayDate(){

        return this._dateEl.innerHTML;
    
    }

   set displayDate(value){

        this._dateEl.innerHTML = value;

    }

    get displayTime(){

        return  this._timeEl.innerHTML;

    }
    set displayTime(value){

       return this._timeEl.innerHTML = value;

    }

    set currentDate(value){
        this._currentdate = value;
    }

    get currentDate (){

       return new Date();

    }
}