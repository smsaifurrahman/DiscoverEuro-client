import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { data } from 'autoprefixer';
import Swal from 'sweetalert2';

const MyList = () => {
    const {user} = useContext(AuthContext) || {};
    const [spots , setSpots] = useState([]) || [];
    

    useEffect(()=>{
        fetch(`https://discover-euro-server-r9x6oq445-s-m-saifur-rahmans-projects.vercel.app/spots/email/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setSpots(data)
        })

    },[spots])

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`https://discover-euro-server-r9x6oq445-s-m-saifur-rahmans-projects.vercel.app/spots/${id}`, {
                method:'DELETE'
               })
               .then(res => res.json())
               .then(data =>{
                         Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
               })

            }
          });

         //       Swal.fire({
        //         title: "Deleted!",
        //         text: "Your file has been deleted.",
        //         icon: "success"
        //       });


       
    //    .then(res=>{
    //     console.log(res);
    //    })
    //    .then(data=>{})
    }

    return (
        <div className=' w-full md:w-3/5 mx-auto '>
         
             <div>
             <div className="   ">
                <table className="table  ">
                
                    {/* head */}
                    <thead>
                    <tr className='font-bold text-sm text-green-600 '>
                        
                        <th className=''>Spot Name</th>
                        <th>Country</th>
                        <th className=''>Actions</th>
                        
                    </tr>
                    </thead>
                    <tbody className='' >
                    {!spots && <div className='flex flex-col items-center justify-center'><span className="loading  loading-dots loading-lg"></span> </div> }
                    {/* row 1 */}
                         {
                            spots.map(spot => 

                            <tr key={spot._id} className=''>
                        
                            <td className='  '>
                                <div className="flex items-center gap-3 ">
                                    <div className="avatar">
                                    <div className="  rounded-xl w-24 h-24">
                                        <img className='h-full w-full' src={spot.image} />
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
                            <td className='  border-red-400'> <Link to={`/updatespot/${spot._id}`}> <button className='btn bg-green-500 text-white ' >Update</button> </Link>
                                <Link> <button onClick={()=>{handleDelete(spot._id)}} className='btn bg-red-500 text-white ' >Delete</button> </Link>
                            </td>
                                
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