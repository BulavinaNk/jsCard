const { Router } = require('express');
const Card = require('../models/card');
const router = new Router();
const formatter = require('../formatter/formatter');


router.get('/cards', (req, res) => {
    Card.find().then((cards) => {
        res.send(formatter.getCards(cards));
    });
});

router.get('/cards/:id', (req, res) => {
    //throw new Error("some text");
    //res.send('Get user info route');
    Card.findById(req.params.id).then((card) => {
        res.send(formatter.getCard(card));
    });
});

router.post('/cards', (req, res) => {
    const newCard = new Card({title : req.body.title, desc : req.body.desc});
    newCard.save().then((card) => {
       res.send(card);
    });
});
router.delete('/cards/:id', (req, res) => {
    Card.findById(req.params.id).then((card) => {
        if(card != null){
            card.remove().then(() => {
                res.status(204);
                res.send();
            })
        }
        else{
            res.send("not found");
        }
    }).catch((err) => {
        console.log(err);
    });
});
router.put('/cards/:id', (req, res) => {
    Card.findById(req.params.id).then((card) => {
        if(card != null){
            card.update({
                title: req.body.title,
                desc: req.body.desc
            }).then(() => {
                Card.findById(req.params.id).then((card) => {
                    res.send(formatter.getCard(card));
                });
            });
        }
    });
});


module.exports = router;