function show (filesWithTODO) {
    const todoArray = filesWithTODO
        .map(file => file.split('\n'));
    let result = [];
    let regEx = /\/\/ TODO.*/gi
    for (let item of todoArray)
        for (let str of item)
            if (str.match(regEx))
                result.push(str.slice(str.indexOf('//')));
    console.log(result);
}

module.exports = {
    show
};