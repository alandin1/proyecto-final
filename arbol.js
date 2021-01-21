const Node = require('./node')._default
const Expression = require('./expression')._default
const { printInfo } = require('../proyecto-final/console')
const { isInstanceOf } = require('../proyecto-final/general')

class Arbol {
    preOrderInfo = []
    postOrderInfo = []

    constructor(expression) {
        if(!isInstanceOf(expression, Expression)) throw new Error('Se necesita una expresión matemática.')
        
        this.root = null
        this.expression = expression

        this.loadNodes()
    }

    loadNodes(){
        this.expression.toArray().forEach((a,b) => {
            this.addRecursive(a)})

        printInfo('PreOrder', 'resultados:');
      this.preOrder();
      console.log(this.preOrderInfo.join(', ') + '\n');

      printInfo('PostOrder', 'results:');
      this.postOrder();
      console.log(this.postOrderInfo.join(', ') + '\n');
    }

    isEmpty(){
        return this.root === null
    }

    add(value){
        if (this.isEmpty()) {
            this.root = new Node(value)
            return
        }

        let val = this.root

        while(val) {
            if(value < val.value){
                if(val.left){
                    val = val.left
                } else {
                    val.left = new Node(value)
                    return
                }
            } else {
                if(val.right) {
                    val = val.right
                } else {
                    val.right = new Node(value)
                    return
                }
            }
        }
    }

    addRecursive(value, node = this.root) {
        if (!node) {
          this.root = new Node(value);
          return;
        }
    
        if (value < node.value) {
          if (node.left) {
            return this.addRecursive(value, node.left);
          }
          node.left = new Node(value);
          return;
        } else {
          if (node.right) {
            return this.addRecursive(value, node.right);
          }
          node.right = new Node(value);
          return;
        }
      }
    
    preOrder(node = this.root, intento1){
        if(intento1) this.preOrderInfo = []

        if(!node){
            return
        }    
        
        this.preOrderInfo.push(node.value)
        this.preOrder(node.left)
        this.preOrder(node.right)
    }

    postOrder(node = this.root, intento1){
        if(intento1) this.postOrderInfo = []

        if(!node){
            return
        }
        this.postOrder(node.left)
        this.postOrder(node.right)
        this.postOrderInfo.push(node.value)
    }
}

module.exports._default = Arbol