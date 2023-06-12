function reverseInPlace(arr){

    for(let i = 0; i < arr.length/2; i++){
        let oldElement = arr[i]
        let nextEl = arr.length - 1 - i
        arr[i] = arr[nextEl]
        arr[nextEl] = oldElement
    }

    console.log(arr.join(" "))

}
reverseInPlace(['a', 'b', 'c', 'd', 'e'] )