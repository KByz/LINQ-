//!SECTION - Health Record App Psudo Code

//Import readline to take user input and produce output/prompts
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//Create a function that presents a menu of options to the user. 
//The user can select an option by entering a the corresponding number on the keyboard.
//Each option will call a function that will perform a task or reutrn a value. 
function mainMenu () {
    rl.question ("Select an option from the menu: \n 1.View records \n 2.Create new record \n 3.Exit program \n", function (key) {
        userInput = key;
        if (userInput === "1") { //Key input to return the listRecords function
            recordList(); //Function that lists existing records
        } else if (userInput === "2") { //Key input to returns the createRecord function
            createRecord(); //Function to create Records
        } else if (userInput === "3") { //Key input to close the program 
            process.exit() //Closes the program
        } else {
            console.log("Invalid input. Please try again")
            mainMenu();
        }
    }
    );
    function recordList() { //Return a list of records
        console.table(patientRecord({id, firstName, lastName}));
        rl.question("Enter ID of record to view: \n", function (string) {
            userInput = string;
            console.table(patientRecord(userInput)); //Returns the selected record
        });
    }

//Create a table that displays an individual patient record with key and value table
function patientRecord (iD, firstName, LastName, doB, sex, stAdd, city, phNumber, eMail, nokName, nokPhone, gpOffice, gpDoctor) {
    this.iD = iD;
    this.firstName = firstName;
    this.LastName = LastName;
    this.doB = doB;
    this.sex = sex;
    this.stAdd = stAdd;
    this.city = city;
    this.phNumber = phNumber;
    this.eMail = eMail;
    this.nokName = nokName;
    this.nokPhone = nokPhone;
    this.gpOffice = gpOffice;
    this.gpDoctor = gpDoctor;
  } 

//Create a function to update a record. Select record to update, then select field to update, then enter new value
function updateRecord () {
    rl.question ("Enter field to update \n", function (key) { //Prompt user to enter field to update
        userInput = key;
        console.log(patientRecord(userInput));
        rl.question ("Enter new value \n", function (key) { //Prompts user to enter a new value for the selected field
            userInput = key;
            console.log(patientRecord(userInput)); //Displays the record with the new value
            rl.question ("Save record? \n", function (key) { //Confirms to save the updated record
                userInput = key;
                if (userInput === "yes" || "Y" || "y") { //Conditions for confirming record save
                    pushRecord();
                } else if (userInput === "no" || "N" || "n") { //Conditions for cancelling record save
                    viewRecord();
                } else console.log ("Please enter Y or N"); //Prompt for valid input if above conditions are not met
            });
        });
    });
}

//Create a function to create a new record. Prompt user to enter new record details. Push new record to existing records list
function createRecord() {
    //Create empty array for each input to be pushed to
    let arr = []
        //Create for loop to push each string to the array
        for (let i = 0; i < arr.length; i++) {
            rl.question("Enter first name \n", function (string) { //Prompt the user for input
            userInput = string; //Condition for input value is a string
            arr.push(userInput); //Push the input to the array
                rl.question ("Enter last name \n", function (string) {
                    userInput = string;
                    arr.push(userInput);
                
                    rl.question ("Enter date of birth \n", function (string) {
                        userInput = string;
                        arr.push(userInput);
                    
                    rl.question ("Enter sex asigned at birth: \n", function (string) {
                        userInput = string;
                        arr.push(userInput);
                    
                      rl.question ("Enter street address: \n", function (string) {
                        userInput = string;
                        arr.push(userInput);
                
                            rl.question ("Enter city: \n", function (string) {
                              userInput = string;
                              arr.push(userInput);
                
                                rl.question ("Enter phone number: \n", function (string) {
                                  userInput = string;
                                  arr.push(userInput);
                
                                    rl.question ("Enter email address: \n", function (string) {
                                      userInput = string;
                                      arr.push(userInput);
                                      
                                        rl.question ("Enter Next of Kin name: \n", function (string) {
                                          userInput = string;
                                          arr.push(userInput);
                
                                          rl.question ("Enter Next of Kin phone number: \n", function (string) {
                                            userInput = string;
                                            arr.push(userInput);
                
                                            rl.question ("Enter name of general practice office: \n", function (string) {
                                              userInput = string;
                                              arr.push(userInput);
                
                                              rl.question ("Enter name of doctor: \n", function (string) {
                                                userInput = string;
                                                arr.push(userInput);
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
            console.log(arr); //Display the new record array
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
            //Create a function to push new records to existing records list
            function pushRecord () {
                console.log('Record saved') //Confirms record saved
                console.log(mainMenu()); //Returns the user to the main menu
            }
        }

//Create a function to delete a selected record from the record list
function deleteRecord() {
    rl.question ("Are you sure you want to delete this record? \n", function (key){ //Confirmation prompt
    userInput = key;
    if (userInput === "Yes" || "yes" || "Y" || "y") { //User input conditions for confirming deletion
        delete patientRecord.$(userInput) //Identifies the record by ID and deletes the record from the patientRecord array
    } else if (userInput === "No" || "no" || "N" || "n") { //User input conditions for cancelling deletion
    console.log(viewRecord($userInput)); //Returns the user to veiwing the record
    } else {
         rl.question ("Please enter Y or N \n") //Prompt to enter valid input if above conditions are not met
        }
    });
}
//Create a function that returns the user to the main menu
function backToMenu() {
    console.log(mainMenu); //Returns the main menu
}

}

console.log(mainMenu()); //Calls the main menu function to start the program