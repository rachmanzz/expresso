global._module = module => {
    if (/^[a-z]+::[\w]+/.test(module)) {
        // required vendor module
        const arr_data = module.match(/(^[a-z]+)::([\w\W\d\D]+)$/)
        if (arr_data[1] === 'vendor') return require(__dirname + '/modules/' + arr_data[2])
        else if (arr_data[1] === 'app') return require(__dirname + '../app/' + arr_data[2])
        else if (arr_data[1] === 'middleware') return require(__dirname + '../app/middleware/' + arr_data[2])
        else { console.error('invalid module path'); return null }
    } else return require(module)
}