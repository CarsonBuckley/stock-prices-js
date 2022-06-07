
let stockPrice1 = [2, 9, 10, 21, 4, 8, 5, 3]
let stockPrice2 = [10, 15, 9, 8, 12, 9, 1];
let stockPrice3 = [40, 93, 52, 39, 3, 21, 7, 10];
let stockPrice4 = [23]

function best(array) {
	var minIndex = 0;
    var maxIndex = 1;
    var currentMin = 0;
    var maxProfit = 0;

    if(array.length < 2) {
        throw new Error("❌ Need at least two stock prices to be profitable ❌");
    }
    
    for(var i = 1; i < array.length; i++) {

        // new current min.
        if(array[i] < array[currentMin]) { 
        	currentMin = i;
        }
        
        // new best profit
        if(array[maxIndex] - array[minIndex] < array[i] - array[currentMin]) {
                maxIndex = i;
            	minIndex = currentMin;
        }
    }

    maxProfit  = array[maxIndex] - array[minIndex];
    return maxProfit;
}

console.log(best(stockPrice3));