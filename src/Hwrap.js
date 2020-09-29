import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
// import {useWindowSize, useScroll, useScrolling} from 'react-use';
// import { scrollAnimation } from "./utils/scroll";


function Hwrap(props) {
    const [_y, setY] = useState(0);
    const scrollRef = React.useRef(null);
    // const scrolling = useScrolling(scrollRef);
    // const {y} = useScroll(scrollRef);
    // const {height} = useWindowSize();
    // if(y > _y + 100 && y < height && !scrolling){
    //   scrollAnimation("App-header", y, height - 90);
    //   setY(height);
    // } else if(y < _y && !scrolling){
    //     setY(y);
    // }
    useEffect(() => {
        // window.onscroll = function(e){e.stopPropagation();e.preventDefault();}
        // window.addEventListener('scroll', handleScroll)
        // window.removeEventListener('mousewheel', handleScroll);
        // window.addEventListener('touchmove', function(event){
        //     var e = event || window.event;
        // });
        // window.addEventListener('mousewheel', handleScroll);

    });


    // let handleScroll = e => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     var isFirefox = navigator.userAgent.indexOf('Firefox') !== -1
    //     if (isFirefox) {
    //         if (e.detail > 0) {
    //             console.log('mouseDown: true');
    //         } else {
    //             console.log('mouseDown: false');
    //         }
    //         } else {
    //         if (e.wheelDelta > 0) {
    //             console.log('mouseDown1: true');
    //         } else {
    //             console.log('mouseDown1: false');
    //             scrollAnimation("App-header", y, height);
    //         }
    //     }
    // }

    return <div className="App-header" ref={scrollRef}>
        {props.children}
    </div>;
}

export default withRouter(Hwrap);
