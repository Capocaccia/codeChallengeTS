// write a function that takes two parameters. The first parameter is an array that can contain only strings, only integers or a mix of both. The second parameter is a key that is either a single string or integer.
// this function should remove any items from the original array that match the key
// if no values match the key, false should be returned



//let arr1 = ['a', 'b', 'c'];
//let arr2 = ['d'];

function remove_duplicate(arr1, arr2) {

    for (let i = 0; i <= arr1.length; i++) {

        if (arr1[i] == arr2) {
            arr1.splice(i, 1)
            return arr1;
        } else
            return false
    }
}


//let test = remove_duplicate(arr1, arr2);
//console.log(test)