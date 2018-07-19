var express = require('express');
var router = express.Router();
var ss = require('screenshot-tweet');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TwittShirt' });
});
//  router.get('/dash/submit',function(req,res,next){
//    res.render('dash');
//  });
router.post('/dash/submit',function (req,res,next) {
  var email = req.body.email;
  var pwd = req.body.pwd;
  console.log('test00');
  res.render('dash');
  });


router.post('/dash/checkout',function(req,res,next){
        var tslink = req.body.Tlink;
        var tstype = req.bosy.t-shirt-type;

        res.render('checkout');
});

router.get('/getTweet/username=:username&id=:id',function(req,res,next){
  var id = req.params.id;
  var username = req.params.username;
  tweetlink = "https://twitter.com/"+username+"/status/"+id;
  path =__dirname+'/Tweet.png';
  console.log(path);
  ss.default(tweetlink,__dirname+"/tweet.png").then(()=>{
    console.log("sucess")
    res.sendFile(path,function (err) {
      if(err){
        next(err);
      }   else{
  
      }
    });
  }).catch(err=>{
    console.error("error");
  });
  
});

module.exports = router;
