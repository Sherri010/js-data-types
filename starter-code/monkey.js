function monkeyMaker(n,spec){
	this.name=n;
	this.species = spec;
	this.foodEaten=[];

}

monkeyMaker.prototype.eatSomething=function(thing){
		this.foodEaten.push(thing);
	};

monkeyMaker.prototype.introduce=function(){

	(this.foodEaten.length > 0)? 
	console.log("Hi I'm "+ this.name+"! My species is "+this.species
		+" and I've eaten "+this.foodEaten+" so far."):console.log("Hi I'm "+ this.name+"! My species is "+this.species
		+" and I havn't eaten yet");	

};


var m1= new monkeyMaker("sherri", "one");
var m2= new monkeyMaker("bob","two");


m1.introduce();
m1.eatSomething(["pizza ","coffee"]);


m1.introduce();