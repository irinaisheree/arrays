function dayOfWeek(day){

    let dayAsString = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

        let result = dayAsString[day - 1]

        if(result){
            console.log(result)
        } else{
            console.log("Invalid day!")
        }
    }

dayOfWeek(3)