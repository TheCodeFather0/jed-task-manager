import SiteNavbar from '@/Components/Site/Navbar';
import React from 'react'

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
        <header>
            <SiteNavbar />
        </header>
        <main>{children}</main>
        </>
    )
}

export default layout