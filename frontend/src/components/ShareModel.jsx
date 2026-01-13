// import Modal from "react-modal";
// import {
//   FaTimes,
//   FaCopy,
//   FaTwitter,
//   FaLinkedin,
//   FaWhatsapp,
//   FaFacebook
// } from "react-icons/fa";
// import "./shareModal.css";

// const ShareModal = ({ isOpen, url, onClose }) => {
//   const copyLink = async () => {
//     await navigator.clipboard.writeText(url);
//     alert("Link copied!");
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       className="share-modal"
//       overlayClassName="share-overlay"
//       shouldCloseOnOverlayClick
//     >
//       <div className="share-header">
//         <h2>Share your code</h2>
//         <FaTimes className="close-icon" onClick={onClose} />
//       </div>

//       <input className="share-input" value={url} readOnly />

//       <button className="copy-btn" onClick={copyLink}>
//         <FaCopy /> Copy Link
//       </button>

//       <p className="share-text">or share using</p>

//       <div className="social-icons">
//         <FaTwitter />
//         <FaLinkedin />
//         <FaWhatsapp />
//         <FaFacebook />
//       </div>
//     </Modal>
//   );
// };

// export default ShareModal;


import Modal from "react-modal";
import {
  FaTimes,
  FaCopy,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook
} from "react-icons/fa";
import "./shareModal.css";

const ShareModal = ({ isOpen, url, onClose }) => {
  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    alert("Link copied!");
  };

  const openShare = (platform) => {
    let shareUrl = "";

    const encodedUrl = encodeURIComponent(url);
    const text = encodeURIComponent("Check out this JavaScript code:");

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`;
        break;

      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;

      case "whatsapp":
        shareUrl = `https://wa.me/?text=${text}%20${encodedUrl}`;
        break;

      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;

      default:
        return;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="share-modal"
      overlayClassName="share-overlay"
      shouldCloseOnOverlayClick
    >
      <div className="share-header">
        <h2>Share your code</h2>
        <FaTimes className="close-icon" onClick={onClose} />
      </div>

      <input className="share-input" value={url} readOnly />

      <button className="copy-btn" onClick={copyLink}>
        <FaCopy /> Copy Link
      </button>

      <p className="share-text">or share using</p>

      <div className="social-icons">
        <FaTwitter onClick={() => openShare("twitter")} />
        <FaLinkedin onClick={() => openShare("linkedin")} />
        <FaWhatsapp onClick={() => openShare("whatsapp")} />
        <FaFacebook onClick={() => openShare("facebook")} />
      </div>
    </Modal>
  );
};

export default ShareModal;
