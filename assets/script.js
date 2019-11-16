        //This function creates the password, and the initial section initializes variables and determines length
        function passGen(){
            var specialChars = ["!","@","#","$","%","^","&","*","(",")","-","_","+","-", "|", "'"];
            var lowercaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
            var uppercaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            var ints = ["1","2","3","4","5","6","7","8","9","10"];
            var output = "";
            var passLength = prompt("How long should the password be? Must be an integer between 8 and 128");
             if (Number.isInteger(+passLength) == false || passLength < 8 || passLength > 128){
                alert("Your input did not fit the specified parameters.");
                location.reload();
            }
             else{
                // this scope checks if charchoices > 2 before continuing

            let lowercaseBool = confirm("Should the password include lowercase characters?");
            let uppercaseBool = confirm("Should the password include uppercase characters?");
            let numBool = confirm("Should the password include numbers?");
            let specialBool = confirm("Should the password contain special characters?");
                let charChoices = 0;
                if (lowercaseBool == true){
                    charChoices++;
                }

                if (uppercaseBool == true){
                    charChoices++;
                }
                if (numBool == true){
                    charChoices++;
                }
                if (specialBool == true){
                    charChoices++;
                }
                if (charChoices < 2){
                    alert("You must choose at least two character types. Please begin again.");
                    location.reload()
                }
                // This scope generates the user password
                else {

                   let validArray = [];
                   var passArray = [];
                    if (lowercaseBool == true){
                       for (let i = 0; i<lowercaseChars.length; i++){
                      
                       validArray.push(lowercaseChars[i]);
                    
                       }
                   }
                   if (uppercaseBool == true){
                    for (let i = 0; i<uppercaseChars.length; i++){
                       
                       validArray.push(uppercaseChars[i]);
                   
                    }
                   }
                   if (numBool == true){
                    for (let i = 0; i<ints.length; i++) {
                       
                       validArray.push(ints[i]);
                   
                        }
                   }
                   if (specialBool == true){
                    for (let i = 0; i<specialChars.length; i++) {
                       
                       validArray.push(specialChars[i]);
                        
                        }
                   }
                   console.log(validArray);
                   
                   //this uses RNG to pick a random character from the array of valid characters and add it to the password array
                   for (let i = 0; i < passLength; i++){
                       let indCeiling = Math.ceil(validArray.length);
                       let indFloor = Math.floor(0);
                       let index = Math.floor(Math.random() * (indCeiling - indFloor)) + indFloor;
                       passArray.push(validArray[index]);
                   }
                   //this turns the array into a string
                   for (let i = 0; i<passArray.length; i++){
                       output += passArray[i];
                   }
                   //copy code
                   console.log(output);
                   document.getElementById("password").value = output;
                   document.getElementById("password").placeholder = output;
                   return output;
                }
                
            }
                
        }

        function copyFunction() {
            let toCopy = document.getElementById("password");
            toCopy.select();
            document.execCommand("copy");
        }
        