import React, { useState } from 'react';
import axios from 'axios';
import Preview from './Preview.jsx';

const Home = () => {
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
    img1: null,
    img2: null,
    img3: null,
    img4: null,
    img5: null,
    img6: null,
    img7: null,
    img8: null,
    img9: null,
    img10: null,
    googlereview:''
  });


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Form Submitted!");

    // Uncomment the code below to enable form submission
    // try {
    //   const response = await axios.post('http://localhost:8080/update/new', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   });
    //   alert("Request sent successfully");
    //   console.log(response.data);
    // } catch (error) {
    //   console.error('Error submitting form', error);
    // }
  };

  return (
    <>
      <h1 className='bg-gray-100 text-center text-3xl'>CustomCliQ</h1>
      <div className="flex items-start justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-3xl flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4 bg-white border border-gray-300 rounded shadow-md">
            <main className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
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
                    type="text"
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
                    type="text"
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
                    type="text"
                    name="location"
                    id="location"
                    value={formData.location}
                    placeholder="Enter Your Location"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="logo" className="block text-sm font-medium text-gray-700">Logo Upload</label>
                  <input
                    onChange={handleChange}
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
                <div className="grid">
                  <h1>Gallery Image</h1>
                  <div className='border border-b-2 p-1'>
                    <h1>Image 1</h1>
                    <input
                      onChange={handleChange}
                      type="file"
                      name="img1"
                      className=" file:bg-indigo-50 file:text-indigo-700"
                    />
                    {
                      formData.img1 && (
                        <img style={{
                          width: "100px",
                          height: "auto",
                          margin: "4px 0"
                        }} src={URL.createObjectURL(formData.img1)} />
                      )
                    }
                  </div>
                  <div className='border border-b-2 p-1'>
                    <h1>Image 2</h1>
                    <input
                      onChange={handleChange}
                      type="file"
                      name="img2"
                      className=" file:bg-indigo-50 file:text-indigo-700"
                    />
                    {
                      formData.img2 && (
                        <img style={{
                          width: "100px",
                          height: "auto",
                          margin: "4px 0"
                        }} src={URL.createObjectURL(formData.img2)} />
                      )
                    }
                  </div>
                  <div className='border border-b-2 p-1'>
                    <h1>Image 3</h1>
                    <input
                      onChange={handleChange}
                      type="file"
                      name="img3"
                      className=" file:bg-indigo-50 file:text-indigo-700"
                    />
                    {
                      formData.img3 && (
                        <img style={{
                          width: "100px",
                          height: "auto",
                          margin: "4px 0"
                        }} src={URL.createObjectURL(formData.img3)} />
                      )
                    }
                  </div>
                  <div className='border border-b-2 p-1'>
                    <h1>Image 4</h1>
                    <input
                      onChange={handleChange}
                      type="file"
                      name="img4"
                      className=" file:bg-indigo-50 file:text-indigo-700"
                    />
                    {
                      formData.img4 && (
                        <img style={{
                          width: "100px",
                          height: "auto",
                          margin: "4px 0"
                        }} src={URL.createObjectURL(formData.img4)} />
                      )
                    }
                  </div>
                  <div className='border border-b-2 p-1'>
                    <h1>Image 5</h1>
                    <input
                      onChange={handleChange}
                      type="file"
                      name="img5"
                      className=" file:bg-indigo-50 file:text-indigo-700"
                    />
                    {
                      formData.img5 && (
                        <img style={{
                          width: "100px",
                          height: "auto",
                          margin: "4px 0"
                        }} src={URL.createObjectURL(formData.img5)} />
                      )
                    }
                  </div>
                  <div className='border border-b-2 p-1'>
                    <h1>Image 6</h1>
                    <input
                      onChange={handleChange}
                      type="file"
                      name="img6"
                      className=" file:bg-indigo-50 file:text-indigo-700"
                    />
                    {
                      formData.img6 && (
                        <img style={{
                          width: "100px",
                          height: "auto",
                          margin: "4px 0"
                        }} src={URL.createObjectURL(formData.img6)} />
                      )
                    }
                  </div>
                  <div className='border border-b-2 p-1'>
                    <h1>Image 7</h1>
                    <input
                      onChange={handleChange}
                      type="file"
                      name="img7"
                      className=" file:bg-indigo-50 file:text-indigo-700"
                    />
                    {
                      formData.img7 && (
                        <img style={{
                          width: "100px",
                          height: "auto",
                          margin: "4px 0"
                        }} src={URL.createObjectURL(formData.img7)} />
                      )
                    }
                  </div>
                  <div className='border border-b-2 p-1'>
                    <h1>Image 8</h1>
                    <input
                      onChange={handleChange}
                      type="file"
                      name="img8"
                      className=" file:bg-indigo-50 file:text-indigo-700"
                    />
                    {
                      formData.img8 && (
                        <img style={{
                          width: "100px",
                          height: "auto",
                          margin: "4px 0"
                        }} src={URL.createObjectURL(formData.img8)} />
                      )
                    }
                  </div>
                  <div className='border border-b-2 p-1'>
                    <h1>Image 9</h1>
                    <input
                      onChange={handleChange}
                      type="file"
                      name="img9"
                      className=" file:bg-indigo-50 file:text-indigo-700"
                    />
                    {
                      formData.img9 && (
                        <img style={{
                          width: "100px",
                          height: "auto",
                          margin: "4px 0"
                        }} src={URL.createObjectURL(formData.img9)} />
                      )
                    }
                  </div>
                  <div className='border border-b-2 p-1'>
                    <h1>Image 10</h1>
                    <input
                      onChange={handleChange}
                      type="file"
                      name="img10"
                      className=" file:bg-indigo-50 file:text-indigo-700"
                    />
                    {
                      formData.img10 && (
                        <img style={{
                          width: "100px",
                          height: "auto",
                          margin: "4px 0"
                        }} src={URL.createObjectURL(formData.img10)} />
                      )
                    }
                  </div>
                </div>
                {/* image upload section end */}
                <div>
                  <label htmlFor="googlereview" className="block text-sm font-medium text-gray-700">googlereview</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="googlereview"
                    value={formData.googlereview}
                    placeholder="Enter googlereview link"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <button type="submit" className="px-4 w-full py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  Submit
                </button>
              </form>
            </main>
          </div>

          <div className="w-full border max-h-screen overflow-y-auto md:w-1/2 p-4 bg-gray-100 rounded md:ml-4 mt-4 md:mt-0">
            <Preview formData={formData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
