var findPairs = function(nums, k) {
    if (k < 0) return 0;   
    nums = (k === 0) ? nums : Array.from(new Set(nums));
    let m = new Map(), res = 0;
    for (let num of nums) {
        if (m.get(num+k) === 1) res++;
        if (num+k !== num-k && m.get(num-k) === 1) res++;
        m.set(num, m.get(num)+1 || 1);
    }
    return res;
};