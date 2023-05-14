
import React, { useState }from 'react'
import { useNavigate } from 'react-router-dom';

export default function ClassSubject(props) {
    const [marks1, setMarks1] = useState(0);
    const [marks2, setMarks2] = useState(0);
    const [marks3, setMarks3] = useState(0);
    const [total, setTotal] = useState(marks1 + (marks2*2) + (marks3*3));
    
    

    const navigate = useNavigate()
    const changeMarks1=(event)=>{
        setMarks1(+event.target.value);
    };
    const changeMarks2=(event)=>{
        setMarks2(+event.target.value);
    };
    const changeMarks3=(event)=>{
        setMarks3(+event.target.value);
    };
    const totalMarksBtn = (e)=>{
        e.preventDefault();
        setTotal(marks1 + (marks2*2) + (marks3*3));
    };
    
        
  
   
    const submitHandler = (event)=>{ 
        event.preventDefault();
        let message =null;
         if(event.target.total_marks.value !== event.target.total.value){
            alert(message='Total is Not Equal to Total Marks')
            // console.log(message);
            return
         }
         
        navigate('/teacher')
        setMarks1('');
        setMarks2('');
        setMarks3('');
        setTotal('');
    };

  return (<>
        <div className="container-fluid">
            <div className="row justify-content-evenly mt-3 mb-3 ">
                <div className="col-md-6 card p-3">
                    <form onSubmit={submitHandler}>
                        <div className='text-center'>
                            <h2>Marks Selector</h2>
                            <h6>Class {props.subjectAndClass}</h6>
                        </div>
                        <hr />
                        <div className='p-3'>
                            <h3>
                                <label htmlFor='total_marks'>Enter Total Marks</label>
                                <input type='number' min={0} required name='total_marks' className='total_marks' />
                            </h3><br />
                            <h5>
                                <label htmlFor='marks1'>1 Marks Questions</label>
                                <input type='number' min={0} required value={marks1} onChange={changeMarks1} name='marks1' />
                            </h5>
                            <h5>
                                <label htmlFor='marks2'>2 Marks Questions</label>
                                <input type='number' min={0} required value={marks2} onChange={changeMarks2} name='marks2' />
                            </h5>
                            <h5>
                                <label htmlFor='marks3'>3 Marks Questions</label>
                                <input type='number' min={0} required value={marks3} onChange={changeMarks3} name='marks3' />
                            </h5>
                            <h5>
                            <button onClick={totalMarksBtn}>Total</button >
                            <input type='number'  required value={total} readOnly name='total' />
                            </h5>
                        </div>
                        <div>
                            <button type='submit' className='btn btn-primary' >Continou</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  </>)
}
