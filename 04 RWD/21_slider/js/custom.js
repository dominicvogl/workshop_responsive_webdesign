
// nach allen HTML Elementen suchen, welche die Klasse .mod--slider haben
$('.mod--slider').each(function() {

    // Jedes dieser selektierten Elemente mit der Klasse .mod--slider, iniitialisert nun eine Instanz des Slick sliders
    $(this).slick();

});