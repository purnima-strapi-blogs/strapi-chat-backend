async function findUser(username, room) {
    try {
        const userExists = await strapi.services.users.find({ username, room });
        return userExists;
    } catch(err) {
        console.log("error while fetching", err);
    }
}

async function createUser({ username, room, status, socketId }) {
    try {
        const user = await strapi.services.users.create({
            username,
            room,
            status: status,
            socketId
        });
        
        return user;

    } catch(err) {
        console.log("User couldn't be created...... Try again!")
    }
}
   
async function userExists(id) {
    try {
        const user = strapi.services.users.findOne({ id: id });
        return user;

    } catch(err) {
        console.log("Error occured when fetching user", err);
    }
}

async function getUsersInRoom(room) {
    try {
        const usersInRoom = await strapi.services.users.find({ room })
        return usersInRoom;
    } catch(err) {
        console.log("Error.Try again!", err);
    }
}

async function deleteUser(socketId) {
    try {
        const user = await strapi.services.users.delete({ socketId: socketId });
        return user;

    } catch(err) {
        console.log("Error while deleting the User", err);
    }
}
module.exports = {
    findUser,
    createUser,
    userExists,
    getUsersInRoom,
    deleteUser
}