import {Component} from "angular2/core";
import {Router, RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
import {Incident} from "../collections/incident";
import {IncidentModelService} from "./incident-model.service";
import {Translate} from "./incident-type.pipe";
import {ShipBlackoutForm} from "./forms/ShipBlackoutForm";

@Component({
    selector: "category-detail",
    template: `
    <nav>
        <ul class="breadcrumb">
            <li><a [routerLink]="['IncidentList']">Incidentenlijst</a></li>
            <li *ngIf="getId()"><a [routerLink]="['SelectedCategories', {id: getId()}]">Huidig incident</a></li>
            <li class="active">{{category | translate}}&nbsp;details</li>
        </ul>
    </nav>
    
    <ship-blackout-form (onFormValidEventEmitter)="onValidForm($event)"></ship-blackout-form>
`,
    pipes: [Translate],
    directives: [ROUTER_DIRECTIVES, ShipBlackoutForm],
    providers: [IncidentModelService]
})
export class CategoryDetailComponent {
    private incId: string;
    private type: string;
    private category: string;

    constructor(private _incidentModelService: IncidentModelService,
                private _router: Router,
                params: RouteParams) {
        this.incId = params.get("id");
        this.type = params.get("type");
        this.category = params.get("category");
    }

    getId() {
        return this.incId;
    }

    onValidForm(incident: Incident) {
        let router = this._router;
        let id = this.getId();
        console.log("onValidForm: id = " + this.getId());
        if (!this.incId) {
            this._incidentModelService.insertIncident(incident)
                .then(function (newIncidentId) {
                    router.navigate(["SelectedCategories", {id: newIncidentId}]);
                    })
                .catch(function (err) {
                    console.error("Failed!", err);
                });
        } else {
            this._incidentModelService.updateIncident(incident)
                .then(function (updateCounter) {
                    console.log("# of updated records: " + updateCounter);
                    router.navigate(["SelectedCategories", {id: id}]);
                })
                .catch(function (err) {
                    console.error("Failed!", err);
                });
        }
    }
}
