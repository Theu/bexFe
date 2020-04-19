import React, { useEffect } from "react";
import L from "leaflet";
import bex from "../../../../../assets/berlinoexplorer.png";
import { createMapContainer, createPointers } from "./helpers";
import styles from "./mapRender.module.scss";

const libri = [
  {
    lat: 52.522114,
    lon: 13.413215,
    autor: "Alfred Doblin",
    title: "Berlin Alexander Platz, 1928",
    text:
      "Il decreto sugli affitti è uno straccio di carta. I fitti salgono continuamente. Il ceto medio lavoratore è messo sul lastrico, strozzato, si prepara molto lavoro per gli uscieri",
  },
  {
    lat: 52.512177,
    lon: 13.390686,
    autor: "Helga Schneider",
    title: "Il rogo di Berlino, 1995",
    text:
      "Della vecchia cancelleria imperiale è rimasto in piedi solo il frontale, che appare gravemente danneggiato. Davanti alla facciata e su quelle che un tempo erano aiuole si estende un cumulo di macerie su cui i passeri beccano solerti.",
  },
  {
    lat: 52.507523,
    lon: 13.332389,
    autor: "Christa Wolf",
    title: "Il cielo diviso, 1963",
    text:
      "Che cosa dobbiamo cercare noi? Il cielo almeno non possono dividerlo, disse Manfred beffardo. Il cielo? Tutta questa cupola di speranza e di anelito, di amore e di tristezza? Si invece, disse lei piano. Il cielo è sempre il primo ad essere diviso.",
  },
  {
    lat: 52.499503,
    lon: 13.353358,
    autor: "Christopher Isherwood",
    title: "Addio a berlino, 1939",
    text:
      "C’era una gran folla davanti alla filiale della banca all’angolo di Nollendorfplatz, una moltitudine di uomini con le cartelle di cuoio e di donne con le borse di rete",
  },
  {
    lat: 52.5399079,
    lon: 13.4026331,
    autor: "Ellen Sesta",
    title: "Il Tunnel della Libertà",
    text: "",
  },
];

const MapRender = ({ lat, long, zoom }) => {
  const mapBuilder = {
    mapHolder: null,
    pointerHolder: null,
  };
  const customIcon = L.icon({
    iconUrl: bex,
    iconSize: [64, 20],
    iconAnchor: [17, 46],
  });

  let mapContainer = mapBuilder.mapHolder;

  const initializeMap = () => {
    mapContainer = L.map("map", createMapContainer(lat, long, zoom, L));
  };
  const addPointersToMap = () => createPointers(libri, null, mapContainer, L);

  useEffect(initializeMap, []);
  useEffect(addPointersToMap, [libri, customIcon]);

  return <div id="map" className={styles.mapWrapper} />;
};

export default MapRender;
