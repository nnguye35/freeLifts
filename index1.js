var express = require("express");
var multer = require('multer');
var app = express();

//app.use(multer({dest: './uploads/'}))

var storage =   multer.diskStorage({
	destination: function (req, file, callback) {
		callback(null, './uploads');
	},
	filename: function (req, file, callback) {
		callback(null,Date.now()+file.originalname);
	}
});

var upload = multer({ storage : storage}).single('photo');

app.get('/', function(req, res){
	res.sendFile(_dirname + "/index.html");
});

app.post('/upload',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });    
});

/*
app.post('/', function(req, res){
	console.log(req.body) //form fields
	console.log(req.files) //form files
	res.status(204).end()
});
*/

app.listen(3000,function(){
    console.log("listening on port 3000");
});