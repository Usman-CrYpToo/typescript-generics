// Generic Interface for a Pair of Values:
// Define a generic interface Pair<K, V> that represents a pair of values, with K as the type of the first value and V as the type of the second. Implement a function makePair that creates and returns a pair given two inputs.

interface Pair<K,V> {
    firstValue : K;
    secondValue : V;
}

const makePair = <Pair>(arg : Pair): Pair => {
      return {...arg}
}

const getPair = makePair<Pair<number, string>>({firstValue : 12, secondValue: "usman"});
console.log(getPair);