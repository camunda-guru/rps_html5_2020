/**
 * Created by BALASUBRAMANIAM on 07-01-2015.
 */
    //open(name,version)
var dbref = window.indexedDB.open("EYDB",2);
var db;
dbref.onerror = function(evt)
{
    console.log("Error Message"+evt.target.error);

};

dbref.onsuccess = function(evt)
{
   db = dbref.result;
   console.log("Database Created");


};


dbref.onupgradeneeded=function(evt)
{
    db = evt.target.result;
    var objectStore = db.createObjectStore("Profiles", {keyPath: "CustomerID"});
    console.log("Object Store Created");

};






function AddData()
{
  var custid=Math.round(Math.random(10000)*1000,0);
  var name = document.getElementById("name");
  var photo= document.getElementById("photo");
  var request = db.transaction(["Profiles"], "readwrite")
      .objectStore("Profiles")
      .add({CustomerID: custid, Name:name.value, Photo:photo.value});

   request.onerror=function(evt)
   {
       console.log("Error Message"+evt.target.error);
   }
    request.onsuccess=function(evt)
    {
        console.log("Record added");
    }

}






function ReadData()
{

    var objectStore = db.transaction("Profiles").
        objectStore("Profiles");

    objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
           console.log("Name for id " + cursor.key + " is " +
           cursor.value.Name+cursor.value.Photo);
           cursor.continue();
        }
        else {
            console.log("No more entries!");
        }
    };

}

