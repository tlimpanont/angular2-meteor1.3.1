import {
    isNumber,
    isPresent,
    DateWrapper,
    isBlank
} from "angular2/src/facade/lang";
import {DateFormatter} from "angular2/src/facade/intl";
import {Pipe, PipeTransform} from "angular2/core";
import {StringMapWrapper} from "angular2/src/facade/collection";

var defaultLocale: string = "nl";

@Pipe({name: "hamisDate"})
export class HamisDatePipe implements PipeTransform {
    static _ALIASES: {[key: string]: String} = {
        "medium": "yMMMdjms",
        "short": "yMdjm",
        "fullDate": "yMMMMEEEEd",
        "longDate": "yMMMMd",
        "mediumDate": "yMMMd",
        "shortDate": "yMd",
        "mediumTime": "jms",
        "shortTime": "jm"
    };

    transform(value: any, args: any[]): string {
        if (isBlank(value)) {
            return null;
        }
        var pattern: string = isPresent(args) && args.length > 0 ? args[0] : "mediumDate";
        if (isNumber(value)) {
            value = DateWrapper.fromMillis(value);
        }
        if (StringMapWrapper.contains(HamisDatePipe._ALIASES, pattern)) {
            pattern = <string>StringMapWrapper.get(HamisDatePipe._ALIASES, pattern);
        }
        return DateFormatter.format(value, defaultLocale, pattern);
    }
}
