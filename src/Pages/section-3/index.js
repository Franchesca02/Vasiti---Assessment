import React from "react";
import CustomerCard from "../../Components/customer-card";
import Customer from "../../assets/customer.png";
import Fayemi from "../../assets/fayemi.png";
import Adetola from "../../assets/adetola.png";
import Deyemi from "../../assets/deyemi.png";
import Chisom from "../../assets/chisom.png";
import Chidi from "../../assets/chidi.png";
import "./style.css";
// import CreateStory from "../create-testimony";

const SectionThree = () => {
  // const [showModal, setShowmodal] = useState(false);

  // const toggleModal = () => {
  //   console.log("no");
  //   setShowmodal(!showModal);
  // };

  return (
    <>
      <div className="section-three row">
        <CustomerCard
          image={Fayemi}
          customerName="Joseph Ike"
          location="In Ikeja"
          customerType="CUSTOMER"
          detail=" Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deser unt ut
          voluptate aute id <br />
          deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet."
        />
        <CustomerCard
          image={Adetola}
          customerName="Adetola Fashina"
          location="Ibadan"
          customerType="CUSTOMER"
          detail=" Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deser unt ut
          voluptate aute id <br />
          deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet."
        />
        <CustomerCard
          image={Customer}
          customerName="Emmanuel Fayemi"
          location="In Akoka"
          customerType="CUSTOMER"
          detail=" Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deser unt ut
          voluptate aute id <br />
          deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet."
        />
      </div>

      <div className="section-three row">
        <CustomerCard
          image={Chisom}
          customerName="Chisom Obilor"
          location="In Magodo"
          customerType="VENDOR"
          detail=" Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deser unt ut
          voluptate aute id <br />
          deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet."
        />
        <CustomerCard
          image={Deyemi}
          customerName="Adunoluwa Adeyemi"
          location="Iwo Road"
          customerType="VENDOR"
          detail=" Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deser unt ut
          voluptate aute id <br />
          deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet."
        />
        <CustomerCard
          image={Chidi}
          customerName="Chidi Okeke"
          location="In Shomolu"
          customerType="VENDOR"
          detail=" Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deser unt ut
          voluptate aute id <br />
          deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet."
        />
      </div>
      {/* <CreateStory setShowmodal={() => setShowmodal(!showModal)} /> */}
    </>
  );
};
export default SectionThree;
