import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserImages = ({ userId }) => {
  const [images, setImages] = useState([]);  
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/user/${userId}/images`);
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [userId]);

  const downloadImage = (contentType, base64Data, filename) => {
    const linkSource = `data:${contentType};base64,${base64Data}`;
    const downloadLink = document.createElement('a');
    downloadLink.href = linkSource;
    downloadLink.download = filename;
    downloadLink.click();
  };

  return (
    <div>
      <h2>User Images</h2>
      <div className="image-grid">
        {images.length > 0 ? (
          images.map((img, index) => (
            <div key={index} className="image-container">
              <img
                src={`data:${img.contentType};base64,${img.data}`}
                alt={`User Image ${index + 1}`}
                className="user-image"
              />
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2'
                onClick={() => downloadImage(img.contentType, img.data, `user-image-${index + 1}.jpg`)}
              >
                Download Galley Image {index+1}
              </button>
            </div>
          ))
        ) : (
          <p>No images found for this user.</p>
        )}
      </div>
    </div>
  );
};

export default UserImages;
