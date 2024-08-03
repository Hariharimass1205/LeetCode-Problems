var groupAnagrams = function(strs) {
    var obj = {}
    for(let i = 0 ; i<strs.length; i++){
        if(!obj[strs[i].split('').sort().join('')]) obj[strs[i].split('').sort().join('')] = []
        obj[strs[i].split('').sort().join('')] = [...obj[strs[i].split('').sort().join('')],strs[i]]
    }

    return Object.values(obj)
};