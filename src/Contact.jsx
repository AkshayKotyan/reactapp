import React, { useState } from "react";

const Contact = () => {

    const [data,setData] = useState({
        fullname:"",
        phno:"",
        email:"",
        msg:""
    });

    const Getdata = (event) => {
        const { name,value } = event.target;
        setData( (preval) => {
            return {
                ...preval,
                [name]: value,
            };
        });
    };

    const Frmsubmit = (e) => {
        e.preventDefault();
        alert( `Hello! My Name is ${data.fullname}. My Contact number is ${data.phno}. My Email is ${data.email}. Greetings from me ${data.msg}.` );
    };

    return (
        <>
            <div className=" my-5">
                <h1 className=" text-center"> Contact US</h1>
            </div>
            <div className=" container contact_div">
                <div className=" row">
                    <div className=" col-md-6 col-10 mx-auto">
                        <form onSubmit={Frmsubmit} >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Fullname</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" name="fullname" value={data.fullname} onChange={Getdata} required />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="mobile number" name="phno" value={data.phno} onChange={Getdata} required />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={data.email} onChange={Getdata} required />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={Getdata} required ></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Contact;