import React from 'react'
import "./Support.css"
function Support() {
  return (
    <div className='support d-flex justify-content-center align-items-center'>
        <div className='bg-white p-5 rounded-3'>
            <h1 className='text-info text-center'>Support</h1>
            <form>
                <div className='mb-3 row'>
                    <input className="form-control" type="email" id="e" placeholder="Enter Email" />    
                </div>
                <div className='mb-3 row'>
                    <select name="" className='form-select' id="">
                        <option value="" disabled selected>Select Query</option>
                        <option value="">Product Related Issues</option>
                        <option value="">Delivery Related Issues</option>
                        <option value="">Payment Related Issues</option>
                        <option value="">Others</option>
                    </select>
                </div>
                <div className='mb-3 row'>
                    <textarea name="" className='form-control' id="" cols="30" rows="10"></textarea>
                </div>
                <div className='text-center'>
                    <button type='submit' className='btn btn-success'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Support