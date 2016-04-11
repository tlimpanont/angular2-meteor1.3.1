import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'app',
  templateUrl: 'client/index.html'
})
export class App {
  public Meteor:Object = Meteor;
}

bootstrap(App);
