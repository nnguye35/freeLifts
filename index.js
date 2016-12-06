var express = require('express');
var firebase = require('firebase');
var app = express();
var port = process.env.PORT || 3000;



firebase.initializeApp({
    serviceAccount: "privkey.json",
    databaseURL: "https://freeliftsproject-47742.firebaseio.com",
});


app.use(express.static('public'));

app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});