
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $(function() {
    $('.card').hover(
        function() {
            $(this).find('> .card-image > img.activator').click();
        }, function() {
            $(this).find('> .card-reveal > .card-title').click();
        }
    );
});

$(document).ready(function(){
  $('.modal').modal();
});
