$(function() {

  $('.summon-cats').on('click',function(event){
     console.log("cattt")
    $.ajax({
    url: 'http://bitkittens.herokuapp.com/cats.json',
    method:'GET',
    dataType: 'json'
  }).done(function(data){
      for (var i=0; i < data.cats.length; i++){

    $('<img>').attr('src', data.cats[i].photo).appendTo('#cat' + (i+1));
    }
   });

  });
});
