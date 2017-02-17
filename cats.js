$(function() {

  $('.summon-cats').on('click',function(event){
     console.log("cattt")
    $.ajax({
    url: 'http://bitkittens.herokuapp.com/cats.json',
    method:'GET',
    dataType: 'json'
  }).done(function(data){
        $(data.cats).each(function(index){
          var cat = $('<img>').attr('src', this.photo).attr('alt','Photo of: ' + this.name)
          $('#cat' + (index+1)).html(cat)
        });
      });
    });
  });
