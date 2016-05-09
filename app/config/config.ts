import {provide} from '@angular/core';

const API_URL:string = 'http://api.fixer.io/';
const CURRENCIES:string[] = [
  'CHF',
  'GBP',
  'EUR',
  'PLN',
  'USD'
];

export var CONFIG: Array<any> = [
  provide('API_URL', {useValue: API_URL}),
  provide('CURRENCIES', {useValue: CURRENCIES})
];