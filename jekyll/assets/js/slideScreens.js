$(".manage-team-btn").click(function () {
    if($("#export-data").hasClass("open-slide")) {
        $("#export-data").toggleClass("open-slide");
    }
    if($("#manage-trash-cans").hasClass("open-slide")) {
        $("#manage-trash-cans").toggleClass("open-slide");
    }
    $("#manage-team").toggleClass("open-slide");  
});


$(".manage-trash-cans-btn").click(function () {
    if($("#manage-team").hasClass("open-slide")) {
        $("#manage-team").toggleClass("open-slide");
    }    
    if($("#export-data").hasClass("open-slide")) {
        $("#export-data").toggleClass("open-slide");
    }    
    $("#manage-trash-cans").toggleClass("open-slide");     
});


$(".export-data-btn").click(function () {    
    if($("#manage-team").hasClass("open-slide")) {
        $("#manage-team").toggleClass("open-slide");
    }    
    if($("#manage-trash-cans").hasClass("open-slide")) {
        $("#manage-trash-cans").toggleClass("open-slide");
    }    
    $("#export-data").toggleClass("open-slide");
});


$(".close").click(function () {
    $(this).parent().parent().toggleClass("open-slide");
});