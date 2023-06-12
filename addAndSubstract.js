function addAndSubstract(arr){

    let sumOldArray = 0
    let sumNewArray = 0

    for(i = 0; i < arr.length; i++){
        let curNum = Number(arr[i])


        sumOldArray += curNum

        if(curNum % 2 === 0){
            curNum += i
        } else{
            curNum -= i
        }

        arr[i] = curNum
        sumNewArray += curNum
    }
        console.log(arr)
        console.log(sumOldArray)
        console.log(sumNewArray)

    } 
addAndSubstract([5, 15, 23, 56, 35])