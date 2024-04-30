import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { data } from 'autoprefixer';
import Swal from 'sweetalert2';

const MyList = () => {
    const [loading, setLoading] = useState(true)
    const {user} = useContext(AuthContext) || {};
    const [spots , setSpots] = useState([]) || [];
    

    useEffect(() => {
        setLoading(true);
        fetch(`https://discover-euro-server-r9x6oq445-s-m-saifur-rahmans-projects.vercel.app/spots/email/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setSpots(data);
                setLoading(false); // Update loading state after setting spots
            })
            .catch(error => {
                console.error('Error fetching spots:', error);
                setLoading(false); // Update loading state in case of error
            });
    }, []);
    

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

                const updatedSpots = spots.filter(spot => spot._id !== id);
              // Update the state with the filtered array
                setSpots(updatedSpots);
                         Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
               })

            }
          });

      
    }

    if(loading) {
        return  <div className='flex flex-col items-center justify-center'><span className="loading  loading-dots loading-lg"></span> </div>
    }

    return (
      <div className='w-full md:w-3/5 mx-auto'>
         <h2 className='my-6 text-2xl font-bold text-center text-green-500'> Spot Lists   </h2>
        <div className="">
            <div>
                <div className=" ">
                    <table className="table   ">
                        {/* head */}
                        <thead>
                            <tr className='font-bold text-sm text-green-600'>
                                {/* <th className='w-1/2 sm:w-1/6'>No</th> */}
                                <th className='w-1/2 sm:w-1/6'>Spot Name</th>
                                <th className='w-1/2 sm:w-1/6'>Country</th>
                                <th className='w-1/2 sm:w-1/6'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                spots.map((spot, index) =>
                                    <tr key={spot._id} className=''>
                                        {/* <td>{index + 1}</td> */}
                                        <td className='w-1/2 sm:w-1/6'>
                                            <div className="flex items-center gap-3 ">
                                                <div className="avatar">
                                                {/* <td>{index + 1}</td>  */}
                                                    <div className="rounded-xl w-24 h-24">
                                                        <img className='h-full w-full' src={spot.image} alt={spot.spotName} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-sm md:text-xl">{spot.spotName}</div>
                                                    <div className="text-sm md:text-xl opacity-50">{spot.location}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ghost badge-sm">{spot.countryName}</span>
                                        </td>
                                        <td className='w-1/2 sm:w-1/6 border-red-400'>
                                            <Link to={`/updatespot/${spot._id}`}><button className='btn bg-green-500 text-white'>Update</button></Link>
                                            <button onClick={() => { handleDelete(spot._id) }} className='btn bg-red-500 text-white'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                        {/* foot */}
                        <tfoot>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>

    );
};

export default MyList;