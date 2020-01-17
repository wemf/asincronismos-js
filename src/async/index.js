const doSomethingAsync = (message) => {
    return new Promise((resolve, reject) =>{
        (true) ? setTimeout(() => resolve('Do something async' + message), 3000) : reject(new Error('Test error'));
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync(1);
    console.log(something);
}

console.log('Before 1');
doSomething();
console.log('After 1');


const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync(2);
        console.log(something);
    } catch (error) {
        console.error(error);
    }
}

console.log('Before 2');
anotherFunction();
console.log('After 2');