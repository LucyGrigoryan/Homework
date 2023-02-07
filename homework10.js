                    //Task 1 

// 1. Create an Author class and a Book class.
// Author should have: name, email, gender.
// It should have appropriate getters and setters.
// It should have a toString method.
// Book should have: title, author(Author), price, quantity.
// It should have appropriate getters and setters.
// It should have a method: getProfit(), which calculates the profit from the book based on
// the price and quantity.
// It should have a toString method.
// Դավիթ ջան ինչու է երբ  get(set)-ի մեջ this._name ի փոխարեն գրում եմ  this.name max call stack լցվումա?



class Author {
    constructor(name, email, gender) {
      this.name = name;
      this.email = email;
      this.gender = gender;
    }
    get name() {
      return this._name
    }
    set name(value) {
      return this._name = value
    }
    get email() {
      return this._email
    }
    set email(value) {
      return this._email = value
    }
    get gender() {
      return this._gender
    }
    set gender(value) {
      return this._gender = value
    }
    toString() {
      return `Author's name is ${this.name}, the gender is ${this.gender}, with email ${this.email}`
    }
  }
  
  let author1 = new Author();
  author1 = new Author("Jane")
  console.log(author1);
  console.log(author1.toString());
  
  
  class Book extends Author {
    constructor(name, email, title, price, quantity) {
      super(name, email);
      this.title = title;
      this.price = price;
      this.quantity = quantity;
    }
    get title() {
      return this._title
    }
    set title(value) {
      return this._title = value
    }
    get price() {
      return this._price
    }
    set price(value) {
      return this._price = value
    }
    get quantity() {
      return this._quantity
    }
    set quantity(value) {
      return this._quantity = value
    }
  
    getProfit() {
      return `The profit of this book is ${this._price * this._quantity} `
    }
    toString() {
      return `The Author of ${this.title} is  ${this.name}, the price of the book is ${this.price}$.`
    }
  }
  
  
  let book1 = new Book("Jane Austen", "janeaustin@gmail.com", "Pride and Prejudice", "25", "30")
  console.log(book1);
  console.log(book1.getProfit());
  console.log(book1.toString());
  
  
  
                        //Task 2
  // Create an Account class. Account should have: id, name, balance.
  // It should have setters for name and balance, and getters for all fields.
  // It should have a method: credit(amount), which should add amount to balance and
  // return the updated balance.
  // It should have a method: debit(amount), which should subtract the amount from the
  // balance, if amount is less than the balance, otherwise output “Amount exceeded
  // balance.”
  // It should have a method: transferTo(anotherAccount, amount): which should subtract the
  // amount from the account balance and add it to the given anotherAccount and return the
  // updated balance, if amount is less than the balance, otherwise output “Amount
  // exceeded balance.”
  // It should have a static method: identifyAccounts(accountFirst, accountSecond) which
  // gets two accounts and identifies if they are the same or not comparing all fields.
  // It should have toString method.
  
  
  
  class Account {
    id = Math.random()
    constructor(name, balance) {
      this.name = name;
      this.balance = balance;
    }
    get id() {
      return this._id
    }
  
    get name() {
      return this._name
    }
    set name(value) {
      return this._name = value
    }
    get balance() {
      return this._balance
    }
    set balance(value) {
      return this._balance = value
    }
    credit(amount) {
      return this.balance = this.balance + amount;
    }
    debit(amount) {
      if (amount < this.balance) {
        return this.balance = this.balance - amount;
      } else {
        console.log("Amount exceeded balance")
      }
    }
    toString() {
      return `Acount's name is ${this.name},id ${this.id}, and the balance is ${this.balance}`
  
    }
    transferTo(anotherAccount, amount) {
      if (amount > this.balance && anotherAccount instanceof Account) {
        this.balance = this.balance - amount;
        anotherAccount.balance += amount;
        return this.balance
  
      } else if (amount > this.balance && !anotherAccount instanceof Account) {
        this.balance = this.balance - amount;
        anotherAccount.balance = amount;
        return this.balance;
      } else {
        console.log("Amount exceeded balance")
      }
    }
  
    static identityAccounts(accontFirst, accountSecond) {
      if (accontFirst instanceof Account && accountSecond instanceof Account) {
        for (let key in accontFirst) {
          if (!Object.hasOwn(accountSecond, [key])) {
            return `${accontFirst} and ${accountSecond} are'nt same`
          }
        } return `${accontFirst} and ${accountSecond} are same`
  
      } else {
        return `${accontFirst} and ${accountSecond} are not same`
      }
    }
  
  
  }
  let account = new Account("Anna", 1000)
  let account2 = new Account("Ara", 1500)
  console.log(Account.identityAccounts(account, account2))
  console.log(account.debit(500))
  console.log(account);
  
  
  
                      //Task 3
  // Write classes: Person, Student, Staff.
  // Person should have: firstName, lastName, gender, age.
  // It should have appropriate getters and setters.
  // It should have a method: toString().
  // Student is inherited from Person. It should have program(array of strings), year, fee.
  // It should have appropriate getters and setters.
  // It should have method: passExam(program, grade). Student should contain the data
  // about its programs and exams. passExam will update that data, so if student passed all
  // the exams(grade is great or equal to 50), its year should be increased by one.
  // It should have a toString method.
  // Teacher is inherited from Person. It should have program(string), pay.
  // It should have appropriate getters and setters.
  // It should have a toString method.
  
  
  class Person {
    constructor(firstName, lastName, gender, age) {
      this.firstName = firstName,
        this.lastName = lastName,
        this.gender = gender,
        this.age = age
    }
    get firstName() {
      return this._firstName;
    }
    set firstName(v) {
      return this._firstName = v;
    }
    get lastName() {
      return this._lastName;
    }
    set lastName(v) {
      return this._lastName = v;
    }
    get gender() {
      return this._gender;
    }
    set gender(v) {
      return this._gender = v;
    }
    get age() {
      return this._age;
    }
    set age(v) {
      return this._age = v;
    }
    toString() {
      return ` ${this.firstName} ${this.lastName}'s gender is ${this.gender} age is ${this.age}`
    }
  }
  
  
  class Student extends Person {
    constructor(firstName, lastName, gender, age, program, year, fee) {
      super(firstName, lastName, gender, age);
      this.program = program;
      this.year = year;
      this.fee = fee
    }
  
    get program() {
      return this._program;
    }
    set program(v) {
      return this._program = v;
    }
    get year() {
      return this._year;
    }
    set year(v) {
      return this._year = v;
    }
    get fee() {
      return this._fee;
    }
    set fee(v) {
      return this._fee = v;
    }
    passExam(programs, grade) {
      this.program.push(programs)
      let exam = 0;
      for (let i = 0; i < this.program.length; i++) {
        exam = exam + (+(this.program[i].split(":"))[1])
      }
      if (exam >= grade) {
        this.year = this.year + 1;
      }
      return this.program
    }
    toString() {
      return `Student's fee is ${this.fee}`
  
    }
  }
  let student = new Student("Levon", "Petrosyan", "male", 42, ["math:50", "english:30", "economy:10"], 2020, 1500)
  console.log(student.passExam("history:12", 70))
  console.log(student)
  
  
  
  class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program, pay) {
      super(firstName, lastName, gender, age);
      this.program = program;
      this.pay = pay
    }
    get program() {
      return this._program;
    }
    set program(v) {
      return this._program = v;
    }
    get pay() {
      return this._pay;
    }
    set pay(v) {
      return this._pay = v;
  
    }
    toString() {
      `Teacher ${this.name}  ${this.lastName} teachs ${this.program}, and has salary ${this.pay}`
    }
  }
  
  
  
  
  
  
  