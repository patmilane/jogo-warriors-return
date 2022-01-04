function fase1(){
    var escolha = prompt ("Digite o número de sua resposta: ")
   if (escolha == 1) {
      location= "noreenfase2.html";
   }else {
      location= "noreenfaseOver12.html";
   }

}

function fase2(){
    var escolha = prompt ("Digite o número de sua resposta: ")
   if (escolha == 2) {
      location= "noreenfase3.html";
   }else {
      location= "noreenfaseOver12.html";
   }

}

function fase3(){
    var escolha = prompt ("Digite o número de sua resposta: ")
   if (escolha == 1) {
      location= "noreenfasewin.html";
   }else {
      location= "noreenfaseOver3.html";
   }

}