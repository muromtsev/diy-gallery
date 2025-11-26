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
                src: '../images/sofas/razdol/2021-09-28_12-18-16_UTC_1.webp',
                thumb: '../images/sofas/razdol/mini/2021-09-28_12-18-16_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-09-28_12-18-16_UTC_2.webp',
                thumb: '../images/sofas/razdol/mini/2021-09-28_12-18-16_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-10-06_07-05-30_UTC_1.webp',
                thumb: '../images/sofas/razdol/mini/2021-10-06_07-05-30_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 4-секции</h4>
                    <p>от Ё</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-10-06_07-05-30_UTC_2.webp',
                thumb: '../images/sofas/razdol/mini/2021-10-06_07-05-30_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 4-секции</h4>
                    <p>от Ё</p>
                </div>`,
            }, 
            {
                src: '../images/sofas/razdol/2021-10-20_14-34-18_UTC_1.webp',
                thumb: '../images/sofas/razdol/mini/2021-10-20_14-34-18_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-10-20_14-34-18_UTC_2.webp',
                thumb: '../images/sofas/razdol/mini/2021-10-20_14-34-18_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },  
            {
                src: '../images/sofas/razdol/2021-10-23_14-06-48_UTC.webp',
                thumb: '../images/sofas/razdol/mini/2021-10-23_14-06-48_UTC.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 3-секции</h4>
                    <p>от 59 300</p>
                </div>`,
            },   
            {
                src: '../images/sofas/razdol/2021-11-16_18-01-53_UTC_1.webp',
                thumb: '../images/sofas/razdol/mini/2021-11-16_18-01-53_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 3-секции</h4>
                    <p>от 59 300</p>
                </div>`,
            }, 
            {
                src: '../images/sofas/razdol/2021-11-16_18-01-53_UTC_2.webp',
                thumb: '../images/sofas/razdol/mini/2021-11-16_18-01-53_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 3-секции</h4>
                    <p>от 59 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-11-20_11-19-59_UTC_1.webp',
                thumb: '../images/sofas/razdol/mini/2021-11-20_11-19-59_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-11-20_11-19-59_UTC_2.webp',
                thumb: '../images/sofas/razdol/mini/2021-11-20_11-19-59_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-11-20_11-20-55_UTC_1.webp',
                thumb: '../images/sofas/razdol/mini/2021-11-20_11-20-55_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 3-секции</h4>
                    <p>от 59 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-11-20_11-20-55_UTC_2.webp',
                thumb: '../images/sofas/razdol/mini/2021-11-20_11-20-55_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 3-секции</h4>
                    <p>от 59 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-11-20_11-20-55_UTC_3.webp',
                thumb: '../images/sofas/razdol/mini/2021-11-20_11-20-55_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 3-секции</h4>
                    <p>от 59 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-11-30_06-04-23_UTC_1.webp',
                thumb: '../images/sofas/razdol/mini/2021-11-30_06-04-23_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 3-секции</h4>
                    <p>от 59 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-11-30_06-04-23_UTC_2.webp',
                thumb: '../images/sofas/razdol/mini/2021-11-30_06-04-23_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 3-секции</h4>
                    <p>от 59 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-11-30_06-04-23_UTC_3.webp',
                thumb: '../images/sofas/razdol/mini/2021-11-30_06-04-23_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 3-секции</h4>
                    <p>от 59 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-12-02_15-32-31_UTC_1.webp',
                thumb: '../images/sofas/razdol/mini/2021-12-02_15-32-31_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 3-секции</h4>
                    <p>от 59 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-12-02_15-32-31_UTC_2.webp',
                thumb: '../images/sofas/razdol/mini/2021-12-02_15-32-31_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 3-секции</h4>
                    <p>от 59 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-12-02_15-32-31_UTC_3.webp',
                thumb: '../images/sofas/razdol/mini/2021-12-02_15-32-31_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 3-секции</h4>
                    <p>от 59 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-12-07_12-46-01_UTC_1.webp',
                thumb: '../images/sofas/razdol/mini/2021-12-07_12-46-01_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 3-секции</h4>
                    <p>от 59 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-12-07_12-46-01_UTC_2.webp',
                thumb: '../images/sofas/razdol/mini/2021-12-07_12-46-01_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 3-секции</h4>
                    <p>от 59 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-12-17_14-57-53_UTC_1.webp',
                thumb: '../images/sofas/razdol/mini/2021-12-17_14-57-53_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-12-17_14-57-53_UTC_2.webp',
                thumb: '../images/sofas/razdol/mini/2021-12-17_14-57-53_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2021-12-17_14-57-53_UTC_2.webp',
                thumb: '../images/sofas/razdol/mini/2021-12-17_14-57-53_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2022-01-13_15-48-15_UTC_1.webp',
                thumb: '../images/sofas/razdol/mini/2022-01-13_15-48-15_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 3-секции</h4>
                    <p>от 59 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2022-01-13_15-48-15_UTC_2.webp',
                thumb: '../images/sofas/razdol/mini/2022-01-13_15-48-15_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 3-секции</h4>
                    <p>от 59 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2022-01-13_15-48-15_UTC_3.webp',
                thumb: '../images/sofas/razdol/mini/2022-01-13_15-48-15_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 3-секции</h4>
                    <p>от 59 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2022-01-21_18-52-44_UTC_1.webp',
                thumb: '../images/sofas/razdol/mini/2022-01-21_18-52-44_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2022-01-21_18-52-44_UTC_2.webp',
                thumb: '../images/sofas/razdol/mini/2022-01-21_18-52-44_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2022-07-20_13-10-49_UTC_1.webp',
                thumb: '../images/sofas/razdol/mini/2022-07-20_13-10-49_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2022-07-20_13-10-49_UTC_2.webp',
                thumb: '../images/sofas/razdol/mini/2022-07-20_13-10-49_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2022-07-20_13-10-49_UTC_3.webp',
                thumb: '../images/sofas/razdol/mini/2022-07-20_13-10-49_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2022-07-20_13-10-49_UTC_4.webp',
                thumb: '../images/sofas/razdol/mini/2022-07-20_13-10-49_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2022-08-08_19-31-16_UTC_1.webp',
                thumb: '../images/sofas/razdol/mini/2022-08-08_19-31-16_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2022-08-08_19-31-16_UTC_2.webp',
                thumb: '../images/sofas/razdol/mini/2022-08-08_19-31-16_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2022-08-08_19-31-16_UTC_3.webp',
                thumb: '../images/sofas/razdol/mini/2022-08-08_19-31-16_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2022-08-26_16-23-12_UTC_1.webp',
                thumb: '../images/sofas/razdol/mini/2022-08-26_16-23-12_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2022-08-26_16-23-12_UTC_2.webp',
                thumb: '../images/sofas/razdol/mini/2022-08-26_16-23-12_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2022-08-26_16-23-12_UTC_3.webp',
                thumb: '../images/sofas/razdol/mini/2022-08-26_16-23-12_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2022-08-26_16-23-12_UTC_4.webp',
                thumb: '../images/sofas/razdol/mini/2022-08-26_16-23-12_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2023-04-07_13-34-22_UTC_1.webp',
                thumb: '../images/sofas/razdol/mini/2023-04-07_13-34-22_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/22023-04-07_13-34-22_UTC_2.webp',
                thumb: '../images/sofas/razdol/mini/2023-04-07_13-34-22_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2023-04-07_13-34-22_UTC_3.webp',
                thumb: '../images/sofas/razdol/mini/2023-04-07_13-34-22_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2023-04-07_13-34-22_UTC_4.webp',
                thumb: '../images/sofas/razdol/mini/2023-04-07_13-34-22_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2023-04-07_13-34-22_UTC_5.webp',
                thumb: '../images/sofas/razdol/mini/2023-04-07_13-34-22_UTC_5.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2023-04-07_13-34-22_UTC_6.webp',
                thumb: '../images/sofas/razdol/mini/2023-04-07_13-34-22_UTC_6.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/2023-04-07_13-34-22_UTC_7.webp',
                thumb: '../images/sofas/razdol/mini/2023-04-07_13-34-22_UTC_7.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            
            {
                src: '../images/sofas/razdol/darkblue1.webp',
                thumb: '../images/sofas/razdol/mini/razdol3-darkblue1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 3-секции</h4>
                    <p>от 59 300</p>
                </div>`,
            },
            
            {
                src: '../images/sofas/razdol/darkblue2.webp',
                thumb: '../images/sofas/razdol/mini/razdol3-darkblue2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 3-секции</h4>
                    <p>от 59 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/photo_2025_1.webp',
                thumb: '../images/sofas/razdol/mini/photo_2025-11-26_23-11-00.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
            {
                src: '../images/sofas/razdol/photo_2025_2.webp',
                thumb: '../images/sofas/razdol/mini/photo_2025-11-26_23-11-02.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье 2-секции</h4>
                    <p>от 43 300</p>
                </div>`,
            },
        ]
    });
    
    inlineGallery.openGallery();
});