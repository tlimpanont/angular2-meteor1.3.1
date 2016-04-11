import {Incidents} from "../collections/incidents";

export function loadIncidentTypesAndCategories() {
    if (Incidents.find().count() === 0) {

        var incidents = [
            {
                "start": new Date(),
                "end": new Date(),
                "reportedBy": "Demo gebruiker",
                "typeInstance": {
                    "ship": {
                        "blackout": {}
                    },
                }
            },
        ];

        for (var i = 0; i < incidents.length; i++) {
            Incidents.insert(incidents[i]);
        }
    }
};
