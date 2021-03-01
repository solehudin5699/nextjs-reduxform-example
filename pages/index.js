import Head from "next/head";
import Forms from "../components/Forms";
import { useSelector } from "react-redux";

export default function Home() {
  const { formRegist } = useSelector((state) => state.form);
  console.log(formRegist);
  return (
    <>
      <Forms />
    </>
  );
}
