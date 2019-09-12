module.exports = {
    'correct screenshot url': function (browser) {
        browser
            .url('http://blog.csssr.ru/qa-engineer/')
            .waitForElementVisible('body')
            .getAttribute('.wrap aside li:last-child a', 'href', function(result) {
                this.assert.equal(result.value, 'http://monosnap.com/')
            })
            .end();
    }
}
