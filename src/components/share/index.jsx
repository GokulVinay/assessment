import React from "react";
import "./index.css";

const Share= ({ post, onClose }) => {
  return (
    <div className="share-modal">
      <div className="modal-content">
        <h3>Share Post</h3>
        <p>{post.content}</p>
        <div className="share-options">
          <button className="share-option">Twitter</button>
          <button className="share-option">Facebook</button>
          <button className="share-option">WhatsApp</button>
          <button className="share-option">Copy Link</button>
        </div>
        <button className="close-modal" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Share;
