import inquirer from "inquirer";
let condition = true;
while (condition) {
  let myBalance = 10000;
  let mypin = 1234;
  let pinAnswer = await inquirer.prompt([
    { name: "pin", message: "ENTER YOUR 4 DIGIT PIN:", type: "number" },
  ]);

  if (pinAnswer.pin === mypin) {
    console.log("CORRECT PIN:");

    let operationAns = await inquirer.prompt([
      {
        name: "operation",
        message: "SELECT WHAT YOU WANT TO DO:",
        type: "list",
        choices: ["WITHDRAW CASH", "CHECK BALANCE"],
      },
    ]);
    console.log(operationAns);
    if (operationAns.operation === "WITHDRAW CASH") {
      let amountAns = await inquirer.prompt([
        {
          name: "amount",
          message: "ENTER YOUR AMOUNT:",
          type: "number",
        },
      ]);
      // =, -= ,+=
      myBalance -= amountAns.amount;
      console.log("YOUR REMAINING BALANCE IS:" + myBalance);
    } else if (operationAns.operation === "CHECK BALANCE") {
      console.log("YOUR BALANCE IS" + myBalance);
    }
  } else {
    console.log("INCORRECT PIN: PLEASE ENTER VALID PIN NUMBER");
  }
}
