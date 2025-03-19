const bcrypt = require('bcrypt');
const userRepository = require('../repositories/userRepository');
const { v4: UUIDV4 } = require('uuid');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'SUACHAVESECRETA';

class UserService{
    async register(username, password, email){
        const getuser = await this.getByUserName(username);
        console.log(getuser);
        if(getuser){
            throw new Error('Usuário já cadastrado');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userRepository.createUser({id: UUIDV4(), username, email, password: hashedPassword});
        return user;
    }

    async getByUserName(username){
        return await userRepository.findByUserName(username);
    }

    async login(username, password){
        const user = await this.getByUserName(username);
        if(!user){
            throw new Error('Usuário ou senha incorretos');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            throw new Error('Usuário ou senha incorretos');
        }

        const token = jwt.sign({id: user.id}, SECRET_KEY, {expiresIn: '1h'});
        return token;
    }

    async getUsers(){
        return await userRepository.findAll();
    }
}

module.exports = new UserService();