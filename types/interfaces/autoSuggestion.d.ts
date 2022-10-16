export interface IAddress {
    latitude: number;
    longitude: number;
    coordinateSystem: string;
    perspectiveCode: string;
    reliability: number;
    detectedLanguage: string;
    province: string;
    isComplete: boolean;
    string: string;
    searchBarString: string;
    houseNumber: string;
    streetName: string;
    municipalityName: string;
    postalCode: string;
}
export interface ITopSuggestion {
    address: IAddress;
}
export interface IResponse {
    sequenceNumber: number;
    topSuggestions: ITopSuggestion[];
}
export interface IAutoSuggestion {
    response: Response;
}
