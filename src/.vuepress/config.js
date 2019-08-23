module.exports = {
    base: '/test-vuepress/',
    head: [
      ['link', { rel: 'icon', href: `/favicon.ico` }],
      //增加manifest.json
      ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    dest:'./docs',
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