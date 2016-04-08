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
function partialSlide(id) {
    $(this).click(function (event) {
        event.preventDefault();
        $(id).toggleClass("open-partial");
        $("button.overlay").toggleClass("hide");
    });

    $('#create-route').fadeOut(500, function () {
        $('#create-route').toggleClass("open-slide");
    });

    $(".modal-overlay").remove();
}

$(".close-partial").click(function (event) {
    event.preventDefault();
    $(this).parent().parent().toggleClass("open-partial");
    $("button.overlay").toggleClass("hide");
});