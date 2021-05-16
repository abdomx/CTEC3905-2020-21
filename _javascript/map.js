// Map function to display a map on the index pag as part of contact us

function myMap()
{
	// Give the google map co-ordinations to call google API map
	var mapProp= 
	{

		center:new google.maps.LatLng(52.5130551,-2.0362411),

		zoom:15,
	};
	
	// Looking for googleMap tag ID as part of HTML 
	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

src="https://maps.googleapis.com/maps/api/js?key=&callback=myMap";