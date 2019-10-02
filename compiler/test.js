const fileWalker = require('./common/filewalker/files/filewalker.js');
const annotator =  require('./annotator/files/annotator.js');
const sorter = require('./common/sorter/files/sorter.js');
const fs = require('fs')

console.log("***************** Compiler to compile api definition to displayable JSON*********")
console.log("Reading and annotating all json files")

function printEnd ()
{
		console.log ("the end")
}

const unique = (value, index, self) => {
  return self.indexOf(value) === index
}

function groupIt(data){
				var sorted = data.sort(sorter.sort('apiName', false, function(a){return a.toUpperCase()}));
				var allApis = []
				for(var j = 0; j< sorted.length;j++)
					{
						allApis.push(sorted[j].apiName)
					}
				var filteredApis = allApis.filter(unique)
				var groupedApis = []
				for (j=0;j<filteredApis.length;j++)
				{
					var groupApi = []
					for (k=0;k<sorted.length;k++)
					{
											
						if(sorted[k].apiName == filteredApis[j])
							groupApi.push(sorted[k])
					}
					groupedApis.push(groupApi)
				}
				
				var compileApis=[]
				for(l=0;l<groupedApis.length;l++)
				{
					var apiElement = {}
					apiElement.groupId = groupedApis[l][0].apiName
					apiElement.type= groupedApis[l][0].apiType
					apiElement.name = groupedApis[l][0].apiName
					apiElement.apiVersion = groupedApis[l][0].apiVersion
					apiElement.height = 20
					apiElement.width = 5 + apiElement.name.length*11
					var apiElementwidth = 0;
					apiElement.endpoints=[]
					for (m=0;m<groupedApis[l].length;m++)
						{
							var endpoint={}
							endpoint.groupId=apiElement.groupId+"_"+apiElement.apiVersion+"_"+groupedApis[l][m].endpoint.replace(/\{(.*)\}/gi, 'by$1').replace(/\//gi,'')
							endpoint.docLink=groupedApis[l][m].confluence
							endpoint.uri=groupedApis[l][m].endpoint
							endpoint.height = 20
							endpoint.width = 2 + endpoint.uri.length*6
							var endpointwidth= 0
							endpoint.methods=[]
							
							var methods = groupedApis[l][m].methods
							for(n=0;n<methods.length; n++)
								{
									var method = {}
									method.groupId = methods[n].method +"_" +endpoint.groupId 
									method.method = methods[n].method
									method.height = 20
									method.width= 2 + methods[n].method.length*7
									endpointwidth += method.width
									method.show=[]
									var connectingApis = methods[n].connectsTo
									if(typeof connectingApis != 'undefined')
									{ for (o=0;o < connectingApis.length; o++)
										{
											method.show.push(connectingApis[o].apiName + "_" + connectingApis[o].apiVersion + "_" + connectingApis[o].uri.replace(/\{(.*)\}/gi, 'by$1').replace(/\//gi,''))
											method.show.push(connectingApis[o].method + "_" + connectingApis[o].apiName + "_" + connectingApis[o].apiVersion + "_" + connectingApis[o].uri.replace(/\{(.*)\}/gi, 'by$1').replace(/\//gi,''))
										}
									method.show = method.show.filter(unique)
									
									}
									
									endpoint.methods.push(method)	
								}
								if(endpointwidth > endpoint.width)
										endpoint.width = endpointwidth
									else	
										{
											endpoint.methods[n-1].width += (endpoint.width - endpointwidth)
											endpointwidth = endpoint.width
										}
							apiElement.endpoints.push(endpoint)
							apiElementwidth += endpoint.width	
						}
						if (apiElementwidth > apiElement.width)
								apiElement.width = apiElementwidth
							else
								{
									console.log(apiElementwidth)
									console.log(apiElement.width)
									console.log(endpointwidth)
									
									apiElement.endpoints[m-1].width += (apiElement.width - apiElementwidth)
									apiElement.endpoints[m-1].methods[n-1].width += (apiElement.width - endpointwidth)
									console.log("INCREASING ENDPOINT WIDTH BY"+(apiElement.width - endpointwidth) + "OF" + JSON.stringify(apiElement.endpoints[m-1]))
								}
					compileApis.push(apiElement)
				}
				
				
				
				//console.log(JSON.stringify(groupedApis))
				var EAPI = compileApis.filter(api => api.type == 'EAPI')
				var PAPI = compileApis.filter(api => api.type == 'PAPI')
				var SAPI = compileApis.filter(api => api.type == 'SAPI')
				
				EAPI = EAPI.sort(sorter.sort('apiName', false, function(a){return a.toUpperCase()}));
				var posx = 100
				var posy = 32.5
				var distance = 10
				for (var a = 0; a < EAPI.length;a++)
					{
						EAPI[a].xpos = posx
						EAPI[a].ypos = posy
						posx+=(EAPI[a].width + 10)
					}
				
				var posx = 100
				var posy = 232.50
				var distance = 10
								
				PAPI = PAPI.sort(sorter.sort('apiName', false, function(a){return a.toUpperCase()}));
				for (var a = 0; a < PAPI.length;a++)
					{
						PAPI[a].xpos = posx
						PAPI[a].ypos = posy
						posx+=(PAPI[a].width + 10)
					}
				
				
				var posx = 100
				var posy = 432.50
				var distance = 10
								
				SAPI = SAPI.sort(sorter.sort('apiName', false, function(a){return a.toUpperCase()}));
				
				for (var a = 0; a < SAPI.length;a++)
					{
						SAPI[a].xpos = posx
						SAPI[a].ypos = posy
						posx+=(SAPI[a].width + 10)
					}
				
				var sortedCompiledApis = EAPI.concat(PAPI.concat(SAPI))
				console.log(JSON.stringify(sortedCompiledApis))
				
				fs.writeFile(process.argv[3], JSON.stringify(sortedCompiledApis), 'UTF-8', printEnd)
				
			}




fileWalker.listoffiles(process.argv[2], function(err, data){
    if(err){
        console.log(err)
		process.exit(1)
    }
	annotator.annotatefiles(data, groupIt) 
	
	
	
});









