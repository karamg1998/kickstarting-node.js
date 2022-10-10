console.log('a');

console.log('b');

function c(){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
         console.log('c');
          const err=false;
         
          if(!err)
          {
            resolve();
          }
          else{
            reject('error');
          }
     },3000);
    });
}

function d(){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
         console.log('d');

         const err=false;
         
         if(!err)
         {
           resolve();
         }
         else{
           reject('error');
         }
     },0);
    });
}



async function print()
{
    await c()
    await d();
    console.log('e');

}
print();


