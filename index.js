import express from 'express';

const app = express();

app.use(express.json());
app.use(express.static('public'))

app.get("/", function(req, res){
    res.send("Hello from my API!");
})

const greetings = {
    'english' : 'Hello',
    'zulu'    : 'Sawubona',
    'xitsonga'   : 'Avuxeni'
}

app.get("/api/greet", function(req, res) {
    const username = req.query.username;
    const language = req.query.language;

    if(!greetings[language] || !username){
        return res.json({
            error : 'Invalid username or language supplied'
        })
    }
    const greeting = greetings[language];
    res.json({
        message : `${greeting}, ${username}!`
    })
});

app.post("/api/greet", function(req, res){

    // add and entry to our greetings map
    const language = req.body.language;
    greetings[language] = req.body.greeting;

    res.json({
        status : 'success',
        message : `Added a greeting for ${language}`
    });
})

app.get("/api/cars", (req, res) => {
    const cars = [ {
        "color": "white",
        "make": "Volkswagen",
        "model": "Polo",
        "reg_number": "CL 61045"
      },  {
        "color": "red",
        "make": "Toyota",
        "model": "Tazz",
        "reg_number": "CY 16875"
      },  {
        "color": "orange",
        "make": "Nissan",
        "model": "Juke",
        "reg_number": "CK 32655"
      },  {
        "color": "orange",
        "make": "Ford",
        "model": "EcoSport",
        "reg_number": "CL 11318"
      },  {
        "color": "white",
        "make": "Nissan",
        "model": "Micra",
        "reg_number": "CJ 16103"
      },  {
        "color": "orange",
        "make": "Nissan",
        "model": "Juke",
        "reg_number": "CL 42789"
      },  {
        "color": "blue",
        "make": "Volkswagen",
        "model": "Jetta",
        "reg_number": "CA 46977"
      },  {
        "color": "white",
        "make": "Volkswagen",
        "model": "Polo",
        "reg_number": "CY 25661"
      },  {
        "color": "white",
        "make": "Nissan",
        "model": "Micra",
        "reg_number": "CY 35475"
      },  {
        "color": "white",
        "make": "Toyota",
        "model": "Corolla",
        "reg_number": "CY 54886"
      },  {
        "color": "white",
        "make": "Toyota",
        "model": "Hilux",
        "reg_number": "CJ 16455"
      },  {
        "color": "orange",
        "make": "Toyota",
        "model": "Corolla",
        "reg_number": "CK 57166"
      },  {
        "color": "orange",
        "make": "Ford",
        "model": "Fiesta",
        "reg_number": "CL 77790"
      },  {
        "color": "blue",
        "make": "Nissan",
        "model": "Juke",
        "reg_number": "CY 98904"
      },  {
        "color": "white",
        "make": "Ford",
        "model": "Ranger",
        "reg_number": "CF 75599"
      },  {
        "color": "red",
        "make": "Toyota",
        "model": "Corolla",
        "reg_number": "CA 5510"
      },  {
        "color": "blue",
        "make": "Ford",
        "model": "Focus",
        "reg_number": "CF 75586"
      },  {
        "color": "orange",
        "make": "Toyota",
        "model": "Tazz",
        "reg_number": "CA 46137"
      },  {
        "color": "orange",
        "make": "Ford",
        "model": "Ranger",
        "reg_number": "CK 22692"
      },  {
        "color": "red",
        "make": "Toyota",
        "model": "Corolla",
        "reg_number": "CF 33543"
      },  {
        "color": "red",
        "make": "Volkswagen",
        "model": "Touran",
        "reg_number": "CA 94890"
      },  {
        "color": "orange",
        "make": "Toyota",
        "model": "Tazz",
        "reg_number": "CY 82252"
      },  {
        "color": "blue",
        "make": "Toyota",
        "model": "Yaris",
        "reg_number": "CL 9538"
      },  {
        "color": "white",
        "make": "Nissan",
        "model": "Juke",
        "reg_number": "CF 62002"
      },  {
        "color": "orange",
        "make": "Ford",
        "model": "Fiesta",
        "reg_number": "CJ 67577"
      },  {
        "color": "blue",
        "make": "Ford",
        "model": "Ranger",
        "reg_number": "CA 77852"
      },  {
        "color": "orange",
        "make": "Toyota",
        "model": "Hilux",
        "reg_number": "CY 52435"
      },  {
        "color": "blue",
        "make": "Toyota",
        "model": "Corolla",
        "reg_number": "CL 76173"
      },  {
        "color": "red",
        "make": "Toyota",
        "model": "Tazz",
        "reg_number": "CL 38315"
      },  {
        "color": "blue",
        "make": "Ford",
        "model": "Fiesta",
        "reg_number": "CA 34015"
      }, {
        "color": "orange",
        "make": "Toyota",
        "model": "Corolla",
        "reg_number": "CK 41166"
      }];
      res.json(cars);
})

app.get("/api/greet/:username", function(req, res) {
    console.log(req.params)
    const username = req.params.username;
    res.json({
        message : `Hello, ${username}!`
    })
});

const PORT = process.env.PORT || 4011;
app.listen(PORT, function(){
    console.log(`App started on ${PORT}`);
});
