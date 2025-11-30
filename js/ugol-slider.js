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
                src: '../images/sofas/ugol/2021-08-17_11-02-31_UTC_1.webp',
                thumb: '../images/sofas/ugol/mini/2021-08-17_11-02-31_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье Угол</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2021-08-17_11-02-31_UTC_2.webp',
                thumb: '../images/sofas/ugol/mini/2021-08-17_11-02-31_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье Угол</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2021-08-17_11-03-39_UTC_1.webp',
                thumb: '../images/sofas/ugol/mini/2021-08-17_11-03-39_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила Угол</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2021-08-17_11-03-39_UTC_2.webp',
                thumb: '../images/sofas/ugol/mini/2021-08-17_11-03-39_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила Угол</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2021-09-24_17-52-43_UTC_1.webp',
                thumb: '../images/sofas/ugol/mini/2021-09-24_17-52-43_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2021-09-24_17-52-43_UTC_2.webp',
                thumb: '../images/sofas/ugol/mini/2021-09-24_17-52-43_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2021-09-24_17-52-43_UTC_3.webp',
                thumb: '../images/sofas/ugol/mini/2021-09-24_17-52-43_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2021-10-04_09-02-03_UTC_1.webp',
                thumb: '../images/sofas/ugol/mini/2021-10-04_09-02-03_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила Угол</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2021-10-04_09-02-03_UTC_2.webp',
                thumb: '../images/sofas/ugol/mini/2021-10-04_09-02-03_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила Угол</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2021-10-18_14-45-07_UTC_1.webp',
                thumb: '../images/sofas/ugol/mini/2021-10-18_14-45-07_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Омега Угол</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2021-10-18_14-45-07_UTC_2.webp',
                thumb: '../images/sofas/ugol/mini/2021-10-18_14-45-07_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Омега Угол</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2021-10-18_14-45-07_UTC_3.webp',
                thumb: '../images/sofas/ugol/mini/2021-10-18_14-45-07_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Омега Угол</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2021-12-08_15-35-37_UTC_1.webp',
                thumb: '../images/sofas/ugol/mini/2021-12-08_15-35-37_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье Угол</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2021-12-08_15-35-37_UTC_2.webp',
                thumb: '../images/sofas/ugol/mini/2021-12-08_15-35-37_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье Угол</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2021-12-08_15-35-37_UTC_3.webp',
                thumb: '../images/sofas/ugol/mini/2021-12-08_15-35-37_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье Угол</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2021-12-08_15-35-37_UTC_4.webp',
                thumb: '../images/sofas/ugol/mini/2021-12-08_15-35-37_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье Угол</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-03-06_13-48-50_UTC_1.webp',
                thumb: '../images/sofas/ugol/mini/2022-03-06_13-48-50_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-03-06_13-48-50_UTC_2.webp',
                thumb: '../images/sofas/ugol/mini/2022-03-06_13-48-50_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-03-06_13-48-50_UTC_3.webp',
                thumb: '../images/sofas/ugol/mini/2022-03-06_13-48-50_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-03-06_13-48-50_UTC_4.webp',
                thumb: '../images/sofas/ugol/mini/2022-03-06_13-48-50_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-03-06_13-48-50_UTC_5.webp',
                thumb: '../images/sofas/ugol/mini/2022-03-06_13-48-50_UTC_5.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-03-06_13-48-50_UTC_6.webp',
                thumb: '../images/sofas/ugol/mini/2022-03-06_13-48-50_UTC_6.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-03-06_13-48-50_UTC_7.webp',
                thumb: '../images/sofas/ugol/mini/2022-03-06_13-48-50_UTC_7.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-03-06_13-48-50_UTC_8.webp',
                thumb: '../images/sofas/ugol/mini/2022-03-06_13-48-50_UTC_8.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-03-06_13-48-50_UTC_9.webp',
                thumb: '../images/sofas/ugol/mini/2022-03-06_13-48-50_UTC_9.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-03-29_15-17-56_UTC_1.webp',
                thumb: '../images/sofas/ugol/mini/2022-03-29_15-17-56_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-03-29_15-17-56_UTC_2.webp',
                thumb: '../images/sofas/ugol/mini/2022-03-29_15-17-56_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-03-29_15-17-56_UTC_3.webp',
                thumb: '../images/sofas/ugol/mini/2022-03-29_15-17-56_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-03-29_15-17-56_UTC_4.webp',
                thumb: '../images/sofas/ugol/mini/2022-03-29_15-17-56_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-03-29_15-17-56_UTC_5.webp',
                thumb: '../images/sofas/ugol/mini/2022-03-29_15-17-56_UTC_5.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-03-29_15-19-50_UTC_1.webp',
                thumb: '../images/sofas/ugol/mini/2022-03-29_15-19-50_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-03-29_15-19-50_UTC_2.webp',
                thumb: '../images/sofas/ugol/mini/2022-03-29_15-19-50_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-03-29_15-19-50_UTC_3.webp',
                thumb: '../images/sofas/ugol/mini/2022-03-29_15-19-50_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-08-30_19-32-12_UTC_1.webp',
                thumb: '../images/sofas/ugol/mini/2022-08-30_19-32-12_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-08-30_19-32-12_UTC_2.webp',
                thumb: '../images/sofas/ugol/mini/2022-08-30_19-32-12_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-08-30_19-32-12_UTC_3.webp',
                thumb: '../images/sofas/ugol/mini/2022-08-30_19-32-12_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-08-30_19-32-12_UTC_4.webp',
                thumb: '../images/sofas/ugol/mini/2022-08-30_19-32-12_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2022-08-30_19-32-12_UTC_5.webp',
                thumb: '../images/sofas/ugol/mini/2022-08-30_19-32-12_UTC_5.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2023-07-02_17-58-34_UTC_1.webp',
                thumb: '../images/sofas/ugol/mini/2023-07-02_17-58-34_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила Угол</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2023-07-02_17-58-34_UTC_2.webp',
                thumb: '../images/sofas/ugol/mini/2023-07-02_17-58-34_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила Угол</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2023-07-02_17-58-34_UTC_3.webp',
                thumb: '../images/sofas/ugol/mini/2023-07-02_17-58-34_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила Угол</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/2023-07-02_17-58-34_UTC_4.webp',
                thumb: '../images/sofas/ugol/mini/2023-07-02_17-58-34_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила Угол</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/sadkoU-1.webp',
                thumb: '../images/sofas/ugol/mini/sadkoU-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/sadkoU-2.webp',
                thumb: '../images/sofas/ugol/mini/sadkoU-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/sadkoU-3.webp',
                thumb: '../images/sofas/ugol/mini/sadkoU-3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/sadkoU-4.webp',
                thumb: '../images/sofas/ugol/mini/sadkoU-4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/sadkoU-5.webp',
                thumb: '../images/sofas/ugol/mini/sadkoU-5.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/ugol/sadkoU-6.webp',
                thumb: '../images/sofas/ugol/mini/sadkoU-6.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье с оттоманкой</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            
        ]
    });
    
    inlineGallery.openGallery();
});