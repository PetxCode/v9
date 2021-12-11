import React, { useState } from "react";
import pix from "./pix.png";
import styled from "styled-components";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../base";
const HomeScreen = () => {
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    const user = collection(db, "allUser");
    onSnapshot(user, (snapshot) => {
      const r = [];
      snapshot.forEach((doc) => {
        r.push({ ...doc.data(), id: doc.id });
      });
      setUser(r);
    });
  };

  React.useEffect(() => {
    getUsers();
  }, []);
  return (
    <Container>
      <Wrapper>
        <Text>This is Home Screen</Text>
        <Holder>
          {user?.map((props) => (
            <Card>
              <Image src={props.avatar} />
              <Title>{props.userName}</Title>

              <Button>View</Button>
            </Card>
          ))}
        </Holder>
      </Wrapper>
    </Container>
  );
};

export default HomeScreen;

const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Title = styled.div`
  flex: 1;
  font-weight: bold;
  margin-top: 7px;
`;

const Button = styled.div`
  color: white;
  text-decoration: none;
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
  width: 100%;
  height: 100px;
  /* border-radius: 50%; */
  border: 1px solid gray;
  object-fit: cover;
`;

const Text = styled.div`
  margin-bottom: 50px;
`;

const Card = styled.div`
  margin: 10px;
  overflow: hidden;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  min-height: 250px;
  padding: 20px 0;
  padding-top: 0;
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
  height: calc(100vh - 80px);
  background-color: lightgray;
`;
