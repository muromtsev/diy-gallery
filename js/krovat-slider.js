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
                src: '../images/sofas/k/k1-1.webp',
                thumb: '../images/sofas/k/mini/k1-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k1-2.webp',
                thumb: '../images/sofas/k/mini/k1-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k1-3.webp',
                thumb: '../images/sofas/k/mini/k1-3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k1-4.webp',
                thumb: '../images/sofas/k/mini/k1-4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k2-1.webp',
                thumb: '../images/sofas/k/mini/k2-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k2-2.webp',
                thumb: '../images/sofas/k/mini/k2-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k2-3.webp',
                thumb: '../images/sofas/k/mini/k2-3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k2-4.webp',
                thumb: '../images/sofas/k/mini/k2-4.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k3-1.webp',
                thumb: '../images/sofas/k/mini/k3-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k3-2.webp',
                thumb: '../images/sofas/k/mini/k3-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k4-1.webp',
                thumb: '../images/sofas/k/mini/k4-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k4-2.webp',
                thumb: '../images/sofas/k/mini/k4-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k4-3.webp',
                thumb: '../images/sofas/k/mini/k4-3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k5-1.webp',
                thumb: '../images/sofas/k/mini/k5-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k5-2.webp',
                thumb: '../images/sofas/k/mini/k5-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k6-1.webp',
                thumb: '../images/sofas/k/mini/k6-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k7-1.webp',
                thumb: '../images/sofas/k/mini/k7-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k8-1.webp',
                thumb: '../images/sofas/k/mini/k8-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k8-2.webp',
                thumb: '../images/sofas/k/mini/k8-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k8-3.webp',
                thumb: '../images/sofas/k/mini/k8-3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Заказ</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k9-1.webp',
                thumb: '../images/sofas/k/mini/k9-1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Изголовье</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k9-2.webp',
                thumb: '../images/sofas/k/mini/k9-2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Изголовье</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/k/k9-3.webp',
                thumb: '../images/sofas/k/mini/k9-3.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Изголовье</h4>
                    <p></p>
                </div>`,
            },
            
            
        ]
    });
    
    inlineGallery.openGallery();
});