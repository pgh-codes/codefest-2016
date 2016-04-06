$(".view-team-btn").click(function () {
    if($("#export-data").hasClass("open-slide")) {
        $("#export-data").toggleClass("open-slide");
    }
    if($("#add-team").hasClass("open-slide")) {
        $("#add-team").toggleClass("open-slide");
    }
    $("#view-team").toggleClass("open-slide");  
});


$(".add-team-btn").click(function () {
    if($("#view-team").hasClass("open-slide")) {
        $("#view-team").toggleClass("open-slide");
    }    
    if($("#export-data").hasClass("open-slide")) {
        $("#export-data").toggleClass("open-slide");
    }    
    $("#add-team").toggleClass("open-slide");     
});


$(".export-data-btn").click(function () {    
    if($("#view-team").hasClass("open-slide")) {
        $("#view-team").toggleClass("open-slide");
    }    
    if($("#add-team").hasClass("open-slide")) {
        $("#add-team").toggleClass("open-slide");
    }    
    $("#export-data").toggleClass("open-slide");
});


$(".close").click(function () {
    $(this).parent().parent().toggleClass("open-slide");
});


$(".team-info-btn").click(function () {    
   
    $("#team-info").toggleClass("open-slide");
});

$(".edit-member-btn").click(function () {    
   
    $("#edit-member").toggleClass("open-slide");
});

