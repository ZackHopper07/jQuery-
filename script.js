$(document).ready(function() {
            $("#showContentBtn").click(function() {
                $("#extraContent").slideToggle(); 
                $(this).text(function(i, text){
                    return text === "Show More" ? "Show Less" : "Show More";
                });
            });

            $("#hamburger").on('click', function() {
                var expanded = $(this).attr('aria-expanded') === 'true';
                $(this).attr('aria-expanded', (!expanded).toString());
                $('#nav').toggleClass('open');
                $(this).toggleClass('is-active');
            });

            $("#nav a").on('click', function() {
                $('#nav').removeClass('open');
                $('#hamburger').attr('aria-expanded','false').removeClass('is-active');
            });
        });
