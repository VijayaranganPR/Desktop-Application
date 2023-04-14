/*
The difference between set() and append() is that if the specified key does already exist, 
set() will overwrite all existing values with the new one, 
whereas append() will append the new value onto the end of the existing set of values.
*/

const formData = new FormData()
const inputfiles = document.getElementById('inputfiles')
const submitButton = document.getElementById('submitButton')

submitButton.addEventListener('click', function(){
    // name, value
    formData.set('resumeName','Vijayarangan')
    console.log(formData.getAll('resumeName'))          // ['Vijayarangan']


    // if the value is not string or blob it will convert it to string - other value will be overrided
    formData.set('age', 30)
    formData.set('age', 21)
    console.log(formData.getAll('age'))          // ['21']


    // name, file
    formData.set('resumePdf',inputfiles.files[0])
    console.log(formData.getAll('resumePdf'))          // [File]    0:File {name: "Vijayarangan's Resume.docx", lastModified: 1673342798506, ...


    // changing name of the file - file will be overrided
    formData.set('resumePdf',inputfiles.files[0], 'new file name')
    console.log(formData.getAll('resumePdf'))          // [File]    0:File {name: 'new file name', lastModified: 1673342798506, ...


    // name, fileList
    formData.set('resumeList',inputfiles.files)
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
['resumeList', '[object FileList]']
*/
})
