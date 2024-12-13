import React, { useState } from "react";
import "./index.css";
import { FaHeart } from "react-icons/fa";
import { BiSolidNavigation } from "react-icons/bi";
import Share from "../share"; // Import the ShareModal component

const Feeds = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const handleOpenModal = (post) => {
    setCurrentPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentPost(null);
  };

  const posts = [
    {
      id: 1,
      user: "Aarav",
      avatar:
        "https://s3-alpha-sig.figma.com/img/2d65/288d/6161e095f4e9428169a9591f38f270dd?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a9W5~YZfVTV7w2hOtzRDvdJnfVgPARqw-cJiAAqgwVUfemU5uQHFt8Xsu6rsf2xarztpLht4lv3x0B18QULcAY7kKBw90grHgYLD4awr6cUZzaAzA8h5gyz3nmLZd4h3VKJNdamKKWCota92GjT2~0cgKiuUCRV80hp6VxqftSxWYBqTnIFV5UqT3YcSQZ23ra-kTG8atAWxTS8x6l1R68EaEY3dEQSz0DP1iDGNSfAqp2a7NGtAX4E79Y1jnAPflsg3O6J59Z9KSF8IjSa7HqkRe1qlZSPX8mkkGz1s3Onu3y~rxtA1fFM6A7-j9XwNA-3HXgP5FrbiqJKms2aXbg__",
      content:
        "Just arrived in New York City! Excited to explore the sights, sounds, and energy of this amazing place. #NYC #Travel",
      images: [
        "https://s3-alpha-sig.figma.com/img/92fa/0669/9fc5c5ac336e1596b0abe398f32fdc70?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mMphcmKQsBoabGeXTFFD15JhAA5xPBJcam28-pi3XzFVRoUggoy32oRtGOcDXM6SE15AY6a8GpolfuJJe9HCwvl4f2a3n3isrcC1jmGcyO7BxHC-Oh0hnl3zMIlLbDHdoB4liaKo7hscGtk2uIAAwHnHAB3ySpyVkDSOp4gDSDuH9FsXqQZ~gkT-oZ94dBCWuu3FfdXyGPmfNDidg-IIl81ZaflHOvd4oYlhsrIcrdg9sefzMHtE3pehhXvG1uiOnz0vF0vYfDtEkbnMqg4Upv5vz7POc4Le9LXXux44m3nzZEOXRP6T7Lg5dR9ZPPMXQ6jq6finIHfkQRB2TvlnYg__",
        "https://s3-alpha-sig.figma.com/img/468d/f99b/7970153da6c5da9091d49a21a3df94d1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTRgY3WrDWlaoslry-eYF3fMJ4St1g4vXUXYKQTWfiLhADDGNG4ssWovpgYCE0SeDXU2lMpluhSzWlOHgc4rq~pBPooYrUKJ-kpocKTIaBr586Zx6sg5hL0h8xzu~GMEIDMEawloExVwD0dse5znk0grXsRc8QxaMgJu5JsZRjUOER3KniJgZkcwE89OZS7QhXk8mo775A~TWsp6T3TmRaEVHyFHcvixzEEOYnNWpdi83eENYiWOryf8aQCpKrYsr5cmS-8uSk2Jf65M9mIK7W8CdD8c-t9yu5oeBOusor~lQtClgV1bSeEMxb7cRMDY-RRbMVpj~lU7dviAcI~BQA__",
      ],
    },{
    id: 2,
      user: "Sneha",
      avatar:
        "https://s3-alpha-sig.figma.com/img/2d65/288d/6161e095f4e9428169a9591f38f270dd?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a9W5~YZfVTV7w2hOtzRDvdJnfVgPARqw-cJiAAqgwVUfemU5uQHFt8Xsu6rsf2xarztpLht4lv3x0B18QULcAY7kKBw90grHgYLD4awr6cUZzaAzA8h5gyz3nmLZd4h3VKJNdamKKWCota92GjT2~0cgKiuUCRV80hp6VxqftSxWYBqTnIFV5UqT3YcSQZ23ra-kTG8atAWxTS8x6l1R68EaEY3dEQSz0DP1iDGNSfAqp2a7NGtAX4E79Y1jnAPflsg3O6J59Z9KSF8IjSa7HqkRe1qlZSPX8mkkGz1s3Onu3y~rxtA1fFM6A7-j9XwNA-3HXgP5FrbiqJKms2aXbg__",
      content:
        "Taking a moment to slow down, breathe, and focus on myself. 🌿✨ Self-care isn’t selfish – it’s necessary. 💕 #SelfCare #MeTime #Wellness",
      images: [
        "https://s3-alpha-sig.figma.com/img/3b55/b80d/f7651d23a24974c2981b14219f77d2d1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N2I9RiDWb5zek312DtE0X5w9wzN~wRVdXkf9fA-feXKqbZdaN-ov39Sl2Gql1vG-0zhfYfF2qbj0J9DMPbGNQrCdJAsXorHYrl6eXRbF2eNOGmJ8RLuuEhClSfVS3cQzyzYuQjCoIg-PwfNexoBb91oUZXVYgq-bICqYFM7sp72Ev2waEIIFL660O1aEhYF1lByLQQ0Sa7SMEJPuKI3z~xKMDFEQr4ez2hRwLYuet31lcCXJFV7u7R5ZJYeLqvrLwTmUnUPk1hUAesUo9z4AXIfi-pgWkN-J~9MFurrhV9EckZjgqoDXlSecKdrccxhLpp9IbAu-J5~ODEk3yxao2A__",
      ],
    }
  ];

  return (
    <div className="feeds-container">
      <header className="header">
        <h2>Welcome Back, Sakshi Agarwal</h2>
      </header>

      <h3 className="feeds-title">Feeds</h3>

      {posts.map((post) => (
        <div key={post.id} className="feed-card">
          <div className="user-info">
            <img src={post.avatar} alt={post.user} className="user-avatar" />
            <h4>{post.user}</h4>
          </div>
          <p>{post.content}</p>
          <div className="feed-images">
            {post.images.map((img, index) => (
              <img key={index} src={img} alt={`Post ${index}`} className="feed-image" />
            ))}
          </div>
          <div className="feed-actions">
            <div className="action-item">
              <FaHeart className="action-icon" />
              <span>Like</span>
            </div>
            <div className="action-item" onClick={() => handleOpenModal(post)}>
              <BiSolidNavigation className="action-icon" />
              <span>Share</span>
            </div>
          </div>
        </div>
      ))}

      {isModalOpen && <Share post={currentPost} onClose={handleCloseModal} />}
    </div>
  );
};

export default Feeds;
