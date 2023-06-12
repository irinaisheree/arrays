function sumFirstAndLastArrayElements(arr){

        let curNum = Number(arr[0])
        let lastNumIndex = arr.length - 1
        let lastNum = Number(arr[lastNumIndex])

        console.log(curNum + lastNum)
    }


sumFirstAndLastArrayElements([20, 30, 40])