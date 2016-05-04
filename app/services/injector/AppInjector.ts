import {Injector} from '@angular/core';

let injectorRef:Injector;
export const AppInjector = (injector?:Injector):Injector => {
  if (injector) {
    injectorRef = injector;
  }

  return injectorRef;
};