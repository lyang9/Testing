const helpers = require('./project-1');

// start testing!
describe('project-1.js', () => {
  
  describe('multiplyByTen()', () => {
    it('should multiply provided number by ten', () => {
      const expected = 100;
      const actual = helpers.multiplyByTen(10);
      expect(actual).toEqual(expected);
    });
  
    it('should return 0 when called with no value', () => {
      const product = helpers.multiplyByTen();
      expect(product).toBe(0);
    });
  
    it('should throw error when called with a string', () => {
      expect(() => {
        helpers.multiplyByTen('five')
      }).toThrow();
    });
  });

  describe('subtractFive()', () => {
    it('should subtract by 5', () => {
      const actual = helpers.subtractFive(25);
      expect(actual).toEqual(20);
    });
  });

  describe('areSameLength()', () => {
    it('should have the same length', () => {
      const actual = helpers.areSameLength('hello', 'world');
      expect(actual).toEqual(true);
    });
  });

  describe('areEqual()', () => {
    it('should be equal', () => {
      const actual = helpers.areEqual('hello', 'hello');
      expect(actual).toEqual(true);
    });
  });

  describe('lessThanNinety()', () => {
    it('should be less than 90', () => {
      const actual = helpers.lessThanNinety(45);
      expect(actual).toEqual(true);
    });

    it('should not be less than 90', () => {
      const actual = helpers.lessThanNinety(100);
      expect(actual).toEqual(false);
    });
  });

  describe('greaterThanFifty()', () => {
    it('should be greater than 50', () => {
      const actual = helpers.greaterThanFifty(75);
      expect(actual).toEqual(true);
    });
  });

  describe('add()', () => {
    it('should add correctly', () => {
      const actual = helpers.add(25, 25);
      expect(actual).toEqual(50);
    });

    it('should return 0 if string is provided', () => {
      const actual = helpers.add('hello', 5);
      expect(actual).toEqual(0);
    });
  });

  describe('subtract()', () => {
    it('should subtract correctly()', () => {
      const actual = helpers.subtract(25, 5);
      expect(actual).toEqual(20);
    });
  });

  describe('divide()', () => {
    it('should divide correctly()', () => {
      const actual = helpers.divide(15, 5);
      expect(actual).toEqual(3);
    });
  });

  describe('multiply()', () => {
    it('should multiply correctly()', () => {
      const actual = helpers.multiply(7, 3);
      expect(actual).toEqual(21);
    });
  });

  describe('getRemainder()', () => {
    it('should get the remainder()', () => {
      const actual = helpers.getRemainder(17, 3);
      expect(actual).toEqual(2);
    });
  });

  describe('isEven()', () => {
    it('should check if the number provided is even', () => {
      const actual = helpers.isEven(10);
      expect(actual).toEqual(true);
    });

    it('should return number is not even', () => {
      const actual = helpers.isEven(15);
      expect(actual).toEqual(false);
    });
  });

  describe('isOdd()', () => {
    it('should check if the number provided is odd', () => {
      const actual = helpers.isOdd(9);
      expect(actual).toEqual(true);
    });

    it('should return number is not odd', () => {
      const actual = helpers.isOdd(12);
      expect(actual).toEqual(false);
    });
  });

  describe('square()', () => {
    it('should return number square', () => {
      const actual = helpers.square(8);
      expect(actual).toEqual(64);
    });
  });

  describe('cube()', () => {
    it('should return number cube', () => {
      const actual = helpers.cube(2);
      expect(actual).toEqual(8);
    });
  });

  describe('raiseToPower()', () => {
    it('should return raise to the power', () => {
      const actual = helpers.raiseToPower(2, 4);
      expect(actual).toEqual(16);
    });
  });

  describe('roundNumber()', () => {
    it('should round number up', () => {
      const expected = 10;
      const actual = helpers.roundNumber(9.731);
      expect(actual).toEqual(expected);
    });

    it('should round number down', () => {
      const expected = 5;
      const actual = helpers.roundNumber(5.174);
      expect(actual).toEqual(expected);
    })
  });

  describe('roundUp()', () => {
    it('should round number up', () => {
      const expected = 8;
      const actual = helpers.roundUp(7.25);
      expect(actual).toEqual(expected);
    });
  });

  describe('addExclamationPoint()', () => {
    it('should add an exclamation point', () => {
      const expected = 'Hello World!';
      const actual = helpers.addExclamationPoint('Hello World');
      expect(actual).toEqual(expected);
    });
  });

  describe('combineNames()', () => {
    it('should combine names', () => {
      const expected = 'Lambda School';
      const actual = helpers.combineNames('Lambda', 'School');
      expect(actual).toEqual(expected);
    });
  });

  describe('getGreeting()', () => {
    it('should be greeted with Hello', () => {
      const expected = 'Hello Ada!';
      const actual = helpers.getGreeting('Ada');
      expect(actual).toEqual(expected);
    });
  });

  describe('getRectangleArea()', () => {
    it('should get the area of the rectangle', () => {
      const expected = 15;
      const actual = helpers.getRectangleArea(3, 5);
      expect(actual).toEqual(expected);
    });
  });

  describe('getTriangleArea()', () => {
    it('should get the area of the triangle', () => {
      const expected = 25;
      const actual = helpers.getTriangleArea(5,10);
      expect(actual).toEqual(expected);
    });
  });

  describe('getCircleArea()', () => {
    it('should get the area of the circle', () => {
      const expected = Math.PI * 3 * 3;
      const actual = helpers.getCircleArea(3);
      expect(actual).toEqual(expected);
    });
  });

  describe('getRectangularPrismVolume()', () => {
    it('should get the volume of rectangular prism', () => {
      const expected = 120;
      const actual = helpers.getRectangularPrismVolume(10, 2, 6);
      expect(actual).toEqual(expected);
    });
  });
  
});