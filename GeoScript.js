/**
 * Created by BALASUBRAMANIAM on 06-01-2015.
 */
window.onload=FindLocation;


function FindLocation()
{
  if(navigator.geolocation) {
      console.log("Geo API supported");
      navigator.geolocation.getCurrentPosition(success,failure);

  }
    else
      console.log("Geo API not supported");


}






function success(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    console.log(position.coords.altitude);
    console.log(position.coords.accuracy);
    console.log(position.coords.altitudeAccuracy);
    console.log(position.coords.speed);
    var sectionref = document.getElementById("geoinfo");
    sectionref.innerHTML =
        "<p> Latitude=<mark>" + position.coords.latitude + "</mark></p><br/>" +
        "<p> Longitude=<mark>" + position.coords.longitude + "</mark></p>";



    googleloc = new google.maps.LatLng
    (position.coords.latitude,position.coords.longitude);

    //alert(googleloc);
    var mapoptions={
         center:googleloc,
         zoom:12,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:true,
        mapTypeControlOptions:google.maps.MapTypeControlStyle.DEFAULT

    };

    var gmaparea=document.getElementById("maparea");
    gmap = new google.maps.Map(gmaparea,mapoptions);
    marker = new google.maps.Marker
    ({
        position:googleloc,
        map:gmap,
        title:"I am Here"

    });
   // alert("done");

}

function failure(msg)
{
  console.log(msg);
}
