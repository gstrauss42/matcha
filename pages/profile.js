var express = require('express');
var router = express.Router();
var Models = require("../models/models");

router.get('/', function(req, res){
   Models.notifications.find({"email": req.session.name}, function(err, notif){
      Models.user.find({"likes" : req.session.name}, function(err, count){
         Models.user.findOne({"email":req.session.name}, function(err, doc){
            res.render("profile", {name : doc.name,
                                 surname:doc.surname,
                                 email:doc.email,
                                 username: doc.username,
                                 one :doc.main_image,
                                 two :doc.image_one,
                                 three :doc.image_two,
                                 four :doc.image_three,
                                 five :doc.image_four,
                                 views : doc.views,
                                 viewed : doc.viewed,
                                 likes: doc.likes,         // i need an ARRAY OF THE PEOPLE I have liked
                                 liked: count,             // i need an ARRAY OF THE PEOPLE who've liked me
                                 rating: doc.rating,
                                 gender: doc.gender,
                                 prefferances: doc.prefferances,
                                 age: doc.age,
                                 count: notif.length,
                                 tags: doc.tags,
                                 location: doc.location,
                                 bio: doc.bio});
                              });
      });
   });

});

//export this router to use in our index.js
module.exports = router;