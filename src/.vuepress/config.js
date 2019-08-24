const getConfig = require("vuepress-bar");


const sidebarNowVersion = {}
const version = 'FXv071'
const fs = require('fs');
const list = fs.readdirSync(`src/${version}/`);
const itemList = []
list.forEach(item => {
    if (item.toLowerCase() == 'readme.md')
        item = null;
    else if (item.endsWith('.md'))
        item = item.replace('.md', '.html');
    else
        item = item + '/';

    if (item) {
        var tolink = `/${version}/${item}`;
        itemList.push({
            text: item.replace('.html', ''),
            link: tolink
        })

        sidebarNowVersion[tolink] = getConfig(`src${tolink}`, {
            maxLevel: 10
        }).sidebar;
    }
})
const navNowVersion = {
    text: version,
    items: itemList
};


module.exports = {
    base: '/test-vuepress/',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
    ],
    dest: './docs',
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
            link: '/',
        }, navNowVersion, ],
        sidebar: sidebarNowVersion
    }
}