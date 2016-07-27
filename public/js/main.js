$( document ).ready(function() {

  let showNav = false;


  $('#menu').on('click', function(){
    showNav = !showNav;
    if(showNav === true){
      $('#tagNav').removeClass('hidden');
      $('#tagNav').addClass('slideInRight');
    }else{
      $('#tagNav').removeClass('slideInRight');
      $('#tagNav').addClass('slideOutRight');
      $('#tagNav').addClass('hidden');
    }

  });






});
