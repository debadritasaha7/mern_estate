import { useSelector } from "react-redux"
import { useRef, useState,useEffect } from "react"
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage';
import { app } from '../firebase';
const Profile = () => {
  const fileRef=useRef(null);
  const {currentUser}=useSelector((state)=>state.user)
  const [file,setFile]=useState(undefined)
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError,setFileUploadError]=useState(false);
  const [formData,setFormData]=useState({});

  console.log(formData.avatar)
  console.log(filePerc);
  console.log(fileUploadError);
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName=new Date().getTime()+file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          {setFormData({ ...formData, avatar: downloadURL });
          currentUser.avatar=downloadURL}

        );
      }
    );
  }

  return (
    <div className="p-3 max-w-lg mx-auto ">
     <h1 className='text-3xl font-semibold text-center mt-7'>Profile</h1>
     <form className='flex flex-col gap-4'>
     <input  onChange={(e) => setFile(e.target.files[0])} type="file" ref={fileRef} hidden accept="image/*"/>
      <img onClick={()=>fileRef.current.click()} src={formData.avatar || currentUser.avatar} alt='profile'
      className=' bg-slate-700 rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'/>
    <input type="text" placeholder="username" id='username' className="border p-3 rounded-lg" />
     
    <input type="text" placeholder="email" id='email' className="border p-3 rounded-lg" />
     
    <input type="text" placeholder="password" id='password' className="border p-3 rounded-lg" />
     <button  className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
     </form>

     <div className="flex justify-between mt-5">
      <span className="text-red-700 cursor-pointer">Delete Account</span>
   
      <span className="text-red-700 cursor-pointer">Sign Out</span>
     </div>
     </div>
   
  )
}

export default Profile