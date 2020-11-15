// Sieve of Eratosthenes
// For a given number, find all the prime numbers from zero to that number.

// prime % 2 or 3 or 5 or 7 !==0 unless prime is 2,3,5 or 7

// SOLUTION 1

const primes = (num) => {

    let primeNum = []

    if (num >= 7) {
        primeNum.push(2, 3, 5, 7)
    }
    else if (num >= 5) {
        primeNum.push(2, 3, 5)
    }
    else if (num >= 3) {
        primeNum.push(2, 3)
    }


    for (let i = 2; i < num; i++) {
        let temp = []
        if (i % 2 !== 0) {
            temp.push(i)
        }
        for (let j of temp) {
            if (j % 3 !== 0 && j % 5 !== 0 && j % 7 !== 0) {
                primeNum.push(j)
            }
        }
    }
    return num == 2 ? 2 : primeNum

}


console.log(primes(9))

// SOLUTION 2

const primes = number => {
    const numbers = new Array(number + 1);
    numbers.fill(true);
    numbers[0] = numbers[1] = false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        for (let j = 2; i * j <= number; j++) numbers[i * j] = false;
    }

    return numbers.reduce(
        (primes, isPrime, prime) => (isPrime ? primes.concat(prime) : primes),
        []
    );
};
