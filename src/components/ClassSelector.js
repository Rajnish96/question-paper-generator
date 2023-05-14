import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import ClassSubject from './ClassSubject'

export default function ClassSelector(props) {
  return (<>
        <div className='container-fluid'>
            <div className='row justify-content-evenly ' >
                <div className='col-md-6 card p-3 mt-5 mb-5'>
                <form>
                    <div className='text-center'>
                        <h4>Question Paper Salector</h4>
                    </div>
                    <hr/>
                    <div className='row justify-content-evenly '>
                        <div className='col-6 card text-center p-5'>
                            <h5>Class 11th</h5>
                            <Link to='/p1'>
                            <button type='button'  className='btn btn-primary mb-2'>Subject CS for 11th Class</button>
                            </Link>
                            <Link to='/p2'>
                            <button type='button'  className='btn btn-info mb-2'>Subject IP for 11th Class</button>
                            </Link>                
                            
                        </div>
                        <div className='col-6 card text-center p-5'>
                            <h5>Class 12th</h5>
                            <Link to='/p3'>
                            <button type='button'  className='btn btn-primary mb-2 '>Subject CS for 12th Class</button>
                            </Link>
                            <Link to='/p4'>
                            <button type='button'  className='btn btn-info mb-2'>Subject IP for 12th Class</button>
                            </Link>   
                            
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    {/* <Routes>
        <Route path="/p1" element={<ClassSubject subjectAndClass='11th CS' />} />
        <Route path="/p2" element={<ClassSubject subjectAndClass='11th IP' />} />
        <Route path="/p3" element={<ClassSubject subjectAndClass='12th CS' />} />
        <Route path="/p4" element={<ClassSubject subjectAndClass='12th IP' />} />
    </Routes>  */}
        <Outlet />
  </>)
}
