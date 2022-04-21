import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../../Home/Serevices/Services';

const Details = ({ sevice}) => {
    const { name, img, City,title, Country, age, Height, Weight, Type, Languages } = sevice
    return (
        <div style={{ background: "#f0f2f5" }} className='row align-items-center justify-content-center'>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className="col-lg-6">
                <img className='w-100' src={img} alt="" />
            </div>
            <div className="col-lg-6 mt-3">
                <h3 className='text-primary mb-0'>{title}</h3>
                <hr style={{ height: 1, color: 'blue' }} className='w-50' />
                <div className=''>
                    <p className='fw-bold text-muted mb-0'>Name: <span className='text-warning'>{name}</span></p>
                    <p className='text-muted m-0'>Country: {Country}</p>
                    <p className='text-muted m-0'>City: {City}</p>
                    <p className='text-muted m-0'>Age: {age}</p>
                    <p className='text-muted m-0'>Height(cm):{Height}</p>
                    <p className='text-muted m-0'>Weight(Kg): {Weight}</p>
                    <p className='text-muted m-0'>Type: {Type}</p>
                    <p className='text-muted m-0'>Languages: {Languages}</p>
                </div>
                <h3 className='text-primary my-3'>Contact</h3>
                <hr style={{ height: 1, color: 'blue' }} className='w-50' />
                <h5 className='text-muted'>Phone<span className='text-warning fs-6'>(Call Only)</span> <span>01721006620</span></h5>
            </div>
            <div className='my-5'>
                <div>
                    <h3 className='text-primary text-center'>About Bd Call Girl Agency</h3>
                    <hr style={{ height: 1, color: 'blue' }} className='w-100' />
                </div>
                <div>
                    <p className='text-muted'>বিডি কল গার্ল সার্ভিস (রিয়াদ ভাই) <span className='text-warning'> 01721006620 </span>
                        সম্মানিত গ্রাহক বৃন্দ,
                        আমি রিয়াদ ভাই, বিডি কল গার্ল সার্ভিস এর প্রভাইডার।
                        আমাদের বিডি কল গার্ল সার্ভিস নিতে চাইলে আমাদের সাথে যোগাযোগ করুন।
                        আমাদের কাছে কলেজ গার্ল/ ইউনিভার্সিটি গার্ল / হাউজ ওয়াইফ এবং রেম্প মডেল আছে।
                        আমাদের কাছে মিডিয়াম সার্ভিস এবং ভি.আই.পি সার্ভিস আছে ।</p>
                    <p className='text-muted'>
                        মিডিয়াম সার্ভিস এর চার্জ ৩ ঘণ্টা সর্বনিম্ন ১৮-৫০ হাজার টাকা।
                        ভি.আই.পি সার্ভিস এর চার্জ ১ রাতের জন্য সর্বনিম্ন ৫০ হাজার থেকে ১ লাখ টাকা।
                        মিডিয়াম সার্ভিস এবং ভি.আই.পি সার্ভিস এর জন্য ছবি দেওয়া হবে । সেই জন্য ছবি দেখার ফি দিতে হবে ।
                        তারপরে ছবি দেখে পছন্দ হলে ৫০% এডভান্সড পেমেন্ট বিকাশে করতে হবে ।
                        যদি রাজি থাকেন তাহলে ফি দিয়ে ছবি দেখতে পারেন ।
                        ছবি দেখতে হলে আমাকে হোয়াটস আপ /ভাইবার নাম্বারে মেসেজ দিবেন
                        মিডিয়াম সার্ভিস এবং ভি.আই.পি সার্ভিস এর জন্য ৫০% এডভান্সড পেমেন্ট লাগবে ।
                        বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন ।
                        আমাদের সাথে যোগাযোগ করতে চাইলে এখুনি কল করুন।
                        রিয়াদ ভাই (সার্ভিস প্রভাইডার )
                        মোবাইল নাম্বার : <span className='text-warning'>01721006620</span>
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Details;