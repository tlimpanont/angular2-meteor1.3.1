import {Injectable} from "angular2/core";

export interface IncidentType {
    id: number;
    name: string;
    category: CategoryType[];
}
export interface CategoryType {
    catId: number;
    catName: string;
    isActive: boolean;
}

@Injectable()
export class IncidentTypeService {
    getIncidentTypes() {
        return INCIDENT_TYPES;
    }
}

var INCIDENT_TYPES: IncidentType[] = [
    {
        "id": 1, "name": "ship", category: [
        {catId: 11, catName: "collision", isActive: false},
        {catId: 12, catName: "blackout", isActive: true},
        {catId: 13, catName: "cableAnchor", isActive: false},
        {catId: 14, catName: "pgsNearMiss", isActive: false},
        {catId: 15, catName: "incidentShip", isActive: false}
    ]
    },
    {
        "id": 2, "name": "environment", category: [
        {catId: 21, catName: "waterPollution", isActive: false},
        {catId: 22, catName: "soilContamination", isActive: false},
        {catId: 23, catName: "airPollution", isActive: false}
    ]
    },
    {
        "id": 3, "name": "manAndBeast", category: [
        {catId: 31, catName: "medicalAssistance", isActive: false},
        {catId: 32, catName: "manOverboard", isActive: false},
        {catId: 33, catName: "marineMammal", isActive: false}
    ]
    },
    {
        "id": 4, "name": "fireExplosion", category: [
        {catId: 41, catName: "fire", isActive: false},
        {catId: 42, catName: "cargoScalding", isActive: false},
        {catId: 43, catName: "explosionHazard", isActive: false}
    ]
    },
    {
        "id": 5, "name": "threat", category: [
        {catId: 51, catName: "harborActions", isActive: false},
        {catId: 52, catName: "threatTerror", isActive: false},
        {catId: 53, catName: "portHealth", isActive: false}
    ]
    },
    {
        "id": 6, "name": "remaining", category: [
        {catId: 61, catName: "bridgesLocksWeir", isActive: false},
        {catId: 62, catName: "communicationFailure", isActive: false},
        {catId: 63, catName: "publicUtilitiesFailure", isActive: false},
        {catId: 64, catName: "conduitCollection", isActive: false},
        {catId: 65, catName: "railIncident", isActive: false},
        {catId: 66, catName: "roadAccident", isActive: false},
        {catId: 67, catName: "aviationAccident", isActive: false},
        {catId: 68, catName: "employeeAccident", isActive: false}
    ]
    },
];

