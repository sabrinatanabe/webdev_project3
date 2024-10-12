function initMap(){
	//alert('it works');
	var el=document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.835117, -87.627130);
	var mapOptions = {
		center: myLocation,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};
	
	var myMap = new google.maps.Map(el, mapOptions);
	
	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap
		animation: google.maps.Animation.DROP,
		icon: 'italy.jpg'
	});
	
	var map=new google.maps.Map(document.getElementById('map),	{
			center: {lat: -34.397, lng: 150.644},
			zoom: 8
		});
}	

google.maps.event.addDomListener(window, 'load', init);