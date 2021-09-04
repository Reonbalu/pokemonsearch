import styled from "styled-components";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";

import { useState } from "react";
import { Modal } from "./Modal";

export const Items = (item) => {
  const [toggle, setToggle] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const data = item.item;
  const picnumber = ("000" + data.id).slice(-3);
  const img = `../pic/images/${picnumber}.png`;

  return (
    <li style={{ textAlign: "center", padding: "8px" }}>
      <ImgDiv>
        <Img alt={data.name.japanese} src={img} />
      </ImgDiv>

      <label>{data.name.japanese}</label>
      <div>
        {toggle ? (
          <BsToggleOff className="button" onClick={() => setToggle(!toggle)} />
        ) : (
          <BsToggleOn className="button" onClick={() => setToggle(!toggle)} />
        )}
      </div>
      <BiDetail className="button" onClick={() => setShowModal(!showModal)} />
      {showModal ? (
        <Modal
          pokemon={data}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : null}
    </li>
  );
};

const ImgDiv = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background-color: #171923;
  border-radius: 50%;
  text-align: center;
`;

const Img = styled.img`
  object-fit: contain;
  position: absolute;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
