document.addEventListener('DOMContentLoaded', function() {
    const lgContainer = document.getElementById('inline-gallery-container');
    const inlineGallery = lightGallery(lgContainer, {
        container: lgContainer,
        dynamic: true,
        hash: false,
        closable: false,
        showMaximizeIcon: true,
        appendSubHtmlTo: '.lg-item',
        slideDelay: 400,
        plugins: [lgZoom, lgThumbnail, lgAutoplay],        
        appendAutoplayControlsTo: ".lg-toolbar",
        slideShowAutoplay: true,
        dynamicEl: [
            {
                src: '../images/sofas/etc/2021-08-17_10-57-20_UTC_1.webp',
                thumb: '../images/sofas/etc/mini/2021-08-17_10-57-20_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказной</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-08-17_10-57-20_UTC_2.webp',
                thumb: '../images/sofas/etc/mini/2021-08-17_10-57-20_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказной</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-08-17_10-57-20_UTC_3.webp',
                thumb: '../images/sofas/etc/mini/2021-08-17_10-57-20_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказной</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-08-17_11-01-10_UTC_1.webp',
                thumb: '../images/sofas/etc/mini/2021-08-17_11-01-10_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Пуф</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-08-17_11-01-10_UTC_2.webp',
                thumb: '../images/sofas/etc/mini/2021-08-17_11-01-10_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Пуф</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-08-17_11-01-10_UTC_3.webp',
                thumb: '../images/sofas/etc/mini/2021-08-17_11-01-10_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Пуф</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-10-07_14-12-25_UTC_1.webp',
                thumb: '../images/sofas/etc/mini/2021-10-07_14-12-25_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Аккордион с подлокотниками</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-10-07_14-12-25_UTC_2.webp',
                thumb: '../images/sofas/etc/mini/2021-10-07_14-12-25_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Аккордион с подлокотниками</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-10-08_07-50-05_UTC_1.webp',
                thumb: '../images/sofas/etc/mini/2021-10-08_07-50-05_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Аккордион с подлокотниками</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-10-08_07-50-05_UTC_2.webp',
                thumb: '../images/sofas/etc/mini/2021-10-08_07-50-05_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Аккордион с подлокотниками</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-10-08_07-50-05_UTC_2.webp',
                thumb: '../images/sofas/etc/mini/2021-10-08_07-50-05_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Аккордион с подлокотниками</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-10-14_10-10-21_UTC_1.webp',
                thumb: '../images/sofas/etc/mini/2021-10-14_10-10-21_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Ева</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-10-14_10-10-21_UTC_2.webp',
                thumb: '../images/sofas/etc/mini/2021-10-14_10-10-21_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Ева</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-10-14_10-13-49_UTC_1.webp',
                thumb: '../images/sofas/etc/mini/2021-10-14_10-13-49_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-10-14_10-13-49_UTC_2.webp',
                thumb: '../images/sofas/etc/mini/2021-10-14_10-13-49_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-10-14_10-13-49_UTC_3.webp',
                thumb: '../images/sofas/etc/mini/2021-10-14_10-13-49_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-10-14_10-13-49_UTC_4.webp',
                thumb: '../images/sofas/etc/mini/2021-10-14_10-13-49_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-10-18_14-46-17_UTC_1.webp',
                thumb: '../images/sofas/etc/mini/2021-10-18_14-46-17_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Омега</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-10-18_14-46-17_UTC_2.webp',
                thumb: '../images/sofas/etc/mini/2021-10-18_14-46-17_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Омега</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-10-23_14-06-01_UTC_1.webp',
                thumb: '../images/sofas/etc/mini/2021-10-23_14-06-01_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Стелс</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-10-23_14-06-01_UTC_2.webp',
                thumb: '../images/sofas/etc/mini/2021-10-23_14-06-01_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Стелс</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2021-10-23_14-06-01_UTC_3.webp',
                thumb: '../images/sofas/etc/mini/2021-10-23_14-06-01_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Стелс</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2022-07-18_08-49-16_UTC_1.webp',
                thumb: '../images/sofas/etc/mini/2022-07-18_08-49-16_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила без локтей</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2022-07-18_08-49-16_UTC_2.webp',
                thumb: '../images/sofas/etc/mini/2022-07-18_08-49-16_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила без локтей</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2022-07-18_08-49-16_UTC_3.webp',
                thumb: '../images/sofas/etc/mini/2022-07-18_08-49-16_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила без локтей</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2022-08-01_15-00-37_UTC_1.webp',
                thumb: '../images/sofas/etc/mini/2022-08-01_15-00-37_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные скамейки</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2022-08-01_15-00-37_UTC_2.webp',
                thumb: '../images/sofas/etc/mini/2022-08-01_15-00-37_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные скамейки</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2022-08-01_15-00-37_UTC_3.webp',
                thumb: '../images/sofas/etc/mini/2022-08-01_15-00-37_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные скамейки</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2022-08-01_15-00-37_UTC_4.webp',
                thumb: '../images/sofas/etc/mini/2022-08-01_15-00-37_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные скамейки</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2022-11-18_07-46-51_UTC_1.webp',
                thumb: '../images/sofas/etc/mini/2022-11-18_07-46-51_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные скамейки</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2022-11-18_07-46-51_UTC_2.webp',
                thumb: '../images/sofas/etc/mini/2022-11-18_07-46-51_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные скамейки</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2022-11-18_07-46-51_UTC_3.webp',
                thumb: '../images/sofas/etc/mini/2022-11-18_07-46-51_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные скамейки</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2022-11-18_07-46-51_UTC_4.webp',
                thumb: '../images/sofas/etc/mini/2022-11-18_07-46-51_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные скамейки</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2022-11-18_07-46-51_UTC_5.webp',
                thumb: '../images/sofas/etc/mini/2022-11-18_07-46-51_UTC_5.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные скамейки</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2022-11-18_07-46-51_UTC_6.webp',
                thumb: '../images/sofas/etc/mini/2022-11-18_07-46-51_UTC_6.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные скамейки</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2022-11-18_07-46-51_UTC_7.webp',
                thumb: '../images/sofas/etc/mini/2022-11-18_07-46-51_UTC_7.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные скамейки</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2022-12-22_16-34-35_UTC_1.webp',
                thumb: '../images/sofas/etc/mini/2022-12-22_16-34-35_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказные в кафе</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2022-12-22_16-34-35_UTC_2.webp',
                thumb: '../images/sofas/etc/mini/2022-12-22_16-34-35_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказные в кафе</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2022-12-22_16-34-35_UTC_3.webp',
                thumb: '../images/sofas/etc/mini/2022-12-22_16-34-35_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказные в кафе</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2022-12-22_16-34-35_UTC_4.webp',
                thumb: '../images/sofas/etc/mini/2022-12-22_16-34-35_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказные в кафе</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2023-01-30_07-50-52_UTC_1.webp',
                thumb: '../images/sofas/etc/mini/2023-01-30_07-50-52_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные скамейки</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2023-01-30_07-50-52_UTC_2.webp',
                thumb: '../images/sofas/etc/mini/2023-01-30_07-50-52_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные скамейки</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2023-01-30_07-50-52_UTC_3.webp',
                thumb: '../images/sofas/etc/mini/2023-01-30_07-50-52_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные скамейки</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2023-01-30_07-50-52_UTC_4.webp',
                thumb: '../images/sofas/etc/mini/2023-01-30_07-50-52_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные скамейки</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2023-01-30_07-50-52_UTC_5.webp',
                thumb: '../images/sofas/etc/mini/2023-01-30_07-50-52_UTC_5.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные скамейки</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/2023-01-30_07-50-52_UTC_6.webp',
                thumb: '../images/sofas/etc/mini/2023-01-30_07-50-52_UTC_6.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модульные скамейки</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/accord.webp',
                thumb: '../images/sofas/etc/mini/accord.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Аккорд</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/amster1.webp',
                thumb: '../images/sofas/etc/mini/amster1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Амстердам</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/amster2-1.webp',
                thumb: '../images/sofas/etc/mini/amster2-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Амстердам</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/amster2-2.webp',
                thumb: '../images/sofas/etc/mini/amster2-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Амстердам</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/amsterdam-1.webp',
                thumb: '../images/sofas/etc/mini/amsterdam-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Амстердам</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/kamila-3.webp',
                thumb: '../images/sofas/etc/mini/kamila-3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/kokteblZ-1.webp',
                thumb: '../images/sofas/etc/mini/kokteblZ-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Коктебель заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/kokteblZ-2.webp',
                thumb: '../images/sofas/etc/mini/kokteblZ-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Коктебель заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/kokteblZ-3.webp',
                thumb: '../images/sofas/etc/mini/kokteblZ-3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Коктебель заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/lidiaA.webp',
                thumb: '../images/sofas/etc/mini/lidiaA.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Лидия :)</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/ludmila-1.webp',
                thumb: '../images/sofas/etc/mini/ludmila1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Людмила</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/malutk.webp',
                thumb: '../images/sofas/etc/mini/malutk1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Малютка :)</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/module1.webp',
                thumb: '../images/sofas/etc/mini/module1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Малютка :)</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/etc/stels2.webp',
                thumb: '../images/sofas/etc/mini/stels2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Стелс</h4>
                    <p></p>
                </div>`,
            },
            
        ]
    });
    
    inlineGallery.openGallery();
});