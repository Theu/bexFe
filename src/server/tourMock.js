import {
    alexanderPlatzImg as alexanderPlatz,
    addioABerlinoImg as addioABerlino,
    wiederDaImg as wiederDa,
    cieloDivisoImg as cieloDiviso,
    rogoBerlinoImg as rogoBerlino,
} from './imgMock';

export const tourMock = {
    mapMock: {
        center: [52.519409, 13.38],
        zoom: 13,
    },
    mockTourContent: {
        titleTest: 'Letteratour',
        introText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    pointOfInterest: [
        {
            lat: 52.522114,
            lon: 13.413215,
            autor: 'Alfred Doblin',
            title: 'Berlin Alexander Platz, 1928',
            text:
                'Il decreto sugli affitti è uno straccio di carta. I fitti salgono continuamente. Il ceto medio lavoratore è messo sul lastrico, strozzato, si prepara molto lavoro per gli uscieri',
            img: alexanderPlatz,
        },
        {
            lat: 52.512177,
            lon: 13.390686,
            autor: 'Helga Schneider',
            title: 'Il rogo di Berlino, 1995',
            text:
                'Della vecchia cancelleria imperiale è rimasto in piedi solo il frontale, che appare gravemente danneggiato. Davanti alla facciata e su quelle che un tempo erano aiuole si estende un cumulo di macerie su cui i passeri beccano solerti.',
            img: rogoBerlino,
        },
        {
            lat: 52.507523,
            lon: 13.332389,
            autor: 'Christa Wolf',
            title: 'Il cielo diviso, 1963',
            text:
                'Che cosa dobbiamo cercare noi? Il cielo almeno non possono dividerlo, disse Manfred beffardo. Il cielo? Tutta questa cupola di speranza e di anelito, di amore e di tristezza? Si invece, disse lei piano. Il cielo è sempre il primo ad essere diviso.',
            img: cieloDiviso,
        },
        {
            lat: 52.499503,
            lon: 13.353358,
            autor: 'Christopher Isherwood',
            title: 'Addio a berlino, 1939',
            text:
                'C’era una gran folla davanti alla filiale della banca all’angolo di Nollendorfplatz, una moltitudine di uomini con le cartelle di cuoio e di donne con le borse di rete',
            img: addioABerlino,
        },
        {
            lat: 52.512694,
            lon: 13.381113,
            autor: 'Timur Vermes',
            title: 'Er ist wieder da',
            text:
                'Lei si è mai chiesto perché il popolo mi segue? Perché in fondo siete tutti come me…abbiamo gli stessi valori…',
            img: wiederDa,
        },
    ],
};
