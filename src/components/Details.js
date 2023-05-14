// import React, {useState} from 'react'
// import  { initializeApp } from 'firebase/app';
// import { getDatabase, ref, set, } from "firebase/database";
// import { useNavigate } from 'react-router-dom';
// const firebaseConfig = {
//     apiKey: "AIzaSyCOS43W9JhXJDhYKOfAEwC1k_kGEiKtY6Y",
//     authDomain: "pyforschool-35937.firebaseapp.com",
//     databaseURL: "https://pyforschool-35937-default-rtdb.firebaseio.com",
//     projectId: "pyforschool-35937",
//     storageBucket: "pyforschool-35937.appspot.com",
//     messagingSenderId: "428605642363",
//     appId: "1:428605642363:web:7507f1a47c57d7fbf4f4de"
//   };
//   const app = initializeApp(firebaseConfig);


// export default function Details(props) {
    
    
//     const navigate = useNavigate()
//     const [sName, ] = useState(' ');
//     const [cs, setcs] = useState(false);
//     const [ip, setip] = useState(false);
//     const [other, setother] = useState(false);
//     const [others, setOthers] = useState(' ');
//     const [sfile, setFile] = useState(' ');
//     const [ setError] = useState(false);
//     const id= new Date().getTime().toString();
    
//     const submitHandler =(e)=>{
//         e.preventDefault();
//         const SchoolName = e.target.schoolName.value
//         if(sName.length===0){
//           setError(true)
//         }
//         if(sName){ 
//             console.log(sName)
//             navigate('/classSelector')
//         }
//         navigate('/classSelector')
//         const database = getDatabase(app);
//         set(ref(database, 'Details/' + id), {
//            SchoolName:SchoolName,
//            CS:cs, 
//            IP:ip,
//            Other:other,
//            OtherSubject:others,
//            File:sfile,
//           });
//     }
    
//   return (<>
//     <div className='container-fluid'>
//         <div className='row justify-content-evenly' >
//             <div className='col-sm-6 card p-3 mt-5 mb-5'>
//                 <form onSubmit={submitHandler}>
//                     <div className='text-center'>
//                         <h2>Details</h2>
//                     </div>
//                     <div className='mt-3'>
//                         <label htmlFor='schoolName'>School Name :</label>
//                         <input type='text' required className='form-control' name='schoolName'   placeholder='Enter School Name' />
//                         {/* {error && sName<=0 ? 
//                         <label className='text-danger'>required </label> : " "} */}
//                     </div>
//                     <div className='mt-3 form-check form-switch'>
//                         <label htmlFor=''>Subjects :-</label><br />
//                         <input type='checkbox' className='form-check-input' name='subject1' role='switch' checked={cs} id='CS' autoComplete='off' onChange={(e) =>setcs('CS')}/>{" "}
//                         <label htmlFor='CS'>: CS</label><br />
//                         <input type='checkbox'  className='form-check-input' name='subject2' checked={ip} id='ip' autoComplete='off' onChange={(e) =>setip('IP')}/>{" "}
//                         <label htmlFor='ip'>: IP</label><br />
//                         <input type='checkbox'  className='form-check-input' name='subject3' checked={other} id='other' autoComplete='off' onChange={(e) =>setother('other')}/>{" "}
//                         <label htmlFor='other'>: Other</label><br />
//                     </div>
//                     <input type='text' className='form-control' name='otherSubject' value={others} onChange={(e)=>setOthers(e.target.value)}  placeholder='Enter If Other Subject' autoComplete='off' />
//                     <div className="mt-3">
//                         <label htmlFor="formFile" className="form-label">Upload your School ID :</label>
//                         <input className="form-control"  onChange={(e)=>setFile(e.target.value)} type="file"  name='formFile'  />
//                     </div>
//                     <div className='mt-3'>
//                         <button type='sumit' className='btn btn-primary'>Submit</button>
//                     </div>
                
//                 </form>
//             </div>
//         </div>
//     </div>
//   </>)
// }







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








import React from 'react'
// import { useNavigate } from 'react-router-dom';


export default function Details(props) {
    
    
    // const navigate = useNavigate()
    // // const [sName, ] = useState(' ');
    // const [cs, setcs] = useState(false);
    // const [ip, setip] = useState(false);
    // const [other, setother] = useState(false);
    // const [others, setOthers] = useState(' ');
    // const [sfile, setFile] = useState(' ');
    // // const [ setError] = useState(false);
    // const id= new Date().getTime().toString();
    
    // const submitHandler =(e)=>{
    //     e.preventDefault();
    //     const SchoolName = e.target.schoolName.value
    //     // if(sName.length===0){
    //     //   setError(true)
    //     // }
    //     // if(sName){ 
    //     //     console.log(sName)
    //     //     navigate('/classSelector')
    //     // }
    //     navigate('/classSelector')
    //     const database = getDatabase(app);
    //     set(ref(database, 'users/' + id), {
    //        SchoolName:SchoolName,
    //        CS:cs, 
    //        IP:ip,
    //        Other:other,
    //        OtherSubject:others,
    //        File:sfile,
    //       });
    // }
     
  return (<>
    <div className='container-fluid'>
        <div className='row justify-content-evenly' >
            <div className='col-sm-6 card p-3 mt-5 mb-5'>
                <form onSubmit={props.submitHandler}>
                    <div className='text-center'>
                        <h2>Details</h2>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor='schoolName'>School Name :</label>
                        <input type='text' required className='form-control' name='schoolName'   placeholder='Enter School Name' />
                    </div>
                    <div className='mt-3 form-check form-switch'>
                        <label htmlFor=''>Subjects :-</label><br />
                        <input type='checkbox' className='form-check-input' value='CS'  onChange={props.subject1} name='subject1'  role='switch'  id='CS' autoComplete='off' />{" "}
                        <label htmlFor='CS'>: CS</label><br />
                        <input type='checkbox'  className='form-check-input' value='IP'  onChange={props.subject2} name='subject2'  id='ip' autoComplete='off' />{" "}
                        <label htmlFor='ip'>: IP</label><br />
                        <input type='checkbox'  className='form-check-input' value='Other'  onChange={props.subject3} name='subject3'  id='other' autoComplete='off' />{" "}
                        <label htmlFor='other'>: Other</label><br />
                    </div>
                    <input type='text' className='form-control' name='otherSubject'   placeholder='Enter If Other Subject' autoComplete='off' />
                    <div className="mt-3">
                        <label htmlFor="formFile" className="form-label">Upload your School ID :</label>
                        <input className="form-control"  type="file"  name='formFile'  />
                    </div>
                    <div className='mt-3'>
                        <button type='sumit' className='btn btn-primary'>Submit</button>
                    </div>
                
                </form>
            </div>
        </div>
    </div>
  </>)
}
