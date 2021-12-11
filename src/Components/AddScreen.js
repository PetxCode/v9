import React, { useState } from "react";
import styled from "styled-components";
import pix from "./pix.png";

const AddScreen = () => {
  const [image, setImage] = useState(pix);
  const [avatar, setAvatar] = useState("");
  const [percent, setPercent] = useState(0);

  return (
    <Container>
      <Wrapper>
        <Text>This is Registeration Screen</Text>

        <Card>
          <Image src={image} />
          <LabelImage htmlFor="pic">Upload Image</LabelImage>

          <InputImage id="pic" type="file" />

          <Holder>
            <Label>error</Label>
          </Holder>
          <Input placeholder="Enter Course" />

          <Button>Register</Button>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default AddScreen;

const Holder = styled.div`
  width: 300px;
  display: flex;
  flex-direction: flex-start;
`;

const Label = styled.label`
  font-size: 10px;
  font-weight: bold;
  color: red;
`;

const Button = styled.div`
  outline: none;
  border: 0;
  padding: 15px 30px;
  border-radius: 3px;
  background-color: #004080;
  color: white;
  margin: 10px 0;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
`;
const Input = styled.input`
  margin: 5px 0;
  border: 1px solid gray;
  width: 300px;
  height: 30px;
  outline: none;
  border-radius: 5px;
  padding-left: 10px;
`;

const InputImage = styled.input`
  display: none;
`;

const LabelImage = styled.label`
  padding: 6px 20px;
  background-color: #004080;
  color: white;
  border-radius: 30px;
  margin: 10px 0;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid gray;
  object-fit: cover;
`;

const Text = styled.div`
  margin-bottom: 50px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  min-height: 300px;
  padding: 20px 0;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  background-color: lightgray;
  height: 100%;
  padding-bottom: 30px;
`;
