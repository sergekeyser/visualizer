[
	{
		"groupId": "3UK",
		"name":"3UK",
		"apiVersion": 1,
		"width": 184,
		"height": 20,
		"xpos": 100,
		"ypos": 32.5,
		"endpoints": [
			{
				"groupId": "3UK_token",
				"uri": "/token",
				"docLink": "https://idmobile.atlassian.net/wiki/spaces/IDV2/pages/499449899",
				"width": 46,
				"height": 20,
				"xpos": 100,
				"ypos": 52.5,
				"methods": [
					{
						"groupId": "3UK_token_get",
						"method": "GET",
						"width": 32,
						"height": 20,
						"xpos": 100,
						"ypos": 72.5,
						"arrowPoints": [
							[
								"117.5 72.5",
								"117.5 80",
								"154 80",
								"154 190"
							]
						],
						"show": [
							"authtokenrequest",
							"post_authtokenrequest"
						]
					}
				]
			},
			{
				"groupId": "3UK_activationnotification",
				"uri": "/activation/notification",
				"docLink": "https://idmobile.atlassian.net/wiki/spaces/IDV2/pages/521371684",
				"width": 134,
				"height": 20,
				"xpos": 150,
				"ypos": 52.5,
				"methods": [
					{
						"groupId": "3UK_token_get",
						"method": "GET",
						"width": 32,
						"height": 20,
						"xpos": 100,
						"ypos": 72.5,
						"arrowPoints": [
							[
								"117.5 72.5",
								"117.5 80",
								"154 80",
								"154 190"
							]
						],
						"show": [
							"tools_authtokenrequest",
							"tools_authtokenrequest_get"
						]
					}
				]
			}
		]
	}
]