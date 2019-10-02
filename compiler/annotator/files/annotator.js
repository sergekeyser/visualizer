const fs = require('fs');
const path = require('path');



module.exports = {
  annotatefiles: function (filelist, cb) {
	 
	 maxLength = filelist.length
	 resultArray = []
	 for (var i=0; i < maxLength ;i++)
		{		
		 splitter(filelist[i],maxLength,resultArray,cb)
		}
  }
};

function print(data)
	{
		console.log(JSON.stringify(data))
	}

function splitter(filepath, maxLength,resultArray, cb)
	{
			var splitNames={}
			filenamesplit = filepath.split('\\')
			splitNames.apiType = filenamesplit[filenamesplit.length-4]
			splitNames.apiName = filenamesplit[filenamesplit.length-3]
			splitNames.apiVersion = filenamesplit[filenamesplit.length-2]
			annotator(filepath, splitNames, maxLength,resultArray, cb)	
	}

function annotator(filepath, annotationData, maxLength, resultArray, callback)
{
	fs.readFile(filepath,function read(err,data){
    if (err) {
        throw err;
    }
	var parseddata=JSON.parse(data)
	Object.assign(parseddata,annotationData)

    resultArray.push(parseddata)
	//console.log(resultArray)
	if(resultArray.length == maxLength)
		callback(resultArray)
});
	
		
}