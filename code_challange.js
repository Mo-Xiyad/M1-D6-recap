const movies = [
    {
        Title: "The Lord of the Rings: The Fellowship of the Ring",
        Year: "2001",
        imdbID: "tt0120737",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
        Title: "The Lord of the Rings: The Return of the King",
        Year: "2003",
        imdbID: "tt0167260",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
        Title: "The Lord of the Rings: The Two Towers",
        Year: "2002",
        imdbID: "tt0167261",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
        Title: "Lord of War",
        Year: "2005",
        imdbID: "tt0399295",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Title: "Lords of Dogtown",
        Year: "2005",
        imdbID: "tt0355702",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Title: "The Lord of the Rings",
        Year: "1978",
        imdbID: "tt0077869",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
        Title: "Lord of the Flies",
        Year: "1990",
        imdbID: "tt0100054",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
        Title: "The Lords of Salem",
        Year: "2012",
        imdbID: "tt1731697",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
        Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
        Year: "1984",
        imdbID: "tt0087365",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
        Title: "Lord of the Flies",
        Year: "1963",
        imdbID: "tt0057261",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
        Title: "The Avengers",
        Year: "2012",
        imdbID: "tt0848228",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Infinity War",
        Year: "2018",
        imdbID: "tt4154756",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Age of Ultron",
        Year: "2015",
        imdbID: "tt2395427",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Endgame",
        Year: "2019",
        imdbID: "tt4154796",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
]


/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

let test = 'First string'

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

let sum = 10 + 20

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.floor(Math.random() * 20)
// console.log(random)

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {
    name: 'Zee',
    surname: 'Mo',
    age: 25,
}

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete me.age

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

// let skills = ['python', 'JavaScript']
// skills.push(me)

me.skills = ['python', 'JavaScript']
// console.log(me)

/* Ex.G
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
me['skills'].pop()
// console.log(me['skills'])

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

const dice = () => Math.floor(Math.random() * 5 + 1)
// console.log(dice())

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

const whoIsBigger = (num1, num2) => num1 > num2 ? num1 : num2
// console.log(whoIsBigger(8, 5))

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

const splitMe = (str) => str.split(' ')
// console.log(splitMe("I love coding"))

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

const deleteOne = (str, boolean) => boolean === true ? str.split('').slice(1).join('') : str.split('').slice(0, str.length - 1).join('')

// console.log(deleteOne('string without the first letter', false))

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

const onlyLetters = function (str) {

}
// console.log(deleteOne("I have 4 dogs"))

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

const isThisAnEmail = (str) => (str.search('@') && !str.includes(' ')) ? true : false
// console.log(isThisAnEmail('validemail@address.com'))


/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

const whatDayIsIt = function () {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let date = new Date().getDay();
    return days[date];
}
// console.log(whatDayIsIt())


/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

const rollTheDices = function (num) {
    let rollDicesInfo = {}
    rollDicesInfo.sum = 0
    rollDicesInfo.values = []
    for (let i = 0; i < num; i++) {
        rollDicesInfo.values[i] = dice()
    }
    for (let i = 0; i < rollDicesInfo.values.length; i++) {
        rollDicesInfo.sum += rollDicesInfo.values[i]
    }
    return rollDicesInfo
}
// console.log(rollTheDices(2))

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

const howManyDays = function (date) {
    let inputDate = new Date(date);
    let currentDate = new Date();

    let oneDay = 1000 * 60 * 60 * 24;

    let diffInTime = currentDate.getTime() - inputDate.getTime();

    let diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}
// console.log(howManyDays("2/1/2021"));

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
const isTodayMyBirthday = function () {
    let currentDate = new Date();
    let birthDay = new Date('2021/08/16') // here you can insert your birthday 
    if (currentDate.getDate() === birthDay.getDate() && currentDate.getDay() === birthDay.getDay() && currentDate.getFullYear() === birthDay.getFullYear()) {
        return true;
    } else {
        return false;
    }
}
// console.log(isTodayMyBirthday())


// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
let prop = {
    name: 'Iron man costume',
    quantity: 25,
    id: 2,
}
const deleteProp = function (object, string) {
    delete object[string]
    return object
}
// console.log(deleteProp(prop, 'id'))


/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

const olderMovie = function (movielist) {
    let olderMovies = [].sort()
    let olderMoviesObj = {}
    for (let i = 0; i < movielist.length; i++) {
        if (movielist[i]['Year'] < olderMovies[0]) {
            olderMoviesObj.olderMovie = movielist[i]
        }
        olderMovies.push(movielist[i]['Year'])
    }
    // return olderMovies.sort()[0];
    return olderMoviesObj
}
// console.log(olderMovie(movies))


/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

const countMovies = (movie) => movie.length

console.log(countMovies(movies))