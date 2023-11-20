import { NextPage } from "next";
import styled from "styled-components";

type ButtonProps = {
  color: string;
  backgroundcolor: string;
};

const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  background: ${(props) => props.backgroundcolor};
  border: 2px solid ${(props) => props.color};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 8px;
  cursor: pointer;
`;

const Page: NextPage = () => {
  return (
    <div>
      <Button backgroundcolor="transparent" color="#FF0000">
        Hello
      </Button>

      <Button backgroundcolor="#1e90ff" color="white">
        World
      </Button>
    </div>
  );
};

export default Page;
