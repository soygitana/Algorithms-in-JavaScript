// Max Profit
// Given an array of stock prices, find the minimum buy price and the maximum sell price that produce the greatest profit.


// sell price need to be after buying price 
// find the bigest value and its index  = sell price
// create an array from idx 0 until it reaches max value
// iterate in sliced array to get min value 
// return result


const maxProfit = arr => {

    let max = 0
    let idx = 0
    let min = 0
    let result = []
    
    for (let i in arr) {
    if (arr[i] > max) {
    max = arr[i]
    idx = i
        }
      let sliced = arr.slice(0,idx)
      for (let j in sliced) {
    sliced.sort((a,b) => a-b) 
    min = sliced[0]
    result = [min, max]
      } 
    }  
      return result
    }
    
    
    console.log(maxProfit([8,3,2,20,1,4]))
    console.log(maxProfit([5,3,40,3,1,20]))
    console.log(maxProfit([1,3,40,3,9,20]))