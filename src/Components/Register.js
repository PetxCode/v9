import React, { useState } from "react";
import styled from "styled-components";
import pix from "./pix.png";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import {
  ref,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { auth, db, storage } from "../base";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [image, setImage] = useState(pix);
  const [avatar, setAvatar] = useState("");
  const [percent, setPercent] = useState(0);

  const schema = yup.object().shape({
    userName: yup.string().required("This field ust be fill"),
    email: yup.string().email().required("This field ust be fill"),
    password: yup.string().required("This field ust be fill"),
    confirm: yup.string().oneOf([yup.ref("password"), null]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);

    const fileRef = ref(storage, "userAvatar/" + file.name);
    const storageRef = uploadBytesResumable(fileRef, file);

    storageRef.on(
      "state_changed",
      (snapshot) => {
        const counter = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercent(counter);
        console.log(counter);
      },
      (err) => console.log(err.message),
      () => {
        getDownloadURL(storageRef.snapshot.ref).then((url) => {
          setAvatar(url);
          console.log(avatar);
        });
      }
    );
  };

  const registerUser = handleSubmit(async (val) => {
    console.log(val);
    const { email, password, userName } = val;

    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    if (newUser) {
      const user = collection(db, "allUser");
      const userDoc = doc(user, newUser.user.uid);
      setDoc(userDoc, {
        email,
        password,
        userName,
        avatar,
        createdBy: newUser.user.uid,
      });
    }
  });

  return (
    <Container>
      <Wrapper>
        <Text>This is Registeration Screen</Text>

        <Card onSubmit={registerUser}>
          <Image src={image} />
          <LabelImage htmlFor="pic">Upload Image</LabelImage>

          <InputImage id="pic" type="file" onChange={uploadImage} />

          <Holder>
            <Label>{errors.userName?.message}</Label>
          </Holder>
          <Input placeholder="Enter UserName" {...register("userName")} />
          <Holder>
            <Label>{errors.email?.message}</Label>
          </Holder>
          <Input placeholder="Enter User Email" {...register("email")} />
          <Holder>
            <Label>{errors.password?.message}</Label>
          </Holder>
          <Input placeholder="Enter User Password" {...register("password")} />
          <Holder>
            <Label>{errors.confirm?.message}</Label>
          </Holder>
          <Input placeholder="Confirm Password" {...register("confirm")} />

          <Button type="submit">Register</Button>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Register;

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

const Button = styled.button`
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
  height: 40px;
  outline: none;
  border-radius: 3px;
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

const Card = styled.form`
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
