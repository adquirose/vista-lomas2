import React, { useEffect } from 'react'
import NavbarApp from 'components/Navbars/NavbarApp';

function Masterplan360Page() {
    useEffect(() => {
        document.body.classList.add("landing-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("landing-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);
    return (
        <>
            <NavbarApp />
            <div className="wrapper">
                <div >
                    <iframe style={{width:'100%', height:'100vh'}} className="embed-responsive-item" title="masterplan360" src="https://lanube360.com/temporales/vistalomas1/"></iframe>
                </div>
            </div>
        </>
    )
}

export default Masterplan360Page