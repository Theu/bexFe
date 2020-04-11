import React from 'react';
import styles from './pointers.module.scss';

var libri = [
    {
        lat: 52.522114,
        lon: 13.413215,
        autor: 'Alfred Doblin',
        title: 'Berlin Alexander Platz, 1928',
        text: 'Il decreto sugli affitti è uno straccio di carta. I fitti salgono continuamente. Il ceto medio lavoratore è messo sul lastrico, strozzato, si prepara molto lavoro per gli uscieri'
    },
    {
        lat: 52.512177,
        lon: 13.390686,
        autor: 'Helga Schneider',
        title: 'Il rogo di Berlino, 1995',
        text: 'Della vecchia cancelleria imperiale è rimasto in piedi solo il frontale, che appare gravemente danneggiato. Davanti alla facciata e su quelle che un tempo erano aiuole si estende un cumulo di macerie su cui i passeri beccano solerti.'
    },
    {
        lat: 52.507523,
        lon: 13.332389,
        autor: 'Christa Wolf',
        title: 'Il cielo diviso, 1963',
        text: 'Che cosa dobbiamo cercare noi? Il cielo almeno non possono dividerlo, disse Manfred beffardo. Il cielo? Tutta questa cupola di speranza e di anelito, di amore e di tristezza? Si invece, disse lei piano. Il cielo è sempre il primo ad essere diviso.'
    },
    {
        lat: 52.499503,
        lon: 13.353358,
        autor: 'Christopher Isherwood',
        title: 'Addio a berlino, 1939',
        text: 'C’era una gran folla davanti alla filiale della banca all’angolo di Nollendorfplatz, una moltitudine di uomini con le cartelle di cuoio e di donne con le borse di rete'
    },
    {
        lat: 52.5399079,
        lon: 13.4026331,
        autor: 'Ellen Sesta',
        title: 'Il Tunnel della Libertà',
        text: ''
    },
    [52.5242853, 13.3998795, "<b>Hans Fallada - '<i>Ognuno muore solo</i>'<b>"],
    {
        lat: 52.499503,
        lon: 13.353358,
        autor: 'Christopher Isherwood',
        title: 'Addio a berlino, 1939',
        text: 'C’era una gran folla davanti alla filiale della banca all’angolo di Nollendorfplatz, una moltitudine di uomini con le cartelle di cuoio e di donne con le borse di rete'
    },
    [52.508324, 13.333232, "<b>K. Hermann e H. Rieck - 'Noi, i ragazzi dello zoo di Berlino', 1978</b><br><i>'Era una stazione enormemente squallida. C’erano barboni buttati nel loro vomito e ubriachi dappertutto. Che ne sapevo che entro un paio di mesi avrei passato qui tutti i pomeriggi?'</i>"],
    {
        lat: 52.499503,
        lon: 13.353358,
        autor: 'Christopher Isherwood',
        title: 'Addio a berlino, 1939',
        text: 'C’era una gran folla davanti alla filiale della banca all’angolo di Nollendorfplatz, una moltitudine di uomini con le cartelle di cuoio e di donne con le borse di rete'
    },
    [52.537964, 13.394967, "<b>Anna Funder - '<i>C'era una volta la DDR</i>'<b>"],
    {
        lat: 52.499503,
        lon: 13.353358,
        autor: 'Christopher Isherwood',
        title: 'Addio a berlino, 1939',
        text: 'C’era una gran folla davanti alla filiale della banca all’angolo di Nollendorfplatz, una moltitudine di uomini con le cartelle di cuoio e di donne con le borse di rete'
    },
    [52.515614, 13.485589, "<b>Simon Urban - '<i>Plan D</i>'<b>"],
    {
        lat: 52.499503,
        lon: 13.353358,
        autor: 'Christopher Isherwood',
        title: 'Addio a berlino, 1939',
        text: 'C’era una gran folla davanti alla filiale della banca all’angolo di Nollendorfplatz, una moltitudine di uomini con le cartelle di cuoio e di donne con le borse di rete'
    },
    [52.541703, 13.412143, "<b>Wladimir Kaminer - '<i>Schönhauser Allee</i>'<b>"],
    {
        lat: 52.499503,
        lon: 13.353358,
        autor: 'Christopher Isherwood',
        title: 'Addio a berlino, 1939',
        text: 'C’era una gran folla davanti alla filiale della banca all’angolo di Nollendorfplatz, una moltitudine di uomini con le cartelle di cuoio e di donne con le borse di rete'
    },
    [52.512694, 13.381113, "<b>Timur Vermes - 'Er ist wieder da', 2012</b><br><i>'Lei si è mai chiesto perché il popolo mi segue? Perché in fondo siete tutti come me…abbiamo gli stessi valori…'</i>"],
    {
        lat: 52.499503,
        lon: 13.353358,
        autor: 'Christopher Isherwood',
        title: 'Addio a berlino, 1939',
        text: 'C’era una gran folla davanti alla filiale della banca all’angolo di Nollendorfplatz, una moltitudine di uomini con le cartelle di cuoio e di donne con le borse di rete'
    },
];

const Pointers = () => {
    return (
        <div className={styles.pointersWrapper}>
            <div className={styles.infoBox}>box</div>
            <div className={styles.infoBox}>box</div>
            <div className={styles.infoBox}>box</div>
            <div className={styles.infoBox}>box</div>
            <div className={styles.infoBox}>box</div>
            <div className={styles.infoBox}>box</div>
        </div>
    )
}

export default Pointers
