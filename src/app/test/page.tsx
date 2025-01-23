// "use client";

type Props = {};

const page = async (props: Props) => {
  //   const getProducts = async () => {
  //     try {
  //       const res = await fetch("/api", {
  //         method: "GET",
  //       });

  //       console.log("res", res);
  //       const data = await res.json();

  //       console.log("data", data);
  //     } catch (err) {
  //       console.log("[products_GET]", err);
  //     }
  //   };

  //   useEffect(() => {
  //     getProducts();
  //   }, []);

  const data = await fetch("http://localhost:3000/api");

  console.log("data", data);

  return <div>page</div>;
};

export default page;
