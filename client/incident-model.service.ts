import {Injectable} from "angular2/core";
import {Incident, TypeInstance, BlackoutItem, ShipCategory} from "../collections/incident";
import {Incidents} from "../collections/incidents";

@Injectable()
export class IncidentModelService {
    //Todo: get user
    insertIncident(incident: Incident) {
        return Promise.resolve(Incidents.insert(incident, function (err, newIncidentId) {
            if (err) { throw (err); }
            }));
    }

    createIncident(typeName: string, categoryName: string) {
        return <Incident> {
            start: new Date(),
            reportedBy: "Partinium",
            typeInstance: this.newInstanceType(typeName, categoryName)
        };
    }

    updateIncident(incident: Incident) {
        console.log("Update Incident with id: " + incident._id);
        return Promise.resolve(Incidents.update(incident._id,  incident));
    }

    private newInstanceType(typeName: string, categoryName: string) {
        //Todo: how to fill model with other types?
        let blackOutItem = <BlackoutItem> {mainEngine: false, auxiliaryEngine: false, steeringEquipment: false};
        let shipCategory = <ShipCategory> {blackout: blackOutItem};
        let typeInstance = <TypeInstance> {ship: shipCategory};
        return typeInstance;
    }
}
