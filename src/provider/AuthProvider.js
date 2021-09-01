import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { app, db } from '../firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (email, password, history) => {
    try {
      await app.auth().signInWithEmailAndPassword(email, password);
      history.push("/introduction");
      console.log('login success');
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (email, password, history) => {
    try {
      const res = await app.auth().createUserWithEmailAndPassword(email, password);
      history.push("/introduction");
      await db.collection("user").doc(res.user.uid).set({
        email: email,
        startAt: firebase.firestore.FieldValue.serverTimestamp(),
        period: 2,
      });
      console.log('signup success');
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = () => {
    try {
      app.auth().signOut();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    app.auth().onAuthStateChanged(async (usr) => {
      let user;
      if (usr) {
        const userDoc = await db.collection("user").doc(usr.uid).get();
        if (userDoc.exists) {
          user = { id: userDoc.id, ...userDoc.data() };
          const now = new Date();
          const startAt = user.startAt.toDate();
          const diff = now.getTime() - startAt.getTime();
          if (startAt > now || (diff > user.period * 60 * 60 * 1000 ))
          {
            console.log('time over');
            user = null;
          }
        }
      }
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        signup,
        signOut,
        currentUser
      }}
      >
        {children}
      </AuthContext.Provider>
  );
};