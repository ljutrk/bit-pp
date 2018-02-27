// Applications:

// Create constructor functions with properties representing the following:
// WebApp: name, url, technologies, licence, stars
// MobileApp: name, platforms, licence, stars

// All web applications should inherit methods: 
// getData which prints out all the information
// reactBased which checks if one of the used technologies is React

// All mobile applications should inherit methods:
// getData which prints out all the informations
// forAndroid which checks if one of the platforms the application is developed for is Android

// Both web and mobile applications should inherit methods:
// isCCLicence  which checks if the licence of the application is CC (Creative Commons) 
// like which increases the number of stars by one
// showStars which prints out the number of stars 

function Application(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

Application.prototype.isCCLicence = function () {
    return this.licence === "CC";
}

Application.prototype.like = function () {
    this.stars = this.stars + 1;
}

Application.prototype.showStars = function () {
    console.log("The number of stars is: " + this.stars);
}

Application.prototype.getData = function () {
    console.log("Application name is " + this.name);
    console.log("Licence is " + this.licence);
    console.log("Number of stars is " + this.stars);
}

WebApp.prototype = Object.create(Application.prototype);

function WebApp(name, url, technologies, licence, stars) {
    Application.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}

WebApp.prototype.constructor = WebApp;

WebApp.prototype.reactBased = function () {
    for (var i = 0; i < this.technologies.length; i++) {
        if (this.technologies[i] === "React") {
            return true;
        }
    }
    return false;
}
WebApp.prototype.getData = function () {
    Application.prototype.getData.call(this);
    console.log("URL is " + this.url);
    console.log("Used technologies:")
    this.technologies.forEach(function (element) {
        console.log(element);
    });
}

MobileApp.prototype = Object.create(Application.prototype);

function MobileApp(name, platforms, licence, stars) {
    Application.call(this, name, licence, stars);
    this.platforms = platforms;
}

MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.forAndroid = function () {
    for (var i = 0; i < this.platforms.length; i++) {
        if (this.platforms[i] === "Android") {
            return true;
        }
    }
    return false;
}

MobileApp.prototype.getData = function () {
    Application.prototype.getData.call(this);
    console.log("Used platforms are: ");
    this.platforms.forEach(function(element){
        console.log(element);
        
    })
}


var app = new WebApp("Duke Nukem", "www.duke.com", ["HTML", "CSS", "React"], "None", 5);
var app2 = new MobileApp("Lords Mobile", ["HTML", "Android"], "CC", 5);

// console.log(app.reactBased());
// console.log(app2.isCCLicence());

// app.getData();
app2.getData();