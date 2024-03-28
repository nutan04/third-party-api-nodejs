const commonFunction = require('../lib/commonfunction')
const successResponse = require('../lib/sucessResponse')

exports.data = async (req, res) => {

    try {
        const apiUrl = 'https://randomuser.me/api/?results=10';
        await commonFunction.thirdParty(req, res, apiUrl);

    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }

}
exports.newdata = async (req, res) => {
    const apiUrl = 'https://randomuser.me/api/?results=10';
    const response = await commonFunction.curlFunction(apiUrl);
    const data = successResponse.successResponse(response)
    res.send(data);
}



