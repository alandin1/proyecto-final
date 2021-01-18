const Tree = require("../proyecto-final/arbol")._default

class Formula {
    constructor(expression = ""){
        this.expression = expression;
        this.generarArbol();
    }

    generarArbol(){
        this.arbol = new Tree(this.parseExpression());
    }
    parseExpression(){
        return this.expression;
    }
}

module.exports._default = Formula;