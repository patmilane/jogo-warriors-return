function fase1(){
    var escolha = prompt ("Digite o número de sua resposta: ");

   if (escolha == 1) {
      location= "noreenfase2.html";

   }else if (escolha == 2) {
      location= "noreenfaseOver12.html";

   } else {
      alert("Por Favor, digite 1 ou 2");
      fase1();
   }
}

function fase2(){
    var escolha = prompt ("Digite o número de sua resposta: ");

   if (escolha == 2) {
      location= "noreenfase3.html";

   }else if (escolha == 1) {
      location= "noreenfaseOver12.html";

   } else {
      alert("Por Favor, digite 1 ou 2");
      fase2();
   }
}

function fase3(){
    var escolha = prompt ("Digite o número de sua resposta: ");

   if (escolha == 1) {
      location= "noreenfasewin.html";

   }else if (escolha == 2) {
      location= "noreenfaseOver3.html";

   } else {
      alert("Por Favor, digite 1 ou 2");
      fase3();
   }
}