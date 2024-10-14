const readline = require('readline');
rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function createRecord() {
//Create empty array for each input to be pushed to
let patientRecord = [];
    //Create for loop to push each string to the array
    for (let i = 0; i < patientRecord.length; i++) {
        rl.question("Enter first name \n", function (string) {
        userInput = string;
        patientRecord.push(userInput);
            rl.question ("Enter last name \n", function (string) {
                userInput = string;
                patientRecord.push(userInput);
            
                rl.question ("Enter date of birth \n", function (string) {
                    userInput = string;
                    patientRecord.push(userInput);
                
                rl.question ("Enter sex asigned at birth: \n", function (string) {
                    userInput = string;
                    patientRecord.push(userInput);
                
                  rl.question ("Enter street address: \n", function (string) {
                    userInput = string;
                    patientRecord.push(userInput);
            
                        rl.question ("Enter city: \n", function (string) {
                          userInput = string;
                          patientRecord.push(userInput);
            
                            rl.question ("Enter phone number: \n", function (string) {
                              userInput = string;
                              patientRecord.push(userInput);
            
                                rl.question ("Enter email address: \n", function (string) {
                                  userInput = string;
                                  patientRecord.push(userInput);
                                  
                                    rl.question ("Enter Next of Kin name: \n", function (string) {
                                      userInput = string;
                                      patientRecord.push(userInput);
            
                                      rl.question ("Enter Next of Kin phone number: \n", function (string) {
                                        userInput = string;
                                        patientRecord.push(userInput);
            
                                        rl.question ("Enter name of general practice office: \n", function (string) {
                                          userInput = string;
                                          patientRecord.push(userInput);
            
                                          rl.question ("Enter name of doctor: \n", function (string) {
                                            userInput = string;
                                            patientRecord.push(userInput);
                                          });
                                        });
                                      });
                                    });
                                });
                            });
                        });
                    });
                  });
                });
                });
              });
        console.log(arr);
        rl.question ("Save record? \n", function (key) { //Confirmation to push the new record to list
            userInput = key;
            if (userInput === "yes" || "Y" || "y") { //User input conditions for confirming record save
                pushRecord(); //Pushes the record to the patientRecord array
                console.log('Record saved'); //Confirm the saved record state
                console.log(mainMenu); //Return user to main menu
            } else if (userInput === "no" || "N" || "n") { //User input conditions for cancelling record save
                console.log("New record deleted"); //Confirm new record was deleted
                console.log(mainMenu()); //Return user to main menu
            } else {
                rl.question ("Please enter Y or N \n") //Prompt for valid input if above conditions are not met
            }
        });
        }
    }
    console.log(createRecord())