var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'pokemons'
});

connection.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Start server on port 8081
// It is important to start Node on a different port
var port = 8081;

var router = express.Router();

router.use(function(req, res, next) {
    console.log('Something is happening');
    next();
});

// GET request to /api returns { message: 'Hello World' }
// In my C9 account the request must be sent to https://node-angular-lgobinath.c9users.io:8081/api

router.route('/')
    .get(function(req, res) {
        res.json({ message: 'Hello World' });
    });



router.route('/create_user')
    .post(function(req, res) {
        var q = "INSERT INTO user VALUES ('"+req.body.username+"','" +
             req.body.password + "','" +
            req.body.email + "','" + req.body.name + "')";
        console.log(q);
        connection.query(q , function(err, rows, fields) {
            if (!err)
                res.json({user: rows});
            else
                res.json({error: 'Error while performing Query.'});
        });

    });

router.route('/sign_in')
    .post(function(req, res) {
        var q = "SELECT * FROM user WHERE (username = '"+req.body.username+"') AND (password= '"+ req.body.password + "')";
        console.log(q);
        connection.query(q , function(err, rows, fields) {
            if (!err){
                res.json({user: rows});
            }

            else
                res.json({error: 'Error while performing Query.'});
        });

    });

router.route('/create_team')
    .post(function(req, res) {
        var q = "INSERT INTO team (userID, teamName) VALUES('"+req.body.username+"' ,'"+ req.body.teamName +"')";
        console.log(q);
        connection.query(q , function(err, rows, fields) {
            if (!err){
                res.json({team: rows});
            }
            else
                res.json({error: 'Error while performing Query.'});
        });

    });

router.route('/update_team')
    .put(function(req, res) {
        var q = "UPDATE team SET teamName = '"+ req.body.teamName +"' WHERE teamID="+req.body.teamID;
        console.log(q);
        connection.query(q , function(err, rows, fields) {
            if (!err){
                res.json({team: rows});
            }
            else
                res.json({error: 'Error while performing Query.'});
        });

    });

router.route('/show_teams')
    .post(function(req, res) {
        var q = "SELECT myPokemon.* FROM myPokemon JOIN team ON myPokemon.teamID=team.teamID WHERE team.userID = '" +req.body.username + "'";
        console.log(q);
        connection.query(q , function(err, rows, fields) {
            if (!err){
                res.json({teams: rows});
            }
            else
                res.json({error: 'Error while performing Query.'});
        });

    });

router.route('/pokemon')
    .get(function(req, res) {
        var q = "SELECT * FROM pokemon";
        console.log(q);
        connection.query(q , function(err, rows, fields) {
            if (!err){
                res.json({pokemon: rows});
            }
            else
                res.json({error: 'Error while performing Query.'});
        });

    });


router.route('/pokemon_name')
    .post(function(req, res) {
        var q = "SELECT * FROM pokemon WHERE pokeName = '" + req.body.pokeName + "'";
        console.log(q);
        connection.query(q , function(err, rows, fields) {
            if (!err){
                res.json({pokemon: rows});
            }
            else
                res.json({error: 'Error while performing Query.'});
        });

    });


router.route('/pokemon_type')
    .post(function(req, res) {
        var q = "SELECT * FROM pokemon WHERE typeName = '" + req.body.typeName + "'";
        console.log(q);
        connection.query(q , function(err, rows, fields) {
            if (!err){
                res.json({pokemon: rows});
            }
            else
                res.json({error: 'Error while performing Query.'});
        });

    });

router.route('/mypokemon_create')
    .post(function(req, res) {
        var q = "INSERT INTO myPokemon (pokeName, teamID) VALUES('"+req.body.pokeName+"', '"+req.body.teamID + "')";
        console.log(q);
        connection.query(q , function(err, rows, fields) {
            if (!err){
                res.json({pokemon: rows});
            }
            else
                res.json({error: 'Error while performing Query.'});
        });

    });


app.use('/api', router);

app.listen(port);
console.log('Server is running on port ' + port)




/*
*****USE DOCUMENTATION*****

Register User – POST -  api/create_user
Args = [username, password, email, name]
If duplicate PK returns error.

Sign In – POST -  api/sign_in
Args = [username, password]
If true, returns array of 1, if false returns array of 0.

Create Team – POST – api/create_team
Args=[username, teamName]
Errors when username does not exit

Show Teams – POST – api/show_teams
Args=[username]
Haven’t been able to make it error. If the array is full you have teams and pokemon to show. Otherwise its blank, even for an imaginary user.

Change Team Name - PUT - api/update_team
Args=[teamID, teamName]
Returns sql update info

Get Pokemon - GET - api/pokemon
Args=[]
Returns full pokemon list

Get Pokemon by Name - POST - api/pokemon_name
Args=[pokeName]
Returns empty array if pokeName doesn't exist.

Get Pokemon by Type - POST - api/pokemon_type
Args=[typeName]
Returns empty array if type doesnt exist

Create MyPokemon - POST - api/mypokemon_create
Args=[pokeName, teamID]
Returns sql updated information



 */














