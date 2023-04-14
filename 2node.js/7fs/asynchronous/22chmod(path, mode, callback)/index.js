/*
fs.chmod() is a method in Node.js that is used to change the permissions of a file or directory at the specified path. 
The mode argument is a numeric value that represents the desired permissions for the file or directory. 
The callback function is called after the permissions have been changed and is passed an error argument if an error occurs.



Constant	Octal	Description
fs.constants.S_IRUSR	0o400	read by owner
fs.constants.S_IWUSR	0o200	write by owner
fs.constants.S_IXUSR	0o100	execute/search by owner
fs.constants.S_IRGRP	0o40	read by group
fs.constants.S_IWGRP	0o20	write by group
fs.constants.S_IXGRP	0o10	execute/search by group
fs.constants.S_IROTH	0o4	read by others
fs.constants.S_IWOTH	0o2	write by others
fs.constants.S_IXOTH	0o1	execute/search by others



Number	Description
7	read, write, and execute
6	read and write
5	read and execute
4	read only
3	write and execute
2	write only
1	execute only
0	no permission
For example, the octal value 0o765 means:

The owner may read, write, and execute the file.
The group may read and write the file.
Others may read and execute the file.

*/

const fs = require('fs')

fs.chmod('file.txt', 0o777, (err) => {
    if (err) {
        console.error(`Error changing permissions for file.txt: ${err}`);
        return;
      }
      console.log('Permissions changed successfully for file.txt');
})
/*
In this example, the fs.chmod() method is used to change the permissions of the file 'file.txt' to read, write, and execute for all users. 
The 0o777 numeric value represents these permissions. 
If the permissions are successfully changed, a success message will be displayed, otherwise an error message will be displayed.
*/

