import { createClient } from 'contentful';

const mapBexClient = createClient({
    space: `${process.env.REACT_APP_CONTENTFUL_SPACEID}`,
    accessToken: `${process.env.REACT_APP_CONTENTFUL_KEY}`,
});

const extractTours = (list: any[]): any[] => {
    const transformable = [...list];
    return transformable
        .filter((entry) => !!entry.fields.nomeDelTour)
        .map((tour) => tour.fields);
};

interface PointOfInterest {
    lat: number;
    lon: number;
    title: string;
    text: string;
    images: string[];
    imgCount?: string;
    imgFolderName?: string;
}

const normaliseImageList = (list: any[]): string[] => {
    const mutableList = [...list];
    const imageList = mutableList.map((single) => single.fields.file.url);

    return imageList;
};

const normalisePointOfInterest = (list: any[]): PointOfInterest[] => {
    let mutableList = [...list];
    const pointOfInterest = mutableList.map((single) => {
        const result = {
            lat: single.fields.location.lat,
            lon: single.fields.location.lon,
            title: single.fields.title,
            text: single.fields.text,
            images: normaliseImageList(single.fields.imgs),
            imgCount: String(single.fields.imgs.length),
        };

        return result;
    });

    return pointOfInterest;
};

const normaLiseTours = (list: any[]): any[] => {
    const transformable = [...list];
    const final = transformable.map((singleTour) => {
        const result = {
            tourName: singleTour.nomeDelTour,
            tourCover: {
                tourCardTitle:
                    singleTour.coverCardHomepage.fields.tourCardTitle,
                tourCardIntroText:
                    singleTour.coverCardHomepage.fields.tourCardIntroText,
                coverImage:
                    singleTour.coverCardHomepage.fields.tourCardImg.fields.file
                        .url,
            },
            pointOfInterest: normalisePointOfInterest([
                ...singleTour.singolaTappaDelTour,
            ]),
        };

        return result;
    });
    return final;
};

export const getMapBexClient = async () => {
    const { items } = await mapBexClient.getEntries();
    const toursToBeNormalised = extractTours(items);
    const usableTours = normaLiseTours(toursToBeNormalised);

    return usableTours;
};
