let header = document.querySelector(".header");
if (header) {
    headerLink = header.querySelectorAll(".header-nav__item");
    if (headerLink.length > 1) {
        headerLink[1].classList.add('.header-nav__item--extends');
    }
}
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.851422, 30.300983],
        
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 13.5
    });
    var placemark = new ymaps.Placemark([59.851422, 30.300983], {},
        {
            preset: 'islands#icon',
            iconColor: '#a40000'
        }
    );
    myMap.geoObjects.add(placemark);
}
        
      



