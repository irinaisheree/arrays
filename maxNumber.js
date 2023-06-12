function maxNumber(arr) {

    let result = "";

    for (let i = 1; i <= arr.length; i++) {

       let isMax = true

        let curNum = Number(arr[i - 1])

        for (let j = i; j < arr.length; j++) {

            let nextNum = Number(arr[j])

            if (nextNum >= curNum) {
                isMax = false
                break;
            }
        }


        if (isMax) {
            result += `${curNum} `
        }

    }

    console.log(result)


}
maxNumber([1, 4, 3, 2])