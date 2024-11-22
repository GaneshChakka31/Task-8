
    function hi() {
    const form = document.getElementById('registrationForm');
    const name = document.getElementById('name');
    const dob = document.getElementById('dob');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const Password = document.getElementById('Password');
    const ConfirmPassword = document.getElementById('ConfirmPassword');
    const gender = document.getElementsByName('gender');
    const country = document.getElementById('country');
    const privacyPolicy = document.getElementById('privacyPolicy');
    
    // Error message spans
    const nameError = document.getElementById('nameError');
    const dobError = document.getElementById('dobError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const PasswordError = document.getElementById('PasswordError');
    const ConfirmPasswordError = document.getElementById('ConfirmPasswordError');
    const genderError = document.getElementById('genderError');
    const countryError = document.getElementById('countryError');
    const privacyPolicyError = document.getElementById('privacyPolicyError');
    
    // Validation function
    
      let valid = true;
    
      // Clear previous error messages
      nameError.textContent = '';
      dobError.textContent = '';
      emailError.textContent = '';
      phoneError.textContent = '';
      PasswordError.textContent = '';
      ConfirmPasswordError.textContent = '';
      genderError.textContent = '';
      countryError.textContent = '';
      privacyPolicyError.textContent = '';
    
      // Validate Name
      if (!name.value.trim()) {
        nameError.textContent = 'Please Enter The Name.';
        valid = false;
        return;

      }
      else{
        value = name.value;
        console.log(!value.match(/\d+/));
        
        if(value.match(/\d+/)!=null){
          nameError.textContent = 'Please Give letters only';
          valid = false;
          return;
         
        }
        else if (!(value.charAt(0) >= 'A' && value.charAt(0) <= 'Z')){
          console.log(!(value.charAt(0) >= 'A' && !value.charAt(0) <= 'Z'));
          nameError.textContent = 'First letter must be in captial';
          valid = false;
          return; 
        }
        
      }
    
      // Validate Date of Birth     
      if (!dob.value) {
        dobError.textContent = 'Please Enter The DOB.';
        valid = false;
        return;
       
      }
    
      // Validate Email
      if (!email.value.trim()) {
        emailError.textContent = 'Please Enter The Email.';
        valid = false;
        return;
       
      }
      else {
         value = email.value;
         if(!isNaN(value)){
          emailError.textContent ='please enter the letters'
        }
        else if(!validateEmail(value)){
          emailError.textContent ='please enter valid email'
          valid = false;
          return;
        }
      }
    
      // Validate Phone
      
      if (!phone.value.trim()) {
        phoneError.textContent = 'Please Enter The Phonenumber';
        valid = false;
        return;
      }

      else {
        console.log(phone.value.match(/\d+/)!=null);
        if(phone.value.length != 13){
          phoneError.textContent = 'Please Enter The valid Phonenumber only with country code (only numbers)';
          valid=false;
          return;
        }

        else if(!(phone.value.charAt(0) == "+")){
          phoneError.textContent = 'Please Enter The valid Phonenumber with country code (ex : +91)';
          valid=false;
          return;
        }
        else if(!(phone.value.charAt(3) >= "6" && phone.value.charAt(3) <= "9") ){
          phoneError.textContent = 'phone number starts with 6 to 9';
          valid=false;
          return;
        }

        else if(!validatePhone(phone.value)){
         
          
          phoneError.textContent ='please enter valid phone number....'
          valid = false;
          return;
        }
      }
    
      // Validate password
      if (!Password.value.trim()) {
        PasswordError.textContent = 'please enter your Password.';
        valid = false;
        return;
      }
    
      else {
         value = Password.value;
         if(!validatePassword(value)){
          PasswordError.textContent ='Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.";'      
          valid = false;
          return;
        }
      }
    
      // Validate ConfirmPassword
      if (!ConfirmPassword.value.trim()) {
        ConfirmPasswordError.textContent = 'please enter your Confirm Password.';
        valid = false;
        return;
      }
    
      if (Password.value != ConfirmPassword.value) { 
        console.log("value",value)
        ConfirmPasswordError.textContent = 'Password does not match.';
        valid = false;
        return;
      }
    
      // Validate Gender
      if (![...gender].some(r => r.checked)) {
        genderError.textContent = 'Please select a gender.';
        valid = false;
        return;
      }
    
      // Validate Country
      if (!country.value) {
        countryError.textContent = 'Please select a country.';
        valid = false;
        return;
      }
    
      // Validate Privacy Policy Checkbox
      if (!privacyPolicy.checked) {
        privacyPolicyError.textContent = 'You must agree to the privacy policy.';
        valid = false;
        return;
      }
    
      //If all fields are valid, submit the form
      if (valid) {
        alert('Form submitted successfully!');
        form.reset();
      }  
          
    };
    function validateEmail(email) {
      console.log(email);
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    
    
    function validatePassword(password) {
      const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
      return passwordRegex.test(password);
    }

    function validatePhone(Phone) {
      console.log(Phone);
      const phoneRegex = /^\+(\d{1,2})\d{10}$/;
      return phoneRegex.test(Phone);
    }


    // function validatePhone(phone) {
    //   const phoneRegex = /^\+(\d{1,2})\d{10}$/; 
    //   return phoneRegex.test(phone);
    // }
   