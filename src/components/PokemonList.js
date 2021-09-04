import styled from "styled-components";
import { Items } from "./Items";
import { pokedex } from "../json/pokedex.json";

export const PokemonList = () => {
  const items = pokedex;
  console.log(pokedex);

  return (
    <Wrap>
      <UlList>
        {items.map((item) => (
          <Items key={item.id} item={item} />
        ))}
      </UlList>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: #9ae6b4;
  border-radius: 8px;
  padding: 1.5rem 2rem;
`;

const UlList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  height: 100%;
  grid-gap: 10px;
  list-style: none;
  border-radius: 8px;

  & li {
    display: block;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 1.5rem;

    background-color: #faf089;
    border-radius: 8px;
  }

  & .button {
    cursor: pointer;
  }
`;
