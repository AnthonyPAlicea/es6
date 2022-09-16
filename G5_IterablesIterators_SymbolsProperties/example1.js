let numbers = {
    type: 'Integers',
    decimal: false,
    doesSomething: function() {},
    [Symbol.iterator]: function() {
        const start = 0;
        const end = 5;
        let nextValue = start;
        return {
            next: () => {
                if (nextValue <= end) {
                    let nextObj = { value: nextValue, done: false };
                    nextValue++;
                    return nextObj;
                }
                return { value: nextValue, done: true };
            }
        }
    }
}

for (const prop in numbers) {
    console.log(prop);
}