const express = require('express')
const router = express.Router()

const Pusher = require('pusher')

var pusher = new Pusher({
    appId: '811589',
    key: '9b8f37513a2bdeef3c3b',
    secret: '363696c865ce2593ca0e',
    cluster: 'ap2',
    encrypted: true
})

router.get('/', (req, res)=>{
    res.send("Hello")
})

router.post('/', (req, res)=>{
    pusher.trigger('os-poll', 'os-vote', {
        points: 1,
        os: req.body.os
    })

    return res.json({success: true, message: 'Thank you for voting'})
})

module.exports = router