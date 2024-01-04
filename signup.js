
//for check password is same or not
var p =document.getElementById("pswd");
var c =document.getElementById("conpswd");
var submit =document.getElementsByClassName("submit")[0];
submit.onclick= function(){
 if(p.value == c.value ){
     return true;
 }else{
     alert("**password doesn't match");
     return false
 }
}
// end js for pass
 
//fxn for sing up 
function showSingup(){
 ShowHideForm("register","Show");
 ShowHideForm("login","Hide");
 ShowHideForm("forgotpass","Hide");
}
//fxn for sing in 
function showSignin(){
 ShowHideForm("register","Hide");
 ShowHideForm("login","Show");
 ShowHideForm("forgotpass","Hide");
}
//fxn for forget pass 
function showreset(){
 ShowHideForm("register","Hide");
 ShowHideForm("login","Hide");
 ShowHideForm("forgotpass","Show");
}

function ShowHideForm(FormID, ShowOrHide){
 var form = document.getElementById(FormID);
 if( ShowOrHide == "Show"){
     form.style.display="block";
 }else{
     form.style.display="none";
 }
}