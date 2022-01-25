class Registration{
     alphaRegex=/^[a-zA-Z]+$/;
     numberRegex=/^[6789]{1}[0-9]{9}$/;
     emailUserRegex=/^([a-z]+[\.-\d]*)@$/;
     emailDomainRegex=/^([a-z-]+)\.([a-z\-]{2,8})(\.[a-z]{2,8})?$/;
     dateRegex=/^(0[1-9])|(1[0-9])|(2[0-9])|(3[0-1])$/; 
    user = {
       firstname: "",
       lastname: "",
       birthdate: "",
       phonenumber: "",
       email: "",
       alphabetError: "",
       phonenumberError:"",
       emailError:"",
       dateError:""
    }
    getUserInputs(){
       this.user.firstname = document.getElementById("firstname").value.trim();
       this.user.lastname = document.getElementById("lastname").value.trim();
       this.user.birthdate = document.getElementById("birthdate").value.trim();
       this.user.phonenumber = document.getElementById("phonenumber").value.trim();
       this.user.email = document.getElementById("email").value.trim();
       console.log(this.user.firstname);
    }
    displayErrorMessage(index,message){
       const form_group = document.getElementsByClassName("form-group")[index];
       form_group.classList.add("invalid");
       form_group.getElementsByTagName("span")[0].textContent = message;
    }
    removeErrorMessage(index){
        const form_group = document.getElementsByClassName("form-group")[index];
        form_group.classList.remove("invalid");
        form_group.classList.add("valid");
    }
    validateAlphabets(){
        if(this.user.firstname == ""){
            this.alphabetError = "Firstname required";
            this.displayErrorMessage(0,this.alphabetError);
        }
        else if(this.alphaRegex.test(this.user.firstname) == false){
            this.alphabetError = "Should contain only alphabets";
            this.displayErrorMessage(0,this.alphabetError);
        }
        else if(this.user.firstname.length < 3)
        {
            this.alphabetError = "Should contain atleast 3 letters";
            this.displayErrorMessage(0,this.alphabetError);
        }
        else if(this.user.firstname.length > 15)
        {
            this.alphabetError = "Should not exceed 15 letters";
            this.displayErrorMessage(0,this.alphabetError);
        }
        else 
            this.removeErrorMessage(0);

        if(this.user.lastname == ""){
                this.alphabetError = "Lastname required";
                this.displayErrorMessage(1,this.alphabetError);
            }
            else if(this.alphaRegex.test(this.user.lastname) == false){
                this.alphabetError = "Should contain only alphabets";
                this.displayErrorMessage(1,this.alphabetError);
            }
            else if(this.user.lastname.length > 2)
            {
                this.alphabetError = "Should not exceed 2 letters";
                this.displayErrorMessage(1,this.alphabetError);
            }
            else 
                this.removeErrorMessage(1);
    }
    validateBirthDate(){
        if(this.user.birthdate == "")
         {
            this.dateError = "Birth date required";
            this.displayErrorMessage(2,this.dateError);
         }
         else if(this.dateRegex.test(this.user.birthdate) == false){
            console.log(this.user.birthdate+" "+this.user.birthdate.length);
            this.dateError = "invalid day";
            this.displayErrorMessage(2,this.dateError);
         }
        //  else if(this.user.birthdate){
        //     this.dateError = "should contain only 10 digits";
        //     this.displayErrorMessage(2,this.dateError);
        //  }
         else
         this.removeErrorMessage(2);
    }
    validatePhoneNumber(){
         if(this.user.phonenumber == "")
         {
            this.phonenumberError = "Phone number required";
            this.displayErrorMessage(3,this.phonenumberError);
         }
         else if(this.numberRegex.test(this.user.phonenumber) == false){
            this.phonenumberError = "starts with 6/7/8/9 and contain only digits";
            this.displayErrorMessage(3,this.phonenumberError);
         }
         else if(this.user.phonenumber.length > 10){
            this.phonenumberError = "should contain only 10 digits";
            this.displayErrorMessage(3,this.phonenumberError);
         }
         else
             this.removeErrorMessage(3);
    }
    validateEmail(){
        if(this.user.email == "")
        {
           this.emailError = "Email id required";
           this.displayErrorMessage(4,this.emailError);
        }
        else if(this.emailUserRegex.test(this.user.email.substring(0,(this.user.email.indexOf("@"))+1)) == false){
            console.log(this.user.email.substring(0,(this.user.email.indexOf("@"))+1));
            console.log(this.emailUserRegex.test(this.user.email.substring(0,this.user.email.substring(0,(this.user.email.indexOf("@"))+1))))
           this.emailError = "Username should starts with lowercase alphabets followed by digits if any";
           this.displayErrorMessage(4,this.emailError);
        }
        else if(this.emailDomainRegex.test(this.user.email.substring((this.user.email.indexOf("@"))+1,this.user.email.length)) == false){
            console.log(this.user.email.substring((this.user.email.indexOf("@"))+1,this.user.email.length))
            this.emailError = "Username followed by domain name in lowercased alphabets with extension";
            this.displayErrorMessage(4,this.emailError);
         }
         else
             this.removeErrorMessage(4);
    }
    
}
const entry = new Registration();
document.getElementsByClassName('form')[0].addEventListener('submit',event => {
    event.preventDefault();
    entry.getUserInputs();
    entry.validateAlphabets();
    entry.validateBirthDate();
    entry.validatePhoneNumber();
    entry.validateEmail();
})