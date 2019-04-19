class LargestProduct {
  constructor(number) {
    this.number = number;
    this.largestProduct = 0;
    this.largestProductPosition = 0;
  }

  getLargestProductPosition() {
    let numArr = this.number.toString().split('');
    let largestProduct = 0;
    let largestPosition = 0;

    for (let i = 0; i < numArr.length; i++) {
      let fiveConsecutive = numArr.slice(i, i + 5);
      let currentProduct = 1;

      for (let j = 0; j < fiveConsecutive.length; j++) {
        currentProduct *= fiveConsecutive[j];
      }

      if (currentProduct > largestProduct) {
        largestProduct = currentProduct;
        largestPosition = i;
      }
    }
    this.largestProduct = largestProduct;
    this.largestProductPosition = largestPosition;

    return this.largestProductPosition;
  }

  getLargestProduct() {
    return this.largestProduct;
  }
}

module.exports = LargestProduct;