import { update } from 'firebase/database';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UpdateSpot = () => {
    const spot = useLoaderData() || {};
    const {_id,image, spotName, countryName, location, description, averageCost, seasonality, travelTime, totalVisitor } = spot;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description  = form.description.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitor = form.totalVisitor.value;
        

        const spotInfo = { image, spotName, countryName, location, description, averageCost, seasonality, travelTime, totalVisitor};
       
        // fetch data to update
        fetch(`https://discover-euro-server-r9x6oq445-s-m-saifur-rahmans-projects.vercel.app/spots/${_id}`,{
            method: 'PUT',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(spotInfo)
        })
        .then(res => res.json())
        .then(data =>{
            alert('updated')
        })

    }


    return (
        <div>
         
            <h2 className='text-2xl font-bold text-center my-3'>Update new information here</h2>
            <div>
                <img src="" alt="" />
            </div>
              <div className='md:max-w-5xl max-w-full mx-auto overflow-x-hidden'>
                <form onSubmit={handleUpdate}  className='space-y-2'>
                    <div className='grid grid-cols-2 gap-2'>
                        {/* First Column */}
                        <div className="flex flex-col gap-2">
                            {/* Row 1 */}
                            <label className="input input-bordered flex items-center gap-2">Image
                                <input type="text" defaultValue={image} name='image' className="" placeholder="Photo URL" required />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">Spot Name
                                <input type="text" defaultValue={spotName} name='spotName' placeholder="Tourist spot Name" required />
                            </label>
                            {/* Row 2 */}
                            <label className="input input-bordered flex items-center gap-2">Country Name
                                <input type="text" defaultValue={countryName} name='countryName' placeholder="Country Name" required />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">Location
                                <input type="text" defaultValue={location} name='location' placeholder="Location" required />
                            </label>
                            {/* Row 3 */}
                           
                            
                        </div>
                        {/* Second Column */}
                        <div className="flex flex-col gap-2">
                        <label className="input input-bordered flex items-center gap-2">Average-Cost
                                <input type="text" defaultValue={averageCost} name='averageCost' placeholder="Average Cost" required />
                            </label>
                            {/* Row 1 */}
                            <label className="input input-bordered flex items-center gap-2">Seasonality
                                <input type="text" defaultValue={seasonality} name='seasonality' placeholder="Seasonality" required />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">Travel-time
                                <input type="text" defaultValue={travelTime} name='travelTime' placeholder="Travel Time" required />
                            </label>
                            {/* Row 2 */}
                            <label className="input input-bordered flex items-center gap-2">TotalVisitorsPerYear
                                <input type="text" defaultValue={totalVisitor} name='totalVisitor' placeholder="Total Visitor per year" required />
                            </label>
                            
                        </div>
                    </div>
                    <label className="input w-full input-bordered flex items-center gap-2">Description
                                <input type="text" className='w-full'  name='description' defaultValue={description} placeholder="Description" required />
                            </label>
                    <div className="form-control mt-6">
                        <input className='btn btn-success' type="submit" value= 'Update'/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateSpot;