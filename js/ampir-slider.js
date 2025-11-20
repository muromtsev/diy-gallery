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
                src: '../images/sofas/ampir/large/ampir-green-1.webp',
                thumb: '../images/sofas/ampir/thumb/ampir-green-1_mini.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4></h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/ampir/large/ampir-green-2.webp',
                thumb: '../images/sofas/ampir/thumb/ampir-green-2_mini.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4></h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/ampir/large/ampir-green-3.webp',
                thumb: '../images/sofas/ampir/thumb/ampir-green-3_mini.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4></h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/ampir/large/large-amp1.webp',
                thumb: '../images/sofas/ampir/thumb/mini_mini_amp1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4></h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/ampir/large/large_amp2.webp',
                thumb: '../images/sofas/ampir/thumb/mini_mini_amp2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4></h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/ampir/large/large_amp3.webp',
                thumb: '../images/sofas/ampir/thumb/mini_mini_amp3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4></h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/ampir/large/2021-12-08_15-37-16_UTC_1_large.webp',
                thumb: '../images/sofas/ampir/thumb/2021-12-08_15-37-16_UTC_1_mini.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Ампир 2</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/ampir/large/2021-12-08_15-37-16_UTC_2_large.webp',
                thumb: '../images/sofas/ampir/thumb/2021-12-08_15-37-16_UTC_2_mini.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Ампир 2</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/ampir/large/2021-12-08_15-37-16_UTC_3_large.webp',
                thumb: '../images/sofas/ampir/thumb/2021-12-08_15-37-16_UTC_3_mini.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Ампир 2</h4>
                    <p></p>
                </div>`,
            }
            
        ]
    });
    
    inlineGallery.openGallery();
});