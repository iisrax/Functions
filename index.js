// Funções: uma caixinha com diretrizes que executa tudo, quando solicitado...
fazer()

function fazer(){
    console.log("Quando der 19h, regar a plantinha pfvr =)")
    regar()
}

function regar(horario = "23h"){

    if(horario === "19h"){
        console.log("tá na hora")
    }   else if(horario === "20h"){
            console.log("está atrasado :/")
        }       else{
                console.log("você esqueceu da Samambaia... </3 ")
        }}


 // Functions with parameters
molhar("Ph da água à 7,4", "noite")
molhar("água vitaminada", "manhã")

function molhar(agua, periodo){
   console.log("Regar Samambaia com " + agua)
   console.log("durante à " + periodo)

 }