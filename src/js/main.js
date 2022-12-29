let header = document.querySelector(".header");
if (header) {
    headerLink = header.querySelectorAll(".header-nav__item");
    if (headerLink.length > 1) {
        headerLink[1].classList.add('.header-nav__item--extends');
    }
}

if (document.querySelector(".mySwiper")) {
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    });
}
if (document.querySelector(".map")) {
    ymaps.ready(init);
    function init() {
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
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
        myPlacemark = new ymaps.Placemark([59.851422, 30.300983], {
            hintContent: 'IFAB',
            balloonContent: 'г. Санкт-Петербург, а/я 281 Ленинский пр., 151, оф.635'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/contacts/address.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects.add(myPlacemark);
    }
}

// Header
let headerBtn = document.querySelector(".header-nav__btn");
let menu = document.querySelector(".menu");
if (headerBtn) {
    headerBtn.addEventListener("click", function () {
        headerBtn.classList.toggle("header-nav__btn--active");
        if (menu) {
            menu.classList.toggle("menu--active")
        }
    })
};

// phone mask
var phone = document.querySelector('.form__phone')
if (phone) {
    let maskOptions = {
        mask: '+7(000)000-00-00',
        lazy: false
    }
    phone.addEventListener("focus",function (){
        let mask = new IMask(phone, maskOptions);

    })
}


// Adaptive

let burger = document.querySelector('.burger__icon');
if (burger) {
    let headerNav = document.querySelector('.header__nav');
    burger.addEventListener('click', function (e) {
        burger.classList.toggle('burger__icon--active')
    })
}




