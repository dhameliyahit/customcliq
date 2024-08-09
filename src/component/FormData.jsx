import React,{useState} from 'react'
import axios from 'axios';

const FormData = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName:'',
    mobile: '',
    workPhone: '',
    email: '',
    companyName: '',
    jobTitle: '',
    employeeId: '',
    department: '',
    address: '',
    description: '',
    img: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, img: e.target.files[0] });
  };

   const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/update/new', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert("Request send Successfully");
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form', error);
    }
   };
  return (
<>
    <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">First name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" 
                  placeholder="First name" 
                  />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Last name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" 
                  placeholder="Last name" 
                />
              </div>
            </div>

            {/* Numbers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Mobile</label>
                <input 
                  type="text" 
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" 
                  placeholder="Mobile" 
                  />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Work phone</label>
                <input 
                  type="text" 
                  name="workPhone"
                  value={formData.workPhone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" 
                  placeholder="Work phone" 
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" 
                placeholder="Your email id" 
                />
            </div>

            {/* Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Your company name</label>
                <input 
                  type="text" 
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" 
                  placeholder="Your company name" 
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Your job title</label>
                <input 
                  type="text" 
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" 
                  placeholder="Your job title" 
                />
              </div>
            </div>

            {/* More Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Your employee id</label>
                <input 
                  type="text" 
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" 
                  placeholder="Your employee id" 
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Your department</label>
                <input 
                  type="text" 
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" 
                  placeholder="Your department" 
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Your address</label>
              <textarea 
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" 
                placeholder="Your address" 
                />
            </div>

            {/* Summary */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">A brief description about you and your skills</label>
              <textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" 
                placeholder="A brief description about you and your skills" 
                />
            </div>

            {/* Image upload */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Upload your profile picture</label>
              <input
                type='file' 
                onChange={handleImageChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" 
              />
            </div>
            {formData.img && (
              <div className="text-center">
                <img 
                  src={URL.createObjectURL(formData.img)} 
                  alt="Profile" 
                  className='img img-responsive' 
                  />
              </div>
            )}

            <div className="text-center w-full ">
              <button 
                type="submit" 
                className="px-4 w-full py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                Submit
              </button>
            </div>
          </form>
          
          
          <div>
        
    </div>
</>
  )
}

export default FormData
