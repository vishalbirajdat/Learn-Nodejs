// use other objects function in object 
// The call() method takes arguments separately.

const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"Vishal",
    lastName: "Birajdar"
  }

  const person2 = {
    firstName:"Mohan",
    lastName: "Tripati"
  }
  
  let p2 = person.fullName.call(person2, "Oslo", "Norway");
  let p1 = person.fullName.call(person1, "Latur", "India");


  console.log(p1);
  console.log(p2);