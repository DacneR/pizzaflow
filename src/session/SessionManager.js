class SessionManager {

    constructor(){

        this.sessions = new Map();

    }

    get(userId){

        return this.sessions.get(userId);

    }

    save(userId,data){

        this.sessions.set(userId,data);

    }

}

module.exports = SessionManager;