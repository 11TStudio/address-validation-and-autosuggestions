export interface AddressResponse {
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
export interface ErrorCode {
    ComponentRef: string;
    ErrorCode: string;
    ErrorSeverity: string;
}
export interface Validation {
    status: string;
    message: string;
    address_response: AddressResponse[];
    count_add?: number;
    transaction_id?: string;
    error_code?: ErrorCode[];
    error_count?: number;
}
