# FavJS

FAVJS is a Javascript library which is used for form validations. Since it is written in plain Javascript, it can be used in any framework or in Vanilla Javascript.

### Install

It can be installed using npm. Install it using

```
npm install favjs
```

Once installed, you can add **index.js** directly from **node_modules/favjs** folder.

```html
<script src="node_modules/favjs/index.js"></script>
```

or

You can import the module using ES6

```javascript
import Fav from 'favjs'
```

### Example

```javascript
import Fav from 'favjs'

let formData = {
    name: "My Name",
    email: "myemail@gmail.com",
    password: "mypassword"
}

let fav = new Fav(formData);
fav.name("Name").value("name").required();
fav.name("Email").value("email").required().isEmail();
fav.name("Password").value("password").required().password();
if(fav.isSuccess()) {
    // Validation is success
} else {
    let errors = fav.getErrors();
}
```

### Error Response

The response from **fav.getErrors()** will be as shown below.

```javascript
{
    name: "Name is required",
    email: "Email is required",
    password: "Password must contain atleast 8 characters, one uppercase letter, one special character and one numeric value"
}
```

### Methods

Method | Description
-----|-------
name(name) | Name of the input field
value(value) | Value of the input
required() | Check whether the value is empty
integer() | Check whether the value is integer
minValue(size) | Check whether the integer value is not less than size.
maxValue(size) | Check whether the integer value is not greater than size.
maxLength(size) | Check the maximum character length of the string.
minLength(size) | Check the minimum character length of the string.
isUrl() | Check if the string is URL.
isEmail() | Check if the string is an email.
password() | Check if the string contains min length of 8 chars, max length of 32 chars, atleast 1 upper case letter, 1 numeric digit and 1 special character.
pattern(pattern) | Match string with given pattern.
equals(value) | Match string with given value
isSuccess() | Check if the data is valid or not.
getErrors() | Get errors in case validation fails.

Alright, happy coding :)