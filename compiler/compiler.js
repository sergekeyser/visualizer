const fs = require('fs');
const path = require('path');



var alldata=[]
console.log("***************** Compiler to compile api definition to displayable JSON*********")

console.log("Reading and annotating all json files")
console.log("Writing annotated file")

filewalker("../mapping", function(err, data){
    if(err){
        throw err;
    }
    
    for (var i=0; i< data.length;i++)
		{
			filenamesplit = data[i].split('\\')
			apiType = filenamesplit[filenamesplit.length-4]
			apiName = filenamesplit[filenamesplit.length-3]
			apiVersion = filenamesplit[filenamesplit.length-2]
			
			annotator(data[i],apiType,apiName,apiVersion,data.length,)
			
		}
});









