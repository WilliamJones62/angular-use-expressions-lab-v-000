var path = require('path');

describe('Expressions Test', function() {
	browser.get('http://localhost:8080');

	it('should say "You have no emails" if emails is empty', function() {
		expect(browser.executeScript("return arguments[0].innerHTML;", element(by.css('h6')))).toEqual('You have no emails');
	});

	it('should say the number of emails if emails is not empty', function() {
		element(by.css('button')).click();

		expect(browser.executeScript("return arguments[0].innerHTML;", element(by.css('h6')))).toEqual('You have 1 emails');

		element(by.css('button')).click();

		expect(browser.executeScript("return arguments[0].innerHTML;", element(by.css('h6')))).toEqual('You have 2 emails');
	});
});
