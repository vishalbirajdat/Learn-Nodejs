const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function (status) {
      return this.firstName + " " + this.lastName+ " " + status;
    }
  }
  
  const member = {
    firstName:"Vishal",
    lastName: "Birajdar",
  }
  
  let fullName = person.fullName.bind(member);
  console.log(fullName);
  console.log(fullName(true));