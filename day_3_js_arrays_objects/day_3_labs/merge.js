

function merge(objA, objB){
    let result = {};
    for (let key in objA){
        result[key] = objA[key];
    }
    for (let key in objB){
        result[key] = objB[key];
    } return result;
}
merge(
    {firstName: 'Ron', lastName: 'Wesley', occupation: 'Wizard'},
    {firstName: 'Harry', lastName: 'Potter'}
  );