import React, { useRef, useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {


    const [btn, setBtn] = useState(false)


    const refLuffy = useRef(null);

    useEffect(() => {
        refLuffy.current.classList.add("startingImg");
        setTimeout(() => {
            refLuffy.current.classList.remove("startingImg");
            setBtn(true);
        }, 1000);

    }, [])


   

    const displaybtn = btn  && (
        <Fragment>
                <div  className="leftbox">
                    <Link className="btn-welcome-signup" to="/signup">Inscription</Link>
                </div>
                <div className="rightbox">
                    <Link className="btn-welcome-login" to="/login">Connexion</Link>
                </div>
        </Fragment>
    )

    return (
            <main ref={refLuffy} className="welcomePage">
                { displaybtn }
            </main>
    )
}

export default Landing;