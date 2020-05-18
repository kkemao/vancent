import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {useWindowSize, useScroll, useScrolling} from 'react-use';
import { scrollAnimation } from "./utils/scroll";

function Hwrap(props) {
    const [_y, setY] = useState(0);
    const scrollRef = React.useRef(null);
    const scrolling = useScrolling(scrollRef);
    const {y} = useScroll(scrollRef);
    const {height} = useWindowSize();
    // console.log(y, _y, scrolling, height);
    // if(y > _y + 100 && y < height && !scrolling){
    //   scrollAnimation("App-header", y, height - 90);
    //   setY(height);
    // } else if(y < _y && !scrolling){
    //     setY(y);
    // }
    
    return <div className="App-header" ref={scrollRef}>
        {props.children}
    </div>;
}

export default withRouter(Hwrap);
