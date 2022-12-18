
import './Header.css';
import Button from './SubComponent/button';
import ButtonRight from './SubComponent/buttonRight';
import { Link } from 'react-router-dom';
import FirstBottomImage from './svgComponents/FirstBottomImage';
import SecondPageImage1 from './svgComponents/SecondPageImage1';
import SecondPageImage3 from './svgComponents/SecondPageImage3';
import SecondPageImage4 from './svgComponents/SecondPageImage4';
import SecondPageImage5 from './svgComponents/SecondPageImage5';
import SecondPageImage6 from './svgComponents/SecondPageImage6';
import SecondPageImage7 from './svgComponents/SecondPageImage7';
import SecondPageImage8 from './svgComponents/SecondPageImage8';
import SecondPageImage9 from './svgComponents/SecondPageImage9';
import ThirdPageImage10 from './SubComponent/svgSubComponent/ThirdPageImage1';
import ThirdPageImage11 from './SubComponent/svgSubComponent/ThirdPageImage11'
import ThirdPageImage12 from './SubComponent/svgSubComponent/ThirdPageImage12';
import ThirdPageImage13 from './SubComponent/svgSubComponent/ThirdPageImage13';
import ThirdPageImage14 from './SubComponent/svgSubComponent/ThirdPageImage14';
import ThirdPageImage15 from './SubComponent/svgSubComponent/ThirdPageImage15';
import ThirdPageImage16 from './SubComponent/svgSubComponent/ThirdPageImage16';
import ThirdPageImage17 from './SubComponent/svgSubComponent/ThirdPageImage17';
import ThirdPageImage18 from './SubComponent/svgSubComponent/ThirdPageImage18';

const Header = ()=>{
       return (
                  <div >
                      <div >
                           <ul className='logo' >
                               <li className='uppar-logo'>
                               <a to="/Header">DESIGN</a>
                               </li>
                               <li className='lower-logo'>
                               <a to="/Header">AGENCY</a>
                               </li>
                           </ul>
                           <ul className='subHeader'>
                               <li>
                             <a to="/Header">specialize in</a>
                               </li>
                               <li>
                               <a to="/Header">case study</a>
                               </li>
                               <li>
                               <a to="/Header">process</a>
                               </li>
                               <li>
                               <a to="/Header">Industrias</a>
                               </li>
                           </ul>

                      </div>
                      <Button />
                      <ButtonRight />
                      <div className='mid-logo'>
                             INNOVATION DIGITAL TECHNOLOGY
                      </div>
                      <div className='mid-lower-logo'>
                             evarything we do is the consumer , imagination and you.
                      </div>
                      <FirstBottomImage />
                      <div className='second-page'>
                            <div className='second-page-heading'>
                                measurement to our success
                            </div>
                            <div className='second-page-heading2'>
                                our process-driven approach keeps us going
                            </div>
                            <SecondPageImage1 />
                            <SecondPageImage3 />
                            <SecondPageImage4 />
                            <SecondPageImage5 />
                            <SecondPageImage6 />
                            <SecondPageImage7 />
                            <SecondPageImage8 />
                            <SecondPageImage9 />
                      </div>
                      <div className='third-page'>
                            <div className='third-page-heading'>
                                 we are working with these Industrias
                            </div>
                            <ThirdPageImage10 />
                            <ThirdPageImage11 />
                            <ThirdPageImage12 />
                            <ThirdPageImage13 />
                            <ThirdPageImage14 />
                            <ThirdPageImage15 />
                            <ThirdPageImage16 />
                            <ThirdPageImage17 />
                            <ThirdPageImage18 />
                            </div>
                      
                  </div>
       );
}

export default Header;