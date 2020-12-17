
function maxUncrossedLines(rowA, rowB, startPosA = 0, startPosB = 0) {
    let count = 0;
    for (let posA = startPosA; posA < rowA.length; posA++) {
        for (let posB = startPosB; posB < rowB.length; posB++) {
            if (rowA[posA] === rowB[posB]) {
                let subCount = maxUncrossedLines(rowA, rowB, posA + 1, posB + 1);
                count = Math.max(count, subCount + 1);
            }
        }
    }
    return count;
}
console.log(maxUncrossedLines([1,2,3,4],[2,3,4,1]));
console.log(maxUncrossedLines([1,4,2],[1,2,4]));
console.log(maxUncrossedLines([2,5,1,2,5],[10,5,2,1,5,2]));
console.log(maxUncrossedLines([1,3,7,1,7,5],[1,9,2,5,1]));