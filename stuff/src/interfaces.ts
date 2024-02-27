export interface InitialStateInt {
    trendsProductCards: ProductCardInt[];
    lessProductCards: ProductCardInt[]
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

