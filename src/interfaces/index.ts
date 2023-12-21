export interface Coin {
    PRICE: number;
    HIGHDAY: number;
    LOWDAY: Number;
    CHANGEPCT24HOUR: Number;
    IMAGEURL: string;
    LASTUPDATE: Number;
}

export interface CoinFullDataResponse {
    DISPLAY: any;
}

export interface CoinResponse {
    Data: Datum[];
}

export interface Datum {
    CoinInfo: CoinInfo;
}

export interface CoinInfo {
    Id: string;
    Name: string;
    FullName: string;
}

export interface Currency {
    id: string;
    name: string;
}

export interface CoinSelect {
    id: string;
    name: string;
}