module.exports = {
    'Correct page width': function (browser) {
        browser
            .url('http://blog.csssr.ru/qa-engineer/')
            .waitForElementVisible('body')
            .assert
            .cssProperty('.wrap', 'width', '1000px')
            .end();
    },
};
