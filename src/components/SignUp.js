// import React, {Component, } from 'react'
// import  { initializeApp } from 'firebase/app';
// import { getDatabase, ref, set, } from "firebase/database";
// import { v4 as uuidv4 } from 'uuid';    
// import Details from './Details';

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


// export default class SignUp extends Component {

//     constructor(props) {
//       super(props)
//       this.props = props
//       this.state = {
//         id: uuidv4(),
//         name:null,
//         email:null,
//         password:null,
//         cpassword:null,
//         message:null,
//         isSubmit:false,
//       }
//     }

//     submitHandlar=(event)=>{
//         event.preventDefault()
//         const name = event.target.name.value;
//         const email = event.target.email.value;
//         const password = event.target.password.value;
//         const cpassword = event.target.cpassword.value;

//         if(password !== cpassword ){
//             this.message='Password mismatch';
//             alert(this.message);
//             return
//         }
//         this.setState({name, email,password,cpassword}, this.props.details)

//         const database = getDatabase(app);
//         set(ref(database, 'users/' + this.state.id), {
//             username: name,
//             email: email, 

//           });

//     }

//   render() {

//     return (<>
//         <div className='container-fluid '>
//             <div className='row justify-content-evenly'>
//                 <div className='col-sm-6 card mt-5 p-3'>
//                     <form onSubmit={this.submitHandlar}>
//                         <div className='text-center'>
//                             <h2>Registration </h2>
//                         </div>
//                         <div className='mt-3'>
//                             <label htmlFor='name'>Name :</label>
//                             <input type='text' required className='form-control' name='name' placeholder='Enter Name' />
//                         </div>
//                         <div className='mt-3'>
//                             <label htmlFor='email'>Email :</label>
//                             <input type='email' required className='form-control' name='email' placeholder='Enter Email' />
//                         </div>
//                         <div className='mt-3'>
//                             <label htmlFor='email'>Create Password :</label>
//                             <input type='password' required className='form-control' name='password' placeholder='Create a new password' />
//                         </div>
//                         <div className='mt-3'>
//                             <label htmlFor='email'>Confirm Password :</label>
//                             <input type='password' required className='form-control' name='cpassword' placeholder='Confirm new password' />
//                         </div>
//                         <div className='mt-3'>
//                             <button type='submit' className='btn btn-primary'>Save</button>{' '}
//                             <button onClick={this.props.login} className='btn btn-success '>Have Already Account ?</button >{' '}
//                             <button type='button' className='btn btn-warning'>SignUp With Google</button>{' '}
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//         { this.state.isSubmit ? <Details /> : null}

//     </>)
//   }
// }






// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////____






//     // const [data, setData] = useState({
//     //     id:uuidv4(),
//     //     name:'',
//     //     email: '',
//     //     password: '',
//     //     cpassword: '',
//     //     message:'',
//     // })

// // export default function SignUp(props) {
// // const navigate = useNavigate()
// // const [name, updateName] = useState()
// // const [email, updateEmail] = useState()
// // const [password, updatePassword] = useState()
// // const [cpassword, updatecpassword] = useState()
// // // const message= null;
// // // const id= uuidv4();
// // // const isSignup= false;

// // const nameChangeHandler=(e)=>{updateName(e.target.value)}
// // const emailChangeHandler=(e)=>{updateEmail(e.target.value)}
// // const passwordChangeHandler=(e)=>{updatePassword(e.target.value)}
// // const cpasswordChangeHandler=(e)=>{updatecpassword(e.target.value)}


// // const submitHandlar=(e)=>{
// //     e.preventDefault();
// //     navigate('/details')
// // }

// // const detailSubmitHandler = (e)=>{
// //     e.preventDefault();
// // }


// //   return (<>
// //   <div className='container-fluid '>
// //             <div className='row justify-content-evenly'>
// //                 <div className='col-sm-6 card mt-5 p-3'>
// //                     <form onSubmit={submitHandlar}>
// //                         <div className='text-center'>
// //                             <h2>Registration </h2>
// //                         </div>
// //                         <div className='mt-3'>
// //                             <label htmlFor='name'>Name :</label>
// //                             <input type='text' value={name} onChange={nameChangeHandler} required className='form-control' name='name' placeholder='Enter Name' />
// //                         </div>
// //                         <div className='mt-3'>
// //                             <label htmlFor='email'>Email :</label>
// //                             <input type='email' value={email} onChange={emailChangeHandler} required className='form-control' name='email' placeholder='Enter Email' />
// //                         </div>
// //                         <div className='mt-3'>
// //                             <label htmlFor='email'>Create Password :</label>
// //                             <input type='password' value={password} onChange={passwordChangeHandler} required className='form-control' name='password' placeholder='Create a new password' />
// //                         </div>
// //                         <div className='mt-3'>
// //                             <label htmlFor='email'>Confirm Password :</label>
// //                             <input type='password' value={cpassword} onChange={cpasswordChangeHandler} required className='form-control' name='cpassword' placeholder='Confirm new password' />
// //                         </div>
// //                         <div className='mt-3'>
// //                             <button type='submit' className='btn btn-primary'>Save</button> {' '}
// //                             <button onClick={()=>navigate('/login')} className='btn btn-success '>Have Already Account ?</button >{' '}
// //                             <button type='button' className='btn btn-warning'>SignUp With Google</button>{' '}
// //                         </div>
// //                     </form>
// //                 </div>
// //             </div>
// //         </div>

