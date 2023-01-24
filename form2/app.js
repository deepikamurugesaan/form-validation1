
function validation(){
    var name=document.getElementById("fname").value;

    var pat=name.match(/^[a-zA-Z.]+$/);
    var email1=document.getElementById("email").value;

    var pat1=email1.match(/^[a-z0-9._%+-]+@[a-z0-9.-_ ]+$/);
    var message=document.getElementById("msg").value;
var pat2=message.match(/^[0-9a-zA-Z,.]+$/)
localStorage.setItem("ss",name)

try{
  
if(name=pat){}
    else if(name!=pat)
    {
        event.preventDefault();

        document.getElementById("fname").style.borderColor="red";

        throw("Enter name here");
}
    
if(email==pat1){}
else if(email1!=pat1){
event.preventDefault();
    document.getElementById("email").style.borderColor="red";

    throw("Enter email here");


    
}
if(message==pat2){}
else if(message!=pat2)
{
    event.preventDefault();

    document.getElementById("msg").style.borderColor="red";
throw("Enter correct message");

}
}
catch(e){
    alert(e);
}


}
function another(){
    try{
    var another=document.getElementById("demo").value;
    if(another!=localStorage.getItem("ss"))throw("Name is mismatched");
    }
    catch(e){
        alert(e);
    }
}
