function reverseAnArrayOfNumbers(n, arr){


    // let newArr = []
    // for(let i = 0; i < 1; i++){

    //     for(let j = n -1; j >= 0; j--)

    //     newArr.push(arr[j])

    //     console.log(newArr.join(" "))

    // }

   
        let newArr = []
     
        for (let i = 0; i < n; i++) {
            //console.log(i)
            newArr[newArr.length] = arr[n - i - 1];
            
        }
        console.log(newArr.join(' '))
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50] )