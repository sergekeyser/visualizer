[{"groupId":"Website","type":"EAPI","name":"Website","apiVersion":"v1","height":20,"width":82,"endpoints":[{"groupId":"Website_v1_subscriber","docLink":"https://idmobile.atlassian.net/wiki/spaces/IDV2/pages/548012047","uri":"/subscriber","height":20,"width":82,"methods":[{"groupId":"GET_Website_v1_subscriber","method":"GET","height":20,"width":23,"show":["customer_v1_customersbycustomerid","GET_customer_v1_customersbycustomerid"]},{"groupId":"POST_Website_v1_subscriber","method":"POST","height":20,"width":59,"show":["customer_v1_customers","POST_customer_v1_customers"]}]}],"xpos":100,"ypos":32.5},{"groupId":"Mobile","type":"EAPI","name":"Mobile","apiVersion":"v1","height":20,"width":97,"endpoints":[{"groupId":"Mobile_v1_account","docLink":"https://idmobile.atlassian.net/wiki/spaces/IDV2/pages/548012047","uri":"/account","height":20,"width":97,"methods":[{"groupId":"GET_Mobile_v1_account","method":"GET","height":20,"width":23,"show":["customer_v1_customersbycustomerid","GET_customer_v1_customersbycustomerid"]},{"groupId":"POST_Mobile_v1_account","method":"POST","height":20,"width":30,"show":["customer_v1_customers","POST_customer_v1_customers"]},{"groupId":"DELETE_Mobile_v1_account","method":"DELETE","height":20,"width":44,"show":["customer_v1_customers","POST_customer_v1_customers"]}]}],"xpos":192,"ypos":32.5},{"groupId":"customer","type":"PAPI","name":"customer","apiVersion":"v1","height":20,"width":202,"endpoints":[{"groupId":"customer_v1_customers","docLink":"https://idmobile.atlassian.net/wiki/spaces/IDV2/pages/548012047","uri":"/customers","height":20,"width":62,"methods":[{"groupId":"POST_customer_v1_customers","method":"POST","height":20,"width":62,"show":["sap_v1_clients","POST_sap_v1_clients","leadsdatabase_v1_lead","POST_leadsdatabase_v1_lead"]}]},{"groupId":"customer_v1_customersbycustomerid","docLink":"https://idmobile.atlassian.net/wiki/spaces/IDV2/pages/548012047","uri":"/customers/{customerid}","height":20,"width":140,"methods":[{"groupId":"GET_customer_v1_customersbycustomerid","method":"GET","height":20,"width":140,"show":["sap_v1_clientsbyclientid","GET_sap_v1_clientsbyclientid"]}]}],"xpos":100,"ypos":232.5},{"groupId":"leadsdatabase","type":"SAPI","name":"leadsdatabase","apiVersion":"v1","height":20,"width":148,"endpoints":[{"groupId":"leadsdatabase_v1_campaigns","docLink":"https://idmobile.atlassian.net/wiki/spaces/IDV2/pages/548012047","uri":"/campaigns","height":20,"width":97,"methods":[{"groupId":"GET_leadsdatabase_v1_campaigns","method":"GET","height":20,"width":23,"show":[]},{"groupId":"POST_leadsdatabase_v1_campaigns","method":"POST","height":20,"width":30,"show":[]},{"groupId":"DELETE_leadsdatabase_v1_campaigns","method":"DELETE","height":20,"width":44,"show":[]}]},{"groupId":"leadsdatabase_v1_leads","docLink":"https://idmobile.atlassian.net/wiki/spaces/IDV2/pages/548012047","uri":"/leads","height":20,"width":51,"methods":[{"groupId":"DELETE_leadsdatabase_v1_leads","method":"DELETE","height":20,"width":148,"show":[]}]}],"xpos":100,"ypos":432.5},{"groupId":"matrixx","type":"SAPI","name":"matrixx","apiVersion":"v1","height":20,"width":190,"endpoints":[{"groupId":"matrixx_v1_subscribers","docLink":"https://idmobile.atlassian.net/wiki/spaces/IDV2/pages/548012047","uri":"/subscribers","height":20,"width":74,"methods":[{"groupId":"GET_matrixx_v1_subscribers","method":"GET","height":20,"width":23,"show":[]},{"groupId":"POST_matrixx_v1_subscribers","method":"POST","height":20,"width":51,"show":[]}]},{"groupId":"matrixx_v1_clientsbyclientid","docLink":"https://idmobile.atlassian.net/wiki/spaces/IDV2/pages/548012047","uri":"/clients/{clientid}","height":20,"width":116,"methods":[{"groupId":"GET_matrixx_v1_clientsbyclientid","method":"GET","height":20,"width":23,"show":[]},{"groupId":"PATCH_matrixx_v1_clientsbyclientid","method":"PATCH","height":20,"width":93,"show":[]}]}],"xpos":258,"ypos":432.5},{"groupId":"sap","type":"SAPI","name":"sap","apiVersion":"v1","height":20,"width":169,"endpoints":[{"groupId":"sap_v1_clients","docLink":"https://idmobile.atlassian.net/wiki/spaces/IDV2/pages/548012047","uri":"/clients","height":20,"width":53,"methods":[{"groupId":"GET_sap_v1_clients","method":"GET","height":20,"width":23,"show":[]},{"groupId":"POST_sap_v1_clients","method":"POST","height":20,"width":30,"show":[]}]},{"groupId":"sap_v1_clientsbyclientid","docLink":"https://idmobile.atlassian.net/wiki/spaces/IDV2/pages/548012047","uri":"/clients/{clientid}","height":20,"width":116,"methods":[{"groupId":"GET_sap_v1_clientsbyclientid","method":"GET","height":20,"width":23,"show":[]},{"groupId":"PATCH_sap_v1_clientsbyclientid","method":"PATCH","height":20,"width":93,"show":[]}]}],"xpos":458,"ypos":432.5}]