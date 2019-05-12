


$('.next').click(function() {
  //salvo la posizione attuale dell'immagine in una variabile
  var img_corrente = $('.visible');

  //seleziono la prossima immagine a quella img_corrente
  var prox_img = img_corrente.next('img');

  //controllo se prossima img è maggiore di zero
  if(prox_img.length > 0){
    //rimuovo la classe per rendere visibile l'immagine
    img_corrente.removeClass('visible');
    //aggiungo la classe alla prossima immagine
    prox_img.addClass('visible');
  }
  else{
    // recupero la prima immagine dello slider e la setto come visibile

    $('.slider img').first().addClass('visible');

    img_corrente.removeClass('visible');
  }

});


$('.prev').click(function(){

   var img_corrente = $('.visible');

   var img_precedente = img_corrente.prev('img');

     if(img_precedente.length > 0){
       img_corrente.removeClass('visible');

       img_precedente.addClass('visible');

     }else{
       //altrimenti seleziono l'ultimo ta img e gli do la classe visible
       $('.slider img').last().addClass('visible');

       img_corrente.removeClass('visible');
     }
});


setInterval(parerino, 1000)
