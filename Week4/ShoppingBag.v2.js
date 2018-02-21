(function () {

    function Product(name, price, expirationDate) {
        this.name = name;
        this.price = parseFloat(price.toFixed(2));
        this.expirationDate = new Date(expirationDate);

        this.productID = function () {
            var min = Math.ceil(10000);
            var max = Math.floor(99999);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        this.getInfo = function () {
            var firstLetter = this.name.charAt(0);
            var lastLetter = this.name.charAt(this.name.length - 1);
            var letters = (firstLetter + lastLetter).toUpperCase();
            return letters + this.productID() + ", " + this.name + ", " + this.price;
        }
    }

    function ShoppingBag() {
        this.list = [];

        this.addItem = function (product) {
            var currentDate = new Date();
            if (currentDate.getTime() < product.expirationDate.getTime()) {
                this.list.push(product);
            }
        }

        this.averageProductPrice = function () {
            var totalPrice = 0;
            for (let i = 0; i < this.list.length; i++) {
                totalPrice += this.list[i].price;
            }
            var averagePrice = totalPrice / this.list.length;
            return averagePrice;
        }

        this.getMostExpensive = function () {
            var mostExpensiveItem = 0;
            var mostExpensiveItemIndex;
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].price > mostExpensiveItem) {
                    mostExpensiveItem = this.list[i].price;
                    mostExpensiveItemIndex = i;
                }
            }
            var expirationDate = this.list[mostExpensiveItemIndex].expirationDate.getDate() + "." + (this.list[mostExpensiveItemIndex].expirationDate.getMonth() + 1) + "." + this.list[mostExpensiveItemIndex].expirationDate.getFullYear();

            return this.list[mostExpensiveItemIndex].name + ", " + this.list[mostExpensiveItemIndex].price + ", " + expirationDate;
        }
        this.calculateTotalPrice = function () {
            var totalPrice = 0;
            for (let i = 0; i < this.list.length; i++) {
                totalPrice += this.list[i].price;
            }
            return totalPrice;
        }
    }

    function PaymentCard(accountBalance, status, validUntilDate) {
        this.accountBalance = accountBalance;

        this.checkoutAndBuy = function (shoppingBag, paymentCard) {
            var missingAmount = shoppingBag.calculateTotalPrice() - paymentCard.accountBalance;
            if (paymentCard.accountBalance > shoppingBag.calculateTotalPrice()) {
                return "Purchase Successful!"
            } else {
                return "Missing amount of money: " + parseFloat(missingAmount.toFixed(2));
            }
        }
    }

    function createProduct(name, price, expirationDate) {
        return new Product(name, price, expirationDate);
    }

    function createShoppingBag() {
        return new ShoppingBag();
    }

    function createPaymentCard(accountBalance, status, validUntilDate) {
        return new PaymentCard(accountBalance, status, validUntilDate);
    }

    var prod1 = createProduct("Banana", 129.31, new Date(2018, 2, 28));
    var prod2 = createProduct("Jabuka", 60.09, new Date(2018, 9, 21));
    var prod3 = createProduct("Mango", 187.91, new Date(2018, 3, 9));
    var prod4 = createProduct("Papaja", 201.99, new Date(2016, 6, 23)); //expired!
    var prod5 = createProduct("Ananas", 267.73, new Date(2019, 2, 11));

    var bag1 = createShoppingBag();

    bag1.addItem(prod1);
    bag1.addItem(prod2);
    bag1.addItem(prod3);
    bag1.addItem(prod4);
    bag1.addItem(prod5);

    var card1 = createPaymentCard(1000, 0, 0)
    var card2 = createPaymentCard(500, 0, 0)

    // console.log(card1.checkoutAndBuy(bag1, card1));
    console.log(card2.checkoutAndBuy(bag1, card2));

})()