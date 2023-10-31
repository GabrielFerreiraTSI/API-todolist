const getAll = (request, response) => {
    response.status(200).json({message:"controller is working!"});
};

modules.exports = {
    getAll
}