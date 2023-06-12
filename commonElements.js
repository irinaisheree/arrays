function commonElements(firstArr, secondArr){

    for(let i = 0; i < firstArr.length; i++){

        let curElement = firstArr[i]
        if(secondArr.includes(curElement)){
            console.log(curElement)
        }
    }

}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])