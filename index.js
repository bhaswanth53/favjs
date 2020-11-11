export default class Fav {
    constructor(data) {
        this.data = data
        this.errors = {}
        this.elem = ""
        this.id = ""
        this.patterns = {
            url: /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
            email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        }
    }
    name(elem) {
        this.id = elem
        return this
    }
    value(elem) {
        this.elem = elem
        return this
    }
    required() {
        var value = this.data[this.elem]
        if(value == "" || value.length == 0 || value == undefined) {
            this.error(this.elem, "This field is required")
        }
        return this
    }
    integer() {
        var value = this.data[this.elem]
        this.data[this.elem] = parseInt(value)
        return this
    }
    minValue(size) {
        var value = this.data[this.elem]
        if(value < size) {
            this.error(this.elem, "Minimum value is "+size)
        }
        return this
    }
    maxValue(size) {
        var value = this.data[this.elem]
        if(value > size) {
            this.error(this.elem, "Maximum value is "+size)
        }
        return this
    }
    minLength(size) {
        var value = this.data[this.elem]
        if(value.length < size) {
            this.error(this.elem, "Atleast "+ size +" characters are required")
        }
        return this
    }
    maxLength(size) {
        var value = this.data[this.elem]
        if(value.length > size) {
            this.error(this.elem, "Maximum "+ size + " characters are allowed")
        }
        return this
    }
    isUrl() {
        var value = this.data[this.elem]
        var regex = new RegExp(this.patterns.url)
        if(!regex.test(value)) {
            this.error(this.elem, "Value must be an URL")
        }
        return this
    }
    isEmail() {
        var value = this.data[this.elem]
        var regex = new RegExp(this.patterns.email)
        if(!regex.test(value)) {
            this.error(this.elem, "Email is not valid")
        }
        return this
    }
    password() {
        var value = this.data[this.elem]
        var regex = new RegExp(this.patterns.password)
        if(!regex.test(value)) {
            this.error(this.elem, "Password must contain one uppercase letter, one number, one special character and one letter and atleast eight characters length")
        }
        return this
    }
    pattern(pat) {
        var value = this.data[this.elem]
        var regex = new RegExp(pat)
        if(!regex.test(value))
        {
            this.error(this.elem, "Value not matched to pattern")
        }
        return this
    }
    equals(val) {
        var value = this.data[this.elem]
        if(value !== val) {
            this.error(this.elem, "Values not matched")
        }
        return this
    }
    error(elem, value) {
        if(this.errors[elem] == "" || this.errors[elem] == undefined)
            this.errors[elem] = value
    }
    geterrors() {
        return this.errors
    }
    isSuccess() {
        return Object.keys(this.errors).length == 0
    }
}