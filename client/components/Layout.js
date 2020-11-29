import Head from 'next/head';

import Navbar from '../components/Navbar'

const Layout = ({children}) =>(
    <>
    <Head>
        <title>Address Book App</title>
        <link
            async
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.css"
        />
        <script
            async
            src="//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.js"
        ></script>
    </Head>
    <Navbar />
    {children}
    </>
);

export default Layout;