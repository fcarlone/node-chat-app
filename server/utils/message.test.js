var expect = require('expect');

var {generateMessage} = require('./message');
var {generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generage correct message object', () => {
    var from = 'testUser';
    var text = 'Testing text attribute';
    var message = generateMessage(from, text);

    expect(message.from).toBe(from)
    expect(message.text).toBe(text)
    expect(typeof message.createdAt).toBe('number')
  })
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'testUserTwo';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19';
    var message = generateLocationMessage(from, latitude, longitude)

    // expect(message).toInclude({from, url})
    expect(typeof message.createdAt).toBe('number')
  });
});
