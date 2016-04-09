function openModal(modalId, fadeTime) {
    var appendthis = ("<div class='modal-overlay modal-close'></div>");

    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    $(modalId).fadeIn(fadeTime);

    $(modalId).position({
        my: "center",
        at: "center",
        of: window
    });
    
    $(".modal-close, .modal-overlay").click(function () {
        $(modalId).fadeOut(400);
        $(".modal-overlay").remove();
    });
}

$("#start-event").click(function (event) {
    event.preventDefault();
    redrawMarkers();
});