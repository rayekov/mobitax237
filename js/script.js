function mobiTax() {
          var x = document.getElementById("montant").value;
          var frais;
          var taxe;
          var fraistot;
          var ttc;
          console.log(frais);
          if (x < 50 ) {
            frais = "Input not valid";
          } else if(x>=50 && x<=6500) {
            frais = x*0.03;
          }else if(x>=6501 && x<=10000) {
            frais = 180;
          }else if(x>=10001 && x<=13500) {
            frais = 300;
          }else if(x>=13501 && x<=25000) {
            frais = 350;
          }else if(x>=25001 && x<=50000) {
            frais = 700;
          }else if(x>=50001 && x<=80000) {
            frais = 1350;
          }else{
              frais=1000;
          }

          
            taxe=x*0.002;
            fraistot=frais+taxe;
            ttc=parseFloat(x)+parseFloat(fraistot);
            document.getElementById("base").innerHTML = "Les frais de base s'élèvent à :<b> "+frais.toFixed(2)+" FCFA</b>"; 
            document.getElementById("tax").innerHTML = "La taxe s'élève à:<b> "+ taxe.toFixed(2)+ " FCFA</b>";
            document.getElementById("tot").innerHTML = "Les frais totaux s'élèvent à:<b> "+ fraistot.toFixed(2); + " FCFA</b>";
            document.getElementById("ttc").innerHTML = "Pour pouvoir retirer <b>"+x+" FCFA </b>,<br>Vous devrez donc avoir au moins: <b>"+ ttc.toFixed(2)+ " FCFA</b> dans votre compte.";
}