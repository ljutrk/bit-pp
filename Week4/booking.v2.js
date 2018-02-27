"use strict";
(function () {
    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
        this.formatedCountry = this.name[0].toUpperCase() + this.name[1].toUpperCase();
    }

    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);
        this.currentDate = new Date();
        this.age = this.currentDate.getFullYear() - this.dateOfBirth.getFullYear();

        this.getData = function () {
            return this.name + " " + this.surname + ", " + this.age + " years";
        }
    }

    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;

        this.getData = function () {
            return this.country.formattedCountry + ", " + (country.odds * this.betAmount) + "eur " + person.getData();
        }
    }

    function Address(country, city, postalCode, streetAndNumber) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.streetAndNumber = streetAndNumber;

        this.getData = function () {
            return this.streetAndNumber + ", " + this.postalCode + " " + this.city + ", " + this.formattedCountry;
        }
    }

    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];

        this.addPlayer = function (player) {
            this.listOfPlayers.push(player);
        }

        this.getData = function () {
            return this.address + ", " + this.listOfPlayers.address.postalCode + " " + this.listOfPlayers.address.city + ", sum of all bets: " //+ sum of all bets!
        }
    }

    function BettingHouse(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers = 0;

        this.addBettingPlace = function (bettingPlace) {
            this.listOfBettingPlaces.push(bettingPlace);
        }
    }

    var continents = Object.freeze({
        ASIA: "AS",
        EUROPE: "EU",
        AFRICA: "AF",
        AUSTRALIA: "AS",
        N_AMERICA: "NA",
        S_AMERICA: "SA"
    });

    function createPlayer(name, surname, dateOfBirth, betAmount, country) {
        var person = new Person(name, surname, dateOfBirth);
        var player = new Player(person, betAmount, country);
        return player;
    }

    function createBettingPlace(address) {
        return new BettingPlace(address);
    }

    function createCountry(name, odds, continent) {
        return new Country(name, odds, continent);
    }
        var footballWorldCupWinner = new BettingHouse("Football World Cup Winner");

        var player1 = createPlayer("Vojislav", "Kostunica", "sep 20 1944", 500, "Srbija");
        var player2 = createPlayer("Bozidar", "Djelic", "feb 2 1965", 200, "Srbija");
        var player3 = createPlayer("Vojislav", "Seselj", "saug 29 1954", 1000, "Nederland");
        var player4 = createPlayer("Slobodan", "Milosevic", "jan 4 1941", 100, "Nederland");

        var srbija = createCountry("Srbija", 2.3, continents.EUROPE)
        var nederland = createCountry("Nederland", 1.5, continents.EUROPE)

        var beograd = createBettingPlace("Proleterske Solidarnosti 17.5");
        var hag = createBettingPlace("Churchillplein 1");

        beograd.addPlayer.player1;
        beograd.addPlayer.player2;
        hag.addPlayer.player3;
        hag.addPlayer.player4;

        console.log(player1.getData());


    }) ();