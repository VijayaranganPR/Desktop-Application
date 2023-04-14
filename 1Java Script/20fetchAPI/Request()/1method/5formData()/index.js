/*
The formData() method of the Request interface reads the request body and returns it as a promise that resolves with a FormData object.

*/



const submitButton = document.getElementById('submit')
submitButton.addEventListener('click', (e) => {
    const file = document.querySelector('input[type = "file"]')

    // creating form data
    const formData = new FormData();
    console.log(file.files[0])
    formData.append('resume', file.files[0])
    
    // making request
    const request = new Request('/ExampleURL/Won"t/work', {
        method: 'post',
        body: formData
    })

    // getting formData
    request.formData().then((data) => {
        for(let i of data.entries()){
            console.log(i)          // ['resume', File]
        }
    });

})
