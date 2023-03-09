//const User = require('./User');
const Symptom = require('./symptom')
const Tag = require('./tag')
const Doctor = require('./doctor')
const Tracker = require('./tracker')

//symptoms belong to many tags 
//tags belong to many symptoms 

//symptoms belong to many doctors
//doctors belong to many symptoms 

//tags belong to many doctors 
//doctors belong to many tags 

//tracker (records) have one symptom
//symptoms have many records

//tracker records have many tags 
//tags have many tracker records

module.exports = { Symptom, Tag, Doctor, Tracker };

