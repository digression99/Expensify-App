const add = (a, b) => a + b;
const generateGreeting = (name = 'anonymous') => `hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);

    expect(result).toBe(7);

    // if (result !== 7) {
    //     throw new Error(`you added 4 and 3. the result is ${result}`);
    // }
});

test('should generate greeting from the name', () => {
    const result = generateGreeting('kim');
    expect(result).toBe('hello kim!');

});

test('should generate greeting for no name', () => {
    expect(generateGreeting()).toBe('hello anonymous!');
});