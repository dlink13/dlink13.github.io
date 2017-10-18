$(document).ready(function(){
    ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.766025, 37.58729],
            zoom: 15
        }),
        myPlacemark = new ymaps.Placemark([55.766025, 37.58729], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentBody: "Садово-Кудринская ул., 15, стр. 5, Москва 228375"
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: prefix+'img/c17_map_marker.png',
            // Размеры метки.
            iconImageSize: [40, 46],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-22, -48]
        });

    myMap.geoObjects.add(myPlacemark);

    myMap.controls
        // Кнопка изменения масштаба.
        .add('zoomControl', { left: 5, top: 5 })
        // Список типов карты
        .add('typeSelector')
        // Стандартный набор кнопок
        .add('mapTools', { left: 35, top: 5 });
});
});