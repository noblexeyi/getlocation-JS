$('#location-button').click(function () {

    // Google Map API key goes here
    // Change this value to your own Google Maps API key
    var apikey = "AIzaSyCDQRxySPZWHXDe2GkFPOaqzX_rFQ12JOE";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            // console.log(position);
            document.getElementById("printLatLon").innerHTML = 'Longitude: ' + position.coords.longitude + ', Latitude: ' + position.coords.latitude;

            $.get("https://maps.googleapis.com/maps/api/geocode/json?key=" + apikey + "&latlng=" + position.coords.latitude + "," + position.coords.longitude + "&sensor=false", function (data) {

                // console.log(data);
                // document.getElementById("printAddress").innerHTML = "<pre>"+JSON.stringify(data, null, 2)+"</pre>";

                var data = data;

                console.log(data.results.length);
                console.log(data.results[0].formatted_address);

                for (i = 0; i < data.results.length; i++) {

                    console.log("success");

                    // var arrayData = data.results[i].formatted_address;
                    // $('#printAddress').append(arrayData);

                    $('#printAddress').append(i + ". " + data.results[i].formatted_address + "<hr>");

                }

            })

            var img = new Image();
            img.src = "https://maps.googleapis.com/maps/api/staticmap?key=" + apikey + "&center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=13&size=800x400&sensor=false";
            $('#mapImage').html(img);

        });

    }

});