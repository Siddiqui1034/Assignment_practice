import Image from "next/image";
import styles from "./page.module.css";

import List from "@/React/List";
import A from "@/A/A";
import B from "@/B/B";
import C from "@/C/C";
import D from "@/D/D";
import ContextAPI from "./contextapi/page";
import Center from "@/DesignPractice/Center";

export default function App() {
  return (
   <>  
      <A />
      <B />
      <C />
      <D />
      {/* <List /> */}
      {/* <ContextAPI /> */}
     {/* <Center />  */}
     </>
  );
}
