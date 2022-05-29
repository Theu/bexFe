export interface UserSelectedPoints {
    lat: number;
    lon: number;
    title: string;
    text: string;
    images: string[];
    imgCount?: string;
    imgFolderName?: string;
}

export interface Coordinates {
    lat: number;
    lng: number;
}