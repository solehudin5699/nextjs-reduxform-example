import React from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Heloo World {id} </h1>
    </div>
  );
}
