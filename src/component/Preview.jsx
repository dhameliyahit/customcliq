import React from 'react'
import './preview.css'
const Preview = ({formData}) => {
    
    return (
        <>
                <div className="profile">
                    <div className="bg-img"  style={{
    backgroundImage: formData.profilePic
      ? `url(${URL.createObjectURL(formData.profilePic)})`
      : "url('./profile.jpg')"
  }}>
                        <h2>{formData.name ? formData.name : "Nimish Kajavadara"}</h2>
                        <p>{formData.profession ? formData.profession : "Social Media | Digital Marketing Expert"}</p>
                        <p><strong>{formData.companyName ? formData.companyName : "Co Founder at DigyTalk Pvt Ltd & CustomCliQ"}</strong></p>
                        <div className="logo">
                        {formData.logo ? (
                            <img
                                width={100}
                                height={100}
                                src={URL.createObjectURL(formData.logo)}
                                alt='Logo'
                            />
                            ) : (
                            <img
                                width={100}
                                height={100}
                                src="https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/digytalk_1.png"
                                alt='Default Logo'
                            />
                            )}
                            
                           
                        </div>
                        <div className="contact-icons">
                            <ul>
                                <li>
                                    <a href={`tel:${formData.contactNumber}`} >
                                        <i className="fa-solid fa-mobile-screen-button" />
                                    </a>
                                </li>
                                <li>
                                    <a href={`mailto:${formData.email}`}>
                                        <i className="fa-regular fa-envelope" />
                                    </a>
                                </li>
                                <li>
                                    <a href={formData.whatsApp} target='_blank'>
                                        <i className="fa-brands fa-whatsapp" />
                                    </a>
                                </li>
                                <li>
                                    <a href={formData.location} target='_blank'>
                                        <i className="fa-solid fa-location-dot" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* profile ends */}
                {/* contact us start */}
                <div className="contact-us">
                    <div className="header">
                        <i className="fa-solid fa-mobile-screen-button" />
                        <h3>Contact Us</h3>
                    </div>
                    <div className="call-us">
                        <h3>Call Us</h3>
                        <h5>{formData.contactNumber ? formData.contactNumber : "1122334455"}</h5>
                    </div>
                    <div className="email">
                        <h3>email</h3>
                        <h5>{formData.email ? formData.email : "ABC@gmail.com"}</h5>
                    </div>
                    <div className="address">
                        <h3>Office Address</h3>
                        <h5>122, Time Shoppers
                            Nr. Amiras Hotel,<br /> Sarthana Jakatnaka
                            Surat, Gujarat, 395006 <br />
                            India</h5>
                    </div>
                    <a href={formData.location} target='_blank'>
                        <span className="dir-btn">
                            <i className="fa-solid fa-location-arrow" />
                            <p>Direction</p>
                        </span>
                    </a>
                </div>
                {/* contact-us end */}
                {/* social media Link  what's app*/}
                <div className="social-link">
                    <div className="heading">
                        <h2>Social Media Links</h2>
                        <p>"Exploring ideas, sparking conversations, and sharing insights on the journey of life. Join me in the quest for inspiration and connection! 🌟"</p>
                    </div>
                    <div className="whatsapp social-link">
                        <a href="https://wa.me/919904464465?text=Hi%20Naimish%2C%20Can%20You%20Give%20me%20more%20Information%20About" className="whatsapp">
                            <img src="https://www.qrcodechimp.com/images/digitalCard/whatsapp_icon@72x.png" alt="whatsapp" />
                            <div className="title">
                                <h3>WhatsApp Now</h3>
                                <p>Let's Connect With us
                                </p>
                            </div>
                            <i className="fa-solid fa-chevron-right" />
                        </a>
                    </div>
                </div>
                {/* instragram div start */}
                <div className="instragram icons">
                    <a target='_blank' href={formData.instragram ? formData.instragram : "https://www.instagram.com/naimish.official/"} className="instragram icons">
                        <div className="left">
                            <img src="https://www.qrcodechimp.com/images/digitalCard/insta_icon@72x.png" alt="whatsapp" />
                            <div className="title">
                                <h3>Instragram</h3>
                                <p>Follow me on Instagram</p>
                            </div>
                        </div>
                        <i className="fa-solid fa-chevron-right" />
                    </a>
                </div>
                {/* instragram div end */}
                {/* facebook div start */}
                <div className="facebook icons">
                    <a target='_blank' href={formData.facebook ? formData.facebook : "https://www.instagram.com/naimish.official/"} className="facebook icons">
                        <div className="left">
                            <img src="https://www.qrcodechimp.com/images/digitalCard/fb_icon@72x.png" alt="whatsapp" />
                            <div className="title">
                                <h3>Facebook</h3>
                                <p>Follow me on Facebook</p>
                            </div>
                        </div>
                        <i className="fa-solid fa-chevron-right" />
                    </a>
                </div>
                {/* youtube div end */}
                <div className="youtube icons">
                    <a target='_blank' href={formData.youtube ? formData.youtube : "https://www.instagram.com/naimish.official/"} className="youtube icons">
                        <div className="left">
                            <img src="https://www.qrcodechimp.com/images/digitalCard/youtube_icon@72x.png" alt="whatsapp" />
                            <div className="title">
                                <h3>YouTube</h3>
                                <p>Subscribe Now</p>
                            </div>
                        </div>
                        <i className="fa-solid fa-chevron-right" />
                    </a>
                </div>
                {/* youtube div end */}
                {/* smart nfc start */}
                <div className="smart-nfc">
                    <div className="smart-nfc-heading">
                        <h2>Smart NFC Customize <br /> Wooden Stand | Smart NFC Card</h2>
                        <p>CustomCliQ | Smart NFC QR Technology</p>
                    </div>
                    <hr />
                    <div className="instagram-nfc ">
                        <a href="https://wa.me/919904464465?text=Hi%20Naimish%2C%20Can%20You%20Give%20me%20more%20Information%20About" className="instagram-nfc">
                            <div className="left">
                                <img src="https://www.qrcodechimp.com/images/digitalCard/insta_icon@72x.png" alt="whatsapp" />
                                <div className="title">
                                    <h3 style={{ color: '#3c3c3c' }}>WhatsApp Now</h3>
                                    <p>Let's Connect With us
                                    </p>
                                </div>
                            </div>
                            <i className="fa-solid fa-chevron-right" />
                        </a>
                    </div>
                </div>
                {/* smart nfc end */}
                {/* our-service start */}
                <div className="our-service">
                    <h2>Our Service</h2>
                    <p>We are Providing 360 Degree Social Media Solution</p>
                    <hr />
                    <div className="services">
                        <br />
                        <p>🔸Social Media Management</p>
                        <p>🔹Google | YouTube Ads</p>
                        <p>🔸Facebook | Instagram | WhatsApp Ads</p>
                        <p>🔹Content Creation</p>
                        <p>🔸Reel Creation</p>
                        <p>🔹Influancer Marketing</p>
                        <p>🔸Website Development</p>
                        <p>🔹SEO Optimization</p>
                        <p>🔸Graphics Design</p>
                        <p>🔹Video Editing</p>
                        <p>🔸Email Marketing</p>
                        <p>🔹Product Shoot</p>
                        <p>🔸Brand Collaboration</p>
                    </div>
                </div>
                {/* our service end */}
                {/* gallery section start */}
                <div className="gallery">
                    <div className="image-grid">  
                        <img src={formData.img1 ? URL.createObjectURL(formData.img1) : "https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-07-14_at_141003_a8af41ca.jpg"} alt="Image 1" />
                        <img src={formData.img2  ? URL.createObjectURL(formData.img2) :"https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-07-14_at_141007_0500b6a4.jpg"} alt="Image 2" />
                        <img src={formData.img3  ? URL.createObjectURL(formData.img3) :"https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-07-14_at_141007_b944fb1c.jpg"} alt="Image 3" />
                        <img src={formData.img4  ? URL.createObjectURL(formData.img4) :"https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-07-14_at_141006_ac1295c3.jpg"} alt="Image 4" />
                        <img src={formData.img5  ? URL.createObjectURL(formData.img5) :"https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-07-14_at_141004_2fe40407.jpg"} alt="Image 5" />
                        <img src={formData.img6  ? URL.createObjectURL(formData.img6) :"https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-07-14_at_141000_e6b9b39a.jpg"} alt="Image 6" />
                        <img src={formData.img7  ? URL.createObjectURL(formData.img7) :"https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-07-14_at_141000_0fe0a7fa.jpg"} alt="Image 7" />
                        <img src={formData.img8  ? URL.createObjectURL(formData.img8) :"https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-07-14_at_140957_e7278612.jpg"} alt="Image 8" />
                        <img src={formData.img9  ? URL.createObjectURL(formData.img9) :"https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-07-14_at_140955_a12010c6.jpg"} alt="Image 9" />
                        <img src={formData.img10  ? URL.createObjectURL(formData.img10) :"https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-06-09_at_100409_40c4212f.jpg"} alt="Image 10" />
                    </div>
                </div>
                {/* gallery section end */}
                {/* web-link start */}
                <div className="web-links">
                    <h2>Web Links</h2>
                    <p>Visit a Website and get more Information<br />About our Company</p>
                    <hr />
                    <div className="web-link">
                        <a href="https://digytalk.com/" className="web-link">
                            <div className="left">
                                <img src="https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/digytalk_1.png" alt="DigyTalk Logo" />
                                <div>
                                    <p><strong>DigyTalk Pvt Ltd</strong></p>
                                    <p>We Establish Your Brand</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-chevron-right" />
                        </a>
                    </div>
                </div>
                {/* web-link end */}
                {/* our-website section start */}
                <div className="our-website icons">
                    <a href="https://customcliq.com/" className="youtube icons">
                        <div className="left">
                            <img src="https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/untitled_design_16.png" alt="whatsapp" />
                            <div className="title">
                                <h3>CustomCliQ</h3>
                                <p>Smart NFC QR Technology</p>
                            </div>
                        </div>
                        <i className="fa-solid fa-chevron-right" />
                    </a>
                </div>
                {/* our website section end */}
                {/* about-us */}
                <div className="about-us our-service">
                    <div className="content-about">
                        <h2>About Me</h2>
                        <p><strong>🚀 Co-founder at DigyTalk Pvt Ltd | 2.5 Years of Innovation</strong></p>
                        <br />
                        <p id="About">
                            Passionate co-founder with expertise in Technical Knowledge Like social media, digital marketing, graphic design, and video editing. ICP Certified Business Consultant specializing in tailored solutions for strategic growth. Recognized for excellence in digital marketing and business consulting. Let's connect for innovative collaborations!
                        </p>
                    </div>
                </div>
                {/* about-end's */}
                {/* our review section start */}
                <div className="review-container">
                    <h1>Google My Business Reviews</h1>
                    <p>Write a 5 <span>⭐</span> Review For DigyTalk</p>
                    <a href="https://g.page/r/CWW74sisLccEEB0/review" className="review-button">Give a Review DigyTalk</a>
                </div>
                {/* our review section end */}
                {/* client review section start */}
                <div className="review-container">
                    <h1>Google My Business Reviews</h1>
                    <p>Write a 5 <span>⭐</span> Review For CustomCliQ</p>
                    <a href={formData.googlereview ? formData.googlereview : `https://g.page/r/CWW74sisLccEEB0/review `}className="review-button" target='_blank'>Give a Review CustomCliQ</a>
                </div>
                {/* <a rel="nofollow noopener noreferrer" href="tel:+911122334455" className="qrc_addtocontact">
                    <div className="qrc_addtocontact_text">Save Contact</div>
                     <div className="qrc_addtocontact_circle">
                      <i className="fas fa-plus" />
                    </div>                
                </a> */}
    </>
)};



export default Preview
