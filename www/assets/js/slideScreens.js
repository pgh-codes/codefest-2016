// Full Screens

$(".view-team-btn").click(function (event) {
    event.preventDefault();
    if ($("#export-data").hasClass("open-slide")) {
        $("#export-data").toggleClass("open-slide");
    }
    if ($("#add-team").hasClass("open-slide")) {
        $("#add-team").toggleClass("open-slide");
    }
    $("#view-team").toggleClass("open-slide");
});


$(".add-team-btn").click(function (event) {
    event.preventDefault();
    if ($("#view-team").hasClass("open-slide")) {
        $("#view-team").toggleClass("open-slide");
    }
    if ($("#export-data").hasClass("open-slide")) {
        $("#export-data").toggleClass("open-slide");
    }
    $("#add-team").toggleClass("open-slide");
});

$(".export-data-btn").click(function (event) {
    event.preventDefault();
    if ($("#view-team").hasClass("open-slide")) {
        $("#view-team").toggleClass("open-slide");
    }
    if ($("#add-team").hasClass("open-slide")) {
        $("#add-team").toggleClass("open-slide");
    }
    $("#export-data").toggleClass("open-slide");
});

$(".close").click(function (event) {
    event.preventDefault();
    $(this).parent().parent().toggleClass("open-slide");
});

$(".team-info-btn").click(function (event) {
    event.preventDefault();
    $("#team-info").toggleClass("open-slide");
});

$(".edit-member-btn").click(function (event) {
    event.preventDefault();
    $("#edit-member").toggleClass("open-slide");
});


// Partial Screens
function partialSlide(slideId) {
    event.preventDefault();
    $(".modal-overlay").remove();
    $(slideId).toggleClass("open-partial");
    $("#create-route-overlay-btn").toggleClass("hide");
    $('#create-route').fadeToggle(400);
    
    $("#close-partial").click(function () {
        event.preventDefault();
        $(slideId).toggleClass("open-partial");
        $("#create-route-overlay-btn").toggleClass("hide");
    });
}

