import { navList } from "."
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({children}) => {
    
  const [isNavBarOpen, setIsNavBarOpen] = useState(false)
  
    return (
        <div>
            <div className="p-4 border border-green-600">

                <button className="-m-2.5 p-2.5 text-white md:hidden"
                    onClick={() => setIsNavBarOpen(prev => !prev)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        className="h-5 w-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>

                <div className="relative">
                    <div className={`${isNavBarOpen ?
                        'left-0' : '-left-[100%]'}  md:static fixed ease-in duration-300 w-full h-full top-0`}>
                        <div className="flex md:items-center items-start md:justify-between justify-start md:flex-row flex-col w-[80%] md:w-auto bg-gray-900 h-[100vh] md:h-auto border-e-gray-700 relative border-e md:border-none md:ps-0 ps-10">

                            <img src="/public/1_-Ijet6kVJqGgul6adezDLQ.png" alt="" className="max-w-40 md:mt-0 mt-5" />


                            <div className="h-full md:h-auto w-[80%] md:w-auto
md:pt-0 pt-5 bg-gray-900  flex-1
">

                                <div className="cursor-pointer  absolute right-4 top-4 md:hidden flex items-center justify-around"
                                    onClick={() => setIsNavBarOpen(prev => !prev)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12">
                                        </path>
                                    </svg>
                                </div>


                                <ul className="list-none md:flex items-center justify-evenly">
                                    {
                                        navList.map((nav,index)=>(
                                            <li key={index}>
                                                <Link to={nav.to}>{nav.name}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Nav
