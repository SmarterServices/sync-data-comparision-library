'use strict';

const utils = require('./utils');

function compare(primaryKeys, source, target) {
  let sourceMap = mapByPrimaryKeys(primaryKeys, source);
  let targetMap = mapByPrimaryKeys(primaryKeys, target);

  let keySet = new Set([...Object.keys(sourceMap), ...Object.keys(targetMap)])
  return [...keySet].map(getOutputSetter(sourceMap, targetMap));
}

function mapByPrimaryKeys(primaryKeys, objList) {
  return objList.reduce((acc, obj) => {
    let key = JSON.stringify(
      primaryKeys.map(primaryKey => ({[primaryKey]: obj[primaryKey]}))
    );

    return Object.assign(acc, { [key]: obj })
  }, {});
}

function getOutputSetter(source, target) {
  return function setOutput(key) {
    let outputObj = {
      primaryKey: JSON
        .parse(key)
        .reduce((acc, entry) => Object.assign(acc, entry), {})
    };

    if(source[key] && target[key]) {
      outputObj.status = 'updated';
      outputObj.changes = utils.diff(source[key], target[key]) || [];
    } else if(source[key] && !target[key]) {
      outputObj.status = 'new';
      outputObj.data = source[key];
    } else {
      outputObj.status = 'removed';
    }

    return outputObj;
  };
}

module.exports = {
  compare
};
