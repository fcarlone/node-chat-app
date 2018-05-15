const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var str = 123;
    var realString = isRealString(str);
    expect(typeof realstring).not.toBe('string')
  });

  it('should reject string with only spaces', () => {
    var str = '  ';
    var realString = isRealString(str);
    expect(realString).toBeFalsy()
  });

  it('should allow strings with non-space characters', () => {
    var str = '   testUser    ';
    var realString = isRealString(str);
    expect(realString).toBeTruthy()
  });
});
