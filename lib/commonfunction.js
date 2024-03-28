const axios = require('axios');


exports.thirdParty = async (req, res, $url) => {
    const apiUrl = $url;

    try {
        axios.get(apiUrl)
            .then(response => {
                const data = response.data
                res.status(200).json(successResponse(data)); // Send the response from the third-party API to the client

            })
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' }); // Send an error response to the client
    }
}

function successResponse($data) {
    const response = [{
        status: 200,
        message: "Granted",
        data: $data
    }]
    return response
}


exports.newResponse = function ($data) {
    const response = [{
        status: 200,
        message: "Granted",
        data: $data
    }]
    return response
};


exports.curlFunction = async function ($url) {

    const apiUrl = $url;

    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        throw error;
    }

}
