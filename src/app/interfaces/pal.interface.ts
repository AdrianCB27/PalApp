export interface Pal {
    id:          string;
    name:        string;
    type:        string;
    abilities:   string[];
    createdAt:   string;
    trainerTips: string[];
    image:       string;
}
export interface PalToPost {
    name:        string;
    type:        string;
    abilities:   string[];
    trainerTips: string[];
    image:       string;
}
