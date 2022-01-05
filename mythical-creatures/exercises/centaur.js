class Centaur {
  constructor({name, type}) {
    this.name = name;
    this.breed = type;
    this.cranky = false;
    this.standing = true;
    this.action = 0;
    this.layingDown = false;
    // this.run = `Clop clop clop clop!!!`;
  }

  shootBow() {
    if (this.cranky || this.layingDown) {
      return `NO!`;
    } else {
      this.action++;
      this.getCranky();
      return `Twang!!!`;
    }
  }

  run() {
    if (this.cranky || this.layingDown) {
      return `NO!`;
    } else {
      this.action++;
      this.getCranky();
      return `Clop clop clop clop!!!`;
    }
  }

  getCranky() {
    this.cranky = this.action > 2;
    // if (this.action > 2) {
    //   this.cranky = true;
    // }
  }

  sleep() {
    if (this.standing) {
      return `NO!`;
    } else {
      this.cranky = false;
      return `ZZZZ`;
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.standing) {
      this.cranky = false;
    } else {
      return `Not while I'm laying down!`;
    }
  }
}

module.exports = Centaur;
