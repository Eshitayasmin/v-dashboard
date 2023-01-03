import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faTrowelBricks, faArrowRight, faMagnifyingGlass, faArrowRightArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBag, BsArrowRight } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { IoIosQrScanner, IoMdNotificationsOutline } from "react-icons/io";
import { FiMoon } from "react-icons/fi";


const Navbar = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const check = () => {
        let sidebar = document.getElementById("sidebar");
        if (sidebar.style.display === "block") {
            sidebar.style.display = "none"
            setToggleSidebar(true)
        }
        else {
            sidebar.style.display = "block"
            setToggleSidebar(false)
        }
    }
    // var elem = document.documentElement;
    // function openFullscreen() {
    //     if (elem.requestFullscreen) {
    //       elem.requestFullscreen();
    //     } 
    //     // else if (elem.webkitRequestFullscreen) { /* Safari */
    //     //   elem.webkitRequestFullscreen();
    //     // } else if (elem.msRequestFullscreen) { /* IE11 */
    //     //   elem.msRequestFullscreen();
    //     // }
    //     else{
    //         document.exitFullscreen();
    //       }
    //     //    else if (document.webkitExitFullscreen) { /* Safari */
    //     //     document.webkitExitFullscreen();
    //     //   } else if (document.msExitFullscreen) { /* IE11 */
    //     //     document.msExitFullscreen();
    //     //   }
    //   }
    function toggleFullScreen() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
         (!document.mozFullScreen && !document.webkitIsFullScreen)) {
          if (document.documentElement.requestFullScreen) {  
            document.documentElement.requestFullScreen();  
          } else if (document.documentElement.mozRequestFullScreen) {  
            document.documentElement.mozRequestFullScreen();  
          } else if (document.documentElement.webkitRequestFullScreen) {  
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
          }  
        } else {  
          if (document.cancelFullScreen) {  
            document.cancelFullScreen();  
          } else if (document.mozCancelFullScreen) {  
            document.mozCancelFullScreen();  
          } else if (document.webkitCancelFullScreen) {  
            document.webkitCancelFullScreen();  
          }  
        }  
      }
    return (
        <nav className="flex justify-between mx-4">
            <div className="flex items-center">
                <button onClick={check}>
                    {
                        toggleSidebar ? <BsArrowRight size="2rem"></BsArrowRight>

                            :
                            <CgMenuLeft size="2rem"></CgMenuLeft>


                    }
                </button>
                <div className="flex items-center px-0 py-2 bg-gray-100 w-80 ml-4 rounded-sm">
                    <span className="px-2"><AiOutlineSearch size="1.25rem"></AiOutlineSearch></span>
                    <input className="bg-gray-100 text-sm focus:outline-0" type="text" placeholder="search..." />
                </div>
                {/*<div>*/}
                {/*    {*/}
                {/*        toggleIcon ? <FontAwesomeIcon class="h-4 w-4 " size="2x" icon={faArrowRightArrowLeft}></FontAwesomeIcon> : <FontAwesomeIcon class="h-4 w-4 " size="2x" icon={faArrowRight}></FontAwesomeIcon>*/}
                {/*    }*/}
                {/*    <button onClick={()=>setToggleIcon(!toggleIcon)}>toggle</button>*/}
                {/*</div>*/}

            </div>
            <div className="flex items-center">
                <div class="dropdown dropdown-end ">
                    <div className='px-3 py-3 rounded-full hover:bg-gray-200'>
                        <label tabindex="0" className=''><img className="w-5 h-5 rounded-sm " src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" />
                        </label>
                    </div>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 leading-4">
                        <li><a><img className="w-4 h-4 rounded-sm " src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" /> <span>English</span></a></li>
                        <li><a><img className="w-4 h-4 rounded-sm " src="https://wallpaperaccess.com/full/1099379.jpg" /> <span>Espanola</span></a></li>

                        <li><a><img className="w-4 h-4 rounded-sm " src="https://media.istockphoto.com/id/994137398/photo/german-flag-symbol-of-germany.jpg?s=612x612&w=0&k=20&c=zAwv2yGM6xcAW2FkT04dyOFWlglvGUKk7VSCURm27NA=" /> <span>Deutsche</span></a></li>

                        <li><a><img className="w-4 h-4 rounded-sm " src="https://cdn.pixabay.com/photo/2012/04/11/15/35/flag-28543__480.png" /> <span>Italiana</span></a></li>

                        <li><a><img className="w-4 h-4 rounded-sm " src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png" /> <span>Francais</span></a></li>
                        <li><a><img className="w-4 h-4 rounded-sm " src="https://cdn.britannica.com/82/5782-004-BD7056FF/Flag-United-Arab-Emirates.jpg" /> <span>Arabic</span></a></li>
                    </ul>
                </div>

             

                <div class="dropdown dropdown-bottom dropdown-end">
                <div className="px-3 py-3 rounded-full hover:bg-gray-200 hover:text-blue-400">
                    <label tabindex="0"><BiCategoryAlt size="1.5rem"></BiCategoryAlt></label>
                 </div>
                    <div tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-80">
                      <div className='p-2 flex justify-between'>
                        <p className='font-bold text-gray-600'>Web Apps</p>
                        <button className='bg-blue-100 text-green-500 flex items-center px-4 py-1 rounded-md text-sm hover:bg-blue-500 hover:text-white'>View All Apps</button>
                      </div>
                      <div className="border-dotted border border-slate-200 my-2"></div>
                      <div className='grid grid-cols-3'>
                        <div className=' text-sm p-3'>
                            <img className='w-12 h-8 flex justify-center' src="https://github.githubassets.com/images/modules/open_graph/github-octocat.png" alt="" />
                            <p className='ml-2 font-semibold text-gray-500'>GitHub</p>
                        </div>
                       
                        <div className=' text-sm p-3'>
                            <img className='w-10 h-7 ml-3' src="https://cdn.worldvectorlogo.com/logos/bitbucket.svg" alt="" />
                            <p className='pt-1 font-semibold text-gray-500'>Bitbucket</p>
                        </div>
                        <div className=' text-sm p-3'>
                            <img className='w-8 h-8 ml-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrUEXvI8aHQ34_mnyrdUJJ1_2jfFUhf8Iemg&usqp=CAU" alt="" />
                            <p className='ml-2 font-semibold text-gray-500'>Dribble</p>
                        </div>

                        <div className=' text-sm p-3'>
                            <img className='w-6 h-7 ml-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEMDJwLRcTbIhpD8LqF69cR_BhrUTqmcgOQ&usqp=CAU" alt="" />
                            <p className='pt-1 font-semibold text-gray-500'>Dropbox</p>
                        </div>
                       
                        <div className=' text-sm p-3'>
                            <img className='w-14 h-7 ml-3' src="https://colorlib.com/wp/wp-content/uploads/sites/2/freemialchimp-wordpress-plugins.png" alt="" />
                            <p className='pt-1 ml-1 font-semibold text-gray-500'>Mail Chimp</p>
                        </div>
                        <div className='text-sm p-3'>
                            <img className='w-5 h-6 ml-3' src="https://luna1.co/dc739c.png" alt="" />
                            <p className='ml-2 mt-2 font-semibold text-gray-500'>Slack</p>
                        </div>
                      </div>
                    </div>
                 
                </div>
                <div className="px-3 py-3 rounded-full hover:bg-gray-200"><BsBag size="1.5rem"></BsBag> </div>
                <div onClick={toggleFullScreen} className="px-3 py-3 rounded-full hover:bg-gray-200"><IoIosQrScanner size="1.5rem"></IoIosQrScanner> </div>
                <div className="px-3 py-3 rounded-full hover:bg-gray-200"><FiMoon size="1.5rem"></FiMoon> </div>
                <div className="px-3 py-3 rounded-full hover:bg-gray-200"><IoMdNotificationsOutline size="1.5rem"></IoMdNotificationsOutline> </div>
                <div className="flex items-center bg-gray-100 p-4">
                    <img className="w-8 h-8 rounded-full" src="https://cdn.lifehack.org/wp-content/uploads/2015/01/alpha-woman-1024x768.jpeg" />
                    <div className="ml-4">
                        <p className="text-sm">Eshita Yasmin</p>
                        <p className="text-sm">Founder</p>
                    </div>
                </div>



            </div>
        </nav>
    );
};

export default Navbar;
