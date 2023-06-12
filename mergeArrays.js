function mergeArrays(firstArr, secondArr){

    let newArray = []

    for(let i = 0; i <firstArr.length; i++){

            if(i % 2 === 0){
                newArray[i] = Number(firstArr[i]) + Number(secondArr[i])
            } else{
                newArray[i] = firstArr[i] + secondArr[i]
            }

        }

        console.log(newArray.join(" - "))

    }

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])