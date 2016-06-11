import {provide} from '@angular/core';

/**
 *
 * 7. DEPENDENCY INJECTION
 *
 *    - useValue
 *
 */

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