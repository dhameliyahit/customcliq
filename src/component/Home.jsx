import React, { useState } from 'react';
import axios from 'axios';
import Preview from './Preview.jsx';
import {toast} from 'react-hot-toast'

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
    </>
  );
};

export default Home;
