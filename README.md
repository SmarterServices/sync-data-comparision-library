# Sync Data Comparison Library

## Introduction

This library provides a function to compare between given source and target based on the given primary keys.

## Installation

### Requirements

* [node.js v6.2.2](https://nodejs.org/en/blog/release/v6.2.2/)
* [npm](https://www.npmjs.com/)

### Install Process

* Clone project into your working directory.
* Run `npm install` to install necessary dependencies.


### Configuration


## Running Application/Code

* Import the module by including it in `package.json` and use the `compare` method of imported module.

```js
const { compare } = require('sync-data-comparison-library');
const primaryKeys = [ 'id' ];
const source = [
  {
    'id': 1,
    'value': 10
  },
  {
    'id': 2,
    'value': 20
  }
];
const target =  [
  {
    'id': 1,
    'value': 15
  },
  {
    'id': 3,
    'value': 30
  }
];

compare(primaryKeys, source, target);
```
Running the above code should produce the following output -
```js
[
  {
    'primaryKey':{
      'id':1
    },
    'status':'updated',
    'changes':[
      {
        'kind':'E',
        'path':[
          'value'
        ],
        'lhs':10,
        'rhs':15
      }
    ]
  },
  {
    'primaryKey':{
      'id':2
    },
    'status':'new',
    'data':{
      'id':2,
      'value':20
    }
  },
  {
    'primaryKey':{
      'id':3
    },
    'status':'removed'
  }
]
```
### Running Locally

n/a
### Running in Production
n/a



## External Dependencies

The library uses `deep-diff` npm module to output differences between two objects.

## Run Unit test

* To run the unit tests,  from your project directory open up a terminal and run:
```
npm test
```

## Deployment

* n/a

## Cronjobs

* n/a

## Credits

* [Md. Badiul Haque Shawon](https://github.com/EnosisShawon)
