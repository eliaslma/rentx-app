interface IAccessories {
    id: string;
    type: string;
    name: string;
}

export interface IPhotos {
    id: string;
    photo: string;
}

export interface CarDTO {
    id: string,
    brand: string,
    name: string,
    about: string,
    fuel_type: string,
    thumbnail: string,
    rent: {
        period: string,
        price: number
    },
    accessories: {
        type: string,
        name: string,
    }[];
    photos: string[];
}
