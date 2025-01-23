// "use client";

import { BASE_URL } from "@/constants/enviroments";

type Props = {};

const page = async (props: Props) => {
  // const getProducts = async () => {
  //   try {
  //     const res = await fetch("/api", {
  //       method: "GET",
  //     });

  //     console.log("res", res);
  //     const data = await res.json();

  //     console.log("data", data);
  //   } catch (err) {
  //     console.log("[products_GET]", err);
  //   }
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  const res = await fetch(`${BASE_URL}/api`);
  const data = await res.json();

  console.log("data", data);

  return <div>{data.success ? "true" : "false"}</div>;
};

export default page;
