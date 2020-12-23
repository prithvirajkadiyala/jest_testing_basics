const functions = require('./functions');


//to be
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

//Not to be
test('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

//to be Null
test('Should be Null', () => {
    expect(functions.isNull()).toBeNull();
});

//to be Falsy
test('Should be falsy', () => {
    expect(functions.checkValue(false)).toBeFalsy();
});

//to Equal
test('User should be Raj Kad object', () => {
    expect(functions.createUser()).toEqual({firstName: 'Raj', lastName:'Kad'});
})

//Less than
//Greater than

//Working with async data
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        });
});