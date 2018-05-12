var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generage correct message object', () => {
    var from = 'testUser';
    var text = 'Testing text attribute';
    var message = generateMessage(from, text);

    expect(message.from).toBe(from)
    expect(message.text).toBe(text)
    expect(typeof message.createdAt).toBe('number')
  });

});
