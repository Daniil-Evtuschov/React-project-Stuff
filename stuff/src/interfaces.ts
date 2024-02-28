export interface InitialStateInt {
    trendsProductCards: ProductCardInt[];
    lessProductCards: ProductCardInt[];
    worthSeeingProductCards:ProductCardInt[];
    singleCard?: ProducetCardInt;
}

export interface ActionsTypInt{
    type: string;
    payload?:ProductCardInt[];
}

export interface ProductCardInt {
    category: {
        creationAt: string;
        id: number;
        image: string;
        name: string;
        updatedAt: string;
    };
    creationAt: string;
    description: string;
    id: number;
    images: string[];
    price: number;
    title: string;
    updatedAt: string;
}

export interface WorthSeeingProductCardInt {
    creationAt: string;
    id: number;
    image: string;
    name: string;
    updatedAt: string;
}

export interface ProducetCardInt{
    id:number
    img:string;
    title:string;
    name:string;
    price:number | string;
    newPrice:number | string;
    description:string
}