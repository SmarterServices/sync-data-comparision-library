'use strict';

const utils = require('./utils');

/**
 * Compare the target with source based on the primary keys and return the diff
 * @param {Array<string>} primaryKeys
 * @param {Array<Object>} source
 * @param {Array<Object>} target
 * @returns {Array<Object>}
 */
function compare(primaryKeys, source, target) {
  let sourceMap = mapByPrimaryKeys(primaryKeys, source);
  let targetMap = mapByPrimaryKeys(primaryKeys, target);

  let keySet = new Set([...Object.keys(sourceMap), ...Object.keys(targetMap)]);
  return [...keySet].map(getOutputSetter(sourceMap, targetMap));
}

/**
 * Map a list of objects by primary keys and return the map
 * @param {Array<string>} primaryKeys
 * @param {Array<Object>} objList
 * @returns {Object}
 */
function mapByPrimaryKeys(primaryKeys, objList) {
  return objList.reduce((acc, obj) => {
    let key = JSON.stringify(
      primaryKeys.map(primaryKey => ({[primaryKey]: obj[primaryKey]}))
    );

    return Object.assign(acc, { [key]: obj });
  }, {});
}

/**
 * Get output setter function for given sourceMap and targetMap objects
 * @param {Object} sourceMap
 * @param {Object} targetMap
 * @returns {Function}
 */
function getOutputSetter(sourceMap, targetMap) {
  return function setOutput(key) {
    let outputObj = {
      primaryKey: JSON
        .parse(key)
        .reduce((acc, entry) => Object.assign(acc, entry), {})
    };

    if(sourceMap[key] && targetMap[key]) {
      outputObj.status = 'updated';
      outputObj.changes = utils.diff(sourceMap[key], targetMap[key]) || [];
    } else if(sourceMap[key] && !targetMap[key]) {
      outputObj.status = 'new';
      outputObj.data = sourceMap[key];
    } else {
      outputObj.status = 'removed';
    }

    return outputObj;
  };
}

module.exports = {
  compare
};
