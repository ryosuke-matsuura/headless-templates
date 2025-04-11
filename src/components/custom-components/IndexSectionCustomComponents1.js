import React from 'react';

export default function IndexSectionCustomComponents1() {
    return (
        <React.Fragment>
            <>
                <div className="hidden md:block ">  
                <div className="flex items-center justify-between px-4 py-1">      
                <h1 className="mt-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter items-center mx-auto">     
                 <img className="navpic items-center mx-auto" src="https://static.shuffle.dev/uploads/files/f6/f67a2b31ac340f54e93a30224387548a6c5f5f4e/dotpb-logo2.avif" alt="Placeholder Image" />  </h1>    
                </div>  
                <nav className="bg-darkCoolGray-900 text-black">    
                <ul className="flex justify-center space-x-6 py-3" style={{fontFamily: '"Noto Serif JP", serif'}}>        
                 <li className="text-lg md:text-xl font-medium px-3"><a href="#">Features</a></li>      
                 <li className="text-lg md:text-xl font-medium"><a href="#">Line up</a></li>   
                 <li className="text-lg md:text-xl font-medium"></li>     
                 <li className="text-lg md:text-xl font-medium">  
                 </li>
                 </ul>
                 </nav>
                 </div>


            </>
        </React.Fragment>
    );
}

