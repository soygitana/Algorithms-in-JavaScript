// Find flights
// you are on a biz trip and travelling from one city to another. you have a stack of unsorted flight boarding passes. 
// only departure city and destination city are on the boarding pass, find the first departure city and your final destination city


var list = {
    tkt1: {
        departure: 'Los Angeles',
        arrival: 'San Francisco'
    },
    tkt2: {
        departure: 'San Francisco',
        arrival: 'New York'
    },
    tkt3: {
        departure: 'Moscow',
        arrival: 'Mali'
    },
    tkt4: {
        departure: 'Barcelona',
        arrival: 'Moscow'
    },
    tkt5: {
        departure: 'New York',
        arrival: 'Barcelona'
    }
};




const findDepartureArrival = list => {

    let cities1 = Object.keys(list).map((key) => list[key].departure);
    let cities2 = Object.keys(list).map((key) => list[key].arrival);
    let cities = cities1.concat(cities2)

    let storage = {}
    let deprature = ""
    let arrival = ""


    for (let city of cities) {
        storage[city] = storage[city] ? storage[city] + 1 : 1
    }

    let unique = []
    for (let el in storage) {
        if (storage[el] == 1) {
            unique.push(el)
        }
    }

    for (let el of unique) {
        for (var tkt in list) {
            if (list[tkt].departure == el) {
                deprature = el
            }
            if (list[tkt].arrival == el) {
                arrival = el
            }
        }

    }

    return `the departure city is ${deprature} and arrival city is  ${arrival}`
}

console.log(findDepartureArrival(list))

// SOLUTION 2


findDepartureArrival2 = function(map) {
    var hashMap = {};
    
    for (var tkt in map) {
    var depart = map[tkt].departure;
    var arriv = map[tkt].arrival;
    
    if (!(depart in hashMap))
    hashMap[depart] = -1;
    else
    hashMap[depart] = hashMap[depart] - 1;
    
    if (!(arriv in hashMap))
    hashMap[arriv] = 1;
    else
    hashMap[arriv] = hashMap[arriv] + 1;
    }
    return hashMap;
    }
    