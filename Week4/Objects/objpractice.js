// 6. a. Write a list (array) of products you usually buy in the supermarket.
//       Write a price and name for each product. For example,
//       [ {name: ‘apples’, price: 100}, 
//       {name: ‘milk’, price: 80}, 
//       {name:’bananas’, price: 150} ]
//    b. Write a function that calculates the total price of your shopping list. 
//    c. Write a function that calculates the average product price of your shopping list.
//       Print this value with the precision of three decimals. 
//    d. Write a function that prints out the name of the most expensive product on your shopping list.
//       Write the name in uppercase.

"use strict";
(function () {

    function Products(name, price) {
        this.name = name;
        this.price = price;

        this.getProduct = function () { // vraca proizvod + cenu 
            var result = this.name + " " + this.price + "din";
            return result;
        }
    }

    function ShoppingList(listName, date) {
        this.date = new Date (date);
        this.listName = listName + " " + this.date.getDate() + "."; // ovo je neko ludilo sa datumom, sigurno moze bolje
        this.shoppingList = [];

        this.addShoppingList = function (product) { // ubacuje proizvod sa cenom u listu za kupovinu
            this.shoppingList.push(product);

        }

        this.getShoppingList = function () { // vraca listu za kupovinu za odredjeni dan
            var result = "";
            var beforeResult = "" + this.listName + "\n";
            for (let i = 0; i < this.shoppingList.length; i++) {
                result += this.shoppingList[i].getProduct() + " ";
            }
            result = beforeResult + "\t\t" + result;
            return result;
        }

        this.getTotalPrice = function () { // ukupna cena proizvoda za odredjeni dan
            var totalPrice = 0;
            for (let i = 0; i < this.shoppingList.length; i++) {
                totalPrice += this.shoppingList[i].price;
            }
            return totalPrice;
        }

        this.getAverageProductPrice = function () { // prosecna cena proizvoda za odredjeni dan na tri decimale
            var averageProductPrice = this.getTotalPrice() / this.shoppingList.length;
            return averageProductPrice.toPrecision(6);
        }

        this.getMostExpensiveProduct = function () { // imenuje najskuplji proizvod za odredjeni dan u uppercase-u
            var mostExpensiveProduct = 0;
            var mostExpensiveProductIndex = 0;
            for (let i = 0; i < this.shoppingList.length; i++) {
                if (mostExpensiveProduct < this.shoppingList[i].price) {
                    mostExpensiveProduct = this.shoppingList[i].price;
                    mostExpensiveProductIndex = i;
                }
            }
            return this.shoppingList[mostExpensiveProductIndex].name.toUpperCase();
        }
    }

    function WeeklyList(date) {
        this.date = new Date(date);
        this.listOfShoppingLists = [];

        this.getWeekDate = function () { // vraca datum u obliku nedelje za zadati prvi dan u nedelji
            return this.date.getDate() + "-" + (this.date.getDate() + 7)  + "." + this.date.getMonth() + "." + this.date.getFullYear() + ". ";
        }
        
        this.addWeeklyList = function (shoppingList) { // ubacuje dnevne liste za kupovinu nedeljnu listu
            this.listOfShoppingLists.push(shoppingList);
        }

        this.getWeeklyList = function () { //vraca nedeljnu listu za kupovinu po danima
            var result = "";
            var beforeResult = this.getWeekDate() + "\n";
            for (let i = 0; i < this.listOfShoppingLists.length; i++) {
                result += "\t" + this.listOfShoppingLists[i].getShoppingList() + "\n";
            }
            result = beforeResult + result;
            return result;
        }
    }

    function newProducts(name, price) {
        return new Products(name, price);
    }

    function newShoppingList(listName, date) {
        return new ShoppingList(listName, date);
    }

    var prod1 = newProducts("banana", 140);
    var prod2 = newProducts("kupina", 200);
    var prod3 = newProducts("'lebac", 45);
    var prod4 = newProducts("mleko", 112);
    var prod5 = newProducts("pavlaka", 60);
    var prod6 = newProducts("prasak za pecivo", 9);

    var list1 = newShoppingList("sreda", new Date(2018, 2, 21));
    var list2 = newShoppingList("cetvrtak", new Date(2018, 2, 22));

    list1.addShoppingList(prod1);
    list1.addShoppingList(prod2);
    list1.addShoppingList(prod3);

    list2.addShoppingList(prod4);
    list2.addShoppingList(prod5);
    list2.addShoppingList(prod6);

    var weeklyList = new WeeklyList(new Date(2018, 2, 19));

    weeklyList.addWeeklyList(list1);
    weeklyList.addWeeklyList(list2);

    console.log(list1.getTotalPrice());
    console.log(list1.getAverageProductPrice());
    console.log(list1.getMostExpensiveProduct());
    console.log(weeklyList.getWeeklyList());

})();

