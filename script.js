//seleziono i target

const giorno = document.getElementById("days")
const ora = document.getElementById("hours")
const minuti = document.getElementById("minutes")
const secondi = document.getElementById("seconds")


//ogni secondo faccio cambiare qualcosa



const intervallo = setInterval(quantoManca , 1000);

function quantoManca (){
    //mi prendi l'ora attuale 
    let currentDay = new Date();
    //mi prendo la data di natale 
    let natale = new Date(2022,11,25,0,0,0,0);
    //volgio trasformare la data di natale in millisecondi 
    natale = natale.getTime();
    //trasformo la data attuale in millisecondi
    currentDay = currentDay.getTime();

    //calcolo la loro differenza così da avere quanti millisecondi mancano a natale
    let tempoEffettivo = natale - currentDay;
    

    console.log(`tempo effettivo ${tempoEffettivo}`);

    

    if(natale <= currentDay){
        let dati = trasformatore(tempoEffettivo);
        giorno.innerHTML = dati[0];
        ora.innerHTML = dati[1];
        minuti.innerHTML = dati[2];
        secondi.innerHTML = dati[3];
        
    }else{
        clearInterval(intervallo)
    }
    
}

let oggi = new Date();
oggi = oggi.getTime();
trasformatore(oggi);

//creo una funzione che mi calcoli i giorni, ore minuti e secondi dandole in input i millisecondi

function trasformatore (x){
    //preparo una array per immagazzinare i valori di rispettivamente giorni ore minuti e secondi
    const risposta = [];

    const giorni = Math.floor(x / (86400000 ) );
    let resto = x % 86400000 ;
    risposta.push(giorni );

    const ore = Math.floor( resto / (3600000 ) );
    resto = x % 3600000;
    risposta.push(ore );

    const minuti = Math.floor(resto / (60000) )  ;
    resto = x % 60000;
    risposta.push(minuti);

    const secondi = Math.floor(resto / 1000 ) ;
    resto = x % 1000;
    risposta.push(secondi);

    console.log(risposta)
    return risposta;
    





}