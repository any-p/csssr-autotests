module.exports = {
    'Correct tab heading width': function (browser) {
        browser
            .url('http://blog.csssr.ru/qa-engineer/')
            .waitForElementVisible('body')
            .assert
            .cssProperty('.wrap .info-errors h1', 'width', '632px')
            .end();
    },
};
