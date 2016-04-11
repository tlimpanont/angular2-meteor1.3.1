import {Component} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';

@Component({
  selector: 'app',
  templateUrl: 'client/index.html'
})
export class App {}

bootstrap(App);
