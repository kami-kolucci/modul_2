export interface IRickandMorty {
    info:    IInfo;
    results: IResult[];
}

export interface IInfo {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface IResult {
    id:       number;
    name:     string;
    status:   Status;
    species:  Species;
    type:     string;
    gender:   IGender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export enum IGender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface ILocation {
    name: string;
    url:  string;
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
