function initMap() {
   
    var myLocation = new google.maps.LatLng(41.835117, -87.627130);
    
    var mapOptions = {
        center: myLocation,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_CENTER
        }
    };
    
    var myMap = new google.maps.Map(document.getElementById('map'), mapOptions);
    
    var marker = new google.maps.Marker({
        position: myLocation,
        map: myMap,
        animation: google.maps.Animation.DROP,
        icon: 'images/italy.jpg'
    });
    

    var contentString = '<h1>Location</h1>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    
    google.maps.event.addListener(marker, 'mouseover', function() {
        infowindow.open(myMap, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initMap);
