const express = require('express')
const router = express.Router()

const app = function () {}

const use = function (methods) {
    if(/[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+/.test(methods)) {
        const app = methods.match(/([a-zA-Z0-9_]+)\.([a-zA-Z0-9_]+)/)
        const construct = require(__dirname + '../app/controller/' + app[1])
        return new construct()[app[2]]
    } else {console.warn('controller data not valid'); return null}
}
const event = function (arg) {
    if(typeof arg === 'function') return arg
    else if(typeof arg === 'string') return use(arg)
    else {console.warn('function argument not valid'); return null}
}
app.prototype.get = (path, arg, arg2) => {
    if(typeof arg2 !== 'undefined') router.get(path, arg, event(arg2))
    else if(typeof arg !== 'undefined') router.get(path, event(arg))
    else console.warn('invalid method argument')
}

app.prototype.post = (path, arg, arg2) => {
    if(typeof arg2 !== 'undefined') router.post(path, arg, event(arg2))
    else if(typeof arg !== 'undefined') router.post(path, event(arg))
    else console.warn('invalid method argument')
}

app.prototype.put = (path, arg, arg2) => {
    if(typeof arg2 !== 'undefined') router.put(path, arg, event(arg2))
    else if(typeof arg !== 'undefined') router.put(path, event(arg))
    else console.warn('invalid method argument')
}

app.prototype.patch = (path, arg, arg2) => {
    if(typeof arg2 !== 'undefined') router.patch(path, arg, event(arg2))
    else if(typeof arg !== 'undefined') router.patch(path, event(arg))
    else console.warn('invalid method argument')
}

app.prototype.delete = (path, arg, arg2) => {
    if(typeof arg2 !== 'undefined') router.delete(path, arg, event(arg2))
    else if(typeof arg !== 'undefined') router.delete(path, event(arg))
    else console.warn('invalid method argument')
}

module.exports = { router, app }