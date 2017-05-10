var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		// store response in variable
		// assert from match
		// assert text match
		// assert createdAt is a number
		var from = 'Jen';
		var text = 'Some message';
		var message = generateMessage(from, text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, text});
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		// pass in from, latitude, longitude
		// assert from match
		// assert createdAt is a number
		// assert url is correct
		var from = 'Deb';
		var latitude = 19;
		var longitude = 15;
		var url = 'https://www.google.com/maps?q=19,15';
		var message = generateLocationMessage(from, latitude, longitude);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, url})
	});
});