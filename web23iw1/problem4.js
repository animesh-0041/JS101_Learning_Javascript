// Problem 4: Given stored username and password and input username and password, Print if the user can log in or not.

let database_username="fw23_001";
let database_pass="@a4001";
let user_username="fw23_0041";
let user_pass="@a4011";
if(database_username==user_username){
  if(database_pass==user_pass){
    console.log("Successful login");
  }else{
    console.log("wrong password!");
  }
  
}else{
  console.log("Username not match!");
}