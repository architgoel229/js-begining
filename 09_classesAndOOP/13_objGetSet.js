const User = {
    _email: 'abc@example.com',
    _password: 'abc2123',


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    }


}

const tea = Object.create(User)

console.log(User.email);
