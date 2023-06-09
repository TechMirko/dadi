// connessione al db necessaria per VERIFICARE se un codice esiste e se è già stato
// riscattato oppure no
/*const {createPool} = require('mysql')

const pool = createPool({
    host: "localhost",
    user: "Mirko",
    password: "Mirko.2005"
})*/

let validCode = "abc-def"; // esempio di codice valido per giocare
let codeInputArea = document.getElementById("codice-promo"); 
let giocoDadi = '../Gioco dadi/gioco.html'; // path del file da aprire se il codice è corretto

let errorBox = document.querySelector('.errorBox')

let validCodeShape = /^([a-zA-Z]{3})+-(([a-zA-Z0-9-]{3}))+$/

function checkCode() {
    let code = document.getElementById("codice-promo").value;
    console.log("Codice promo: " + code);
    if(validCodeShape.test(code) && code == validCode) { // se il codice è valido
        console.log("Codice corretto!"); 
        window.close();
        window.open(giocoDadi);
    } else if(code == "") { // se clicco invia ma il campo di inserimento risulta vuoto
        errorBox.innerText = "Prima inserisci un codice...poi clicca conferma :)"
        console.log("Codice non inserito");
        //alert("Prima inserisci un codice...poi clicca conferma :)");
        codeInputArea.value = "";
    } else if(!validCodeShape.test(code)) { // se il codice inserito non è valido
        errorBox.innerText = "Codice inserito non valido o scritto male."
        console.log("Codice inserito non valido. Reinserirne uno corretto");
        //alert("Codice errato, inesistente o già riscattato. Controlla la mail e riprova");
        codeInputArea.value = "";
    }
}