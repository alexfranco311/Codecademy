// Javascript Syntax III, Classes/Inheritance

class Media {
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    toggleCheckoutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        let ratingSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        let avg = ratingSum / this._ratings.length;
        let roundAvg = Math.round(avg * 10) / 10;
        return roundAvg;
    }

    addRating(rate) {
        this._ratings.push(rate);
    }
};

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
};

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
};

class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = [];
    }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', '544');
console.log(historyOfEverything);

historyOfEverything.toggleCheckoutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
console.log(speed);

speed.toggleCheckoutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());
