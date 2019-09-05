'use strict';

const inverse = (array, number = 0) => Array.isArray(array) && Number.isInteger(number) ? number < 0 ? [...array.slice(0, number).reverse(), ...array.slice(number)] : [...array.slice(0, number), ...array.slice(number).reverse()] : 'Invalid argument(s)';