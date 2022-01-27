export default class Fraction {

  #num, #den
  constructor(num, den) {
    this.#num = num // numerator
    this.#den = den // denominator
  }

  

  toString() {
    return this.num / this.den
  }

}
