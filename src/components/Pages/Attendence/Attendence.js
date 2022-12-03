import React, { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import './Attendence.css'
const Attendence = () => {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        fetch('https://test.nexisltd.com/test', {
            headers: {
                'Authorization': `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUserData(Object.values(data))
            })
    }, [])

    return (
        <div>
            <div className='d-flex justify-content-center text-center'>
                <h3 className='attendence-text text-white py-2 my-3'>Attendence Information</h3>
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr >
                        <th className='py-2 text-center'>Serial Number</th>
                        <th className='py-2 text-center'>Name</th>
                        <th className='py-2 text-center'>Position</th>
                        <th className='py-2 text-center'>Branch</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user,i)=><tr key={user.id}>
                            <td className='py-2 text-center'>{i+1}</td>
                            <td className='py-2 text-center'>{user.name}</td>
                            <td className='py-2 text-center'>{user.position}</td>
                            <td className='py-2 text-center'>{user.branch}</td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Attendence;