'use strict';

const compare = require('./../../index').compare;
const expect = require('chai').expect;
const testData = require('./../data/data.json');

describe('Test comparison client', function testComparison() {
  Object.keys(testData).forEach(key => {
    const {title, primaryKeys, source, target, result} = testData[key];
    it(title, () => {
      const diff = compare(primaryKeys, source, target);
      expect(diff).to.have.deep.members(result);
    });
  });
});
