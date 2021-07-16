
var ip = "106.206.195.245";
var api_key = "at_bivtbhWLWWqSq3eNGiSeOzLDAWwM7";
$(function () {
   $.ajax({
       url: "https://geo.ipify.org/api/v1",
       data: {apiKey: api_key, ipAddress: ip},
       success: function(data) {
           $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
           const mapdata = JSON.stringify(data,"",2);
           console.log(data.location.city);
           var mymap = L.map('mapid').setView([data.location.lat, data.location.lng], 13);

            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1Ijoic2Vpa2hjaGlsbGkiLCJhIjoiY2tyNmExcTZjM2RtNTMxbzZ3MjI0dWVnZCJ9.-t-twYtKEmBa3skJ0YUHnA'
            }).addTo(mymap);

            L.marker([data.location.lat, data.location.lng]).addTo(mymap);
                    }


   });
});



//at_bivtbhWLWWqSq3eNGiSeOzLDAWwM7

