const url = require('url');
const sm = require('sitemap');
const urls = [];

function handlePageHook(page) {
    if (this.output.name != 'website') {
        return page;
    }

    const lang = this.isLanguageBook() ? this.language : '';
    if (lang) {
        lang = lang + '/';
    }

    const pathSuffix = this.config.get('pluginsConfig.sitemap.pathSuffix', '');
    const url = this.output.toURL(pathSuffix + lang + page.path);

    urls.push({ url });
    return page;
}

function handleFinishHook() {
    const sitemap = sm.createSitemap({
        cacheTime: 600000,
        hostname: new url.URL(this.config.get('pluginsConfig.sitemap.url'), '/'),
        urls: urls,
    });

    const xml = sitemap.toString();
    return this.output.writeFile('sitemap.xml', xml);
}

module.exports = {
    hooks: {
        page: handlePageHook, // Called before running the templating engine on the page.
        finish: handleFinishHook, // Called after everything is completed.
    },
};
