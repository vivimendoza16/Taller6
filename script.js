function randomPalette() {
    var min = 0
    var max = 359
    var h = Math.floor(Math.random() * (max - min)) + min;
    var diff = 72
    var color1 = h, color2 = h + diff, color3 = color2 + diff, color4 = color3 + diff, color5 = color4 + diff;
    $('#color1').css('background-color', 'hsl(' + color1 + ',100%,50%)');
    $('#color2').css('background-color', 'hsl(' + color2 + ',100%,50%)');
    $('#color3').css('background-color', 'hsl(' + color3 + ',100%,50%)');
    $('#color4').css('background-color', 'hsl(' + color4 + ',100%,50%)');
    $('#color5').css('background-color', 'hsl(' + color5 + ',100%,50%)');
    generateRules(color1, color2, color3, color4, color5);
};

function Borrar() {
    document.getElementById("css-rules").value =
        ".website-background{ color: #FFFFFF;}\n" +
        ".element-text{ color: #FFFFFF;}\n" +
        ".element-border{ border-color: #FFFFFF;}\n" +
        ".element-background{ background-color: #FFFFFF;}\n" +
        ".header{ color: #FFFFFF;}";
    $('#color1').css('background-color', '#FFFFFF');
    $('#color2').css('background-color', '#FFFFFF');
    $('#color3').css('background-color', '#FFFFFF');
    $('#color4').css('background-color', '#FFFFFF');
    $('#color5').css('background-color', '#FFFFFF');
};

function generateRules(color1, color2, color3, color4, color5) {
    document.getElementById("css-rules").value =
        ".website-background{ color:" + 'hsl(' + color1 + ',100%,50%)' + ";}\n" +
        ".element-text{ color: " + 'hsl(' + color2 + ',100%,50%)' + ";}\n" +
        ".element-border{ border-color: " + 'hsl(' + color3 + ',100%,50%)' + ";}\n" +
        ".element-background{ background-color: " + 'hsl(' + color4 + ',100%,50%)' + ";}\n" +
        ".header{ color: " + 'hsl(' + color5 + ',100%,50%)' + ";}";
};