ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.760178, 37.618575],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        });

    myMap.geoObjects
        .add(new ymaps.Placemark([55.760178, 37.618575], {
            balloonContent: '<strong>Большой театр</strong>',
            iconCaption: 'Большой театр'
        }, {
            preset: 'islands#icon',
            iconColor: '#FF0000'
        }));
}
