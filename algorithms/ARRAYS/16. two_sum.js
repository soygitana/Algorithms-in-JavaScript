// Two Sum
// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

const checkPairAndInsert = (arr, obj) => {

    // Is this a duplicate ? if yes, just retunr
        for(let i =0; i < arr.length; i++)
        {
          // Cannot be the same pair
          // Cannot be the same pair but inverted
          if(arr[i].el1 == obj.el1 && arr[i].el2 == obj.el2)
          {
            return
          }
          else if(arr[i].el1 == obj.el2 && arr[i].el2 == obj.el1)
          {
            return
          }
        }
    
        arr.push(obj);
    }
    
    const twoSum = (arr, sum) => {
        let result = [];
    
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
              if(arr[i] + arr[j] == sum)
              {
                let pair = {}
                pair.el1 = arr[i];
                pair.el2 = arr[j];
                //console.log(obj)
                
                checkPairAndInsert(result,pair)
             }
            }
        }
        return result;
    }
    
    
    
    console.log(twoSum([1, 2, 2, 3, 4], 4)); // [2,2] [1,3]