function fase1(){
   var escolha = prompt ("Digite o número de sua resposta: ");

   if (escolha == 1) {
      location= "aghamorafase2.html";

   }else if (escolha == 2) {
      location= "aghamoraOver1.html";

   } else {
      alert("Por Favor, digite 1 ou 2");
      fase1();
   }
}

function fase2(){
   var escolha = prompt ("Digite o número de sua resposta: ");
   
   if (escolha == 1) {
      location= "aghamorafase3.html";

   }else if(escolha == 2){
      location= "aghamoraOver23.html";

   }else {
      alert("Por Favor, digite 1 ou 2");
      fase2();
   }
}

function fase3(){
   var escolha = prompt ("Digite o número de sua resposta: ");

   if (escolha == 2) {
      location= "aghamorafasewin.html";

   }else if (escolha == 1){
      location= "aghamoraOver23.html";

   } else {
      alert("Por Favor, digite 1 ou 2");
      fase3();
   }
}