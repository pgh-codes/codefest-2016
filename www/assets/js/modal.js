function openModal(modalId) {
    var appendthis = ("<div class='modal-overlay modal-close'></div>");

    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    $(".modal-container").fadeIn(500);

    $(modalId).position({
        my: "center",
        at: "center",
        of: ".modal-overlay"
    });
    
    $(".modal-close, .modal-overlay").click(function (event) {
        event.preventDefault();
        $(".modal-container, .modal-overlay").fadeOut(400, function () {
            $(".modal-overlay").remove();
        });
    });
}  



$("#start-event").click(function (event) {
    event.preventDefault();
    redrawMarkers();
});