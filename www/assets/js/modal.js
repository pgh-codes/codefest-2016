function openModal(modalId) {
    var appendthis = ("<div class='modal-overlay modal-close'></div>");

    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    $(".modal-container").fadeIn(500);
    
    $("button.overlay").css({
        'position' : 'absolute',
        'z-index': '999'
    });

    $(".modal-close, .modal-overlay").click(function () {
        $(".modal-container, .modal-overlay").fadeOut(500, function () {
            $(".modal-overlay").remove();
        });
    });
    
    $(modalId).position({
      my: "center",
      at: "center",
      of: ".modal-overlay"
    }); 
}

