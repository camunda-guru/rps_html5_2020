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
	addressref=document.getElementById("address");
	
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    console.log(position.coords.altitude);
    console.log(position.coords.accuracy);
    console.log(position.coords.altitudeAccuracy);
    console.log(position.coords.speed);

    var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
   
    googleloc = new google.maps.LatLng
    (position.coords.latitude,position.coords.longitude);

    //alert(googleloc);
    var mapoptions={
         center:googleloc,
         zoom:15,
        mapTypeId:google.maps.MapTypeId.SATELLITE,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        },
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
