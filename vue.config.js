module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-component-test/'
        : '/'
}