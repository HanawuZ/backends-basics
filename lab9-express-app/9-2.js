const jwt = require('jsonwebtoken');

const payload ={
    stdid: 'B6302245',
    name: 'Thanawut Tuamprajak',
    major: 'CPE',
}

const key = 'MY_KEY'
const token = jwt.sign(payload, key, { expiresIn: 60*5 });

console.log(token);

try {
    const dataInToken = jwt.verify(token, key);
    console.log(dataInToken);

} catch (error) {
    console.log(error);   
}