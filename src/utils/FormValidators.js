const FormValidators = {
 
    validateEmail:(email) => {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    validatePassword(password) {
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        return re.test(String(password));
    },
    validatePasswordAllowBlank(password){
        var re = /^$|(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        return re.test(String(password));
    },

    validateSaIdNumber(idNumber) {
        var re = /(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/;
        return re.test(String(idNumber));
    },

    validatePhoneNumber(phoneNumber){
        var re = /^(\+)|([0-9 -/().]{10,20})/;
        return re.test(String(phoneNumber));
    },

    required(text){
        if(text !== undefined && text !== null && text !== ""){
            return true;
        }
        return false;
    },

    requiredLength(text, minlength,maxlength){
        if(this.required(text)){
            if(maxlength=== undefined || maxlength === null || maxlength ===0){
                if(text.length >= minlength){
                    return true;
                }
            } 
      
            if(text.length >= minlength && text.length <= maxlength){
                return true;
            }
        }
        return false;
    },

    requiredMinNumber(text, minNumber){
        if(this.required(text)){
            if(text >= minNumber){
                return true;
            }
        }
        return false;
    },

    validateNumeric(value)
    {
        if (!this.required(value))
        {
            return false;
        }
        var re = new RegExp(/[^0-9]/);
        if (value.match(re))
        {
            return false;
        }
        else {return true};
    },

    // validateSAIdentityNumberFull(idNumber) {
       
    //     // assume everything is correct and if it later turns out not to be, just set this to false
    //     var correct = true;
    
    //     //Ref: http://www.sadev.co.za/content/what-south-african-id-number-made
    //     // SA ID Number have to be 13 digits, so check the length        
    //     if (idNumber.length != 13) {            
    //         correct = false;
    //     }

    //     if (isNaN(parseFloat(idNumber)) || !isFinite(idNumber))
    //     {
    //         correct = false;
    //     }
    
    //     if (correct)
    //     {
    //     // get first 6 digits as a valid date
    //     var tempDate = new Date(idNumber.substring(0, 2), idNumber.substring(2, 4) - 1, idNumber.substring(4, 6));
    
    //     var id_date = tempDate.getDate();
    //     var id_month = tempDate.getMonth();
    //     var id_year = tempDate.getFullYear();
    
    //     var fullDate = id_date + "-" + id_month + 1 + "-" + id_year;
    
    //     if (!((tempDate.getYear() == idNumber.substring(0, 2)) && (id_month == idNumber.substring(2, 4) - 1) && (id_date == idNumber.substring(4, 6)))) {
    //        // error.append('<p>ID number does not appear to be authentic - date part not valid</p>');
    //         correct = false;
    //     }
    
    //     // get the gender
    //     var genderCode = idNumber.substring(6, 10);
    //     var gender = parseInt(genderCode) < 5000 ? "Female" : "Male";
    
    //     // get country ID for citzenship
    //     var citzenship = parseInt(idNumber.substring(10, 11)) == 0 ? "Yes" : "No";
    
    //     // apply Luhn formula for check-digits
    //     var tempTotal = 0;
    //     var checkSum = 0;
    //     var multiplier = 1;
    //     for (var i = 0; i < 13; ++i) {
    //         tempTotal = parseInt(idNumber.charAt(i)) * multiplier;
    //         if (tempTotal > 9) {
    //             tempTotal = parseInt(tempTotal.toString().charAt(0)) + parseInt(tempTotal.toString().charAt(1));
    //         }
    //         checkSum = checkSum + tempTotal;
    //         multiplier = (multiplier % 2 == 0) ? 1 : 2;
    //     }
    //     if ((checkSum % 10) != 0) {
    //        // error.append('<p>ID number does not appear to be authentic - check digit is not valid</p>');
    //         correct = false;
    //     };
    // }
    
    //     return correct;      
    // }        
    
}



export default FormValidators;