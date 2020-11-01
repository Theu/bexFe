import app from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from './config';

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
    }

    // auth has 4 main function
    // -- register new user
    // -- login
    // -- logout
    // -- resetPsw

    async registerNewUser(name, email, password) {
        const newUser = await this.auth.createUserWithEmailAndPassword(
            email,
            password,
        );

        return await newUser.user.updateProfile({ displayName: name });
    }

    async login(email, password) {
        return await this.auth.signInWithEmailAndPassword(email, password);
    }

    async logout() {
        await this.auth.signOut();
    }

    async sendPassowrdResetEmail(email) {
        await this.auth.sendPasswordResetEmail(email);
    }
}

const firebase = new Firebase();
export default firebase;
