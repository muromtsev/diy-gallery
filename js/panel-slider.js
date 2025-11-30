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
                src: '../images/sofas/panel/p1-1.webp',
                thumb: '../images/sofas/panel/mini/p1-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Панель стеновая</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/panel/p1-2.webp',
                thumb: '../images/sofas/panel/mini/p1-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Панель стеновая</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/panel/p1-3.webp',
                thumb: '../images/sofas/panel/mini/p1-3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Панель стеновая</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/panel/p2-1.webp',
                thumb: '../images/sofas/panel/mini/p2-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Панель в прихожую</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/panel/p3-1.webp',
                thumb: '../images/sofas/panel/mini/p3-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Панель в прихожую</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/panel/p3-2.webp',
                thumb: '../images/sofas/panel/mini/p3-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Панель в прихожую</h4>
                    <p></p>
                </div>`,
            },
        ]
    });
    
    inlineGallery.openGallery();
});