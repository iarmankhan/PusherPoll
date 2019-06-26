const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Vote = require('../models/Vote')

const Pusher = require('pusher')

var pusher = new Pusher({
    appId: '811589',
    key: '9b8f37513a2bdeef3c3b',
    secret: '363696c865ce2593ca0e',
    cluster: 'ap2',
    encrypted: true
})

router.get('/', (req, res)=>{
    Vote.find().then(votes => res.json({success: true, votes: votes}))
})

router.post('/', (req, res)=>{

    const newVote = {
        os: req.body.os,
        points: 1
    }

    new Vote(newVote).save().then(vote => {
        pusher.trigger('os-poll', 'os-vote', {
            points: parseInt(vote.points),
            os: vote.os
        })
    
        return res.json({success: true, message: 'Thank you for voting'})
    })
})

module.exports = router