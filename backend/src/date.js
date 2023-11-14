module.exports.getDate = getDate;

function getDate() {
    const today = new Date();

    let options = {
        weekday:"longday",
        month:"numerical",
        day:"numerical",
        year:"numerical"
    };

    return today.toLocaleDateString("pt-BR", options);
}