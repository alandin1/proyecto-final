const Colors = require("colors");

module.exports = {

  getParamByIndex: (paramIndex) => process.argv.slice(2)[paramIndex],
  
  printWarning: (warningText, commonText) =>
    console.log(
      `${Colors.bgYellow("Alerta:")} + ${Colors.yellow(warningText)}  ${commonText}`
    ),
 
  printError: (errorText, commonText) =>
  console.log(
    `${Colors.bgRed("Error:")}  ${Colors.red(errorText)}  ${commonText}`
  ),
 
  printSuccess: (sucessText, commonText) =>
  console.log(
    `${Colors.bgGreen("Funcionó:")}  ${Colors.green(sucessText)}  ${commonText}`
  )
}