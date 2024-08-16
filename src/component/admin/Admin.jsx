import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'antd';
import Gimg from "./Gimg"
import { toast } from 'react-hot-toast';

export const Admin = () => {
  
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [loading,setLoading] = useState(false);
  
  const [data, setData] = useState([])
  const getAllData = async () => {
    setLoading(true);
    const response = await axios.get(`${BASE_URL}/api/v1/all/data`);
    setData(response.data.user);
    setLoading(false);
  }

  const [isModalOpen1, setIsModalOpen1] = useState(null);
  const [isModalOpen2, setIsModalOpen2] = useState(null);
  const [isModalOpen3, setIsModalOpen3] = useState(null);

  const showModal1 = (id) => setIsModalOpen1(id);
  const handleOk1 = () => setIsModalOpen1(null);
  const handleCancel1 = () => setIsModalOpen1(null);

  const showModal2 = (id) => setIsModalOpen2(id);
  const handleOk2 = () => setIsModalOpen2(null);
  const handleCancel2 = () => setIsModalOpen2(null);

  const showModal3 = (id) => setIsModalOpen3(id);
  const handleOk3 = () => setIsModalOpen3(null);
  const handleCancel3 = () => setIsModalOpen3(null);


    const downloadImage = (url, filename) => {
    fetch(url, {
      method: 'GET',
      headers: {},
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => console.error('Error downloading the image', err));
  };

  const handleDelete = async (id) => {
    alert("Are Sure to Delete !")
    try {
      const response = await axios.delete(`${BASE_URL}/api/v1/data/delete/${id}`);
      console.log(response.data);
      toast.success("Record Delete Successfully");
      setTimeout(()=>{
        location.reload();
      },2000)
    } catch (error) {
      console.log(error);
      toast.error("Somthing Went Wrong !")
    }
  }
  useEffect(() => {
    getAllData();
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      weekday: 'short', // Optional: for weekday (e.g., "Tue")
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true // Use 12-hour time format
    });
  } 

  return (
    <>
      <h1 className='text-3xl mx-5 my-3 font-bold border p-2'>Admin Panel ({loading ? "Loading..." : "Data Get Successful"})</h1>
      <div className="overflow-x-auto border m-5">
        <table className="w-full bg-white border border-gray-200">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="text-left py-2 px-4 border-r ">Record Added Time</th>
              <th className="text-left py-2 px-4 border-r">Name</th>
              <th className="text-left py-2 px-4 border-r">Profession</th>
              <th className="text-left py-2 px-4 border-r">Company Name</th>
              <th className="text-left py-2 px-4 border-r">Contact Number</th>
              <th className="text-left py-2 px-4 border-r">Email</th>
              <th className="text-left py-2 px-4 border-r">WhatsApp</th>
              <th className="text-left py-2 px-4 border-r">Location</th>
              <th className="text-left py-2 px-4 border-r">Google Review</th>
              <th className="text-left py-2 px-4 border-r">Facebook</th>
              <th className="text-left py-2 px-4 border-r">Instagram</th>
              <th className="text-left py-2 px-4 border-r">YouTube</th>
              <th className="text-left py-2 px-4 border-r">Logo</th>
              <th className="text-left py-2 px-4 border-r">Profile Pic</th>
              <th className="text-left py-2 px-4 border-r">Images</th> {/* New column for multiple images */}
              <th className='text-left py-2 px-4 border-r'>Delete</th>
            </tr>
          </thead>
          <tbody>
          {data.map((item) => (
          <tr key={item._id} className="border-b">
            <td className='py-2 px-4 border-r'>{<>
              <Button>{formatDate(item.createdAt)}</Button>
            </>
            }</td>
            <td className="py-2 px-4 border-r">{item.name}</td>
            <td className="py-2 px-4 border-r">{item.profession}</td>
            <td className="py-2 px-4 border-r">{item.companyName}</td>
            <td className="py-2 px-4 border-r">{item.contactNumber}</td>
            <td className="py-2 px-4 border-r">{item.email}</td>
            <td className="py-2 px-4 border-r">{item.whatsApp}</td>
            <td className="py-2 px-4 border-r">{item.location}</td>
            <td className="py-2 px-4 border-r">{item.googlereview}</td>
            <td className="py-2 px-4 border-r">{item.facebook}</td>
            <td className="py-2 px-4 border-r">{item.instragram}</td>
            <td className="py-2 px-4 border-r">{item.youtube}</td>
            <td className="py-2 px-4 border-r">
              <Button type="primary" onClick={() => showModal1(item._id)}>
                Logo
              </Button>
              <Modal
                title={`${item.name} Update Logo`}
                open={isModalOpen1 === item._id}
                onOk={handleOk1}
                onCancel={handleCancel1}
              >
                <img src={`${BASE_URL}/api/v1/get/logo/${item._id}`} alt="Logo" />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2' onClick={() => downloadImage(`http://localhost:5000/api/v1/get/logo/${item._id}`, `logo-${item._id}.jpg`)}>
                  Download Updated Logo ({item.name})
                </button>
              </Modal>
            </td>
            <td className="py-2 px-4 border-r">
              <Button type="primary" onClick={() => showModal2(item._id)}>
                Profile Picture
              </Button>
              <Modal
                title={`${item.name} Update Profile Picture`}
                open={isModalOpen2 === item._id}
                onOk={handleOk2}
                onCancel={handleCancel2}
              >
                <img src={`${BASE_URL}/api/v1/get/profilePic/${item._id}`} alt="Profile Pic" />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2' onClick={() => downloadImage(`http://localhost:5000/api/v1/get/profilePic/${item._id}`, `profile-pic-${item._id}.jpg`)}>
                  Download Updated Profile Pic ({item.name})
                </button>
              </Modal>
            </td>
            <td className="py-2 px-4 border-r">
              <Button type="primary" onClick={() => showModal3(item._id)}>
                Gallery Images
              </Button>
              <Modal
                title={`${item.name} Gallery Images`}
                open={isModalOpen3 === item._id}
                onOk={handleOk3}
                onCancel={handleCancel3}
              >
                <Gimg userId={item._id} />
              </Modal>
            </td>
            <td>
              <div className="flex space-x-2">
                <button onClick={() => handleDelete(item._id)} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
          </tbody>
        </table>
      </div>

    </>
  );
}
