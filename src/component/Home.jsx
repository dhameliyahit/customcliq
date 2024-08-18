import React, { useState } from 'react';
import axios from 'axios';
import Preview from './Preview.jsx';
import {toast} from 'react-hot-toast'
import {Link} from 'react-router-dom';

const Home = () => {
  const [loading,setLoading] = useState(false);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    companyName: '',
    contactNumber: '',
    email: '',
    whatsApp: '',
    location: '',
    logo: null,
    profilePic: null,
    googlereview:'',
    facebook:'',
    instragram:'',
    youtube:''
  });

  const [gImg, setGimg] = useState([]); 

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (gImg.length > 10) {
      toast.error("Image Max Upload is 10");
      setLoading(false);
      return;
    }
  
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });
    gImg.forEach(file => data.append('gImg', file));
  
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/data`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      toast.success("Form submitted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Error while submitting.");
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <>
      <h1 className='bg-gray-100 text-3xl text-center font-bold drop-shadow-md py-3'>CustomCliQ</h1>
      <hr />
      <div className="flex items-start justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-3xl flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4 bg-white border border-gray-300 rounded shadow-md">
            <main className="bg-white p-8 rounded-lg w-full max-w-lg">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    placeholder="Enter Your Name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="profession" className="block text-sm font-medium text-gray-700">Profession</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="profession"
                    id="profession"
                    value={formData.profession}
                    placeholder="Enter Your Profession"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={formData.companyName}
                    placeholder="Enter Company Name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
                  <input
                    onChange={handleChange}
                    type="number"
                    name="contactNumber"
                    id="contactNumber"
                    value={formData.contactNumber}
                    placeholder="Enter Your Mobile Number"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Id</label>
                  <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    placeholder="Enter Your Email Id"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="whatsApp" className="block text-sm font-medium text-gray-700">WhatsApp Link</label>
                  <input
                    onChange={handleChange}
                    type="url"
                    name="whatsApp"
                    id="whatsApp"
                    value={formData.whatsApp}
                    placeholder="Enter Your WhatsApp Link"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    onChange={handleChange}
                    type="url"
                    name="location"
                    id="location"
                    value={formData.location}
                    placeholder="Enter Your Location"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">Facebook</label>
                  <input
                    onChange={handleChange}
                    type="url"
                    name="facebook"
                    id="facebook"
                    value={formData.facebook}
                    placeholder="Enter Your Facebook url"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="instragram" className="block text-sm font-medium text-gray-700">Instragram</label>
                  <input
                    onChange={handleChange}
                    type="url"
                    name="instragram"
                    id="instragram"
                    value={formData.instragram}
                    placeholder="Enter Your instragram profile link"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="youtube" className="block text-sm font-medium text-gray-700">Youtube</label>
                  <input
                    onChange={handleChange}
                    type="url"
                    name="youtube"
                    id="youtube"
                    value={formData.youtube}
                    placeholder="Enter Your youtube channel link"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="logo" className="block text-sm font-medium text-gray-700">Logo Upload</label>
                  <input
                    onChange={(handleChange)}
                    type="file"
                    name="logo"
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                  />
                </div>
                {formData.logo && (
                  <img style={{
                    width: '100px',
                    height: '100px'
                  }} src={URL.createObjectURL(formData.logo)} alt="" />
                )}
                <div>
                  <label htmlFor="profilePic" className="block text-sm font-medium text-gray-700">Upload Profile Picture</label>
                  <input
                    onChange={handleChange}
                    type="file"
                    name="profilePic"
                    id="profilePic"
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                  />
                </div>
                {
                  formData.profilePic && (
                    <img style={{
                      width: '200px',
                      height: 'auto'
                    }} src={URL.createObjectURL(formData.profilePic)} alt='bg-img' />
                  )
                }
                {/* image upload section start */}
                <div className="max-w-lg mx-auto mt-5">
                  <label 
                    htmlFor="gimg" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Gallery Images Upload
                  </label>
                  <input 
                    type="file" 
                    multiple 
                    onChange={(e) => setGimg([...e.target.files])} 
                    id="gimg"
                    className="block file:p-2 file:rounded-md file:font-bold file:cursor-pointer  file:bg-indigo-50 file:text-indigo-700 p-3 w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
                    />
                  {gImg.length > 0 && (
                    <>
                      <h1 className="text-lg font-semibold mb-3">{gImg.length} Images Uploaded</h1>
                      <div className="grid grid-cols-2 gap-4">
                        {gImg.map((file, index) => (
                          <div key={index} className="w-full h-72 rounded-lg shadow-md overflow-hidden">
                            <img 
                              src={URL.createObjectURL(file)} 
                              alt={`Image ${index + 1}`} 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                {/* image upload section end */}
                <div>
                  <label htmlFor="googlereview" className="block text-sm font-medium text-gray-700">googlereview</label>
                  <input
                    onChange={handleChange}
                    type="url"
                    name="googlereview"
                    value={formData.googlereview}
                    placeholder="Enter googlereview link"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <button type="submit" className="px-4 w-full py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </main>
          </div>

          <div className="w-full border max-h-screen overflow-y-auto md:w-1/2 p-4 bg-gray-100 rounded md:ml-4 mt-4 md:mt-0">
            <Preview formData={formData} gImg={gImg} />
          </div>
        </div>
      </div>
      {/* footer section */}
     <div className="footer items-center sm:block lg:flex lg:justify-between bg-gray-900 text-white py-8">
  <div className="footer_logo flex flex-col items-center md:items-start md:flex-row">
    <img src="data:image/jpeg;base64,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" alt="footer_logo" className="mb-4 md:mb-0 md:mr-8" />
  </div>
  <div className="support_link flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
    <div className="contact_us">
      <ul className="space-y-2 list-disc" style={{listStyleType:'circle'}}>
        <li><a href="#" className="hover:text-gray-400 text-left">Instagram</a></li>
        <li><a href="#" className="hover:text-gray-400">customcliq@gmail.com</a></li>
        <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
        <li><a href="#" className="hover:text-gray-400">Telephone +918989898</a></li>
      </ul>
    </div>
    <div className="follow_us">
      <ul className="space-y-2" style={{listStyleType:'circle'}}>
        <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
        <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
        <li><a href="#" className="hover:text-gray-400">LinkedIn</a></li>
      </ul>
    </div>
    <div className="team">
      <ul className="space-y-2" style={{listStyleType:'circle'}}>
        <li><a href="#" className="hover:text-gray-400 text-left">Mr. Ashok</a></li>
        <li><a href="#" className="hover:text-gray-400 text-left">Mr. Nimish</a></li>
        <li><a href="#" className="hover:text-gray-400">Mr. Aryan</a></li>
      </ul>
      <Link to="/admin/login">
        <p className="mt-4 text-gray-500">Restricted Access</p>
      </Link>
    </div>
  </div>
</div>

    </>
  );
};

export default Home;
