export interface Incident {
    _id?: string;
    start?: Date;
    end?: Date;
    reportedBy?: string;
    location?: Location;
    vessel?: Vessel;
    typeInstance?: TypeInstance;
    timeline?: TimeLineItem[];
}

/*
 * Incident types
 */
export interface TypeInstance {
    ship?: ShipCategory;
    environment?: EnvironmentCategory;
    manAndBeast?: ManAndBeastCategory;
    fireExplosion?: FireExplosionCategory;
    threat?: ThreatItem;
    remaining?: RemainingItem;
}

/*
 * Incident categories
 */
export interface ShipCategory {
    collision?: CollisionItem;
    blackout?: BlackoutItem;
    cableAnchor?: CableAnchorItem;
    pgsNearMiss?: PgsNearMissItem;
    incidentShip?: IncidentShipItem;
}

export interface EnvironmentCategory {
    waterPollution?: WaterPollutionItem;
    soilContamination?: SoilContaminationitem;
    airPollution?: AirPollutionItem;
}

export interface ManAndBeastCategory {
    // Todo: add details
}
export interface FireExplosionCategory {
    // Todo: add details
}
export interface ThreatItem {
    // Todo: add details
}
export interface RemainingItem {
    // Todo: add details
}

/*
 * Ship
 */
export interface CollisionItem {
    // Todo: add details
}

export interface BlackoutItem {
    mainEngine: boolean;
    auxiliaryEngine: boolean;
    steeringEquipment: boolean;
}

export interface CableAnchorItem {
    // Todo: add details
}

export interface PgsNearMissItem {
    // Todo: add details
}

export interface IncidentShipItem {
    // Todo: add details
}

/*
 * Environment
 */
export interface WaterPollutionItem {
    // Todo: add details
}

export interface SoilContaminationitem {
    // Todo: add details
}

export interface AirPollutionItem {
    // Todo: add details
}

/*
 * Location
 */
export interface Location {
    name: string;
    type: string;
    x: number;
    y: number;
}

/*
 * Vessel
 */
export interface Vessel {
    id: string;
    name: string;
    type: string;
}

/*
 * Timeline
 */
export interface TimeLineItem {
    type: string;
    date: Date;
    employee: string;
}

export interface TimeLineRemark extends TimeLineItem {
    reportedBy: string;
    description: string;
}

export interface TimeLineEvent extends TimeLineItem {
    change: string;
}
