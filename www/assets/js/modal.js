function openModal(modalId) {
    var appendthis = ("<div class='modal-overlay modal-close'></div>");

    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    $(".modal-container").fadeIn(500);
    

    $(".modal-close, .modal-overlay").click(function () {
        $(".modal-container, .modal-overlay").fadeOut(500, function () {
            $(".modal-overlay").remove();
        });
    });

    
    $.fn.center = function () {
        this.css("position", "absolute");
        this.css("top", ($(window).height() - this.height()) / 55 + "%");
        this.css("left", ($(window).width() - this.width()) / 2 + "px");
        return this;
    };
    
    $(".modal-container").center();
    $(window).resize(function () {
        $(".modal-container").center();
    });
    
    
}

