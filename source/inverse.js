'use strict';

const validate = (array, number) => Array.isArray(array) && Number.isInteger(number);
const inverse = (array, number = 0) => {
    if (!validate(array, number)) {
        return 'Invalid argument(s)';
    }
    const sortingPart = array.slice(number);
    const addingPart = array.slice(0, number);
    return number < 0 ? [...addingPart.reverse(), ...sortingPart] : [...addingPart, ...sortingPart.reverse()];
}