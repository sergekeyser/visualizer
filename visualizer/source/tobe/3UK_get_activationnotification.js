{
	"apiVersion": 1
	"apiName": "3UK",
	"apiType": "EAPI"
	"endpoint": "/activation/notification",
	"method": "GET"
	"confluence":"https://idmobile.atlassian.net/wiki/spaces/IDV2/pages/499449899",
	"connectsTo":
		[
			{
				"apiVersion":"1",
				"apiName": "Tools"
				"uri": "/auth/tokenValidate"
				"method": "GET"
			},
			{
				"apiVersion":"1",
				"apiName": "Tools"
				"uri": "/auth/tokenGet"
				"method": "GET"
			}
		]
}