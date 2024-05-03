class PET {
  constructor(firstName, livingSpace, timeCommitment, budget, responses) {
    this.id = Date.now().toString();
    this.firstName = firstName;
    this.livingSpace = livingSpace;
    this.timeCommitment = timeCommitment;
    this.budget = budget;
    this.responses = responses;
    this.lifestylePts = 0;
    this.answerPts = 0;
    this.total = 0;
    this.suggestedPet = "";
  }

  calcAnswers() {
    this.answerPts = this.responses.filter(
      (response) => response === "true"
    ).length;
  }

  calcLifestyle() {
    if (this.livingSpace === "house") {
      this.lifestylePts += 3;
    }
    if (this.timeCommitment >= 4) {
      this.lifestylePts += 5;
    } else if (this.timeCommitment >= 3) {
      this.lifestylePts += 1;
    }
    if (this.budget >= 150) {
      this.lifestylePts += 3;
    } else if (this.budget >= 50) {
      this.lifestylePts += 2;
    }
  }

  calcTotal() {
    this.total = this.lifestylePts + this.answerPts;
  }

  calcPet() {
    if (this.total >= 10) {
      return "Dog. But a cat is also a good choice";
    } else if (this.total >= 6) {
      return "Cat";
    } else {
      return "Pet Rock";
    }
  }

  suggestPet() {
    this.calcAnswers();
    this.calcLifestyle();
    this.calcTotal();
    this.suggestedPet = this.calcPet();
  }
}

export { PET };
