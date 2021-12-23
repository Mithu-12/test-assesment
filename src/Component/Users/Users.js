import React, { useState } from 'react';
import './Users.css'

const Users = ({user}) => {
    const {firstName, lastName, pic, company, skill, grades, email} = user;
    const [name, setname] = useState('');
    const [show, setShow] = useState(false);
    const [showname, setShowname] = useState([])
    const handleShow =()=>{
        setShow(!show)
     }

    const handleSubmitname = (e) => {
        e.preventDefault();
        const data = {name};
        if(name){
            setShowname((lt)=>[...lt,data])
            setname('')
        }
    }
    
    return (
        <div>
            <div className="col">
                        <div className="user-col">
                        <div className="user-card">
                            <div className="img">
                                <img src={pic} alt="" />
                            </div>
                            <div className="user-details">
                                <div className="user-name">
                                    <h1>{user.firstName}  {lastName}</h1>
                                </div>
                                <div className="user-detail">
                                    <p>Email: {email}</p>
                                    <p>Company: {company}</p>
                                    <p>Skill: {skill}</p>
                                    <span>
                                    {show?<p>{user.grades.map((grade , index)=>(
                                        <p>Test{index}: {grade}</p>
                                    ))}</p>:null}
                                    </span>
                                </div>
                                <div >
                                {
                                    showname.map((tagList)=><div className='tagStyle'>
                                            <span>{tagList.name}</span>
                                    </div>
                                    )}
                                </div>
                                <div className="search">
                                     <form onSubmit={handleSubmitname}>
                                    <input value={name}  placeholder='Add a tag' onChange={(e)=>setname(e.target.value)}
                                    />
                                    </form>
                                </div>
                            </div>
                            </div>
                            <div className="btnStyle">
                            {!show ? <button onClick={handleShow} className=" btn-plus">+</button>: <button onClick={handleShow} className="btn-minus">-</button>  }
                            </div>
                        </div>
                        <hr></hr>
                    </div>
        </div>
    );
};

export default Users;