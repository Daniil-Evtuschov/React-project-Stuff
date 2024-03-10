export interface InitialStateInt {
    trendsProductCards: ProductCardInt[];
    lessProductCards: ProductCardInt[];
    worthSeeingProductCards:ProductCardInt[];
    singleCard?: ProductCardInt | null;
    otherProductCards:ProductCardInt[];
    searchProductCard:ProductCardInt[];
    relatedproducts:ProductCardInt[];
}

export interface ActionsTypInt{
    type: string;
    payload?:any;
}

export interface ProductCardInt {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
        count: number;
        rate: number;
    };
    title: string;
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
    category:string;
    price:number | string;
    newPrice:number | string;
    description:string;
    allCardkeys:ProductCardInt;
}