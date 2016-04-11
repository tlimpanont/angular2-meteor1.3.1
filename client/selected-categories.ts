import {Component} from "angular2/core";
import {Router, RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
import {Incident} from "../collections/incident";
import {Incidents} from "../collections/incidents";
import {TypeInstanceToArray, Translate} from "./incident-type.pipe";
import {GetCategory} from "./category-type.pipe";

@Component({
    selector: "selected-categories",
    template: `
<nav>
    <ul class="breadcrumb">
        <li><a [routerLink]="['IncidentList']">Incidentenlijst</a></li>
        <li class="active">Huidig incident</li>
    </ul>
</nav>

<div class="container-fluid">
    <div class="row">
        <div class="col-sm-4 col-md-2" *ngFor="#type of incident.typeInstance | typeInstanceToArray">
            <h2><span class="label label-success">{{type | translate}}</span></h2>
            <p class="btn-group-vertical">
                <button type="button"
                        class="btn btn-primary active"
                        style="text-align: left"
                        *ngFor="#category of type | getCategory:incident.typeInstance"
                        (click)="onSelect(incident._id, type, category)"
                >{{category | translate}}</button>
            </p>
        </div>
    </div>
</div>

<button class="btn btn-default" (click)="onClick()"><span class="badge">+</span>&nbsp;Aanvullen incident</button>
`,
    pipes: [TypeInstanceToArray, Translate, GetCategory],
    directives: [ROUTER_DIRECTIVES],
    providers: []
})
export class SelectedCategoriesComponent {
    incident: Incident;

    constructor(private _router: Router,
                params: RouteParams) {
        this.incident = Incidents.findOne(params.get("id"));
        console.log("Show the contents of incident: " + JSON.stringify(this.incident));
    }

    onClick() {
        console.log("Navigate to category selector with id: " + this.incident._id);
        this._router.navigate(["Incident", {id: this.incident._id}]);
    }

    onSelect(id: string, type: string,  category: string) {
        console.log("Navigate to 'IncidentDetail' with id: " + id + ", type=" + type + ", category=" + category);
        this._router.navigate(["IncidentDetail", {id: id, type: type, category: category}]);
    }
}

