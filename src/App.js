// import './App.css'
// import React  from 'react'
// import { Route, Routes, useNavigate,  } from 'react-router-dom'
// // pages
// import Home from './components/Home'
// import About from './components/About'
// import SignUp from './components/SignUp'
// import Header from './components/Header'
// import Login from './components/Login'
// import Error from './components/Error'
// import Details from './components/Details'
// import ClassSelector from './components/ClassSelector'

// export default function App(props) {
//   const navigate = useNavigate()
//   return (<>
//     <Routes >
//       <Route path="/" element={<Header />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="login" element={
//           <Login 
//           signup={()=>navigate('/signup')} />} 
          
//           />
//           <Route path="signup/*" element={
//           <SignUp 
//           details={()=>navigate('signup/details')} 
//           login={()=>navigate('/login')} />} 
          
//           />
          
//           <Route path="signup/details" element={<Details  />} />
//           <Route path="/classSelector" element={<ClassSelector />} />
//           <Route path="*" element={<Error />} />
//       </Route>
//       <Route path="/admin" element={<Header />}>
//           <Route index element={<Home />} />
//       </Route>
//     </Routes>
  
//   </>)
// }




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




import './App.css'
import React, { useState }  from 'react'
import { Route, Routes, useNavigate,  } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// pages
import Home from './components/Home'
import About from './components/About'
import SignUp from './components/SignUp'
import Header from './components/Header'
import Login from './components/Login'
import Error from './components/Error'
import Details from './components/Details'
import ClassSelector from './components/ClassSelector'
import ClassSubject from './components/ClassSubject'
import Teacher from './components/fire/Teacher'
import { ref, set } from 'firebase/database'
import { auth, database } from './components/fire/FirebaseCode'
import { 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  sendEmailVerification, 
  signInWithEmailAndPassword, 
  signInWithPopup } from 'firebase/auth'
import ForgetPassword from './components/ForgetPassword';
// import {connect } from 'react-redux'

function App() {
  
  let id = new Date().getTime().toString();
  const navigate = useNavigate()

  const onloginSubmitHandlar =(e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    set(ref(database, 'Login/' + id), {
      email: e.target.email.value, 
      password: e.target.password.value
    });

    signInWithEmailAndPassword(auth, email, password)
      .then((success) => {
        // console.log(success);
        //  alert("Login successfully");
           navigate('/classSelector')
        // i.target.email.value="";
        // i.target.password.value="";
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });

  }
  const onloginWithGoogle =(e)=>{
    e.preventDefault();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then((success) => {
        console.log(success.user);
        // alert("Successfully");
        navigate('/classSelector')
      }).catch((error) => {
      // console.log(error);
      alert(error);
      });
  }

  const onSignupSubmitHandlar =(e)=>{
    e.preventDefault();
    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const cpassword = e.target.cpassword.value;
    if(password !== cpassword ){
        alert('Password mismatch');
        return
    }
    // set(ref(database, 'users/' + id), {
    //     username: name,
    //     email: email, 
    //   });

      createUserWithEmailAndPassword(auth, email, password)
      .then((success) => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          alert("Please Verify your Email");
        });
        // alert("User created successfully");
        navigate('/login')
      }).catch((error) => {
        alert(error);
      });
  }
  const [cs,setcs] = useState(false)
  const [ip,setip] = useState(false)
  const [other,setother] = useState(false)
  const subectHandlar1=(e)=>{setcs(e.target.checked)}
  const subectHandlar2=(e)=>{setip(e.target.checked)}
  const subectHandlar3=(e)=>{setother(e.target.checked)}

  const detailsSubmitHandlar=(e)=>{
    e.preventDefault();
    navigate('/classSelector')

    set(ref(database, 'users/' + id), {
       SchoolName:e.target.schoolName.value,
       CS:cs,
       IP:ip,
       Other:other,
       OtherSubject:e.target.otherSubject.value,
       IdImage:e.target.formFile.value,
      });
  }

 
  const onSignupWithGoogle =(e)=>{
    e.preventDefault();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then((success) => {
        // console.log(success.user);
        console.log(success.user);
        // { success.user.email ? navigate('classSelector') : navigate('/details')}
        navigate('/details')
      }).catch((error) => {
      console.log(error);
      alert(error);
      });
  }
  return (<>
    <Header />
    <Routes >
          <Route path='/' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={
          <Login 
          signup={()=>navigate('/signup')} 
          loginSubmitHandlar={onloginSubmitHandlar}
          loginWithGoogle={onloginWithGoogle}
          />}/>
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="signup" element={
          <SignUp 
          login={()=>navigate('/login')}
          signupSubmitHandlar={onSignupSubmitHandlar}
          signupWithGoogle={onSignupWithGoogle}
          />}/>
          
          <Route path="details" element={<Details 
          submitHandler={detailsSubmitHandlar} 
          subject1={subectHandlar1}
          subject2={subectHandlar2}
          subject3={subectHandlar3}
           />} />
          <Route path="classSelector//*" element={<ClassSelector />} >
          </Route>
          <Route path="/p1" element={<ClassSubject subjectAndClass='11th CS' />} />
        <Route path="/p2" element={<ClassSubject subjectAndClass='11th IP' />} />
        <Route path="/p3" element={<ClassSubject subjectAndClass='12th CS' />} />
        <Route path="/p4" element={<ClassSubject subjectAndClass='12th IP' />} />
        <Route path="teacher" element={<Teacher />} /> 
          <Route path="*" element={<Error />} />
      
      <Route path="/admin" element={<Header />}>
          <Route index element={<Home />} />
      </Route>
    </Routes>
  
  </>)
}

// export default connect()(App) 
export default App