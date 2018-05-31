'use strict';

const utils = require('./utils');
function checkIfValid(primaryKeys,source,target) {
  if(!Array.isArray(source) || !Array.isArray(target)) {
   return false  
  }
  
  var sourceTest = source.some(x => {
    return primaryKeys.every(y => x[y])
  }) 
  var targetTest = target.some(x => {
    return primaryKeys.every(y => x[y])
  }) 
  if(!sourceTest || !targetTest) {
    return false
  }
  return true
}
/**
 * Compare the target with source based on the primary keys and return the diff
 * @param {Array<string>} primaryKeys
 * @param {Array<Object>} source
 * @param {Array<Object>} target
 * @returns {Array<Object>}
 */
function compare(primaryKeys, source, target) {
  if(!checkIfValid(primaryKeys,source,target)) {
    throw new Error("Data passed in is invalid for comparison")
  }
  const sourceMap = mapByPrimaryKeys(primaryKeys, source);

  const targetMap = mapByPrimaryKeys(primaryKeys, target);

  const sourceMapKeys = Object.keys(sourceMap);
  const targetMapKeys = Object.keys(targetMap);

  const keySet = new Set([...sourceMapKeys, ...targetMapKeys]);
  const keyArray = [...keySet];

  return keyArray.map(getOutputSetter(sourceMap, targetMap));
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
        // Merge an array of objects into a single object
        // Example [{a: 1}, {b: 2}] -> {a:1, b:2}
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
