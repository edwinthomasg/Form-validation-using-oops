class Registration{
    alphaRegex=/^[a-zA-Z ]+$/;
    numberRegex=/^[6789]{1}[\d]{9}$/;
    emailUserRegex=/^([a-z]+[\.-\d]*)@$/;
    emailDomainRegex=/^([a-z-]+)\.([a-z\-]{2,8})(\.[a-z]{2,8})?$/;
    dateRegex=/^(\d{4})\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/; 
   user = {
      firstname: "",
      lastname: "",
      birthdate: "",
      phonenumber: "",
      email: "",
      firstnameError: "",
      lastnameError: "",
      phonenumberError:"",
      emailError:"",
      dateError:""
   }
   getUserFInputs(){
      this.user.firstname = document.getElementById("firstname").value.trim();
    //   this.user.lastname = document.getElementById("lastname").value.trim();
    //   this.user.birthdate = document.getElementById("birthdate").value.trim();
    //   this.user.phonenumber = document.getElementById("phonenumber").value.trim();
    //   this.user.email = document.getElementById("email").value.trim();
   }
   getUserLInputs(){
        this.user.lastname = document.getElementById("lastname").value.trim();
    }
    getUserBInputs(){
        this.user.birthdate = document.getElementById("birthdate").value.trim();
    }
    getUserPInputs(){
        this.user.phonenumber = document.getElementById("phonenumber").value.trim();
    }
    getUserEInputs(){
        this.user.email = document.getElementById("email").value.trim();
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
   validateFirstname(){
       if(this.user.firstname == ""){
           this.user.firstnameError = "Firstname required";
           this.displayErrorMessage(0,this.user.firstnameError);
       }
       else if(this.alphaRegex.test(this.user.firstname) == false){
           this.user.firstnameError = "Should contain only alphabets";
           this.displayErrorMessage(0,this.user.firstnameError);
       }
       else if(this.user.firstname.length < 3)
       {
           this.user.firstnameError = "Should contain atleast 3 letters";
           this.displayErrorMessage(0,this.user.firstnameError);
       }
       else if(this.user.firstname.length > 15)
       {
           this.user.firstnameError = "Should not exceed 15 letters";
           this.displayErrorMessage(0,this.user.firstnameError);
       }
       else 
       {
           this.removeErrorMessage(0);
           this.user.firstnameError = "";
       }
   }
   validateLastname(){
    if(this.user.lastname == ""){
        this.user.lastnameError = "Lastname required";
        this.displayErrorMessage(1,this.user.lastnameError);
    }
    else if(this.alphaRegex.test(this.user.lastname) == false){
        this.user.lastnameError = "Should contain only alphabets";
        this.displayErrorMessage(1,this.user.lastnameError);
    }
    else if(this.user.lastname.length > 2)
    {
        this.user.lastnameError = "Should not exceed 2 letters";
        this.displayErrorMessage(1,this.user.lastnameError);
    }
    else 
    { 
        this.removeErrorMessage(1);
        this.user.lastnameError = "";
    }
   }
   validateBirthDate(){
       const current = new Date();
       const birthDate = new Date(document.getElementById("birthdate").value);
       const daysBetween = Math.round((current.getTime() - birthDate.getTime()) / (1000*60*60*24));
       const age = daysBetween/365;
       if(this.user.birthdate == "")
        {
           this.user.dateError = "Birth date required";
           this.displayErrorMessage(2,this.user.dateError);
        }
        else if(this.dateRegex.test(this.user.birthdate) == false){
           this.user.dateError = "Invalid date format(yyyy-mm-dd)";
           this.displayErrorMessage(2,this.user.dateError);
        }
        else if(age < 20){
           this.user.dateError = "Eligible once you are 20";
           this.displayErrorMessage(2,this.user.dateError);
        }
        else
        {
            this.removeErrorMessage(2);
            this.user.dateError = "";
       }
   }
   validatePhoneNumber(){
        if(this.user.phonenumber == "")
        {
           this.user.phonenumberError = "Phone number required";
           this.displayErrorMessage(3,this.user.phonenumberError);
        }
        else if(this.numberRegex.test(this.user.phonenumber) == false){
           this.user.phonenumberError = "starts with 6/7/8/9 and contain only 10 digits";
           this.displayErrorMessage(3,this.user.phonenumberError);
        }
        else
            {
                this.removeErrorMessage(3);
                this.user.phonenumberError = "";
           }
   }
   validateEmail(){
       if(this.user.email == "")
       {
          this.user.emailError = "Email id required";
          this.displayErrorMessage(4,this.user.emailError);
       }
       else if(this.emailUserRegex.test(this.user.email.substring(0,(this.user.email.indexOf("@"))+1)) == false){
          this.user.emailError = "Username should starts with lowercase alphabets followed by digits if any";
          this.displayErrorMessage(4,this.user.emailError);
       }
       else if(this.emailDomainRegex.test(this.user.email.substring((this.user.email.indexOf("@"))+1,this.user.email.length)) == false){
           this.user.emailError = "Username followed by domain name in lowercased alphabets with extension";
           this.displayErrorMessage(4,this.user.emailError);
        }
        else
            {
               this.removeErrorMessage(4);
               this.user.emailError = "";
           }
   }
//    clearValues(){
   
//        if(this.user.alphabetError === "" && this.user.phonenumberError === "" && this.user.emailError === "" && this.user.dateError === "")
//        {
//            alert("Successfully registered");
//            const group = document.getElementsByClassName("form-group");
//            Array.from(group).forEach(element => {
//                element.getElementsByTagName("input")[0].value = "";
//                element.classList.remove("valid");
//            });
//        } 
//    }
   checkFormValid(){
       const form_group = document.getElementsByClassName("form-group");
       let result = true;
       Array.from(form_group).forEach(element => {
           if(element.classList.contains("invalid"))
           result = false;
       });
       return result;
   }
   
}
const entry = new Registration();
document.getElementById("firstname").addEventListener('keyup',()=>{
    entry.getUserFInputs()
    entry.validateFirstname();
})
document.getElementById("lastname").addEventListener('keyup',()=>{
    entry.getUserLInputs()
    entry.validateLastname();
})
document.getElementById("birthdate").addEventListener('keyup',()=>{
    entry.getUserBInputs()
    entry.validateBirthDate();
})
document.getElementById("phonenumber").addEventListener('keyup',()=>{
    entry.getUserPInputs()
    entry.validatePhoneNumber();
})
document.getElementById("email").addEventListener('keyup',()=>{
    entry.getUserEInputs()
    entry.validateEmail();
})

document.getElementsByClassName("form")[0].addEventListener('submit',event => {
    entry.getUserFInputs()
    entry.getUserLInputs()
    entry.getUserBInputs()
    entry.getUserPInputs()
    entry.getUserEInputs()
    entry.validateFirstname()
    entry.validateLastname()
    entry.validateBirthDate()
    entry.validatePhoneNumber()
    entry.validateEmail()
    // entry.clearValues()
    if(entry.checkFormValid() == false)
       event.preventDefault()
    else
    document.getElementById('form-1').submit()
   
})