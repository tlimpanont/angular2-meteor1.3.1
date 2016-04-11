import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {IncidentListComponent} from "./incident-list.component";
import {CategorySelectorComponent} from "./category-selector.component";
import {CategoryDetailComponent} from "./category-detail.component";
import {SelectedCategoriesComponent} from "./selected-categories";

@Component({
    selector: "app-container",
    template: `
        <h1>{{title}}</h1>
        <router-outlet></router-outlet>
        `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: "/incident-list", as: "IncidentList", component: IncidentListComponent, useAsDefault: true},
    {path: "/incident/new/categorySelector", as: "NewIncident", component: CategorySelectorComponent},
    {path: "/incident/:id/categorySelector", as: "Incident", component: CategorySelectorComponent},
    {path: "/incident/:id/:type/:category/categoryDetails", as: "IncidentDetail", component: CategoryDetailComponent},
    {path: "/incident/:id/selectedCategories", as: "SelectedCategories", component: SelectedCategoriesComponent}
])
export class AppContainerComponent {
    public title = "Incidentregistratie";
}
