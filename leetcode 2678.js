// 2678. Number of Senior Citizens


let  details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
let count=0
    for(i=0;i<details.length;i++){
        let age = ""
        let age1 = details[i][11]
        let age2 = details[i][12]
         age = age1 + age2
        if(Number(age)>60){
            count++
        }
    }
    console.log( count)