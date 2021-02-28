import Head from "next/head";
import styles from "../styles/Home.module.css";
import HomePage from "./Home/Home";
import Forms from "../components/Forms";
import { useSelector } from "react-redux";

export default function Home() {
  const { formRegist } = useSelector((state) => state.form);
  // console.log(formRegist);
  return (
    <>
      <Forms />
    </>
  );
}
