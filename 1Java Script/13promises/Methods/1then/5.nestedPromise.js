// the next then will execute only after completion of previous then

// if there is a promise inside .then() the next then will execute only after the current promise end 
// (if there is any timer inside means it need to be ended)

// if there is no promise inside .then() the next .then() will execute imidiately after the completion of current .then()
// (if there is any timer inside means it will be executed later)

Promise.resolve("foo")
    .then(
        (string) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                string += " 1";
                console.log(string) // foo 1      prints after one sec
            }, 1000);
            resolve(string); // only foo is transfer
        })
    )
    .then(
        (string) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                string += " 2";
                console.log(string) // foo 2      prints after 2 sec
                resolve(string);
            }, 2000);
        }),
    )
    .then((string) => {
        setTimeout(() => {
            string += " 3";
            console.log(string); // foo 2 3        prints after 5 sec
        }, 3000);
        return string;
    })
    .then((string) => {
        console.log(
            "Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising",
        ); // prints after 2 sec 
        string += " 4";
        console.log(string); // foo 2 4 ---    prints after 2sec
    });

/*
foo 1
foo 2
Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising    
foo 2 4
foo 2 3
*/