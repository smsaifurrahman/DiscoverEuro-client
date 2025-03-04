import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';

const AddTouristSpots = () => {
    const {user} = useContext(AuthContext) || {};
    


    const handleAddSpot = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description  = form.description.value;
        const averageCost = parseInt(form.averageCost.value);
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitor = form.totalVisitor.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;

        const spotInfo = { image, spotName, countryName, location, description, averageCost, seasonality, travelTime, totalVisitor, userEmail, userName };
        console.log(spotInfo);
        fetch('https://discover-euro-server-r9x6oq445-s-m-saifur-rahmans-projects.vercel.app/spots',{
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(spotInfo)
        })
        .then(res => res.json())
        .then(data => {
           e.target.reset()
            // console.log(data);
            if(data.insertedId) {
                toast("New Spot added Successfully");
            }
        })

    }
    
    return (
        <div>
            <h1 className='text-center text-3xl font-bold my-3'>Add New Spots</h1>
            
            <div className='md:max-w-5xl max-w-full mx-auto overflow-x-hidden'>
                <form onSubmit={handleAddSpot} className='space-y-2'>
                    <div className='grid grid-cols-2 gap-2'>
                        {/* First Column */}
                        <div className="flex flex-col gap-2">
                            {/* Row 1 */}
                            <label className="input input-bordered flex items-center gap-2">Image
                                <input className='w-full' type="text" name='image'  placeholder="Photo URL" required />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">Spot Name
                                <input type="text" className='w-full' name='spotName' placeholder="Tourist spot Name" required />
                            </label>
                            {/* Row 2 */}
                            <label className="input input-bordered flex items-center gap-2">Country Name
                                <input type="text" className='w-full' name='countryName' placeholder="Country Name" required />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">Location
                                <input className='w-full' type="text" name='location' placeholder="Location" required />
                            </label>
                            {/* Row 3 */}
                            <label className="input input-bordered flex items-center gap-2">Description
                                <input className='w-full' type="text" name='description' placeholder="Description" required />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">Average-Cost
                                <input className='w-full' type="number" name='averageCost' placeholder="Average Cost" required />
                            </label>
                        </div>
                        {/* Second Column */}
                        <div className="flex flex-col gap-2">
                            {/* Row 1 */}
                            <label className="input input-bordered flex items-center gap-2">Seasonality
                                <input className='w-full' type="text" name='seasonality' placeholder="Seasonality" required />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">Travel-time
                                <input className='w-full' type="number" name='travelTime' placeholder="Travel Time" required />
                            </label>
                            {/* Row 2 */}
                            <label className="input input-bordered flex items-center gap-2">TotalVisitorsPerYear
                                <input className='w-full' type="number" name='totalVisitor' placeholder="Total Visitor per year" required />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">User Email
                                <input className='w-full' type="email" defaultValue={ user.email}  name='userEmail' disabled placeholder="User Email" required />
                            </label>
                            {/* Row 3 */}
                            <label className="input input-bordered flex items-center gap-2">User Name
                                <input className='w-full' type="text" defaultValue={ user.displayName}  name='userName' disabled placeholder="User Name" required />
                            </label>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className='btn btn-success' type="submit" value= 'Add Spot'/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTouristSpots;
