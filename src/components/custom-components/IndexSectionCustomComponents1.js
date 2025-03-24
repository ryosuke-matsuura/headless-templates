import React from 'react';

export default function IndexSectionCustomComponents1() {
    return (
        <React.Fragment>
            <>
                <div className="hidden md:block ">  <div className="flex items-center justify-between px-4 py-3">    <div className="flex items-center">      <button className="text-gray-700 focus:outline-none" aria-label="menu">        <svg id="svg_a32e66a11dc198d8803dcc50e255f3aa" className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" />    </button>  </div>    <h1 className="mt-4 mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">      <img className="navpic" src="https://static.shuffle.dev/uploads/files/f6/f67a2b31ac340f54e93a30224387548a6c5f5f4e/dotpb-logo2.avif" alt="Placeholder Image" />  </h1>    <div className="flex items-center space-x-4">      <button className="text-gray-700 focus:outline-none" aria-label="user">        <svg id="svg_b62546bf7f2162cf0cadb27b8e823f13" className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" />    </button>      <button className="text-gray-700 focus:outline-none" aria-label="wishlist">        <svg id="svg_87f15d8ec8ce3c864d0c3d7964d0c855" className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" />    </button>  </div></div>  <nav className="bg-darkCoolGray-900 text-white">    <ul className="flex justify-center space-x-6 py-3" style={{fontFamily: '"Noto Serif JP", serif'}}>      <li className="text-lg md:text-xl font-medium"><a href="#">Line up</a></li>      <li className="text-lg md:text-xl font-medium"><a href="#">Features</a></li>      <li className="text-lg md:text-xl font-medium">    </li><li className="text-lg md:text-xl font-medium"><a href="#">Topics</a></li>      <li className="text-lg md:text-xl font-medium">  </li></ul></nav>
</div>


            </>
        </React.Fragment>
    );
}

