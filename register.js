var db='';
window.addEventListener('load',function()
{

   //create index db
   dbRef=window.indexedDB.open('bankdb',1.0);

    dbRef.onerror = function(evt)
    {
        console.log("Error Message"+evt.target.error);

    };

    dbRef.onsuccess = function(evt)
    {
        db = dbRef.result;
        console.log("Database Created");

    };
    dbRef.onupgradeneeded=function(evt)
    {
        db = evt.target.result;
        var objectStore = db.createObjectStore("Customer", {keyPath: "CreditCardNo"});
        console.log("Object Store Created");

    };

   scrollFlag=false;
   selectRef=this.document.querySelector(".accounttype");
   var option=this.document.createElement("option");
   var optionText=this.document.createTextNode("Select Your Account Type");
   option.appendChild(optionText);
   selectRef.appendChild(option); 
   //lambda or arrow function to read array
    data.forEach(element => {
        //read element by key
        this.console.log(element.type);
        option=this.document.createElement("option");
        optionText=this.document.createTextNode(element.type);
        option.appendChild(optionText);
        selectRef.appendChild(option); 

    });


    buttonRef=document.querySelector('button[type=submit]')
    window.addEventListener('change',function()
    {

       checkbox=document.querySelector("#agree:checked");
       if((checkbox)&&(scrollFlag))
        {
         console.log('checked');
         buttonRef.disabled=false;
        }
        else
        {
            scrollFlag=false;
            buttonRef.disabled=true;
        }

    })



})


function autoTab(field1, len, field2) {
	if (document.getElementById(field1).value.length == len) {
		document.getElementById(field2).focus();
		}
}

function createuser()
{
       actType=document.querySelector('.accounttype')
       cvv=document.querySelector('.cvv');
       part1=document.querySelector('#part1');
       part2=document.querySelector('#part2');
       part3=document.querySelector('#part3');
       part4=document.querySelector('#part4');
       this.console.log('Credit Card Number=',part1.value,part2.value,part3.value,part4.value);
       //create json object
       var accountInfo={
           actType:actType.value,
           cvvNo:cvv.value,
           creditCardNumber:part1.value+part2.value+part3.value+part4.value
       }

    var request = db.transaction(["Customer"], "readwrite")
        .objectStore("Customer")
        .add({CreditCardNo:accountInfo.creditCardNumber, CVV:cvv.value, AccountType:actType.value});

    request.onerror=function(evt)
    {
        console.log("Error Message"+evt.target.error);
    }
    request.onsuccess=function(evt)
    {
        console.log("Record added");
    }


       return false;
   

}

function scrollDetect() {
 if(document.querySelector('.terms').scrollHeight >160)
 {
     scrollFlag=true;
     console.log(scrollFlag);
 }
}
