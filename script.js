
$(document).ready(function() {
   slider()
 });
 
 function slider() {
   // funzione per scorrere a dx con add/removeClass al click di angle-right
   $(".next").click(function() {
     // rimuovo active dalla prima immagine e dal primo pallino
     var activeImg = $("img.active");
     var activeCircle = $("i.active");
     activeImg.removeClass("active");
     activeCircle.removeClass("active");
     // se l'immagine e il pallino non hanno la classe last
     if (!activeImg.hasClass("last") && !activeCircle.hasClass("last")) {
       // aggiungo active all'immagine e pallino successivi
       activeImg.next("img").addClass("active");
       activeCircle.next("i").addClass("active");
       // altrimenti
     } else {
       // aggiungo active alla prima immagine e al primo pallino
       var firstImg = $("img.first");
       var firstCircle = $("i.first");
       firstImg.addClass("active");
       firstCircle.addClass("active");
     }
   });
   // funzione per scorrere a sx con add/removeClass al click di angle-left
   $(".prev").click(function() {
     // rimuovo active dalla prima immagine e dal primo pallino
     var activeImg = $("img.active");
     var activeCircle = $("i.active");
     activeImg.removeClass("active");
     activeCircle.removeClass("active");
     // se l'immagine e il pallino non hanno la classe first
     if (!activeImg.hasClass("first") && !activeCircle.hasClass("first")) {
       // aggiungo active all'immagine e pallino precedenti
       activeImg.prev("img").addClass("active");
       activeCircle.prev("i").addClass("active");
       // altrimenti
     } else {
       // aggiungo active all'ultima immagine e all'ultimo pallino
       var lastImg = $("img.last");
       var lastCircle = $("i.last");
       lastImg.addClass("active");
       lastCircle.addClass("active");
     }
   });
 }
 