const fs=require('fs');
const path=require('path');
/*fs.writeFile(path.join(__dirname,'/Training Details','/student_name.txt')
   ,'Name - Rishav kumar'
   ,(err)=>{
    if(err) throw err;
    console.log('File written to student name');
})
*/
fs.readFile(path.join(__dirname,'/Training Details','student_name.txt'),'utf8',(err,data)=>{
    if(err)throw err;
    console.log(data);
});

