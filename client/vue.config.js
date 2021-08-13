module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: "@import '/src/assets/styles/style.scss';",
            },
        },
    },

    // publicPath: '/techr-messenger-vue/',
    // git subtree push --prefix dist origin gh-pages

};
