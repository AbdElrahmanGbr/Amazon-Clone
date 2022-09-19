import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
    return (<div className={"relative"}>
            <div className={"absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"}/>
            <Head>
                <title>Amazon 2.0</title>
            </Head>
            {/*Header*/}
            <Header/>

            <main className={"max-w-screen-2xl mx-auto"}>
                {/*Banner*/}
                <Banner/>
                {/*ProductFeed*/}
                <ProductFeed products={products}/>
            </main>

        </div>);
}

export async function getServerSideProps(context) {
    const products = await fetch("https://fakestoreapi.com/products").then((res) => res.json());
    return {
        props: {
            products,
        }
    }
}