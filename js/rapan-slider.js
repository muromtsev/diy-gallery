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
                src: '../images/sofas/rapan/2021-10-14_10-14-59_UTC_1.webp',
                thumb: '../images/sofas/rapan/mini/2021-10-14_10-14-59_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },  
            {
                src: '../images/sofas/rapan/2021-10-14_10-14-59_UTC_2.webp',
                thumb: '../images/sofas/rapan/mini/2021-10-14_10-14-59_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/rapan/2021-10-14_10-14-59_UTC_3.webp',
                thumb: '../images/sofas/rapan/mini/2021-10-14_10-14-59_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/rapan/2021-10-18_14-47-35_UTC_1.webp',
                thumb: '../images/sofas/rapan/mini/2021-10-18_14-47-35_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/rapan/2021-10-18_14-47-35_UTC_2.webp',
                thumb: '../images/sofas/rapan/mini/2021-10-18_14-47-35_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/rapan/2021-10-26_15-48-38_UTC_1.webp',
                thumb: '../images/sofas/rapan/mini/2021-10-26_15-48-38_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/rapan/2021-10-26_15-48-38_UTC_2.webp',
                thumb: '../images/sofas/rapan/mini/2021-10-26_15-48-38_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/rapan/2021-11-05_08-12-18_UTC_1.webp',
                thumb: '../images/sofas/rapan/mini/2021-11-05_08-12-18_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/rapan/2021-11-05_08-12-18_UTC_2.webp',
                thumb: '../images/sofas/rapan/mini/2021-11-05_08-12-18_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/rapan/2021-11-05_08-12-18_UTC_3.webp',
                thumb: '../images/sofas/rapan/mini/2021-11-05_08-12-18_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/rapan/2021-11-05_08-12-18_UTC_4.webp',
                thumb: '../images/sofas/rapan/mini/2021-11-05_08-12-18_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/rapan/2021-11-24_17-08-34_UTC_1.webp',
                thumb: '../images/sofas/rapan/mini/2021-11-24_17-08-34_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/rapan/2021-11-24_17-08-34_UTC_2.webp',
                thumb: '../images/sofas/rapan/mini/2021-11-24_17-08-34_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/rapan/2021-11-24_17-08-34_UTC_3.webp',
                thumb: '../images/sofas/rapan/mini/2021-11-24_17-08-34_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/rapan/2021-11-25_16-54-58_UTC_1.webp',
                thumb: '../images/sofas/rapan/mini/2021-11-25_16-54-58_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/rapan/2021-11-25_16-54-58_UTC_2.webp',
                thumb: '../images/sofas/rapan/mini/2021-11-25_16-54-58_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/rapan/2021-11-25_16-54-58_UTC_3.webp',
                thumb: '../images/sofas/rapan/mini/2021-11-25_16-54-58_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/rapan/2021-11-25_16-54-58_UTC_4.webp',
                thumb: '../images/sofas/rapan/mini/2021-11-25_16-54-58_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/rapan/2022-08-08_19-30-29_UTC_1.webp',
                thumb: '../images/sofas/rapan/mini/2022-08-08_19-30-29_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/rapan/2022-08-08_19-30-29_UTC_2.webp',
                thumb: '../images/sofas/rapan/mini/2022-08-08_19-30-29_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            {
                src: '../images/sofas/rapan/2022-08-08_19-30-29_UTC_3.webp',
                thumb: '../images/sofas/rapan/mini/2022-08-08_19-30-29_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Рапан 2-секции</h4>
                    <p>от ???</p>
                </div>`,
            },
            
        ]
    });
    
    inlineGallery.openGallery();
});