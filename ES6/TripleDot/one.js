let arr = [10, 20, 30, 40]

let new_Arr = []

for (ele of arr) {
    new_Arr.push(ele)
}
let new_Arr1 = arr.map((ele) => {
    return ele
})
console.log(arr)
console.log(new_Arr)
console.log(new_Arr1)