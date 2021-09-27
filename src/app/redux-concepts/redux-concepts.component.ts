import { Component, Inject , OnInit} from '@angular/core';
import { Store } from 'redux';
import { AppStore } from '../redux-provider/appstore';
import { AppState } from '../redux-provider/appstate';
import * as CounterActions from '../redux-provider/actions';

@Component({
  selector: 'app-redux-concepts',
  templateUrl: './redux-concepts.component.html',
  styleUrls: ['./redux-concepts.component.css']
})
export class ReduxConceptsComponent implements OnInit {

  counter: number;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }
  ngOnInit(): void {

  }

  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }
}
