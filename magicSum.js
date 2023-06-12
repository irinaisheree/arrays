function magicSum(arr, num){

    for(let i = 0; i < arr.length; i++){
        if(i !== 0){
            
            let prevNum = Number(arr[i - 1])
            for(let j = i; j < arr.length; j++){
                let curNum = Number(arr[j])
                let sum = curNum + prevNum

                if(sum === num){
                    console.log(`${prevNum} ${curNum}`)
                 
                }
            }
        
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23],
    8)