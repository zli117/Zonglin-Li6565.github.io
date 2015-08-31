(function() {
    var delay = 5000;
    var altText = [
        "typedef money time;",
        "(Conclusion *)&Premise",
        "AbstractSingletonProxyFactoryBean",
        "private String paula = \"Brillant\";",
    ];

    var $detail2 = $("#detail2");
    var prevText = null;

    function getAltText() {
        var index = Math.floor(Math.random() * altText.length);
        var text = altText.splice(index, 1)[0];
        if (prevText != null) {
            altText.push(prevText);
        }
        prevText = text;
        return text;
    }

    function updateWithFade() {
        $detail2.fadeOut(function() {
            $detail2.text(getAltText()).fadeIn();
        });
    }

    $detail2.text(getAltText());
    setInterval(updateWithFade, delay);
})();
