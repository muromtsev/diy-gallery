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
                src: '../images/sofas/sadko/2021-11-11_12-42-02_UTC_1.webp',
                thumb: '../images/sofas/sadko/mini/2021-11-11_12-42-02_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2021-11-11_12-42-02_UTC_2.webp',
                thumb: '../images/sofas/sadko/mini/2021-11-11_12-42-02_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2021-11-11_12-42-02_UTC_3.webp',
                thumb: '../images/sofas/sadko/mini/2021-11-11_12-42-02_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2021-11-11_12-42-02_UTC_4.webp',
                thumb: '../images/sofas/sadko/mini/2021-11-11_12-42-02_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2021-12-10_16-08-49_UTC_1.webp',
                thumb: '../images/sofas/sadko/mini/2021-12-10_16-08-49_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2021-12-10_16-08-49_UTC_2.webp',
                thumb: '../images/sofas/sadko/mini/2021-12-10_16-08-49_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2021-12-10_16-08-49_UTC_3.webp',
                thumb: '../images/sofas/sadko/mini/2021-12-10_16-08-49_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2021-12-10_16-08-49_UTC_4.webp',
                thumb: '../images/sofas/sadko/mini/2021-12-10_16-08-49_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2021-12-13_16-56-28_UTC_1.webp',
                thumb: '../images/sofas/sadko/mini/2021-12-13_16-56-28_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 2-секции</h4>
                    <p>от 44 200</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2021-12-13_16-56-28_UTC_2.webp',
                thumb: '../images/sofas/sadko/mini/2021-12-13_16-56-28_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 2-секции</h4>
                    <p>от 44 200</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2021-12-13_16-56-28_UTC_3.webp',
                thumb: '../images/sofas/sadko/mini/2021-12-13_16-56-28_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 2-секции</h4>
                    <p>от 44 200</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2021-12-15_15-08-49_UTC_1.webp',
                thumb: '../images/sofas/sadko/mini/2021-12-15_15-08-49_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2021-12-15_15-08-49_UTC_2.webp',
                thumb: '../images/sofas/sadko/mini/2021-12-15_15-08-49_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2021-12-15_15-08-49_UTC_2.webp',
                thumb: '../images/sofas/sadko/mini/2021-12-15_15-08-49_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2021-12-17_14-56-13_UTC_1.webp',
                thumb: '../images/sofas/sadko/mini/2021-12-17_14-56-13_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2021-12-17_14-56-13_UTC_2.webp',
                thumb: '../images/sofas/sadko/mini/2021-12-17_14-56-13_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2021-12-17_14-56-13_UTC_3.webp',
                thumb: '../images/sofas/sadko/mini/2021-12-17_14-56-13_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2021-12-22_16-03-26_UTC_1.webp',
                thumb: '../images/sofas/sadko/mini/2021-12-22_16-03-26_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2021-12-22_16-03-26_UTC_2.webp',
                thumb: '../images/sofas/sadko/mini/2021-12-22_16-03-26_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2021-12-22_16-03-26_UTC_3.webp',
                thumb: '../images/sofas/sadko/mini/2021-12-22_16-03-26_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2022-04-28_17-21-30_UTC_1.webp',
                thumb: '../images/sofas/sadko/mini/2022-04-28_17-21-30_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2022-04-28_17-21-30_UTC_2.webp',
                thumb: '../images/sofas/sadko/mini/2022-04-28_17-21-30_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2022-04-28_17-21-30_UTC_3.webp',
                thumb: '../images/sofas/sadko/mini/2022-04-28_17-21-30_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2022-04-28_17-21-30_UTC_4.webp',
                thumb: '../images/sofas/sadko/mini/2022-04-28_17-21-30_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2022-04-28_17-21-30_UTC_5.webp',
                thumb: '../images/sofas/sadko/mini/2022-04-28_17-21-30_UTC_5.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2022-04-28_17-21-30_UTC_7.webp',
                thumb: '../images/sofas/sadko/mini/2022-04-28_17-21-30_UTC_7.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2022-07-20_13-14-04_UTC_1.webp',
                thumb: '../images/sofas/sadko/mini/2022-07-20_13-14-04_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 2-секции</h4>
                    <p>от 44 200</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2022-07-20_13-14-04_UTC_2.webp',
                thumb: '../images/sofas/sadko/mini/2022-07-20_13-14-04_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 2-секции</h4>
                    <p>от 44 200</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2022-07-20_13-14-04_UTC_3.webp',
                thumb: '../images/sofas/sadko/mini/2022-07-20_13-14-04_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 2-секции</h4>
                    <p>от 44 200</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2022-07-27_14-43-41_UTC_1.webp',
                thumb: '../images/sofas/sadko/mini/2022-07-27_14-43-41_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2022-07-27_14-43-41_UTC_2.webp',
                thumb: '../images/sofas/sadko/mini/2022-07-27_14-43-41_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2022-07-27_14-43-41_UTC_3.webp',
                thumb: '../images/sofas/sadko/mini/2022-07-27_14-43-41_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2022-07-27_14-43-41_UTC_4.webp',
                thumb: '../images/sofas/sadko/mini/2022-07-27_14-43-41_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2022-07-27_14-43-41_UTC_5.webp',
                thumb: '../images/sofas/sadko/mini/2022-07-27_14-43-41_UTC_5.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2022-07-27_14-45-05_UTC_1.webp',
                thumb: '../images/sofas/sadko/mini/2022-07-27_14-45-05_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2022-07-27_14-45-05_UTC_2.webp',
                thumb: '../images/sofas/sadko/mini/2022-07-27_14-45-05_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2022-07-27_14-45-05_UTC_3.webp',
                thumb: '../images/sofas/sadko/mini/2022-07-27_14-45-05_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2022-07-27_14-45-05_UTC_4.webp',
                thumb: '../images/sofas/sadko/mini/2022-07-27_14-45-05_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2023-04-07_13-35-46_UTC_1.webp',
                thumb: '../images/sofas/sadko/mini/2023-04-07_13-35-46_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 2-секции</h4>
                    <p>от 44 200</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2023-04-07_13-35-46_UTC_2.webp',
                thumb: '../images/sofas/sadko/mini/2023-04-07_13-35-46_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 2-секции</h4>
                    <p>от 44 200</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2023-04-07_13-35-46_UTC_3.webp',
                thumb: '../images/sofas/sadko/mini/2023-04-07_13-35-46_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 2-секции</h4>
                    <p>от 44 200</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2023-04-07_13-35-46_UTC_4.webp',
                thumb: '../images/sofas/sadko/mini/2023-04-07_13-35-46_UTC_4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 2-секции</h4>
                    <p>от 44 200</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2023-04-07_13-35-46_UTC_5.webp',
                thumb: '../images/sofas/sadko/mini/2023-04-07_13-35-46_UTC_5.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 2-секции</h4>
                    <p>от 44 200</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2023-06-05_16-10-54_UTC_1.webp',
                thumb: '../images/sofas/sadko/mini/2023-06-05_16-10-54_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 2-секции</h4>
                    <p>от 44 200</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2023-06-05_16-10-54_UTC_2.webp',
                thumb: '../images/sofas/sadko/mini/2023-06-05_16-10-54_UTC_2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 2-секции</h4>
                    <p>от 44 200</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2023-06-06_19-12-19_UTC_1.webp',
                thumb: '../images/sofas/sadko/mini/2023-06-06_19-12-19_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 2-секции</h4>
                    <p>от 44 200</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2023-07-02_17-57-48_UTC_1.webp',
                thumb: '../images/sofas/sadko/mini/2023-07-02_17-57-48_UTC_1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/2023-07-02_17-57-48_UTC_3.webp',
                thumb: '../images/sofas/sadko/mini/2023-07-02_17-57-48_UTC_3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/sadko-11-1.webp',
                thumb: '../images/sofas/sadko/mini/sadko-11-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/sadko11-21.webp',
                thumb: '../images/sofas/sadko/mini/sadko11-21.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/sadko31-1.webp',
                thumb: '../images/sofas/sadko/mini/sadko31-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/sadko31-2.webp',
                thumb: '../images/sofas/sadko/mini/sadko31-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/sadko31-3.webp',
                thumb: '../images/sofas/sadko/mini/sadko31-3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 3-секции</h4>
                    <p>от 62 050</p>
                </div>`,
            },
            {
                src: '../images/sofas/sadko/sadkoG.webp',
                thumb: '../images/sofas/sadko/mini/sadkoG.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Садко 5-секции</h4>
                    <p>цена ХЗ</p>
                </div>`,
            },
            
        ]
    });
    
    inlineGallery.openGallery();
});