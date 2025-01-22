export const validate = (fullname, email, password) => {
   if(fullname !== null)
   {
      if (fullname.length === 0) {
         return "Full Name cannot be empty.";
      }
   }
   else{
   }
       
   const emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
   const passwordVal = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&\-+=()])\S{8,20}$/.test(password);

   if (!emailVal) {
       return "Email is not valid";
   }
   if (!passwordVal) {
       return "Password is not valid";
   }

   return null;
};