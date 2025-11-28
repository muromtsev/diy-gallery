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
                src: '../images/sofas/kubus/2021-08-31_15-06-25_UTC.webp',
                thumb: '../images/sofas/kubus/mini/2021-08-31_15-06-25_UTC.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/kubus/2021-10-27_07-36-40_UTC_1.webp',
                thumb: '../images/sofas/kubus/mini/2021-10-27_07-36-40_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/kubus/2021-10-27_07-36-40_UTC_2.webp',
                thumb: '../images/sofas/kubus/mini/2021-10-27_07-36-40_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/kubus/2021-10-27_07-36-40_UTC_3.webp',
                thumb: '../images/sofas/kubus/mini/2021-10-27_07-36-40_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/kubus/2021-10-27_07-36-40_UTC_4.webp',
                thumb: '../images/sofas/kubus/mini/2021-10-27_07-36-40_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/kubus/2021-11-05_08-15-27_UTC_1.webp',
                thumb: '../images/sofas/kubus/mini/2021-11-05_08-15-27_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 3-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/kubus/2021-11-05_08-15-27_UTC_2.webp',
                thumb: '../images/sofas/kubus/mini/2021-11-05_08-15-27_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 3-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/kubus/2021-11-26_17-02-30_UTC_1.webp',
                thumb: '../images/sofas/kubus/mini/2021-11-26_17-02-30_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 3-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/kubus/2021-11-26_17-02-30_UTC_2.webp',
                thumb: '../images/sofas/kubus/mini/2021-11-26_17-02-30_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 3-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/kubus/2021-11-26_17-02-30_UTC_3.webp',
                thumb: '../images/sofas/kubus/mini/2021-11-26_17-02-30_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 3-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/kubus/2021-12-07_12-47-15_UTC_1.webp',
                thumb: '../images/sofas/kubus/mini/2021-12-07_12-47-15_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 3-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/kubus/2021-12-07_12-47-15_UTC_2.webp',
                thumb: '../images/sofas/kubus/mini/2021-12-07_12-47-15_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 3-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/kubus/2021-12-07_12-47-15_UTC_3.webp',
                thumb: '../images/sofas/kubus/mini/2021-12-07_12-47-15_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 3-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/kubus/2022-02-02_15-04-41_UTC_1.webp',
                thumb: '../images/sofas/kubus/mini/2022-02-02_15-04-41_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/kubus/2022-02-02_15-04-41_UTC_2.webp',
                thumb: '../images/sofas/kubus/mini/2022-02-02_15-04-41_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/kubus/2022-02-02_15-04-41_UTC_3.webp',
                thumb: '../images/sofas/kubus/mini/2022-02-02_15-04-41_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/kubus/2022-06-22_17-32-26_UTC_1.webp',
                thumb: '../images/sofas/kubus/mini/2022-06-22_17-32-26_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 3-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/kubus/2022-06-22_17-32-26_UTC_2.webp',
                thumb: '../images/sofas/kubus/mini/2022-06-22_17-32-26_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 3-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/kubus/2022-06-22_17-32-26_UTC_3.webp',
                thumb: '../images/sofas/kubus/mini/2022-06-22_17-32-26_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 3-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/kubus/2022-06-22_17-32-26_UTC_4.webp',
                thumb: '../images/sofas/kubus/mini/2022-06-22_17-32-26_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кубус 3-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
                        
        ]
    });
    
    inlineGallery.openGallery();
});