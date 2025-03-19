/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let titles = title.split(" ")
  let final = []
 for(i=0;i<titles.length;i++){
        if(titles[i].length<=2){
            final.push( titles[i].toLowerCase())
        }else{
            let a = titles[i].split('')
            let res = []
            res.push(a[0].toUpperCase()) 
            for(j=1;j<a.length;j++){
                res.push(a[j].toLowerCase())
            }
         //   console.log(res)
            final.push(res)
        }
    }
    let s = ""
    for(j=0;j<final.length;j++){
       let a = ""
       for(t=0;t<final[j].length;t++){
        a+=final[j][t]
       }
       
       s+=a
       if(j==final.length-1){
        break
       }
       s+=" "
    }
    return s
};