function fase1(){
   var escolha = prompt ("Digite o número de sua resposta: ");

   if (escolha == 1) {
      location= "aghamorafase2.html";
   }else {
      location= "aghamoraOver1.html";
   }

}

function fase2(){
   var escolha = prompt ("Digite o número de sua resposta: ");
   
   if (escolha == 1) {
      location= "aghamorafase3.html";
   }else {
      location= "aghamoraOver23.html";
   }

}

function fase3(){
   var escolha = prompt ("Digite o número de sua resposta: ");

   if (escolha == 2) {
      location= "aghamorafasewin.html";
   }else {
      location= "aghamoraOver23.html";
   }

}