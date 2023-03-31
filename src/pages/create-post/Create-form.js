import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export const CreateForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("Judul harus di isi"),
    desc: yup.string().required("Desc harus di isi"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, "cobaPosts");

  const onCreatePost = async (data) => {
    // console.log(data);
    await addDoc(postsRef, {
      title: data.title,
      desc: data.desc,
      username: user?.displayName,
      id: user?.uid,
    });
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onCreatePost)}>
        <input type="text" placeholder="Title" {...register("title")} />
        <p>{errors.title?.message}</p>
        <textarea placeholder="Desc" {...register("desc")} />
        <p>{errors.desc?.message}</p>

        <input type="submit" placeholder="submit" />
      </form>
    </div>
  );
};
