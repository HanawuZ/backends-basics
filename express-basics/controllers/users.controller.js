const {User} = require('../models/index.js')
const userList = require('../samples/user.samples.js')
async function getUserByID(req, res){
    try {
        const { id } = req.params;
        const user = await User.findByPk(id)
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).json(`No user with id ${id} found`)
        }

    } catch (error) {
        return res.status(500).json("Error while fetching user")
    }
}

function createUser(req, res){
    const users = userList.userList;
    try {
        users.forEach(async (user) => {
            await user.save();
        });
    } catch (error) {
        return res.status(500).json("Error while creating user")
    }
    return res.status(201).json("User created successfully")
        
   
}

async function listUser(req,res){
    try {
        const users = await User.findAll()
        if (users) {
            return res.status(200).json(users)
        } else {
            return res.status(404).json("No users found")
        }

    } catch (error) {
        return res.status(500).json("Error while fetching users")
    }

}

async function deleteUser(req, res){
    const { id } = req.params;
    try {
        const result = await User.destroy({where: {id: id}})
        if (result) {
            return res.status(200).json("User deleted successfully")
        }
    } catch (error) {
        return res.status(500).json("Error while deleting user")
    }
}
module.exports = {createUser, getUserByID, listUser, deleteUser}