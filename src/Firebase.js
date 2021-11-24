import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: process.env.react_app_firebase_api_key,
  authDomain: process.env.react_app_firebase_auth_domain,
  projectId: process.env.react_app_firebase_project_id,
  storageBucket: process.env.react_app_firebase_storage_bucket,
  messagingSenderId: process.env.react_app_firebase_messaging_sender_id,
  appId: process.env.react_app_firebase_app_id,
  measurementId: process.env.react_app_firebase_measurement_id
})

export const auth = app.auth()
export default app