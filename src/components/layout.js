import React, { useState } from 'react'
import News from './news';
import NavBar from './navbar';
import LoadingBar from 'react-top-loading-bar';

const Layout = (props)=> {
        const [progress,setProgress]=useState(0);
        return (
            <>
                <NavBar />
                <LoadingBar
                color='#f11946'
                height={3}
                progress={progress}
                />
                <News key={props.category} setProgress={setProgress} apiKey={process.env.REACT_APP_NEWS_API} pageSize={props.pageSize} country={props.country} category={props.category} />
            </>
        )
    }
export default Layout;
