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
                src: '../images/sofas/zakaz/large/large_accord.webp',
                thumb: '../images/sofas/zakaz/thumbnails/mini_accord.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Аккордеон</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/zakaz/large/large_eva.webp',
                thumb: '../images/sofas/zakaz/thumbnails/mini_eva.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Ева</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/zakaz/large/large_eva2.webp',
                thumb: '../images/sofas/zakaz/thumbnails/mini_eva2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Ева</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/zakaz/large/large_kamila.webp',
                thumb: '../images/sofas/zakaz/thumbnails/mini_kamila.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Камила</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/zakaz/large/large_ludmila.webp',
                thumb: '../images/sofas/zakaz/thumbnails/mini_ludmila.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Людмила</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/zakaz/large/large_kreslo2.webp',
                thumb: '../images/sofas/zakaz/thumbnails/mini_kreslo2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Кресло к "Стелсу"</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/zakaz/large/large_malutk.webp',
                thumb: '../images/sofas/zakaz/thumbnails/mini_malutk.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Малютка</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/zakaz/large/large_module1.webp',
                thumb: '../images/sofas/zakaz/thumbnails/mini_module1.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Модуль</h4>
                    <p></p>
                </div>`,
            },
            {
                src: '../images/sofas/zakaz/large/large_stels2.webp',
                thumb: '../images/sofas/zakaz/thumbnails/mini_stels2.webp',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Стелс</h4>
                    <p></p>
                </div>`,
            }
            
        ]
    });
    
    inlineGallery.openGallery();
});