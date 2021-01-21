const Colors = require("colors");

module.exports = {

  getParamByIndex: (paramIndex) => process.argv.slice(2)[paramIndex],
  
  printWarning: (warningText, commonText) =>
    console.log(
      `${Colors.bgMagenta("Alerta:")} + ${Colors.magenta(warningText)}  ${commonText}`
    ),
 
  printError: (errorText, commonText) =>
  console.log(
    `${Colors.bgRed("Error:")}  ${Colors.red(errorText)}  ${commonText}`
  ),
 
  printSuccess: (sucessText, commonText) =>
  console.log(
    `${Colors.bgMagenta("La operación ha funcionado:")}  ${Colors.magenta(sucessText)}  ${commonText}`
  ),

  printInfo: (infoText, commonText) =>
  console.log(
    `${Colors.bgCyan("Datos:")}  ${Colors.cyan(infoText)}  ${commonText}`
  ),

}