// Suche nach Elementen mit der Klasse .mod--slider
$('.mod--slider').each(function() {

    // Initialisiere für jedes dieser Elemente eine Instanz des Sliders
    $(this).slick();

});

// Suche nach dem Element #image--feed und initialisere den image feed mit den jeweiligen Einstellungen
var macy  = Macy({
    container: '.image--feed',
    trueOrder: false,
    waitForImages: false,
    margin: 1,
    columns: 3,
    breakAt: {
        460: 2
    }
});

// Initialisiere eine neue Instanz von slideout und suche nach den jeweiligen Elementen 'panel' und 'menu', übernehme zudem die übergebenen Optionen
var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70,
    'side': 'right'
});

// Füge noch einen Event Listener für einen extra button hinzu der die Off Canvas Navigation öffnen kann
document.querySelector('.js-slideout-toggle').addEventListener('click', function() {

    // öffne die Off-Canvas Navigation, oder schließe diese
    slideout.toggle();
});