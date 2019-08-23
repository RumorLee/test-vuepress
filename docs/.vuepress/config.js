module.exports = {
    base: '/vuepress/',
    plugins: {
        '@vuepress/back-to-top': true,
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: true
        },
        '@vuepress/search': {}
    },
    themeConfig: {
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: 'External',
                link: 'https://google.com'
            },
            {
                text: 'test',
                link: '/'
            },
        ],
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
        ]
    },
}