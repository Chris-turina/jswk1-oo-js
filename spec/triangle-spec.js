// var Triangle = require('./../js/triangle.js').triangleModule;
import {Sudoku} from './../js/Rename.js';

describe('Sudoku', function() {
  it('hope this works', function() {
    let sudoku = new Sudoku(2,3)
    expect(sudoku.row1).toEqual(2)
    expect(sudoku.row2).toEqual(3)
  });

  it('hope this one works too', function() {
    let sudoku = new Sudoku(5,3)
    expect(sudoku.add).toEqual("false")
  })
});




// it('should test whether a Triangle has three sides', function() {
//   var triangle = new Triangle(3,4,5)
//   expect(triangle.side1).toEqual(3)
//   expect(triangle.side2).toEqual(4)
//   expect(triangle.side3).not.toEqual(6)
// });
//
//
// it('should correctly determine whether three sides are not a triangle', function() {
//   var triangle = new Triangle(12,3,3)
//   expect(triangle.checkType()).toEqual("not a triangle");
// });