// //         <Outlet />

// //   </>)
// // //   {
// // //     isSignup ?  (<Routes>
// // //         <Route path='/signup' element={<SignUp />}>
// // //             <Route path="/signup/details" element={<Details />} />
// // //         </Route>
// // //     </Routes> ) :  <Details />
// // // }
// // }
// // // {
// // //     isSignup ?  (<Routes>
// // //         <Route path='/signup' element={<SignUp />}>
// // //             <Route path="/signup/details" element={<Details />} />
// // //         </Route>
// // //     </Routes> ) :  <Details />
// // // }

// // //  <Routes >
// // // <Route path='signup/*' element={<SignUp />}>
// // // <Route path="/details" element={<Details submitHandler={detailSubmitHandler} />} />
// // // </Route>
// // // </Routes>







//_______________________________________________________________________________________________________________









// import React from 'react' 

//     export default function SignUp(props) {

//     return (<>
//         <div className='container-fluid '>
//             <div className='row justify-content-evenly'>
//                 <div className='col-sm-6 card mt-5 p-3'>
//                     <form onSubmit={props.signupSubmitHandlar}>
//                         <div className='text-center'>
//                             <h2>Registration </h2> 
//                         </div>
//                         <div className='mt-3'>
//                             <label htmlFor='name'>Name :</label>
//                             <input type='text' required className='form-control' name='name' placeholder='Enter Name' />
//                         </div>
//                         <div className='mt-3'>
//                             <label htmlFor='email'>Email :</label>
//                             <input type='email' required className='form-control' name='email' placeholder='Enter Email' />
//                         </div>
//                         <div className='mt-3'>
//                             <label htmlFor='email'>Create Password :</label>
//                             <input type='password' required className='form-control' name='password' placeholder='Create a new password' />
//                         </div>
//                         <div className='mt-3'>
//                             <label htmlFor='email'>Confirm Password :</label>
//                             <input type='password' required className='form-control' name='cpassword' placeholder='Confirm new password' />
//                         </div>
//                         <div className='mt-3'>
//                             <button type='submit' className='btn btn-primary'>Save</button>{' '}
//                             <button onClick={props.login} type='button' className='btn btn-success '>Have Already Account ?</button >{' '}
//                             <button onClick={props.signupWithGoogle} type='button' className='btn btn-warning'>SignUp With Google</button>{' '}
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </>)
// }




//////////////////////////////////////////////////////////////////////////////////////////////////////////




import React from 'react'
import { Link } from "react-router-dom"

export default function SignUp(props) {
    return (<>
        <div className='container-fluid'>
            <div className='row '>
                <div className='col-sm-6 bg-info pb-5'>
                    <div className='row justify-content-end'>
                        <div className='col-sm-8 text-center pe-5 '>
                            <form className="was-validated"  onSubmit={props.signupSubmitHandlar}>
                                <div className='text-light'>
                                    <h5 className='my-3 mt-3'>pyforschool</h5>
                                    <h3 className='my-3 fw-bold'>Create a free account now</h3>
                                </div>
                                <div className='my-1'>
                                    <button type='button' className='rounded-pill shadow btn btn-primary w-75 mb-3'  onClick={props.signupWithGoogle}><i className="bi bi-google"></i> SignUp with Google</button>
                                </div>
                                <div>
                                    <input className='form-control my-4' autoFocus name='name' required type='text' placeholder='Full Name' />    
                                </div>
                                <div>
                                    <input className='form-control my-4'  name='email' required type='email' placeholder='Email'  />
                                    
                                </div>
                                <div>
                                    <input className='form-control my-4' name='password' required type='password' placeholder='Password' />
                                </div>
                                <div>
                                    <input className='form-control my-4' name='cpassword' required type='password' placeholder='Password' />
                                </div>
                                <div className='my-2'>
                                    <button className='btn btn-warning w-50 rounded-pill shadow' type='submit'>Create Account</button>
                                </div>
                                <div className='my-3 mb-5 '>
                                    <p>Already have an account ? <Link to='/login' className='text-light fw-bold'>Log in</Link></p>
                                </div>
                                {/* <div className='my-2'>
                                    <button className='rounded-pill shadow btn btn-primary w-75 mb-3'  onClick={props.signupWithGoogle}><i className="bi bi-google"></i> SignUp with Google</button>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6'>

                </div>
            </div>
        </div>

    </>)
}
