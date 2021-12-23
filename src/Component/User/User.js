import React, {useEffect, useState} from 'react';
import Users from '../Users/Users';
import './User.css';


const User = () => {
    //user data fetch
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://api.hatchways.io/assessment/students')
        .then(res => res.json())
        .then(data => setUsers(data.students))
    },[])
    //handle Search by user name
    const handleSearchInput = event => {
        const searchText = event.target.value;
        const matchedUsers = users.filter(user => user.firstName.toLowerCase().includes(searchText.toLowerCase()));
        setUsers(matchedUsers);
    }
    //handle Search tag 
    const handleSearchTag = event => {
        const searchText = event.target.value;

        const matchedTag = users.filter(user => user.name.toLowerCase().includes(searchText.toLowerCase()));

        setUsers(matchedTag);
    }
   
    return(
        <>
           <div className="body-container">
           <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearchInput}
                    placeholder="Search by name" />
                    
            </div>
           <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearchTag}
                    placeholder="Search by tag"/>
                    
            </div>
            <div className='user-row'>
                    {
                        users.map(user => <Users
                            user={user}
                            key={user.id}
                        ></Users>)
                    }
             </div>
           </div>
        </>
    )
};

export default User;