import "../styles/globals.scss"
import "nprogress/nprogress.scss";
import React from "react"
import dynamic from 'next/dynamic'
import Router from "next/router"
const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false },
);
function MyApp({ Component, pageProps }) {
  return <>
    <TopProgressBar />
    <Component {...pageProps} />
  </>
}
// вариант своего лоадера (чтобы было!!! , тогда другое не надо импортировать)
// function MyApp({ Component, pageProps }) {
//   const [loading, setLoading] = React.useState(false);
//   React.useEffect(() => {
//     const start = () => {
//       console.log("start");
//       setLoading(true);
//     };
//     const end = () => {
//       console.log("findished");
//       setLoading(false);
//     };
//     Router.events.on("routeChangeStart", start);
//     Router.events.on("routeChangeComplete", end);
//     Router.events.on("routeChangeError", end);
//     return () => {
//       Router.events.off("routeChangeStart", start);
//       Router.events.off("routeChangeComplete", end);
//       Router.events.off("routeChangeError", end);
//     };
//   }, []);
//   return (
//     <>
//       {loading ? (
//         <h1>Loading...</h1> // типа лоадер
//       ) : (
//         <Component {...pageProps} />
//       )}
//     </>
//   );
// }

export default MyApp
