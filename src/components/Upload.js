import React from 'react'

export default function Upload() {
  return (<>
        <div className="container-fluid">
            <div className="row justify-content-evenly">
                <div className="col-sm-6 card mt-5 p-3 mb-5">
                    <form>
                        <div className='mb-3 mt-3 text-center'>
                        <h2>Upload Your School Id Card</h2>
                        </div>
                        <div className="mb-3">
                            <label htmlFor='idCard'> Upoad :</label>
                            <input type='file' name='idcard' className='form-control' />
                        </div>
                        <div>
                        <button type='submit' className='btn btn-primary '>Submit</button>
                        </div>
                        <div className='mt-2'>
                        <button type='submit' className='btn btn-primary '>Skip</button>
                        </div>
                    </form>                    
                </div>
            </div>
        </div>
  </>)
}
