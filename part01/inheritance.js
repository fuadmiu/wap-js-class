class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
        // this.name = name;
        super(name);
        this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("White Rabbit"); // Ok after calling super constructor
  console.log(rabbit.name);