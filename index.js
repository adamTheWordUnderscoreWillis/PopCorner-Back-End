// Import the functions you need from the SDKs you need
import { log } from "console";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4sfcIb4fK-QEbyEI9jlVwGa2MJxhTyzU",
  authDomain: "popcorner-d70af.firebaseapp.com",
  databaseURL: "https://popcorner-d70af-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "popcorner-d70af",
  storageBucket: "popcorner-d70af.appspot.com",
  messagingSenderId: "206534368002",
  appId: "1:206534368002:web:1fca565b19ff7a5abb401b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase()
function writeUserData(userId, username, image){
    const reference = ref(db, "users/user" + userId)
    
    set(reference, {
        username: username,
        image: image
    })
}
writeUserData('01', "RalfAudi25", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2X5J60GcbWa3njNxLQIuhe4ejkHezhUDDw&s")
writeUserData('02', "FentyLil", "https://cdn.fstoppers.com/styles/full/s3/media/2018/12/18/portrait_0.jpg")
writeUserData('03', "PaulineOnTheGrill06", "https://images.squarespace-cdn.com/content/v1/624f4bb135fbf60489e1bccf/2284e6a4-4827-4f43-b6cf-4a4c1585b0e0/Actor+headshot+photography+-+Man+waering+a+denim+jacket.jpg")
writeUserData('04', "loungeLizard", "https://image13.photobiz.com/10309/34_20230708223313_6603712_large.jpg")
writeUserData('05', "BeerMattKingpin", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_OcWQvSUqcdqad_pUM-sp4xgN8j-1CCZNA&s")

const getUserImage = (userId)=>{
    const interestsRef = ref(db, "/users/user" + userId)

   onValue(interestsRef, (snapshot)=>{
        const data = snapshot.val();
        console.log(data)
        return data;
    })

}
getUserImage("03")
