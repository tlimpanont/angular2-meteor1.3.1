import {Component, OnInit} from "angular2/core";
import {Router, RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
import {IncidentType, IncidentTypeService, CategoryType} from "./incident-type.service";
import {CategoryTypeToArray} from "./category-type.pipe";
import {Translate} from "./incident-type.pipe";

@Component({
    selector: "category-selector",
    template: `
<nav>
    <ul class="breadcrumb">
        <li><a [routerLink]="['IncidentList']">Incidentenlijst</a></li>
    </ul>
</nav>

<div class="container-fluid">
    <div class="row">
        <div class="col-sm-4 col-md-2" *ngFor="#type of incidentTypes">
            <h2><span class="label label-success">{{type.name | translate}}</span></h2>
            <p class="btn-group-vertical">
                <button type="button"
                        class="btn btn-primary"
                        style="text-align: left"
                        [ngClass]="{'active' : categoryType.isActive, 'disabled' : !categoryType.isActive}"
                        *ngFor="#categoryType of type.category | categoryTypeToArray"
                        (click)="onSelect(type, categoryType)"
                >{{categoryType.catName | translate}}</button>
            </p>
        </div>
    </div>
</div>
`,
    pipes: [CategoryTypeToArray, Translate],
    directives: [ROUTER_DIRECTIVES],
    providers: [IncidentTypeService]
})
export class CategorySelectorComponent implements OnInit {
    private incidentTypes: IncidentType[] = [];
    private id: string;

    constructor(private incidentTypeService: IncidentTypeService,
                private _router: Router,
                params: RouteParams) {
        this.id = params.get("id");
        console.log("Category selector for incident with id: " + this.id);
    }

    ngOnInit() {
        this.incidentTypes = this.incidentTypeService.getIncidentTypes();
    }

    onSelect(type: IncidentType, category: CategoryType) {
        if (category.isActive) {
            console.log("Navigate to 'IncidentDetail' with id: " + this.id + ", type=" + type.name + ", category=" + category.catName);
            this._router.navigate(["IncidentDetail", {id: this.id,  type: type.name , category: category.catName}]);
        }
    }
}

