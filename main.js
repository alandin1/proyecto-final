const { getParamByIndex } = require('./console')
const Expression = require('./expression')._default
const Formulas = require('./formulas')._default
const DEFAULT_EXPRESSION = '3+4';


const main = () =>{
    const input_expression = getParamByIndex(0) ? getParamByIndex(0) : DEFAULT_EXPRESSION;
    new Formulas(new Expression(input_expression));
}
main();