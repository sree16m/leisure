function getMaxElementIndexes(a, rotate) {
    // Write your code here
    a = [1,2,3];
    rotate = [1,2,3,4];
    let rotateLen = rotate.length;
    let aLen = a.length;
    let res = [];
    for (let i = 0; i < rotateLen; i++){
        for (let j = 0; j < rotateLen[i]; j++) {
            let resultArr = a.unshift(a.splice(rotate[i], 0));
        }
        res.push(resultArr.indexOf(Math.max(...resultArr)));
    }
    return res;
}

getMaxElementIndexes();