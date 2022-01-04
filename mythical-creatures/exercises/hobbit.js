class Hobbit {
  constructor({name}) {
    this.name = name;
    this.age = 0;
    this.adult = false;
    this.old = false
  }

  celebrateBirthday() {
    this.age++;
    this.adult = (this.age > 32);
    this.old = (this.age > 100);
    // if (this.age > 32) {
    //   this.adult = true;
    // }
    // if (this.age > 100) {
    //   this.old = true;
    // }
  }

  getRing() {
    if (this.name.toLowerCase() === `frodo`) {
      this.hasRing = true;
      return `Here is the ring!`;
    } else {
      this.hasRing = false;
      return `You can't have it!`;
    }
  }
}

module.exports = Hobbit;
