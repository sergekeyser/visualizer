var svgNS = "http://www.w3.org/2000/svg";  

/*
	This function generates a rectangle with some text left alligned to italics
	id = document from which we can find back this nodeName
	topElements = true if the generated element should be visible at all times (i.e. when all connections are collapsed) false otherwise
	click = what to do when someone clicks on the element
	clickIsUrl = true when the value in click is an actual URL if it is js function or something, put this to false
	dataShow=Array of data to show when someone clicks on the element (can not be used in conjunction with clickIsUrl = true
	bgColor=Color of the rectangle
	txtColor=Color of the text
	stroke=color of the border of the rectangle
	textContent=Text to display
	fontSize=size of the font to display
	fontColor=color of the font to display
	height = height of the rectangle
	width = width of the rectangle
	posx = top left corner x position of the rectangle
	posy = top left corner y position of the rectangle
*/

function visualRect( 	id,
						topElements,
						click,
						clickIsUrl,
						dataShow,
						bgColor,
						txtColor,
						stroke,
						textContent,
						fontSize, 
						fontColor, 
						height, 
						width, 
						posx,
						posy)
{
	var myGroup = document.createElementNS(svgNS,"g")
	if(topElements===true)
		myGroup.setAttributeNS(null,"class","topelements");
	myGroup.setAttributeNS(null,"id",id);
	
	var rectangle = document.createElementNS(svgNS,"rect"); 
	if(click != "")
		{
			if(clickIsUrl)
				rectangle.setAttributeNS(null,"onclick","window.open('"+click+"','_blank')");
			else	
				rectangle.setAttributeNS(null,"onclick",click);
		}	
	if(dataShow!="")
	rectangle.setAttributeNS(null,"data-show",dataShow);
	rectangle.setAttributeNS(null,"x",posx);
    rectangle.setAttributeNS(null,"y",posy);
	rectangle.setAttributeNS(null,"height",height)
	rectangle.setAttributeNS(null,"width",width)
    rectangle.setAttributeNS(null,"fill",bgColor);
    rectangle.setAttributeNS(null,"stroke",stroke);
	myGroup.appendChild(rectangle)
	
	var rectangleText = document.createElementNS(svgNS,"text");
	if(click != "")
		{
			if(clickIsUrl)
				rectangleText.setAttributeNS(null,"onclick","window.open('"+click+"','_blank')");
			else	
				rectangleText.setAttributeNS(null,"onclick",click);
		}	
	if(dataShow!="")
	rectangleText.setAttributeNS(null,"data-show",dataShow);
	rectangleText.setAttributeNS(null,"x",posx);
    rectangleText.setAttributeNS(null,"y",posy+height-2);
	rectangleText.setAttributeNS(null,"font-family","Verdana");
	rectangleText.setAttributeNS(null,"font-size",fontSize);
    rectangleText.setAttributeNS(null,"fill",fontColor);
	
	txtnode = document.createTextNode(textContent);
    rectangleText.appendChild(txtnode);
	
	myGroup.appendChild(rectangleText)
		
	return myGroup
}

function visualRectEndpoint( id,
						topElements,
						click,
						clickUrl,
						dataShow,
						bgColor,
						txtColor,
						stroke,
						textContent,
						fontSize, 
						fontColor, 
						height, 
						width, 
						posx,
						posy)
{
	var myGroup = document.createElementNS(svgNS,"g")
	
	myGroup.setAttributeNS(null,"id",id);
	
	//draw doc link rectangle
	var rectangle = document.createElementNS(svgNS,"rect"); 
	rectangle.setAttributeNS(null,"onclick","window.open('"+clickUrl+"','_blank')");
	rectangle.setAttributeNS(null,"x",posx);
    rectangle.setAttributeNS(null,"y",posy);
	rectangle.setAttributeNS(null,"height",height/2)
	rectangle.setAttributeNS(null,"width",width)
    rectangle.setAttributeNS(null,"fill",bgColor);
    rectangle.setAttributeNS(null,"stroke",stroke);
	myGroup.appendChild(rectangle)
	
	var rectangleText = document.createElementNS(svgNS,"text");
	rectangleText.setAttributeNS(null,"onclick","window.open('"+clickUrl+"','_blank')");
	rectangleText.setAttributeNS(null,"x",posx);
    rectangleText.setAttributeNS(null,"y",posy+height/2-2);
	rectangleText.setAttributeNS(null,"font-family","Verdana");
	rectangleText.setAttributeNS(null,"font-size",fontSize);
    rectangleText.setAttributeNS(null,"fill",fontColor);
	
	txtnode = document.createTextNode("Doc");
    rectangleText.appendChild(txtnode);
	
	myGroup.appendChild(rectangleText)
	
	var rectangle = document.createElementNS(svgNS,"rect"); 
	rectangle.setAttributeNS(null,"onclick",click);
	if(dataShow!="")
	rectangle.setAttributeNS(null,"data-show",dataShow);
	rectangle.setAttributeNS(null,"x",posx);
    rectangle.setAttributeNS(null,"y",posy+height/2);
	rectangle.setAttributeNS(null,"height",height/2)
	rectangle.setAttributeNS(null,"width",width)
    rectangle.setAttributeNS(null,"fill",bgColor);
    rectangle.setAttributeNS(null,"stroke",stroke);
	myGroup.appendChild(rectangle)
	
	var rectangleText = document.createElementNS(svgNS,"text");
	rectangleText.setAttributeNS(null,"onclick",click);
	if(dataShow!="")
	rectangleText.setAttributeNS(null,"data-show",dataShow);
	rectangleText.setAttributeNS(null,"x",posx);
    rectangleText.setAttributeNS(null,"y",posy+height-2);
	rectangleText.setAttributeNS(null,"font-family","Verdana");
	rectangleText.setAttributeNS(null,"font-size",fontSize);
    rectangleText.setAttributeNS(null,"fill",fontColor);
	
	txtnode = document.createTextNode(textContent);
    rectangleText.appendChild(txtnode);
	
	myGroup.appendChild(rectangleText)
	
		
	return myGroup
}

