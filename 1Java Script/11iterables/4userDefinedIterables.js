a = {
    *[Symbol.iterator](){
    for(i = 0; i<10; i++){
        yield i
    }
}

}
for(j of a){
    console.log(j)
}
/*
0
1
2
3
4
5
6
7
8
9
*/