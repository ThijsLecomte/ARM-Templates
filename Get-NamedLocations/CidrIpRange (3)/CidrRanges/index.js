const IPCIDR = require("ip-cidr");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    

    var cidr = new IPCIDR (req.query.cidr);
    var IpLIst = cidr.toArray();
    var JsonIPList = JSON.stringify(IpLIst);
    var JsonToReturn = JSON
     
        context.res = {           
            body: JsonIPList
    
        };
    
    context.res.headers = { 'Content-Type': 'application/json'};
    context.done();
};