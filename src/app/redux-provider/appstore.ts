import { InjectionToken } from '@angular/core';
import {
  createStore,
  Store,
  compose,
  StoreEnhancer
} from 'redux';

import { AppState } from './appstate';
import {
  AppReducer as reducer
} from './appreducer';

export const AppStore = new InjectionToken('Appstore');

const devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

export function createAppStore(): Store<AppState> {
  return createStore<AppState, any, any, any>(
    reducer,
    compose(devtools)
  );
}

export const appStoreProviders = [
   { provide: AppStore, useFactory: createAppStore }
];
