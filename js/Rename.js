export class Sudoku{
constructor(row1, row2) {
  this.row1 = row1;
  this.row2 = row2;
  }

  add() {
    if ((this.row1 + this.row2) > 6) {
      return "true";
    } else {
      return "false";
    }

  }
}
