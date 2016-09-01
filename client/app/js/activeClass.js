$(document).ready(function(){
    $('.pagination li a').click(
        function(e)
        {
            $('.pagination li a').removeClass('active');
            $(e.currentTarget).addClass('active');
        }
    );
});
