	var my_long;
	var my_lat;
	
	var limit = 5000;

  var mapOptions = {
      center: new google.maps.LatLng(-34.397, -58.394927199999984),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  var map = new google.maps.Map($('#bigMap')[0], mapOptions);
  
  function HomeControl(controlDiv, map) {

	  // Set CSS styles for the DIV containing the control
	  // Setting padding to 5 px will offset the control
	  // from the edge of the map
	  controlDiv.style.padding = '6px';
	  controlDiv.style.paddingRight = '20px';
	
	  // Set CSS for the control border
	  var controlUI = document.createElement('div');
	  controlUI.style.backgroundColor = 'white';
	  controlUI.style.borderStyle = 'solid';
	  controlUI.style.borderWidth = '2px';
	  controlUI.style.cursor = 'pointer';
	  controlUI.style.textAlign = 'center';
	  controlUI.title = 'Ocultar el Mapa';
	  controlDiv.appendChild(controlUI);
	
	  // Set CSS for the control interior
	  var controlText = document.createElement('div');
	  controlText.style.fontFamily = 'Arial,sans-serif';
	  controlText.style.fontSize = '12px';
	  controlText.style.paddingLeft = '4px';
	  controlText.style.paddingRight = '4px';
	  controlText.style.marginRight = '20px';
	  controlText.innerHTML = '<b>Ocultar Mapa</b>';
	  controlUI.appendChild(controlText);
	
	  // Setup the click event listeners: simply set the map to
	  // Chicago
	  google.maps.event.addDomListener(controlUI, 'click', function() {
	    $('#bigMap').hide();
	   	$('#hideMapButton').hide();
	   	$('#text').show();
	  });
	
	}
  
  var homeControlDiv = document.createElement('div');
  var homeControl = new HomeControl(homeControlDiv, map);
  homeControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);

  google.maps.event.addDomListener(window, 'resize', function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
  });      
  
  var infowindow = new google.maps.InfoWindow();
		google.maps.event.addListener(map, 'click', function() { 
		    infowindow.close();
	});

  if (navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(function (position) {
    		my_long	= position.coords.longitude;
    		my_lat	= position.coords.latitude;
    		var center = new google.maps.LatLng(my_lat,my_long);
    		map.setCenter(center);
    		drawMap();
    		$.getJSON('data/ms-data.json', parseJSON);
    });
  }
  
	function drawMap() {
      var latLngA = new google.maps.LatLng(my_lat, my_long);
      var marker = new google.maps.Marker({
                position: latLngA,
                map: map,
                animation: google.maps.Animation.DROP,
            });

      var populationOptions = {
        strokeColor: '#3b5998',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#3b5998',
        fillOpacity: 0.05,
        map: map,
        center: new google.maps.LatLng(my_lat, my_long),
        radius: limit
      };

      var cityCircle = new google.maps.Circle(populationOptions);      
	}
	
	function parseJSON(data) {
		var from = new google.maps.LatLng(my_lat, my_long);
		console.log(from);
	  $.each(data, function(key, val) {
	  	
	    var to = new google.maps.LatLng(val.lat, val.lon);
	    //console.log(to);

      var distance = google.maps.geometry.spherical.computeDistanceBetween (from, to);
  		//console.log(distance);
	    if (distance < limit)
          {
            var marker = new google.maps.Marker({
                position: to,
                map: map,
                animation: google.maps.Animation.DROP,
            });
            google.maps.event.addListener(marker, 'click', function() {
              var contentString = '<div id="content">'+
                                    '<div id="siteNotice">'+
                                    '</div>'+
                                    '<h3 id="firstHeading" class="firstHeading">' + val.institucion +'</h3>'+
                                    '<div id="bodyContent">'+
                                      '<p>'+ val.domicilio + '</p>'+
                                    '</div>'+
                                  '</div>';
              infowindow.setContent(contentString);
              infowindow.open(map, marker);
            });            
          }
	  });
	}
	
	$('#showMapButton').click(function() {
	  $('#bigMap').show();
	  $('#hideMapButton').show();
	  $('#text').hide();
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
	});
	
	


      
