this.correctVkUrl = function (browser) {
    browser
        .url('http://blog.csssr.ru/qa-engineer/')
        .waitForElementVisible('body')
        .getAttribute('.wrap > footer > nav > div:nth-child(2) > a', 'href', function(result) {
            this.assert.equal(result.value, 'http://vk.com/csssr_dev')
        })
        .end();
};
