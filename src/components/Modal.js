import styled from "styled-components";
import { RiCloseCircleFill } from "react-icons/ri";

export const Modal = ({ pokemon, showModal, setShowModal }) => {
  console.log(pokemon);
  console.log(pokemon.name.japanese);

  const picnumber = ("000" + pokemon.id).slice(-3);
  const img = `../pic/images/${picnumber}.png`;

  const closeModal = () => setShowModal(!showModal);

  return (
    <div>
      <Background onClick={closeModal} />
      <ModalDiv>
        <Icon>
          <RiCloseCircleFill onClick={closeModal} />
        </Icon>
        <ImgDiv>
          <Img alt="" src={img} />
        </ImgDiv>
        <label>{pokemon.name.japanese} </label>
        <Detail>
          <label>HP</label>
          <label>{pokemon.base.HP}</label>
          <label>Attack</label>
          <label>{pokemon.base.Attack}</label>
          <label>Defense</label>
          <label>{pokemon.base.Defense}</label>
          <label>Speed</label>
          <label>{pokemon.base.Speed}</label>
        </Detail>

        <div>
          <Button onClick={closeModal}>CLOSE</Button>
        </div>
      </ModalDiv>
    </div>
  );
};

const Icon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  &:hover {
    color: #e53e3e;
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalDiv = styled.div`
  position: fixed;
  display: grid;
  grid-gap: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 350px;
  background-color: #81e6d9;
  border-radius: 15px;
  z-index: 100;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 15px 15px;
`;

const ImgDiv = styled.div`
  position: relative;
  width: 190px;
  height: 190px;
  margin: 0 auto;
  background-color: #edf2f7;
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

const Detail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 0.5rem 2rem;
  border-radius: 8px;
  border: none; /* 枠線を消す */
  outline: none; /* クリックしたときに表示される枠線を消す */
  &:hover {
    background-color: #e53e3e;
  }
`;
