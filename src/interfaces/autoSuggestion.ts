export interface Address {
    detectedLanguage: string;
    province: string;
    string: string;
    searchBarString: string;
    municipalityName: string;
    postalCode: string;
    latitude?: number;
    longitude?: number;
    coordinateSystem: string;
    perspectiveCode: string;
    reliability?: number;
    streetName: string;
    houseNumber?: string;
    isComplete?: boolean;
}

export interface Dutch {
    latitude: number;
    longitude: number;
    coordinateSystem: string;
    perspectiveCode: string;
    reliability: number;
    detectedLanguage: string;
    province: string;
    string: string;
    searchBarString: string;
    streetName: string;
    municipalityName: string;
    postalCode: string;
}

export interface French {
    latitude: number;
    longitude: number;
    coordinateSystem: string;
    perspectiveCode: string;
    reliability: number;
    detectedLanguage: string;
    province: string;
    string: string;
    searchBarString: string;
    streetName: string;
    municipalityName: string;
    postalCode: string;
}

export interface Message {
    key: string;
    args: string[];
}

export interface TopSuggestion {
    address: Address;
    dutch?: Dutch;
    french?: French;
    messages?: Message[];
}

export interface Response {
    sequenceNumber: number;
    topSuggestions: TopSuggestion[];
}



export interface IAutoSuggestion {
    response: Response;
}