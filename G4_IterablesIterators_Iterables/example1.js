let numbers = {
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

for (const num of numbers) {
    console.log(num);
}

let iterator = numbers[Symbol.iterator]();
let next = iterator.next();

while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}