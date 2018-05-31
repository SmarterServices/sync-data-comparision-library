'use strict';

const compare = require('./../../index').compare;
const expect = require('chai').expect;
const testData = require('./../data/data.json');

describe('Test comparison client', function testComparison() {
  Object.keys(testData).forEach(key => {
    const {title, primaryKeys, source, target, result} = testData[key];
    // it(title, () => {
    //   const diff = compare(primaryKeys, source, target);
    //   expect(diff).to.have.deep.members(result);
    // });

  });
  it("other_test", () => {
      const diff = compare([ 'courseId', 'userId', 'deploymentSid' ], [{ errorMessage: 'Connection terminated',
     errorType: 'SequelizeConnectionError',
     stackTrace:
      [ 'connection.connect.err (/var/task/node_modules/sequelize/lib/dialects/postgres/connection-manager.js:111:20)',
        'Client.<anonymous> (/var/task/node_modules/pg/lib/client.js:211:7)',
        'Connection.g (events.js:292:16)',
        'emitNone (events.js:86:13)',
        'Connection.emit (events.js:185:7)',
        'TLSSocket.<anonymous> (/var/task/node_modules/pg/lib/connection.js:138:10)',
        'emitNone (events.js:91:20)',
        'TLSSocket.emit (events.js:185:7)',
        'endReadableNT (_stream_readable.js:974:12)',
        '_combinedTickCallback (internal/process/next_tick.js:80:11)',
        'process._tickDomainCallback (internal/process/next_tick.js:128:9)' ] }], [ { userId: '_385602_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Luke',
       lastName: 'Stump',
       emailAddress: 'lgstump@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_369633_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Annalisa',
       lastName: 'Sperka',
       emailAddress: 'asperka@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_325571_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Joel',
       lastName: 'Whitesel_PreviewUser',
       emailAddress: 'jawhitesel@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_24939_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Dan',
       lastName: 'Jones',
       emailAddress: 'dejones2@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'instructor',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_334024_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Justin',
       lastName: 'Rusk',
       emailAddress: 'jdrusk@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_355458_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'lauren',
       lastName: 'Pitcher',
       emailAddress: 'lbpitcher@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_387128_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Fan',
       lastName: 'Yang',
       emailAddress: 'fyang@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_128592_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Lexiang',
       lastName: 'Yang',
       emailAddress: 'lyang@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_134161_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Iris',
       lastName: 'Brkovic',
       emailAddress: 'ibrkovic@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_328089_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Bailey',
       lastName: 'Hayne',
       emailAddress: 'brhayne@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_358374_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Natalie',
       lastName: 'Moore',
       emailAddress: 'nmoore2@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_325266_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Brittany',
       lastName: 'Smith',
       emailAddress: 'basmith11@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_9890_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Joel',
       lastName: 'Whitesel',
       emailAddress: 'jawhitesel@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'instructor',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_357968_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Joshua',
       lastName: 'Brown',
       emailAddress: 'jdbrown6@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_356806_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Hannah',
       lastName: 'Sullivan',
       emailAddress: 'hmsullivan@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_349025_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Maddie',
       lastName: 'MacDonald',
       emailAddress: 'mrmacdonald@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_40342_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Taylor',
       lastName: 'Harman',
       emailAddress: 'tcharman@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_350943_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Elisia',
       lastName: 'Davis',
       emailAddress: 'erdavis5@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_338883_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Catina',
       lastName: 'Mccord',
       emailAddress: 'cmmccord@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_328542_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Samantha',
       lastName: 'Bye',
       emailAddress: 'spbye@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_353067_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Kelsey',
       lastName: 'Hartman',
       emailAddress: 'krhartman2@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_382555_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Brianna',
       lastName: 'Collins',
       emailAddress: 'bncollins2@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_358552_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Alaina',
       lastName: 'Keegan',
       emailAddress: 'amkeegan@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_327557_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Logan',
       lastName: 'Neuman',
       emailAddress: 'leneuman@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_384382_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Stephanie',
       lastName: 'Zobel',
       emailAddress: 'sazobel@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_369696_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Missy',
       lastName: 'Skinner',
       emailAddress: 'msskinner@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_369663_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Shayla',
       lastName: 'Sharmin',
       emailAddress: 'ssharmin@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_334441_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Mallory',
       lastName: 'Neidlinger',
       emailAddress: 'maneidlinger@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_356082_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Jamie',
       lastName: 'Mealey',
       emailAddress: 'jmealey@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_32201_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Amanda',
       lastName: 'Poynter',
       emailAddress: 'ampoynter@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_121167_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Tabatha',
       lastName: 'Landrum',
       emailAddress: 'tdcooper@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_358530_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Allison',
       lastName: 'Albright',
       emailAddress: 'analbright@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_337965_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Nathan',
       lastName: 'Scott',
       emailAddress: 'nscott@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_350462_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Maureen',
       lastName: 'Flanigan',
       emailAddress: 'mmflanigan@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_339842_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Chris',
       lastName: 'Davis',
       emailAddress: 'cadavis10@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'instructor',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_401722_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Kathy',
       lastName: 'Simon',
       emailAddress: 'kasimon@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'instructor',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_31295_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Jyssika',
       lastName: 'Spray',
       emailAddress: 'jlspray@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_331288_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Drew',
       lastName: 'Klawiter',
       emailAddress: 'arklawiter@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_39608_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Jumana Khasawneh',
       lastName: 'Khasawneh',
       emailAddress: 'jkhasawneh@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_127324_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Samuel',
       lastName: 'Clayton',
       emailAddress: 'siclayton@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_377713_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Nate',
       lastName: 'Snyder',
       emailAddress: 'nfsnyder@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_373486_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Destini',
       lastName: 'Hutchison',
       emailAddress: 'ddhutchison@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_374660_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Mallery',
       lastName: 'Sharp',
       emailAddress: 'mjsharp3@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_351972_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Justice',
       lastName: 'Dailey',
       emailAddress: 'jadailey@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_399208_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Jason',
       lastName: 'Cooper',
       emailAddress: 'jscooper3@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'instructor',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_358502_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Lexi',
       lastName: 'Lumpkin',
       emailAddress: 'allumpkin@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_355728_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Collin',
       lastName: 'Stuhlmacher',
       emailAddress: 'cstuhlmacher@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_324404_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Morgan',
       lastName: 'Johnson',
       emailAddress: 'mjohnson9@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_325524_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Kelli',
       lastName: 'Ryan',
       emailAddress: 'krryan@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_377016_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Sam',
       lastName: 'Tolbert',
       emailAddress: 'sltolbert@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_351486_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Victoria',
       lastName: 'Peters',
       emailAddress: 'vjpeters@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_362562_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Kyla',
       lastName: 'Chandler',
       emailAddress: 'kmchandler2@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_383226_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Shawn',
       lastName: 'Day',
       emailAddress: 'saday@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_372843_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Annabeth',
       lastName: 'Blount',
       emailAddress: 'aablount@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_335418_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Kylan',
       lastName: 'Freeland',
       emailAddress: 'kbfreeland@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_361233_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Jordan',
       lastName: 'Edouard',
       emailAddress: 'jaedouard@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_327522_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Bryanna',
       lastName: 'Gall',
       emailAddress: 'bagall@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_351589_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Laura',
       lastName: 'Andrews',
       emailAddress: 'landrews@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_357074_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Antonia',
       lastName: 'Shoemaker',
       emailAddress: 'aeshoemaker@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_369611_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Jeromy',
       lastName: 'Shoup',
       emailAddress: 'jshoup2@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_365369_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Adam',
       lastName: 'Lueke',
       emailAddress: 'aklueke@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'instructor',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_400096_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Amanda',
       lastName: 'Fuller',
       emailAddress: 'adfuller@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_354551_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Emma',
       lastName: 'Bragg',
       emailAddress: 'ebragg@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_332119_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Jake',
       lastName: 'Russell',
       emailAddress: 'jdrussell@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_383550_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Sierra',
       lastName: 'Simmons',
       emailAddress: 'ssimmons@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_363335_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Maggie',
       lastName: 'Peterson',
       emailAddress: 'mapeterson2@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_383703_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Mikaela',
       lastName: 'Brown',
       emailAddress: 'mkbrown2@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_126016_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Megan',
       lastName: 'O\'Malley',
       emailAddress: 'mlomalley@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_352294_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Natalie',
       lastName: 'Wright',
       emailAddress: 'nhwright@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_356159_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Hillary',
       lastName: 'Locker',
       emailAddress: 'hlocker@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_323190_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Emma',
       lastName: 'Keathley',
       emailAddress: 'ekeathley@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_20567_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Ramon',
       lastName: 'Avila',
       emailAddress: 'ravila@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'instructor',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_379468_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Kelsey',
       lastName: 'Friis',
       emailAddress: 'kgfriis@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_90744_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Travis',
       lastName: 'Osterholt',
       emailAddress: 'tjosterholt@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_353194_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Jordan',
       lastName: 'Molnar',
       emailAddress: 'jamolnar2@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_126178_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Ashley',
       lastName: 'Stowe',
       emailAddress: 'astowe@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_325594_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Josh',
       lastName: 'Sipes',
       emailAddress: 'jjsipes@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_366040_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Lydia',
       lastName: 'Ballenger_PreviewUser',
       emailAddress: 'ljballenger@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_71331_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Lydia',
       lastName: 'Ballenger',
       emailAddress: 'ljballenger@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'instructor',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_82923_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Colin',
       lastName: 'Smith',
       emailAddress: 'csmith9@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_333387_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Ryan',
       lastName: 'Wexelberg',
       emailAddress: 'rswexelberg@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_400213_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Adam',
       lastName: 'Verhoestra',
       emailAddress: 'averhoestra@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_74498_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Logan',
       lastName: 'Pegg',
       emailAddress: 'ltpegg@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_401800_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Hank',
       lastName: 'Hughes',
       emailAddress: 'hahughes@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_354107_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Andrew',
       lastName: 'Harp',
       emailAddress: 'adharp@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_335984_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Liv',
       lastName: 'Valli',
       emailAddress: 'ovalli@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_352526_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Tyler',
       lastName: 'Tribble',
       emailAddress: 'tatribble@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' },
     { userId: '_51007_1',
       courseId: ':_215775_1::smarte1:1526501157',
       firstName: 'Jasmine',
       lastName: 'Shotwell',
       emailAddress: 'jsshotwell@bsu.edu',
       enrollmentState: 'pending deletion',
       role: 'learner',
       deploymentSid: 'AD5fbd58a380364d7286727899283b5604' } ]);
console.log(diff)
    });
});
