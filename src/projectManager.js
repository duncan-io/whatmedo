function projectCreator (name, list){

    list = [];
    return {name, list}
}

function taskCreator (name, description, date){
    return {name, description, date}
}