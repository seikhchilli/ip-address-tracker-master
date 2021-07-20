
var ip, domain;
var api_key = "at_bivtbhWLWWqSq3eNGiSeOzLDAWwM7";
var myicon = L.icon({
    iconUrl: 'images/icon-location.svg'
});
var mymap;


function mapload(){
    var ip, domain;
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(document.getElementById("search").value )){
        ip = document.getElementById("search").value;
        console.log("ip");
    }
    else if(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/.test(document.getElementById("search").value)){
        domain = document.getElementById("search").value;
        console.log("domain");
    }
    else if(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/.test(document.getElementById("search").value)){
        domain = document.getElementById("search").value;
        console.log("domain");
    }
    else{
        alert("Invalid IP or Domain");
    }

    

    $(function () {
        $.ajax({
            url: "https://geo.ipify.org/api/v1",
            data: {apiKey: api_key, ipAddress: ip, domain: domain},
            success: function(data) {
               // $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
               // const mapdata = JSON.stringify(data,"",2);
                console.log(data);
                document.getElementById("ip-stats").innerHTML = data.ip;
                document.getElementById("location-stats").innerHTML = data.location.city + ", " + data.location.country + "<br>" + data.location.postalCode;
                document.getElementById("timezone-stats").innerHTML = data.location.timezone;
                document.getElementById("isp-stats").innerHTML = data.isp;
                mymap.remove();
                mymap = new L.map('mapid', { zoomControl: false}).setView([data.location.lat, data.location.lng], 13);
     
                 L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                     maxZoom: 18,
                     id: 'mapbox/streets-v11',
                     tileSize: 512,
                     zoomOffset: -1,
                     accessToken: 'pk.eyJ1Ijoic2Vpa2hjaGlsbGkiLCJhIjoiY2tyNmExcTZjM2RtNTMxbzZ3MjI0dWVnZCJ9.-t-twYtKEmBa3skJ0YUHnA'
                 }).addTo(mymap);
                 L.marker([data.location.lat, data.location.lng], {icon: myicon}).addTo(mymap);
           
             }
     
     
     
     
        });
     });
}

$(function () {
    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: {apiKey: api_key, ipAddress: ip},
        success: function(data) {
           // $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
           // const mapdata = JSON.stringify(data,"",2);
            console.log(data);
            document.getElementById("ip-stats").innerHTML = data.ip;
            document.getElementById("location-stats").innerHTML = data.location.city + ", " + data.location.country + "<br>" + data.location.postalCode;
            document.getElementById("timezone-stats").innerHTML = data.location.timezone;
            document.getElementById("isp-stats").innerHTML = data.isp;
           
            mymap = new L.map('mapid',{ zoomControl: false}).setView([data.location.lat, data.location.lng], 13);
 
             L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                 maxZoom: 18,
                 id: 'mapbox/streets-v11',
                 tileSize: 512,
                 zoomOffset: -1,
                 accessToken: 'pk.eyJ1Ijoic2Vpa2hjaGlsbGkiLCJhIjoiY2tyNmExcTZjM2RtNTMxbzZ3MjI0dWVnZCJ9.-t-twYtKEmBa3skJ0YUHnA'
             }).addTo(mymap);
             L.marker([data.location.lat, data.location.lng], {icon: myicon}).addTo(mymap);
       
         }
 
 
 
 
    });
 });





//at_bivtbhWLWWqSq3eNGiSeOzLDAWwM7

