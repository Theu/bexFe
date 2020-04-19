//La Carta



var mymap = L.map('mapid', {

    center: [52.518409, 13.401063],
    zoom: 11,
    zoomControl: true
});






//carta di base




L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiaXJlZyIsImEiOiJjam44dGQyY2wwaXZnM3BsbWM5YmZiYWI3In0.6bacYHKPwmPPM1l8TbBruA'
}).addTo(mymap);


//stile e popup del muro
var myStyle = {
    "color": "#a82cc1",
    "weight": 5,
    "opacity": 0.65
};

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
};

var mauerGeoJSON = L.geoJson (mauer,{

    style: myStyle,
    onEachFeature: onEachFeature

}).addTo(mymap);

//libri e pop up

var libri =	[

[52.522114, 13.413215,"<b>Alfred Doblin - 'Berlin Alexander Platz', 1928</b><br><i>'Il decreto sugli affitti è uno straccio di carta. I fitti salgono continuamente. Il ceto medio lavoratore è messo sul lastrico, strozzato, si prepara molto lavoro per gli uscieri'</i>"],
[52.512177, 13.390686,"<b>Helga Schneider - 'Il rogo di Berlino', 1995</b><br><i>'Della vecchia cancelleria imperiale è rimasto in piedi solo il frontale, che appare gravemente danneggiato. Davanti alla facciata e su quelle che un tempo erano aiuole si estende un cumulo di macerie su cui i passeri beccano solerti.'</i>"],
[52.507523, 13.332389, "<b>Christa Wolf - 'Il cielo diviso', 1963</b><br><i>'Che cosa dobbiamo cercare noi? Il cielo almeno non possono dividerlo, disse Manfred beffardo. Il cielo? Tutta questa cupola di speranza e di anelito, di amore e di tristezza? Si invece, disse lei piano. Il cielo è sempre il primo ad essere diviso.'</i>"],
[52.499503, 13.353358, "<b>Christopher Isherwood - 'Addio a Berlino', 1939</b><br><i>'C’era una gran folla davanti alla filiale della banca all’angolo di Nollendorfplatz, una moltitudine di uomini con le cartelle di cuoio e di donne con le borse di rete'</i>"],
[52.5399079,13.4026331, "<b>Ellen Sesta - '<i>Il Tunnel della Libertà</i>'<b>"],
[52.5242853,13.3998795, "<b>Hans Fallada - '<i>Ognuno muore solo</i>'<b>"],
[52.508324, 13.333232, "<b>K. Hermann e H. Rieck - 'Noi, i ragazzi dello zoo di Berlino', 1978</b><br><i>'Era una stazione enormemente squallida. C’erano barboni buttati nel loro vomito e ubriachi dappertutto. Che ne sapevo che entro un paio di mesi avrei passato qui tutti i pomeriggi?'</i>"],
[52.537964, 13.394967, "<b>Anna Funder - '<i>C'era una volta la DDR</i>'<b>"],
[52.515614, 13.485589, "<b>Simon Urban - '<i>Plan D</i>'<b>"],
[52.541703, 13.412143, "<b>Wladimir Kaminer - '<i>Schönhauser Allee</i>'<b>"],
[52.512694, 13.381113, "<b>Timur Vermes - 'Er ist wieder da', 2012</b><br><i>'Lei si è mai chiesto perché il popolo mi segue? Perché in fondo siete tutti come me…abbiamo gli stessi valori…'</i>"]

	];

var bookIcon = L.icon ({

				iconUrl: 'openbook.png',
	});

	for (var i = 0; i < libri.length; i++) {

				var lat = libri[i][0];
				var lon = libri[i][1];
				var name = libri[i][2];


				var marker = L.marker([lat,lon],

								{icon:bookIcon}

									 );

				marker.bindPopup(name);

				marker.addTo(mymap);
			};


 //Codici per il logo

 var logo = L.control({position: 'topright'});
    logo.onAdd = function(mymap){
        var div = L.DomUtil.create('div', 'myclass');
        div.innerHTML= '<img src= "berlinoexplorer.png"><br><h1><span style="padding-left:85px; font-family:courier;">Letteratour</h1>';
        return div;
    }
    logo.addTo(mymap);


 var logo1 = L.control({position: 'bottomright'});
    logo1.onAdd = function(mymap){
        var div = L.DomUtil.create('div', 'myclass');
        div.innerHTML= 'Map by Irene Gozzelino <br>Berlin Wall WFS:<a href="https://www.govdata.de/web/guest/daten/-/details/8cd050c5-e3ff-369e-af46-a62f8a7f7140" target="_blank"> GovData</a><br>Icons by <a href="https://www.freepik.com" title="Freepik" target="_blank">Freepik</a>';
        return div;
    }
    logo1.addTo(mymap);








