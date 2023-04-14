/*
The difference between set() and append() is that if the specified key already exists, 
set() will overwrite all existing values with the new one, 
whereas append() will append the new value onto the end of the existing set of values.
*/

const formData = new FormData()
const inputfiles = document.getElementById('inputfiles')
const submitButton = document.getElementById('submitButton')

submitButton.addEventListener('click', function(){
    // name, value
    formData.append('resumeName','Vijayarangan')
    console.log(formData.getAll('resumeName'))          // ['Vijayarangan']


    // if the value is not string or blob it will convert it to string
    formData.append('age', 30)
    formData.append('age', 21)
    console.log(formData.getAll('age'))          // ['30', '21']


    // name, file
    formData.append('resumePdf',inputfiles.files[0])
    console.log(formData.getAll('resumePdf'))          // [File]    0:File {name: "Vijayarangan's Resume.docx", ...


    // changing name of the file - file will be overrided
    formData.append('resumePdf',inputfiles.files[0], 'new file name')
    console.log(formData.getAll('resumePdf'))          // [File, File]    1:File {name: 'new file name', ...


    // name, fileList
    formData.append('resumeList',inputfiles.files)
    console.log(formData.getAll('resumeList'))          // ['[object FileList]']

    
// checking entries
for(let i of formData.entries()){
    console.log(i)
}
/*
['resumeName', 'Vijayarangan']
['age', '30']
['age', '21']
['resumePdf', File]
['resumePdf', File]
['resumeList', '[object FileList]']
*/

})
