// import React from 'react'


// export default function Login(props) {
     
    
//   return (<>
//       <div className='container-fluid '>
//             <div className='row justify-content-evenly'>
//                 <div className='col-sm-6 card mt-5 p-3'>
//                     <form>
//                         <div className='text-center'>
//                             <h2>Login</h2>
//                         </div>
//                         <div className='mt-3'>
//                         <label htmlFor='email'>Email :</label>
//                         <input type='Email' required className='form-control' name='email' placeholder='Enter Email' />
//                         </div>
//                         <div className='mt-3'>
//                         <label htmlFor='password'>Password :</label>
//                         <input type='password' required className='form-control' name='password' placeholder='Enter Password' />
//                         </div>
//                         <div className='mt-3'>
//                             <button type='submit' className='btn btn-primary'>Login</button>{' '}
//                             <button onClick={props.signup} className='btn btn-success '>Create a new Account</button >{' '}
//                             <button type='button' className='btn btn-warning'>Login With Google</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
    
//   </>)
// }



////////////////////////////////////////////////////////////////////////////////////////////////////////////





// import React from 'react'


// export default function Login(props) {
     
//   return (<>
//       <div className='container-fluid '>
//             <div className='row justify-content-evenly'>
//                 <div className='col-sm-6 card mt-5 p-3'>
//                     <form onSubmit={props.loginSubmitHandlar}>
//                         <div className='text-center'>
//                             <h2>Login</h2>
//                         </div>
//                         <div className='mt-3'>
//                         <label htmlFor='email'>Email :</label>
//                         <input type='email' required className='form-control' name='email' placeholder='Enter Email' />
//                         </div>
//                         <div className='mt-3'>
//                         <label htmlFor='password'>Password :</label>
//                         <input type='password' required className='form-control' name='password' placeholder='Enter Password' />
//                         </div>
//                         <div className='mt-3'>
//                             <button type='submit' className='btn btn-primary'>Login</button>{' '}
//                             <button onClick={props.signup} type='button' className='btn btn-success '>Create a new Account</button >{' '}
//                             <button onClick={props.loginWithGoogle} type='button' className='btn btn-warning'>Login With Google</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
    
//   </>)
// }




////////////////////////////////////////////////////////////////////////////////////////////////////////////////






import React from 'react'
import { Link } from 'react-router-dom'

export default function Login(props) {
  return (<>
        <div className="container-fluid pb-5 " style={{backgroundColor: 'lightblue'}}>
            <div className="row">
                <div className='col-md-4 ms-5 mt-5 card'>
                    <form className='px-4 was-validated'  onSubmit={props.loginSubmitHandlar} >
                        <div className='h6 pt-3 pb-3 text-center'>
                            Don't have an account yet ? <Link to='/signUp' className='text-primary fw-bold'>Sign up</Link> 
                        </div>
                        <div className='h4 pt-1 pb-3 text-center'>
                           <strong>Welcome back in Pyforschool</strong> 
                        </div>
                        <div className='h2 pt-1 pb-3 text-center'>
                            <i className="bi bi-person-circle"></i>
                        </div>
                        <div className='my-2 mb-4 d-flex justify-content-center'>
                            <button type='button' className='rounded-pill shadow btn btn-primary w-75'  onClick={props.loginWithGoogle}><i className="bi bi-google"></i> Login with Google</button>
                        </div>
                        <div className='py-3'>
                            <input type='email' autoFocus placeholder='Your Email' className=' form-control' name='email' required/>
                        </div>
                        <div className='py-3'>
                            <input type='password' placeholder='Password' className=' form-control' name='password' required/>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button type='submit' className='btn btn-primary rounded-pill '>Log in</button>
                        </div>
                       <div className='float-end mb-5 mt-3 fw-bold'>
                       <Link to='/forgetpassword'>Forget password</Link>
                       </div>
                    </form>
                </div>
            </div>
        </div>
  
  </>)
}
