
// Class

// Are a way to create objects, blue prints for objects
// defining a class
// Classes are always Capitalized! in pretty much every language
//class Player {
//	constructor(name, age){
//		this.username = name;
//		this.weapons = [];
//		this.abilities = ['jump', 'run']
//		this.health = 100;
//		this.age = age;
//	}
//	addWeapon(weapon){
//		// add the weapons to the weapons array
//		this.weapons.push(weapon)

		// ==========================
			// the "this keyword" refers to the objects that calls the method!

//		// =========================
//	}
//	addAbility(ability){
//		this.abilities.unshift(ability); // unshift adds to the beginning of the array
//	}
//}

// inheritance!
// SuperHero inherits all of the properties and methods from the player class!
//class SuperHero extends Player {
//	constructor(name, age, color, superHeroName){
//		// call our the parent class constructor (Player)
//		super(name, age);
//		this.capeColor = color
//		this.superHeroName = superHeroName
//	}
//	fly(){
//		console.log('up up and away!')
//		return 'IM flying'
//	}
//}

//const superMan = new SuperHero('Clark Kent', 32, 'red', 'superman');


// instatiating a class (means creating an object from the class)
//const playerOne = new Player('Jim', 35); // when new Player gets called, the constructor method in class is run
//const playerTwo = new Player('Kate', 34);

// this in addWeapon is referring to only playerOne
//playerOne.addWeapon({weapon: 'machine gun', damage: 10, secondaryWeapon: 'pistol'})
// this in addWeapon is referring to only playerTwo
//playerTwo.addWeapon({weapon: 'ak-47', damage: 7, secondaryWeapon: 'knife'})

//playerOne.addAbility('run')
//playerOne.addAbility('jump')

//playerTwo.addAbility('fly')

const ulEl = document.querySelector('ul')
const buttonEl = document.querySelector('button');
const inputName = document.querySelector('#name');
const inputAge = document.querySelector('#age');
const imgPlayer1 = document.querySelector('img')

const players = []

buttonEl.addEventListener('click', createPlayer);

function createPlayer(){
	console.log('click working')

	players.push(new Player(inputName.value, inputAge.value))
	inputAge.value = '';
	inputName.value = ''
	imgPlayer1.src = players[0].imgUrl
}


class Player {
	constructor(name, age){
		this.username = name;
		this.weapons = [];
		this.abilities = ['jump', 'run']
		this.health = 100;
		this.age = age;
		this.imgUrl = 'https://cdn.greenfieldpuppies.com/wp-content/uploads/2016/07/Newfoundland-puppy.jpg'
	}
	addWeapon(weapon){
		// add the weapons to the weapons array
		this.weapons.push(weapon)

		// ==========================
			// the "this keyword" refers to the objects that calls the method!

		// =========================
	}
	addAbility(ability){
		this.abilities.unshift(ability); // unshift adds to the beginning of the array
	}

}

//class BankAccount {
//constructor(ownerName, balance, acctNum){
//		this.ownerName = ownerName;
//		this.balance = balance;
//		this.acctNum = acctNum
//	}

//	deposit(amount){
//		this.balance += amount
//  }
//withdraw(amount){
//		this.balance -= amount
//	
//	}
//}


//class CheckingAccount extends BankAccount{
//	constructor(ownerName, balance, acctNum, overdraftEnabled){
//    super(ownerName, balance, acctNum)
//		this.overdraftEnabled = overdraftEnabled
//	}

//	withdraw(amount){
//if(this.overdraftEnabled){
//		// if overDraftEnabled, then your can withdrawl numbers that 
		// go below zero
//} else {
//		// otherwise you can only take out the amount you have
//		
//		}
	

	
//	}
//}
//class SavingsAccount  extends BankAccount{
//constructor(ownerName, balance, acctNum){
//	super(ownerName, balance, acctNum)
		
//}	
//	withdraw(){
//		return 'This is a savings account. Withdrawl is not possible.'
//	}
//}