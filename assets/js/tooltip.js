(function() {
    var $tooltip = $("#tooltip");
    var originalText = $tooltip.text();
    $("ul.icons li a").hover(function() {
        $tooltip.removeClass("tooltip-hide").addClass("tooltip-show");
        var linkText = $(this).text();
        $tooltip.fadeOut("fast", function() {
            $tooltip.text(linkText).fadeIn("fast");
        });
    }, function() {
        $tooltip.removeClass("tooltip-show").addClass("tooltip-hide");
        $tooltip.fadeOut("fast", function() {
            $tooltip.text(originalText).fadeIn("fast");
        });
    });
})();
