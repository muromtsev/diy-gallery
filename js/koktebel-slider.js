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
                src: '../images/sofas/koktebel/2021-08-17_10-55-08_UTC.webp',
                thumb: '../images/sofas/koktebel/mini/2021-08-17_10-55-08_UTC.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Коктебель</h4>
                    <p>от 27 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/koktebel/2021-09-07_14-58-43_UTC_1.webp',
                thumb: '../images/sofas/koktebel/mini/2021-09-07_14-58-43_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Коктебель</h4>
                    <p>от 27 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/koktebel/2021-09-30_17-13-10_UTC_1.webp',
                thumb: '../images/sofas/koktebel/mini/2021-09-30_17-13-10_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Коктебель</h4>
                    <p>заказной</p>
                </div>`,
            },
            {
                src: '../images/sofas/koktebel/2021-09-30_17-13-10_UTC_2.webp',
                thumb: '../images/sofas/koktebel/mini/2021-09-30_17-13-10_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Коктебель</h4>
                    <p>заказной</p>
                </div>`,
            },
            {
                src: '../images/sofas/koktebel/2021-09-30_17-13-10_UTC_3.webp',
                thumb: '../images/sofas/koktebel/mini/2021-09-30_17-13-10_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Коктебель</h4>
                    <p>заказной</p>
                </div>`,
            },
            {
                src: '../images/sofas/koktebel/2021-09-30_17-13-10_UTC_4.webp',
                thumb: '../images/sofas/koktebel/mini/2021-09-30_17-13-10_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Коктебель</h4>
                    <p>заказной</p>
                </div>`,
            },
            {
                src: '../images/sofas/koktebel/2021-12-01_09-10-09_UTC_1.webp',
                thumb: '../images/sofas/koktebel/mini/2021-12-01_09-10-09_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Коктебель</h4>
                    <p>от 27 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/koktebel/2021-12-01_09-10-09_UTC_2.webp',
                thumb: '../images/sofas/koktebel/mini/2021-12-01_09-10-09_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Коктебель</h4>
                    <p>от 27 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/koktebel/2022-07-22_14-41-20_UTC_1.webp',
                thumb: '../images/sofas/koktebel/mini/2022-07-22_14-41-20_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Коктебель</h4>
                    <p>от 27 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/koktebel/2022-07-22_14-41-20_UTC_2.webp',
                thumb: '../images/sofas/koktebel/mini/2022-07-22_14-41-20_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Коктебель</h4>
                    <p>от 27 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/koktebel/2022-07-22_14-41-20_UTC_3.webp',
                thumb: '../images/sofas/koktebel/mini/2022-07-22_14-41-20_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Коктебель</h4>
                    <p>от 27 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/koktebel/2022-07-22_14-41-20_UTC_4.webp',
                thumb: '../images/sofas/koktebel/mini/2022-07-22_14-41-20_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Коктебель</h4>
                    <p>от 27 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/koktebel/photo_2025-11-20_20-40-40.webp',
                thumb: '../images/sofas/koktebel/mini/photo_2025-11-20_20-40-40.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Коктебель</h4>
                    <p>от 27 300</p>
                </div>`,
            },
            
        ]
    });
    
    inlineGallery.openGallery();
});