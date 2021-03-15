# Sitemap Generator for Honkit

Generate a sitemap for the gitbook website. The output sitemap file is `sitemap.xml`.

## Install

```sh
npm install honkit-plugin-sitemap --save-dev
```

## Usage

Add it to your `book.json` with a basic configuration:

```js
{
    "plugins": ["sitemap"],
    "pluginsConfig": {
        "sitemap": {
            "url": "https://example.com"
        }
    }
}
```

If you use a prefix for your domain use...

```json
"pluginsConfig": {
    "sitemap": {
        "url": "https://example.com",
        "pathSuffix": "/yourSuffix/"
    }
}
```
