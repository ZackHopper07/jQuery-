$(document).ready(function() {
            $("#showContentBtn").click(function() {
                $("#extraContent").slideToggle(); // Toggle content with slide animation
                $(this).text(function(i, text){
                    return text === "Show More" ? "Show Less" : "Show More";
                });
            });
        });
