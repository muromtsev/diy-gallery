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
                src: '../images/sofas/kreslo/2021-08-17_10-59-21_UTC_1.webp',
                thumb: '../images/sofas/kreslo/mini/2021-08-17_10-59-21_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/2021-08-17_10-59-21_UTC_2.webp',
                thumb: '../images/sofas/kreslo/mini/2021-08-17_10-59-21_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/2021-08-17_10-59-21_UTC_3.webp',
                thumb: '../images/sofas/kreslo/mini/2021-08-17_10-59-21_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Раздолье</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/2021-09-27_15-44-24_UTC.webp',
                thumb: '../images/sofas/kreslo/mini/2021-09-27_15-44-24_UTC.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Корсика</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/2021-11-03_17-49-29_UTC_1.webp',
                thumb: '../images/sofas/kreslo/mini/2021-11-03_17-49-29_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/2021-11-03_17-49-29_UTC_2.webp',
                thumb: '../images/sofas/kreslo/mini/2021-11-03_17-49-29_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/2022-07-11_09-44-32_UTC_1.webp',
                thumb: '../images/sofas/kreslo/mini/2022-07-11_09-44-32_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Корсика</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/2022-07-11_09-44-32_UTC_2.webp',
                thumb: '../images/sofas/kreslo/mini/2022-07-11_09-44-32_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Корсика</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/2022-12-14_15-50-53_UTC_1.webp',
                thumb: '../images/sofas/kreslo/mini/2022-12-14_15-50-53_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Корсика</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/2022-12-14_15-50-53_UTC_2.webp',
                thumb: '../images/sofas/kreslo/mini/2022-12-14_15-50-53_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Корсика</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/2022-12-14_15-50-53_UTC_3.webp',
                thumb: '../images/sofas/kreslo/mini/2022-12-14_15-50-53_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Корсика</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/2022-12-14_15-50-53_UTC_4.webp',
                thumb: '../images/sofas/kreslo/mini/2022-12-14_15-50-53_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Корсика</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/2022-12-14_15-50-53_UTC_5.webp',
                thumb: '../images/sofas/kreslo/mini/2022-12-14_15-50-53_UTC_5.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Корсика</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/22022-12-14_15-50-53_UTC_6.webp',
                thumb: '../images/sofas/kreslo/mini/2022-12-14_15-50-53_UTC_6.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Корсика</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/2022-12-14_15-50-53_UTC_7.webp',
                thumb: '../images/sofas/kreslo/mini/2022-12-14_15-50-53_UTC_7.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Корсика</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/kors1-1.webp',
                thumb: '../images/sofas/kreslo/mini/kors1-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Корсика</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/kors1-2.webp',
                thumb: '../images/sofas/kreslo/mini/kors1-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Корсика</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/kors1-2.webp',
                thumb: '../images/sofas/kreslo/mini/kors1-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Корсика</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/kors2-1.webp',
                thumb: '../images/sofas/kreslo/mini/kors2-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Корсика</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/kors2-2.webp',
                thumb: '../images/sofas/kreslo/mini/kors2-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Корсика</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/kors2-3.webp',
                thumb: '../images/sofas/kreslo/mini/kors2-3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Корсика</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/razdol-kr-1.webp',
                thumb: '../images/sofas/kreslo/mini/razdol-kr-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Корсика</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/razdol-kr-2.webp',
                thumb: '../images/sofas/kreslo/mini/razdol-kr-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Корсика</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            {
                src: '../images/sofas/kreslo/razdol-kr-3.webp',
                thumb: '../images/sofas/kreslo/mini/razdol-kr-3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Корсика</h4>
                    <p>от ХЗ</p>
                </div>`,
            },
            
        ]
    });
    
    inlineGallery.openGallery();
});