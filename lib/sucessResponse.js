exports.successResponse = function ($data, $message) {

    const response = [{
        status: 200,
        message: "Granted",
        data: $data
    }]
    return response
};