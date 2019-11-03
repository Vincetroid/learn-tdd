const greeting = guest => `Hello, ${guest}!`;

describe("greeting()", () => {
    test("says hello", () => {
        expect(greeting('Jest')).toBe('Hello, Jest!');
    });
});