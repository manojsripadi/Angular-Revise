import {Injectable, EventEmitter} from '@angular/core';


@Injectable()
export class DataService {
    statusUpdate = new EventEmitter<string>();
     dummyServiceData= [
        {
            "color": "red",
            "value": "#f00"
        },
        {
            "color": "green",
            "value": "#0f0"
        },
        {
            "color": "blue",
            "value": "#00f"
        },
        {
            "color": "cyan",
            "value": "#0ff"
        },
        {
            "color": "magenta",
            "value": "#f0f"
        },
        {
            "color": "yellow",
            "value": "#ff0"
        },
        {
            "color": "black",
            "value": "#000"
        }
    ];

    getData(){
        return this.dummyServiceData;
    }
}
