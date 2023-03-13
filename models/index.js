//const User = require('./User');
const Symptom = require('./symptom')
const Tag = require('./tag')
const Doctor = require('./doctor')
const Tracker = require('./tracker')

//symptoms belong to many tags 
Symptom.belongsToMany(Tag,{
    through: 'symptomTag',
    foreignKey: 'tag_id',
    onDelete: 'SET NULL',
})
//tags belong to many symptoms 
Tag.belongsToMany(Symptom,{
    through: 'symptomTag',
    foreignKey: 'symptom_id',
    onDelete: 'SET NULL',
})


//symptoms belong to many doctors
Symptom.belongsToMany(Doctor,{
    through: 'symptomDoctor',
    foreignKey: 'doctor_id',
    onDelete: 'SET NULL',
})
//doctors belong to many symptoms 
Doctor.belongsToMany(Symptom,{
    through: 'symptomDoctor',
    foreignKey: 'symptom_id',
    onDelete: 'SET NULL',
})


//tags belong to many doctors
Tag.belongsToMany(Doctor,{
    through: 'doctorTag',
    foreignKey: 'doctor_id',
    onDelete: 'SET NULL',
})
//doctors belong to many tags 
Doctor.belongsToMany(Tag,{
    through: 'doctorTag',
    foreignKey: 'tag_id',
    onDelete: 'SET NULL',
})


//tracker (records) have one symptom
/* Tracker.hasOne(Symptom,{
    foreignKey: 'symptom_id',
    onDelete: 'SET NULL',
}) */
//symptoms have many records
/* Symptom.belongTo(Tracker,{
    foreignKey: 'symptom_id',

})
 */

//tracker records have many tags 
/* Tracker.belongsToMany(Tag, {
    through: 'tagTracker',
    foreignKey:'tag_id',
    onDelete: 'SET NULL',
}) */
//tags have many tracker records
/* Tag.belongsToMany(Tracker,{
    through: 'tagTracker',
    foreignKey: 'tracker_id',
    onDelete: 'SET NULL',
})
 */
module.exports = { Symptom, Tag, Doctor, Tracker };

