module.exports = {
    base: '/test-vuepress/',
    dest:'./dist',
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
        ]
    },
}