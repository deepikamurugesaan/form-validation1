var nameerr=document.getElementById("nameerror");
var emailerr=document.getElementById("emailerror");
var messageerr=document.getElementById("messageerror");
var serviceerr=document.getElementById("serviceerror");
var budgeterr=document.getElementById("budgeterror");


var allerr=document.getElementById("allerror");



function namePerson(){
var name=document.getElementById("fname").value;
localStorage.setItem("ss",name)
if(name.length==0){
    nameerr.innerHTML="Name is required";
    return false
}
if(!name.match(/[A-Za-z.]+$/)){
    nameerr.innerHTML="Enter full name";
    return false;
}
nameerr.innerHTML='<i class="ion-checkmark-circled"></i>'
return true;

}
function emailPerson(){
var email=document.getElementById("email").value;
if(email.length==0){
    emailerr.innerHTML="Email is required";
    return false
}
if(!email.match(/[0-9a-z.@]+$/)){
    emailerr.innerHTML="Enter correct email";
    return false;
}
emailerr.innerHTML='<i class="ion-checkmark-circled"></i>'
return true;
}
function mesPerson(){
    var message=document.getElementById("msg").value;
    localStorage.setItem("sd",message)
    if(message.length==0){
        messageerr.innerHTML="Message is required";
        return false
    }
    if(!message.match(/[0-9a-z.@A-Z/:]+$/)){
        messageerr.innerHTML="Don't use underscore";
        return false;
    }
    messageerr.innerHTML='<i class="ion-checkmark-circled"></i>'
    return true;
    }
    function myservice(){
        var service=document.getElementById("service").value;
        if(service==""){
            serviceerr.innerHTML="Select anyone";
            return false;
        }
        serviceerr.innerHTML='<i class="ion-checkmark-circled"></i>'
        return true
            }
            function mybudget(){
                var budget=document.getElementById("budget").value;
                if(budget==""){
                    budgeterr.innerHTML="Select anyone";
                    return false;
                }
                budgeterr.innerHTML='<i class="ion-checkmark-circled"></i>'
                return true
                    }
    function validate(){
        if(!namePerson()||!emailPerson()||!mesPerson()||!mybudget()||!myservice()){
            allerr.innerHTML="Please fix the error"
            return false;
        }
    }
    
    function another() {

        var Aname=document.getElementById("demo").value
        var Pname=document.getElementById("demo1").value
if(Aname==localStorage.getItem("ss")){}
       else if(Aname!=localStorage.getItem("ss")){
        event.preventDefault();
alert("Nmae is mismatched");
}

if(Pname==localStorage.getItem("sd")){}
else if(Pname!=localStorage.getItem("sd")){
    event.preventDefault();
    alert("Password is mismatched")
}
    }
