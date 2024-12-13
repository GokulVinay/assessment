import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { doSignInWithGoogle } from '../../../firebase/auth'
import { useAuth } from '../../../contexts/authContext'
//import icon from "../../../images/icon.jpg";
import "./index.css";
const Login = () => {
    const { userLoggedIn } = useAuth()

    const [isSigningIn, setIsSigningIn] = useState(false)
    const navigate = useNavigate();

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithGoogle();
                navigate("/feeds"); // Navigate to the feeds page after a successful login
            } catch (err) {
                console.error("Error signing in:", err);
                setIsSigningIn(false);
            }
        }
    };
    
    return (
        <div>
            {userLoggedIn && (<Navigate to={'/Home'} replace={true} />)}
            <div className="college-container">
            <div className="collage">
     <img src="https://s3-alpha-sig.figma.com/img/934c/8eaa/07a6b9eb2a8babdea056a3a7b1fc147f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gG1VNBA2dyrCdAAU8DjK1KO76BHrTDI4NZOSLYdfrVrSjSTXul5Wlvswt~WwrbQb7RaGfhopPbQFPjq6PkcNqEstca8W1qiNYTyNxr0S3wgb1WyHd2sPZy5-LZ1Nwg7dMGQq4Y5ALHIPBOr4uY0mRfHwYLM9fb6T4neAY8d7pbpZB6dKvdq9gafxOsBlE4Lygau11nhdwsQsOju4Qvdg7zkd7FwekwdY8~76IWwYHZ1JVY6trpBtjerrjjiCxWBewqgr4W0qpmeCkWZE5lIBenIq5bDKl1Q23T21FnrxlAkeXkirra6tnUvnVMs-0F10m191ceFy7UDx-xw7Ti0Pgw__"
       alt="woman"  className="img1"/>
      <img src="https://s3-alpha-sig.figma.com/img/8dab/37bf/4ad4fac55b77a66d226aa1156db5e423?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k5mvyZtzAC58tfDkrwaTTVOhY0zongn25A7fJb~DYoYssHXTe4EqNzOxervU0a1wE6~llbATZfq2rz1hlqmf-xDn2EdQxq3bxFEeaVf~vczEOCVWSija1l3zcknRIhb0H1haCRa4eKngybwFThELfVEzLfRLDs1EytBmLrllrU09ohJ9OHPhYrW7BNjU7q8zTT1PJuZR~sCOOF3BqXZGsLIfb2lQdkATTEUYI0aQeAQO18qdyx3MKsMsRh9Tc9T8A43T4EtUU3iyk2oX9Z37P6xMi5abDdxDMdRvTj60dtXD7Z3TnCW4BRgXMCx1t6jwgFKtHZcfSz9VVQIzvyho~Q__"
      alt="sunset" className="img2"/>
      <img src="https://s3-alpha-sig.figma.com/img/43a1/be88/fe922fec80f9bd747fbe931d0ac5bcdc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iM~QWiOMPspG9Rjfu5~ZU9YLfhaVLTnkPzXXegulRRvbl5fHoSxKh-P8GhKaZwX5d4FLxJi3PW9kg8gGgHvJjKKQosAkqexR7Apnupodt1VokiUwkFx3U14P7B2H3PVgz2vz6~pc74~EV9tlwGbE8PE2XBmTgJh422X2~UVtIzDyZpxiHLtkzWDV1IzLp~sdgogSs8prho42v3L-LWuxRREFcJF1An~BlrELghX60rrM95veT~QVJwl2uu8gcHolZx7OWlg~GfYRxnGglhK3YoKtCXUiTBRzUkqtIzHgs7B8PPaMnlX4O7VmqJosmIHwmOZxQ2lIC4F7TAx7JLuXLg__" alt="grass" className="img3"/>
      
      <img src="https://s3-alpha-sig.figma.com/img/d73e/2214/4044975f305ca70914a520476023fd6d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SEwhVjfBZ-1AvCgfbnjpA4FbwXwXOjk~0jPQp0Y0pH2~nAHGtDELzHYU3z1VZcf~O1~ePbgOWVVn1Z5uP~o3ueL7NGcF7EoFD3wHuN99iwdzYZ84KlGLNR3Ei8-1lxxua0b6Rv2L8xlhFxNdeP-8UKd~QfQioBzR3tLYJEQQ-hShvOfTG-u2LPXtb1zpLbPyfMEHGE9vZat2~CvSEo3MSeHJ-d2-XYJQL~5NK0U~bj6SnAcesqz9r7ro~zmfbEU85BjcFD-2-rCy8ab5w3Jps0Vz~tJRG1Dq3gTm~wLlSWJZbfSLSlMaecuyct863x8gca2APVLuVanZy2xXNC1rSQ__" alt="beach" className="img4"/>
      
      <img src="https://s3-alpha-sig.figma.com/img/207b/1314/51e50ce0fbfb20da6e07033f69a9f3ea?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MBaEuWr1wc7I7QYBb36w7-CljWvmSyIxE63M0zIebmGD4pka7x8FOI4iO8BSCDKvE~R2RQfYTd8BpcOnd1cdHkWJlbTdqi4acVF13htIWO9xK4q7GPpNLGo~9gRM4gybKzU3DEHm89VTzCAva7NuA0gdFtIyW0wqFlUjG47jr-l2OpY85ATPjFRkPSE4qzuXQY6XPljzNOVsfo13Fs23oN8a7cHvTWEWayUbaaW91u50AYsbvJJJjAyz4fKI7SVg1VIaU7EH3e3OC01lYRT3VlRNoAlA4osZKAUd-vZkoP9a1DkqrjG3RVR6AHum61VMLlWCpzTlK6fr2gVJLaYA0A__" alt="white-flowers" className="img5"/>
     
      <img src="https://s3-alpha-sig.figma.com/img/1d12/d5f5/034e1a60724e3533eb0244bb6ebd4d5c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LfKoZsGM2mpK0VPdEXCEhKFJiqimRMaJlniMpSZ5dez-s2se~gXCm6CsGxzVV7CvN~DbtWn1YyqbU1pbp1yKh3LZrBkwk5WNuwVijFsOztKqO2kUsK8UARr8Ek0eomWRVnTvpPYR4AuKYiRGx~x7E26Dktmo8pKkP6pcuQ7VwEJJ2oHNEyGbVWcZi9ByP-Glxswkmxf8x-tiTpoeX~BNaImdlx8X~YAaVqAlyNyqAd9MCJGNF2JZynaIxMQAXUTi7N54leqEySpYi9GPdeiAACyJvXxVjrCOB5VI4IG1v~eXo-Rry1Gmghxm42oSZPdDnMC-dme4F4EUecFHVWvqag__" alt="orange" className="img6"/>
      
      <img src="https://s3-alpha-sig.figma.com/img/d105/932e/baf6a10056d518f2f660159c27891ae5?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j2H6Zby92j5UDS-JjCl1IwpKAtm3IjDKOSO9xPDIjc0GZaZSjG28p~qww-9qCyTvBTRFMlam6-sa69zFsAjLn9ckFk95wAmfqx-YHx4J2D6IE2SGaRWpr5K3wPIDzMyxVdVry2-YrDpR0ABoHBOwlTcCnwmQbnOggXYS3yDH1qp7iKUDmW4wMwBT1zDX1ugWhYkAGTNyVM034UDYsTm1wjudHxku6CrcUOJ~1xO2Azn4vSP1mORiPg~5oSLi3uRP2unAKNbG8wv5fn14Z6TOqMOBV4PTjfIFTo6CbfED5tGGr7BfCed2L6DaWILil4q8Lo8E0~5KCitjK8-ci77KbA__" alt="girl" className="img7"/>
     
      <img src="https://s3-alpha-sig.figma.com/img/6f23/0259/b80d2714580bb71cdcf2cf0a286abaf1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VrA9zQ8DkC32eZlNWdvEU34LhAJh20M4DsTueJDEo29JEDSGGUek1sIJRVbl-E-CH7aPKEXO6pzS-XzLb-ujWVQLCubgqqwi~r8vi3JDsrLyKO2d72Mw6feIth0up-Escnp49PmZnlZIaboAt5TDEPjP3dybnsVsZwMkBRsGWqYCA8yxzESrLiqynnlh2Fm6dJ~y3l41yUrc4MpaopTqs5u1OWhot4Z2ucqdxG-nYzeIB0rjX0Uw6sXjbDdI0ydzXW6nuHf3IQ30y1zcecV19Fg5tO3LD8FvgLmGstgMBWuvNzUmPsxaD59QlP~MXtFEOLTIPKVfxR93zPt2WkPBSw__" alt="tulips" className="img8"/>
      <img src="https://s3-alpha-sig.figma.com/img/7ce7/facf/669dc0383b4fe8e47fdc768f7968602b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pa7t9hCHQ0J2xdnEJTKRDt-oBRzFK8vQu2BQM0nva9SoarC65rWt~wIEm3g52892U7SKuBmOizz-9kPbW1Gnj5vdmZanyObksEhxeH~5cgVXwPi~jDpNdhE9T79USakGq8s4gMlozyD1fPZaPIBnbL1Pcc-h2sK9TAfZijtOy3-tjQBUpqE8VBp0QH-atti3LaZ5O4~8Gx5ZldeBGaR-O65v5MOHAOeVYN-ugXd2lQOUtiFu8Oooceer7PvB5YnRZ2KgfxFxlAbh2Y5n5W62F8hGwEUsoL7oofShWz9jxfBb8zgodHUgWB1UReDuLNPfBcZEJDPkul9wnGgot1D1kg__" alt="strawberry" className="img9"/>
    </div>
    </div>

    <div className="vibesnap">
      <div className="logo-section">
        <img src=""
         alt="Vibesnap Logo" className="icon" />
        <div className="card">
          <h1 className="heading">Vibesnap</h1>
          <p className="para">Moments That Matter, Shared Forever.</p>
        </div>
      </div>
                    <button disabled={isSigningIn} style={{backgroundColor:'#181C14',color:'white'}}
                        onClick={(e) => { onGoogleSignIn(e) }}
                        className={`w-full flex items-center black justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium  ${isSigningIn ? 'cursor-not-allowed' : 'hover:bg-gray-100 transition duration-300 active:bg-gray-100'}`}>
                        <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_17_40)">
                                <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_40">
                                    <rect width="48" height="48" fill="white" style={{color:'white'}}/>
                                </clipPath>
                            </defs>
                        </svg>
                        {isSigningIn ? 'Signing In...' : 'Continue with Google'}
                    </button>
                </div>
                </div>
    )
}

export default Login