//arrows is an array of arrays which contains all the to be displayed arrows
function visualRectMethod( 
						arrows,
						id,
						topElements,
						click,
						clickUrl,
						dataShow,
						bgColor,
						txtColor,
						stroke,
						textContent,
						fontSize, 
						fontColor, 
						height, 
						width, 
						posx,
						posy)
{
	var myGroup = document.createElementNS(svgNS,"g")
	
	myGroup.setAttributeNS(null,"id",id);
	
	//draw doc link rectangle
		
	var rectangle = document.createElementNS(svgNS,"rect"); 
	rectangle.setAttributeNS(null,"onclick",click);
	if(dataShow!="")
	rectangle.setAttributeNS(null,"data-show",dataShow);
	rectangle.setAttributeNS(null,"x",posx);
    rectangle.setAttributeNS(null,"y",posy+height/2);
	rectangle.setAttributeNS(null,"height",height/2)
	rectangle.setAttributeNS(null,"width",width)
    rectangle.setAttributeNS(null,"fill",bgColor);
    rectangle.setAttributeNS(null,"stroke",stroke);
	myGroup.appendChild(rectangle)
	
	var rectangleText = document.createElementNS(svgNS,"text");
	rectangleText.setAttributeNS(null,"onclick",click);
	if(dataShow!="")
	rectangleText.setAttributeNS(null,"data-show",dataShow);
	rectangleText.setAttributeNS(null,"x",posx);
    rectangleText.setAttributeNS(null,"y",posy+height-2);
	rectangleText.setAttributeNS(null,"font-family","Verdana");
	rectangleText.setAttributeNS(null,"font-size",fontSize);
    rectangleText.setAttributeNS(null,"fill",fontColor);
	
	txtnode = document.createTextNode(textContent);
    rectangleText.appendChild(txtnode);
	
	myGroup.appendChild(rectangleText)
	
		
	return myGroup
}


function arrow(
				id,
				path
			)
			{
				var group=document.createElementNS(svgNS,"g");
				group.setAttributeNS(null,"id",id);
				
				var completePath="M "
					
				for (var i=0; i< path.length; i++)
				{
					if(i == 0)
						completePath+=path[i]
					else
						completePath+= "L" + path[i]
				}
				
				
				var arrowLine = document.createElementNS(svgNS,"path");
				arrowLine.setAttributeNS(null,"d",completePath);
				arrowLine.setAttributeNS(null,"fill","none");
				arrowLine.setAttributeNS(null,"stroke","#000000");
				arrowLine.setAttributeNS(null,"stroke-miterlimit","10");
				arrowLine.setAttributeNS(null,"pointer-events","none");
			
				group.appendChild(arrowLine)
				
				var arrowHeadStart = path[path.length -1].split(" ")
								
				var arrowHeadCoordinates = "M "+ arrowHeadStart[0] + " " + arrowHeadStart[1] + " L "+ (arrowHeadStart[0] - 2) + " " + (arrowHeadStart[1] - 2.5) + " L " + arrowHeadStart[0] + " " + (arrowHeadStart[1] - 2) + " L " + (arrowHeadStart[0] - 1 + 3) + " " + (arrowHeadStart[1] - 2.5) + " Z"
				var arrowLine = document.createElementNS(svgNS,"path");
				arrowLine.setAttributeNS(null,"d",arrowHeadCoordinates);
				arrowLine.setAttributeNS(null,"fill","none");
				arrowLine.setAttributeNS(null,"stroke","#000000");
				arrowLine.setAttributeNS(null,"stroke-miterlimit","10");
				arrowLine.setAttributeNS(null,"pointer-events","none");
			
				group.appendChild(arrowLine)
				
				return group
			}
			
			
			
 function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', './source/tobe/compiled.js', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }			

 function generateSvg()
{
	loadJSON(visualize)
} 

