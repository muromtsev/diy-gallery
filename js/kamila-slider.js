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
                src: '../images/sofas/kamila/2021-09-09_06-29-57_UTC_1.webp',
                thumb: '../images/sofas/kamila/mini/2021-09-09_06-29-57_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кимила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2021-09-09_06-29-57_UTC_2.webp',
                thumb: '../images/sofas/kamila/mini/2021-09-09_06-29-57_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кимила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2021-09-09_06-29-57_UTC_3.webp',
                thumb: '../images/sofas/kamila/mini/2021-09-09_06-29-57_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кимила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2021-10-18_14-48-56_UTC.webp',
                thumb: '../images/sofas/kamila/mini/2021-10-18_14-48-56_UTC.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кимила 3-секции</h4>
                    <p>от 43 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2021-11-03_17-45-28_UTC_1.webp',
                thumb: '../images/sofas/kamila/mini/2021-11-03_17-45-28_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кимила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2021-11-03_17-45-28_UTC_2.webp',
                thumb: '../images/sofas/kamila/mini/2021-11-03_17-45-28_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кимила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2021-11-10_19-26-37_UTC_1.webp',
                thumb: '../images/sofas/kamila/mini/2021-11-10_19-26-37_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кимила 2</h4>
                    <p>от 36 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2021-11-10_19-26-37_UTC_2.webp',
                thumb: '../images/sofas/kamila/mini/2021-11-10_19-26-37_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кимила 2</h4>
                    <p>от 36 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2021-11-24_17-09-19_UTC_1.webp',
                thumb: '../images/sofas/kamila/mini/2021-11-24_17-09-19_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кимила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2021-12-06_07-23-20_UTC_1.webp',
                thumb: '../images/sofas/kamila/mini/2021-12-06_07-23-20_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кимила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2021-12-06_07-23-20_UTC_2.webp',
                thumb: '../images/sofas/kamila/mini/2021-12-06_07-23-20_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кимила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2021-12-06_07-23-20_UTC_3.webp',
                thumb: '../images/sofas/kamila/mini/2021-12-06_07-23-20_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кимила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2021-12-06_07-23-20_UTC_4.webp',
                thumb: '../images/sofas/kamila/mini/2021-12-06_07-23-20_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кимила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2021-12-06_07-23-20_UTC_5.webp',
                thumb: '../images/sofas/kamila/mini/2021-12-06_07-23-20_UTC_5.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кимила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2021-12-06_07-24-03_UTC_1.webp',
                thumb: '../images/sofas/kamila/mini/2021-12-06_07-24-03_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 3-секции</h4>
                    <p>от 43 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2021-12-06_07-24-03_UTC_2.webp',
                thumb: '../images/sofas/kamila/mini/2021-12-06_07-24-03_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 3-секции</h4>
                    <p>от 43 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2022-02-02_06-53-07_UTC_1.webp',
                thumb: '../images/sofas/kamila/mini/2022-02-02_06-53-07_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2022-02-02_06-53-07_UTC_2.webp',
                thumb: '../images/sofas/kamila/mini/2022-02-02_06-53-07_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2022-02-02_06-53-07_UTC_3.webp',
                thumb: '../images/sofas/kamila/mini/2022-02-02_06-53-07_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2022-02-02_06-53-07_UTC_4.webp',
                thumb: '../images/sofas/kamila/mini/2022-02-02_06-53-07_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2023-03-15_12-44-36_UTC_1.webp',
                thumb: '../images/sofas/kamila/mini/2023-03-15_12-44-36_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2023-03-15_12-44-36_UTC_3.webp',
                thumb: '../images/sofas/kamila/mini/2023-03-15_12-44-36_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2023-03-15_12-44-36_UTC_4.webp',
                thumb: '../images/sofas/kamila/mini/2023-03-15_12-44-36_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2023-03-15_12-44-36_UTC_5.webp',
                thumb: '../images/sofas/kamila/mini/2023-03-15_12-44-36_UTC_5.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/2023-03-15_12-44-36_UTC_6.webp',
                thumb: '../images/sofas/kamila/mini/2023-03-15_12-44-36_UTC_6.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 2-секции</h4>
                    <p>от 29 250</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/kamila2-green.webp',
                thumb: '../images/sofas/kamila/mini/kamila2-green.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 2</h4>
                    <p>от 36 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/kamila2a.webp',
                thumb: '../images/sofas/kamila/mini/kamila2a.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 2</h4>
                    <p>от 36 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/kamila3s-1.webp',
                thumb: '../images/sofas/kamila/mini/kamila3s-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 3-секции</h4>
                    <p>от 43 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/kamila3s-2.webp',
                thumb: '../images/sofas/kamila/mini/kamila3s-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 3-секции</h4>
                    <p>от 43 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/kamila3s-3.webp',
                thumb: '../images/sofas/kamila/mini/kamila3s-3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 3-секции</h4>
                    <p>от 43 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/kamila31-1.webp',
                thumb: '../images/sofas/kamila/mini/kamila31-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 3-секции</h4>
                    <p>от 43 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/kamila31-2.webp',
                thumb: '../images/sofas/kamila/mini/kamila31-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 3-секции</h4>
                    <p>от 43 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/kamila31-3.webp',
                thumb: '../images/sofas/kamila/mini/kamila31-3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 3-секции</h4>
                    <p>от 43 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/kamila32-1.webp',
                thumb: '../images/sofas/kamila/mini/kamila32-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 3-секции</h4>
                    <p>от 43 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/kamila32-2.webp',
                thumb: '../images/sofas/kamila/mini/kamila32-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 3-секции</h4>
                    <p>от 43 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/kamila/kamila32-3.webp',
                thumb: '../images/sofas/kamila/mini/kamila32-3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила 3-секции</h4>
                    <p>от 43 050</p>
                </div>`,
            },            
        ]
    });
    
    inlineGallery.openGallery();
});