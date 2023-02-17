
interface IAccessories {
    id: string;
    type: string;
    name: string;
    car_id: string;
}

export interface IPhotos {
    id: string;
    photo: string;
    car_id: string;
}

export interface CarDTO {
    id: string,
    brand: string,
    name: string,
    about: string,
    fuel_type: string,
    thumbnail: string,
    period: string,
    price: number
    accessories: IAccessories[];
    photos: IPhotos[];
}
 