import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { app } from '../firebase';

const handleGoogleClick = async () => {
  try {
 

  const provider=new GoogleAuthProvider();
  const auth=getAuth(app);
  const result=await signInWithPopup(auth,provider);


  } catch (error) {
    console.log('could not sign in with google', error);
  }
};
export default function OAuth() {
  return (
    <button
      onClick={handleGoogleClick} type='button'className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
      Continue with google
    </button>
  )
}
