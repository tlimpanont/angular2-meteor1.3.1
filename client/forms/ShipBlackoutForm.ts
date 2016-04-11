import {Component, EventEmitter, Output} from "angular2/core";
import {FormBuilder, ControlGroup} from "angular2/common";
import {Translate} from "../incident-type.pipe";
import {Incidents} from "../../collections/incidents";
import {IncidentModelService} from "../incident-model.service";
import {RouteParams} from "angular2/router";
import {Incident} from "../../collections/incident";

@Component({
    selector: "ship-blackout-form",
    template: `
    <form [ngFormModel]="shipBlackoutForm" #f="ngForm" (submit)="updateShipBlackout(f.value)" class="well">
      <div class="checkbox">
        <label> 
          <input type="checkbox" ngControl="mainEngine" [(ngModel)]="incident.typeInstance.ship.blackout.mainEngine">
          {{"mainEngine" | translate}}
        </label>
      </div>
      <div class="checkbox">
        <label> 
          <input type="checkbox" ngControl="auxiliaryEngine" [(ngModel)]="incident.typeInstance.ship.blackout.auxiliaryEngine">
          {{"auxiliaryEngine" | translate}}
        </label>
      </div>
      <div class="checkbox">
        <label> 
          <input type="checkbox" ngControl="steeringEquipment" [(ngModel)]="incident.typeInstance.ship.blackout.steeringEquipment">
          {{"steeringEquipment" | translate}}
        </label>
      </div>
      <button type="submit" class="btn btn-primary active">Opslaan</button>
    </form>
    `,
    pipes: [Translate],
    providers: [IncidentModelService]
})
export class ShipBlackoutForm {
    shipBlackoutForm: ControlGroup;
    incident: Incident;
    @Output() private onFormValidEventEmitter: EventEmitter<Incident> = new EventEmitter();

    constructor(private _incidentModelService: IncidentModelService,
                params: RouteParams) {
        let id = params.get("id");
        if (id) {
            this.incident = Incidents.findOne(id);
        } else {
            this.incident = this._incidentModelService.createIncident("ship", "blackout");
        }
        console.log("Edit details of " + JSON.stringify(this.incident));

        let fb = new FormBuilder();
        this.shipBlackoutForm = fb.group({
            mainEngine: [false],
            auxiliaryEngine: [false],
            steeringEquipment: [false]
        });
    }

    updateShipBlackout(shipBlackout) {
        console.log("shipBlackout = " + JSON.stringify(shipBlackout));
        if (this.shipBlackoutForm.valid) {
            // Workaround for: "Attempt to detect changes on a dehydrated detector"
            // http://stackoverflow.com/questions/35515254/what-is-a-dehydrated-detector-and-how-am-i-using-one-here
            setTimeout( () => this.onFormValidEventEmitter.emit(this.incident), 0);
        } else {
            console.log("Form contains errors");
            // Todo: show the errors
        }
    }
}
