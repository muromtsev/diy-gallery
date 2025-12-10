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
                src: '../images/sofas/compact_plus/photo_2025-12-10_21-01-30.webp',
                thumb: '../images/sofas/compact_plus/mini/photo_2025-12-10_21-01-30.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Компакт Плюс</h4>
                    <p>???</p>
                </div>`,
            },
            {
                src: '../images/sofas/compact_plus/photo_2025-12-10_21-01-33.webp',
                thumb: '../images/sofas/compact_plus/mini/photo_2025-12-10_21-01-33.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Компакт Плюс</h4>
                    <p>???</p>
                </div>`,
            },
            {
                src: '../images/sofas/compact_plus/photo_2025-12-10_21-01-36.webp',
                thumb: '../images/sofas/compact_plus/mini/photo_2025-12-10_21-01-36.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Компакт Плюс</h4>
                    <p>???</p>
                </div>`,
            },
            {
                src: '../images/sofas/compact_plus/photo_2025-12-10_21-01-42.webp',
                thumb: '../images/sofas/compact_plus/mini/photo_2025-12-10_21-01-42.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Компакт Плюс</h4>
                    <p>???</p>
                </div>`,
            },
            {
                src: '../images/sofas/compact_plus/photo_2025-12-10_21-01-44.webp',
                thumb: '../images/sofas/compact_plus/mini/photo_2025-12-10_21-01-44.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Компакт Плюс</h4>
                    <p>???</p>
                </div>`,
            },
            {
                src: '../images/sofas/compact_plus/photo_2025-12-10_21-01-51.webp',
                thumb: '../images/sofas/compact_plus/mini/photo_2025-12-10_21-01-51.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Компакт Плюс</h4>
                    <p>???</p>
                </div>`,
            },
            {
                src: '../images/sofas/compact_plus/photo_2025-12-10_21-01-55.webp',
                thumb: '../images/sofas/compact_plus/mini/photo_2025-12-10_21-01-55.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Компакт Плюс</h4>
                    <p>???</p>
                </div>`,
            },
            
        ]
    });
    
    inlineGallery.openGallery();
});