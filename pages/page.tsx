import { useRouter } from "next/router";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/userouter");
  });

  return <div>{router.pathname}</div>;
};

export default Page;
