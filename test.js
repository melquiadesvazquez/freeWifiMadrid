'use strict';

const assert = require('chai').assert;
const freeWifiMadrid = require('./');

describe('freeWifiMadrid', () => {
  it('response is not empty', async () => {
    const response = await freeWifiMadrid();
    assert.isNotEmpty(response);
  });
});