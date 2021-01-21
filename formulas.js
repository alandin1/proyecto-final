const Arbol = require("../proyecto-final/arbol")._default
const Expression = require("../proyecto-final/expression")._default
const { isInstanceOf } = require('../proyecto-final/general')
const { printSuccess } = require("../proyecto-final/console")


class Formulas {
  constructor(expression) {
    console.log(expression.constructor.name)
    if (!isInstanceOf(expression, Expression))
      throw new Error("Se necesita una operación matemática")

    this.expression = expression
    this.arbol = new Arbol(this.expression)
    
    this.calculateResult()
  }

  calculateResult(){
    this.result = this.expression.getResults();
    printSuccess('El resultado es: ', this.result);
  }
}

module.exports._default = Formulas;
