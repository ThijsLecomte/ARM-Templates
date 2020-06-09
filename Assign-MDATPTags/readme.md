# Assign-MDATPTags
author: Thijs Lecomte

This Logic App will assign MDATP tags for the department according to:
- The name of the device (first 3 letters, checked through a Sharepoint List)
- The extensionAttribute of the current logged in User

An app registration should be created with permissions:
- Sites.Read.All
- User.Read.All
- AdvancedQuery.Read.All
- Machine.ReadWrite.All


<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FThijsLecomte%2FARM-Templates%2Fmaster%2FAssign-MDATPTags%2Fazuredeploy.json" target="_blank">
    <img src="https://aka.ms/deploytoazurebutton"/>
</a>
<a href="https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FThijsLecomte%2FARM-Templates%2Fmaster%2FAssign-MDATPTags%2Fazuredeploy.json" target="_blank">
<img src="https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazuregov.png"/>
</a>