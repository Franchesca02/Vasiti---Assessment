import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

const Example = ({ setShowmodal }) => {
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="testimonymodal" onClick={handleShow}>
        Add your Testimony
      </button>

      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <form onSubmit={handleSubmit} className="col-12 m-auto px-4 my-4">
            <div className="row">
              <h2>Share your amazing story!</h2>
              <div className="col-12">
                <label htmlFor="imageUpload" className="form-label story-label">
                  Upload your Picture
                </label>
                <input
                  id="imageUpload"
                  type="file"
                  name="image-upload"
                  accept="image/*"
                  className="form-control"
                  onChange={(event) => {
                    const file = event.target.files[0];
                    if (file) {
                      setImage(file);
                    } else {
                      setImage(null);
                    }
                  }}
                  // ref={fileInputRef}
                />
              </div>
              <div className="row my-3 mx-0 p-0">
                <div className="col-6">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label story-label"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                  />
                </div>
                <div className="col-6">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label story-label"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastname(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="" className="form-label story-label">
                  Share your story
                </label>
                <textarea
                  className="form-control"
                  rows="5"
                  type="text"
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="row pt-3">
                <div className="col-7 story-question">
                  <p>What did you interact with Vasiti as?</p>
                </div>
                <div className="col-5">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="form-check story-checkbox">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="customer"
                        name="user"
                        onChange={(e) => setUser(e.target.value)}
                        id="flexRadioDefault1"
                        required
                      />
                      <label
                        className="form-check-label story-question"
                        htmlFor="flexRadioDefault1"
                      >
                        Customer
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="vendor"
                        name="user"
                        onChange={(e) => setUser(e.target.value)}
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label story-question"
                        htmlFor="flexRadioDefault2"
                        required
                      >
                        Vendor
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="story-btn mt-3">
              <button>Share your story!</button>
            </div>
          </form>
        </Modal.Body>
        {/* <Modal.Footer> */}
        {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        {/* </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default Example;
