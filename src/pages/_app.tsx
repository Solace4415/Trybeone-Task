import { type AppType } from "next/app";

import "~/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
