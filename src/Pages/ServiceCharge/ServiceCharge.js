import React from 'react';

const ServiceCharge = () => {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div>
                    <h3 className='text-center text-primary text-uppercase'>Escort Service Rate</h3>
                    <hr style={{ height: 2, color: 'blue' }} className='w-25 mx-auto ' />
                </div>

                <div className="col-lg-6">
                    <h5>Regular Service</h5>
                    <div className='shadow p-3 mb-3 bg-body rounded border'>
                        <li>30 Min ( 1 Service )</li>
                        <p>Tk. 4,000</p>
                    </div>
                    <div className='shadow p-3 mb-3 bg-body rounded border'>
                        <li>1 Hour ( 2 Service )</li>
                        <p>Tk. 6,000</p>
                    </div>
                    <div className='shadow p-3 mb-5 bg-body rounded border'>
                        <li>Per Night</li>
                        <p>Tk. 12,000</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h5 >Premium Service</h5>
                    <div className='shadow p-3 mb-3 bg-body rounded border'>
                        <li>1 Hour</li>
                        <p>Tk. 30,000</p>
                    </div>
                    <div className='shadow p-3 mb-3 bg-body rounded border'>
                        <li>2 Hour</li>
                        <p>Tk. 40,000</p>
                    </div>
                    <div className='shadow p-3 mb-3 bg-body rounded border'>
                        <li>Per Night</li>
                        <p>Tk. 60,000 to 1 Lakh</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceCharge;