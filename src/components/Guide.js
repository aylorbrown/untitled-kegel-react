import React from 'react'; 
import SplashCircle from './SplashCircle';

import {
    Link
  } from "react-router-dom";

export default function Guide() {
    return(
        <div className='app'>

        <nav className='guide'>
        <Link to="/progress">HOME</Link>
        <Link to="#">GUIDE</Link>
        </nav>

    
<p>
First, slightly squeeze your pelvic floor 
and take a few steps. Notice how this 
locks up your jaws and hips?
</p>

<p>
The, pull up, and hold (a Kegel!) you should
feel a tightening around your vagina, 
though try not to tighten your butt or 
upper belly muscles. Like you’re cutting 
off you pee midstream. 
</p>

<Link to="/fasttimer"><SplashCircle /></Link>

{/* <Link to='/fasttimer'><button class="circle">START</button></Link> */}
<p>
Then let go of the muscles. Stand down 
Though you feet and notice how much 
More relaxed you face, jaw, and pelvis are. 
If we learn to isolate these muscles
With a neuromuscular or brain-body 
Connection, we have more power to 
Control how me experience stress
(Mental and physical)
</p>

<p>
- via loroxburgh
</p>
        </div>
    );
}