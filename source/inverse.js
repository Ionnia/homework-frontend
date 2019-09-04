'use strict';

const inverse = function(array, number) {
    if(number != null){
        let sortingPart = array.slice(number);
        let addingPart = array.slice(0, number);
        if(number < 0) {
            addingPart.reverse();
        } else {
            sortingPart.reverse();
        }
        return addingPart.concat(sortingPart);
    }
    return array.reverse();
}