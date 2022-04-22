const stringCleaner = (string1) => {
    string1 = string1.replace(/[0-9]/g, '');
    return string1
}

console.log(stringCleaner('This looks5 grea8t!'))


// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'

