const input = 10
console.table(new Array(input).fill(0).reduce((ac,c,i) => ac.concat((i > 1)?ac[i-1]+ac[i-2] : [i]),[]))
