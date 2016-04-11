import {Component, NgZone} from "angular2/core";
import {Router, RouterLink, ROUTER_DIRECTIVES} from "angular2/router";
import {Incidents} from "../collections/incidents";
import {Incident} from "../collections/incident";
import {TypeInstanceToArray, Translate, TranslateAndConcatenate} from "./incident-type.pipe";
import {GetCategory} from "./category-type.pipe";

@Component({
    selector: "incident-list",
    template: `
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Startdatum</th>
        <th>Einddatum</th>
        <th>Type</th>
        <th>Categorie</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="#incident of incidents" (click)="onSelect(incident._id)">
        <td>{{incident.start}}</td>
        <td>{{incident.end}}</td>
        <td>{{incident.typeInstance | typeInstanceToArray | translateAndConcatenate}}</td>
        <td>
           <div *ngFor="#type of incident.typeInstance | typeInstanceToArray">
              <div *ngFor="#category of type | getCategory:incident.typeInstance">{{category | translate}}</div>
           </div>  
        </td>
      </tr>
    </tbody>
  </table>

    <button class="btn btn-primary active" (click)="newIncident()"><span class="badge">+</span>&nbsp;Nieuw incident</button>
`,
    // styleUrls: ["style.css"],
    pipes: [TypeInstanceToArray, Translate, TranslateAndConcatenate, GetCategory],
    directives: [ROUTER_DIRECTIVES, RouterLink]
})
export class IncidentListComponent {
    private incidents: Array<Incident>;

    constructor(private _router: Router, zone: NgZone) {
        Tracker.autorun(() => zone.run(() => {
            this.incidents = Incidents.find().fetch();
        }));
    }

    onSelect(id: number) {
        console.log("Navigate to 'SelectedCategories' with id: " + id);
        this._router.navigate(["SelectedCategories", { id: id }]);
    }

    newIncident() {
        this._router.navigate(["NewIncident"]);
    }
}
