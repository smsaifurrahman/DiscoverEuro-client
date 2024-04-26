import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { data } from 'autoprefixer';

const MyList = () => {
    const {user} = useContext(AuthContext) || {};
    const [spots , setSpots] = useState([]) || [];
    

    useEffect(()=>{
        fetch(`http://localhost:5000/spots/email/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setSpots(data)
        })

    },[spots])

    const handleDelete = id => {
       fetch(`http://localhost:5000/spots/${id}`, {
        method:'DELETE'
       })
    //    .then(res=>{
    //     console.log(res);
    //    })
    //    .then(data=>{})
    }

    return (
        <div className='max-w-5xl mx-auto'>
             <div>
             <div className="">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className='font-bold text-sm text-green-600 '>
                        
                        <th>Spot Name</th>
                        <th>Country</th>
                        <th>Update data</th>
                        <th>Delete data</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                         {
                            spots.map(spot => 

                            <tr key={spot._id}>
                        
                                <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-24 h-24">
                                        <img src={spot.image} />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold text-xl">{spot.spotName}</div>
                                    <div className="text-xl opacity-50">{spot.location}</div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                
                                <span className="badge badge-ghost badge-sm">{spot.countryName}</span>
                                </td>
                                <td> <Link to={`/updatespot/${spot._id}`}> <button className='btn ' >Update</button> </Link> </td>
                                <th>
                                <Link> <button onClick={()=>{handleDelete(spot._id)}} className='btn ' >Delete</button> </Link>
                                </th>
                            </tr>)
                         }
                  
                    </tbody>
                    {/* foot */}
                    <tfoot>
            
                    </tfoot>
                    
                </table>
                    </div>
             </div>
         </div>
    );
};

export default MyList;