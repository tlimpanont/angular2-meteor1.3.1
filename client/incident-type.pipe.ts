import {Pipe, PipeTransform} from "angular2/core";
import {TypeInstance} from "../collections/incident";
import {labels} from "./labels";

@Pipe({name: "typeInstanceToArray"})
export class TypeInstanceToArray implements PipeTransform {
    transform(type: TypeInstance) {
        let types: string[] = [];
        for (var prop in type) {
            if (type.hasOwnProperty(prop)) {
                types.push(prop);
            }
        }
        return types;
    }
}

@Pipe({name: "translateAndConcatenate"})
export class TranslateAndConcatenate implements PipeTransform {
    transform(types: string[]) {
        var translatedTypes: string[] = [];
        types.forEach(function (type) {
            translatedTypes.push(labels[type] || "Onbekend");
        });
        return translatedTypes.map(o => o).join(", ");
    }
}

@Pipe({name: "translate"})
export class Translate implements PipeTransform {
    transform(key: string) {
        return labels[key] || "Onbekende key: " + key;
    }
}
