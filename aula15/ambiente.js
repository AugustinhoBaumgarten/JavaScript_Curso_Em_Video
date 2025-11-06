var num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(`o vetor tem ${num.length} posiçoes`)

num[5] = 6

console.log(`O primeiro valor do vetor é ${num[0]}`)

console.log()
let pos = num.indexOf(8)
console.log(`O valor 8 esta na ppostição ${pos}`)