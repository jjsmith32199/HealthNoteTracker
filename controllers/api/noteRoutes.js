const router = require('express').Router();
const { Note } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const noteData = await Note.findAll();
        res.status(200).json(noteData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req, res) => {
    console.log(req.session.user_id);
    try {
        const noteData = await Note.create({
            symptom: req.body.symptom,
            details: req.body.details,
            user_id: req.session.user_id,
        })
        res.status(200).json(noteData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router; 