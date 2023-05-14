// import React, { Component } from 'react'
// import ClassSelector from './ClassSelector'
// import Details from './Details'
// // import SignIn from './SignIn'
// import SignUp from './SignUp'
// import ClassSubject from './ClassSubject'
// // import Upload from './Upload'
// import {
//   Routes,
//   Route,
//   Link,
//   Outlet,
// } from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid';
// import  { initializeApp } from 'firebase/app';
// import { getDatabase, ref, set, } from "firebase/database";
// import Teacher from './FirebaseDate/Teacher'


// const firebaseConfig = {
//   apiKey: "AIzaSyA3GVp9XHwyzqTg7TgWbAkBsQm45wpwOfs",
//   authDomain: "pyforschool-9ab0e.firebaseapp.com",
//   databaseURL: "https://pyforschool-9ab0e-default-rtdb.firebaseio.com",
//   projectId: "pyforschool-9ab0e",
//   storageBucket: "pyforschool-9ab0e.appspot.com",
//   messagingSenderId: "361084355621",
//   appId: "1:361084355621:web:46dc34c1027292e2ddebcc"
// };
// const app = initializeApp(firebaseConfig);
 

// class Navbar extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         id:uuidv4(),
//          name: null,
//          email: null,
//          schoolName: null,
//           subject1: null,
//           subject2: null,
//           subject3: null,
//           otherSubject: null,
//          formFile: null,
//          isSubmited: false,
//       }
//     }

//     signupHandlar=(event) => {
//       event.preventDefault()
//       const name = event.target.name.value;
//       const email = event.target.email.value;
//       this.setState({name, email});
//     }
//     detailsHandlar=(event)=>{
//       event.preventDefault()
//       const schoolName = event.target.schoolName.value;
//       const subject1 = event.target.subject1.value;
//       const subject2 = event.target.subject2.value;
//       const subject3 = event.target.subject3.value;
//       const otherSubject = event.target.otherSubject.value;
//       const formFile = event.target.formFile.value;
//       const isSubmited = true;
//       this.setState({schoolName, subject1, subject2, subject3, otherSubject, formFile, isSubmited}, ()=>{console.log(this.state);});

    
//       const database = getDatabase(app);
//         set(ref(database, 'data/' + this.state.id), {
//         name: this.state.name,
//         email: this.state.email,
//         schoolName: this.state.schoolName,
//         subject1: this.state.subject1,  
//         subject2: this.state.subject2,   
//         subject3: this.state.subject3, 
//         otherSubject: this.state.otherSubject, 
//         formFile: this.state.formFile, 
//       });

     
//     }

//   render() {
//     return (<>
//         <nav className="navbar navbar-expand-lg ">
//           <div className="container-fluid">
//             <Link className="navbar-brand" to='/' ><h5>Logo</h5></Link>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <i className="bi bi-list"></i>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <Link className="nav-link" to='/' >Home</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to='about' >About</Link>
//                 </li>  
//                 <li className="nav-item">
//                   <Link className="nav-link" to='login' >Login</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to='signup' >Sign Up</Link>
//                 </li>      
//               </ul>
            
//             </div>
//           </div>
//         </nav>  
//       <Outlet />

//  {
// this.state.isSubmited ? (<ClassSelector />) :
//  (this.state.name === null && this.state.email === null) ?
//  (<SignUp submit={this.signupHandlar} />) :
//  (<Details submit={this.detailsHandlar} />)
// } 


// {/* <Routes>
//   <Route path="/p1" element={<ClassSubject subjectAndClass='11th CS' />} />
//   <Route path="/p2" element={<ClassSubject subjectAndClass='11th IP' />} />
//   <Route path="/p3" element={<ClassSubject subjectAndClass='12th CS' />} />
//   <Route path="/p4" element={<ClassSubject subjectAndClass='12th IP' />} />
// </Routes> */}
// {/* <Teacher /> */}
//     </>)
//   }
// }
// export default Navbar