import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Produtos from "../components/Products/Products";

const Home: NextPage = () => {
  return (
    <div>
      <Produtos />
    </div>
  );
};

export default Home;
