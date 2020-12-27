class FirstClass {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        alert(this.name);
    }
}

let user = new FirstClass("Erik");
user.sayHi();
