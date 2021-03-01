import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR("/api/hello", fetcher);

  console.log(data);
  return (
    <div>
      <h1>Data {id} </h1>
      <div>
        <ul>
          {data && data.map((person) => <li key={person.id}>{person.name}</li>)}
        </ul>
      </div>
    </div>
  );
}
