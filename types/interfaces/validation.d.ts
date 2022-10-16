export interface IAddressResponse {
    Score?: any;
    StreetName: string;
    StreetNumber: string;
    BoxNumber?: any;
    PostalCode: string;
    MunicipalityName: string;
    CountryName: string;
    Latitude: string;
    Longitude: string;
    Label: string[];
}
export interface IValidation {
    status: string;
    message: string;
    address_response: IAddressResponse[];
    count_add: number;
    transaction_id: string;
    error_code: any[];
    error_count: number;
}
