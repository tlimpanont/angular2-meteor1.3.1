import {Pipe, PipeTransform} from "angular2/core";
import {CategoryType} from "./incident-type.service";
import {TypeInstance, ShipCategory, EnvironmentCategory} from "../collections/incident";

@Pipe({ name: "categoryTypeToArray" })
export class CategoryTypeToArray implements PipeTransform {
    transform(object: any) {
        var newArray: CategoryType[] = [];
        object.forEach(function (key) {
            newArray.push(key);
        });
        return newArray;
    }
}

@Pipe({ name: "getCategory" })
export class GetCategory implements PipeTransform {
    transform(type: string,  object: any) {
        let typeInstance: TypeInstance = <TypeInstance>object[0];
        switch (type) {
            case "ship": return getShipCategory(typeInstance.ship);
            case "environment": return getEnvironmentCategory(typeInstance.environment);
            default: return [];
        }
    }
}

function getShipCategory(shipCategory: ShipCategory) {
    let shipCategories: string[] = [];
    for (var prop in shipCategory) {
        if (shipCategory.hasOwnProperty(prop)) {
            shipCategories.push(prop);
        }
    }
    return shipCategories;
}

function getEnvironmentCategory(environmentCategory: EnvironmentCategory) {
    let environmentCategories: string[] = [];
    for (var prop in environmentCategory) {
        if (environmentCategory.hasOwnProperty(prop)) {
            environmentCategories.push(prop);
        }
    }
    return environmentCategories;
}
