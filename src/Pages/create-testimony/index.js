import React, { useEffect, useState } from "react";
// import { useNavigate,Routes,Route } from "react-router-dom";
// import StoryNotification from "../StoryNotification/StoryNotification"
import "./styles.css";
import CustomerReview from "../../Components/reviews";
import ClickModal from "../create-testimony/ClickModal";
// import ClickModal from "./ClickModal";

const CreateStory = ({ setShowmodal }) => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [story, setStory] = useState("");
  const [image, setImage] = useState();
  const [user, setUser] = useState();
  const [preview, setPreview] = useState();
  const [storydetails, setStorydetails] = useState([]);
  const storyInformation = (firstName, lastName, story, user, preview) => {
    setStorydetails([
      ...storydetails,
      {
        firstName,
        lastName,
        story,
        user,
        preview,
        id: Math.floor(Math.random() * 100),
      },
    ]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    storyInformation(firstName, lastName, story, user, preview);
    setShowmodal();
  };
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);
  return (
    <>
      {/* <CustomerReview story={storydetails} /> */}
      <div className="d-flex justify-content-center align-items-center">
        {/* <ClickModal /> */}
      </div>
      <div className="col-md-5 col-12">
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          {/* <ClickModal /> */}
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateStory;