function visualize(response){
	console.log(response)
	var payload = JSON.parse(response)
	var EAPI = visualRect("EAPI",true, "", true, "" , "green","white","none","EAPI",20, "white",20,60,0,32.5, )
	var PAPI = visualRect("PAPI",true, "", true, "" , "blue","white","none","PAPI",20, "white",20,60,0,232.5, )
	var SAPI = visualRect("SAPI",true, "", true, "" , "black","white","none","SAPI",20, "white",20,60,0,432.5, )
	
	var arrows = arrow("12",["117.5 72.5","117.5 80","154 80","154 190"])
	
	document.getElementById("mySVG").appendChild(EAPI);
	document.getElementById("mySVG").appendChild(PAPI);
	document.getElementById("mySVG").appendChild(SAPI);
	document.getElementById("mySVG").appendChild(arrows);
	
	console.log(payload[0].name)
	for (var i=0 ; i< payload.length;i++)
	{
		//API Level
		var currElem = payload[i]	
		var endpointsToShow = [];
		for (var j=0;j < currElem.endpoints.length;j++)
			endpointsToShow.push(currElem.endpoints[j].groupId)
		//draw the API Level element
		
		var color = 'green'
		if (currElem.type == 'PAPI')
			color = 'blue'
		if (currElem.type == 'SAPI')
			color = 'black'
		
		
		var rect = visualRect(currElem.groupId,true, "hideSVG()", false, JSON.stringify(endpointsToShow) , color,"white","none",currElem.name,20, "white",currElem.height,currElem.width,currElem.xpos,currElem.ypos, )
		document.getElementById("mySVG").appendChild(rect);
		
		var xposEndpoint = currElem.xpos
		var yposEndpoint = currElem.ypos+20
		//Endpoint Level
		for (var k=0;k<currElem.endpoints.length;k++)
			{
				
				currEndpoint=currElem.endpoints[k]
				var methodstoshow=[]
				for (var l=0;l < currEndpoint.methods.length;l++)
					methodstoshow.push(currEndpoint.methods[l].groupId)
				var rect = visualRectEndpoint(currEndpoint.groupId,true, "hideSVG()", currEndpoint.docLink, JSON.stringify(methodstoshow) , "orange","white","none",currEndpoint.uri,10, "white",currEndpoint.height,currEndpoint.width,xposEndpoint,yposEndpoint, )
				
				
				document.getElementById("mySVG").appendChild(rect);
			//Method Level
			
				xposMethod = xposEndpoint
				yposMethod = yposEndpoint+10
				for (var m=0;m < currEndpoint.methods.length;m++)
				{
						currMethod=currEndpoint.methods[m]
						var rect = visualRectMethod(null,currMethod.groupId,true, "hideSVG()", null , JSON.stringify(currMethod.show) , "orange","white","none",currMethod.method,10, "white",currMethod.height,currMethod.width,xposMethod,yposMethod, )
						xposMethod += currMethod.width
						document.getElementById("mySVG").appendChild(rect);
				}
				xposEndpoint +=  currEndpoint.width
		}
		
			
		
		
	}
}

window.onload = generateSvg;




function hideSVG() {
  let elementsToShowArray = JSON.parse(event.target.getAttribute('data-show'));
  console.log(elementsToShowArray)
  for(var i=0; i< elementsToShowArray.length;i++)
	{
		  elementsToShow=elementsToShowArray[i]
		  var style = document.getElementById(elementsToShow).style.visibility;
		  console.log(style)
		  if(style === "hidden" || style === "")
			{ 
				document.getElementById(elementsToShow).style.display = "block";
				document.getElementById(elementsToShow).style.visibility = "visible";
			}
		  else
			{
				document.getElementById(elementsToShow).style.display = "none";
				document.getElementById(elementsToShow).style.visibility = "hidden";
			}
	}
}