import React from "react";
import Button from "../Button";
import {
  MdAlternateEmail,
  MdEmail,
  MdOutlineMailOutline,
} from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { CiVoicemail } from "react-icons/ci";
import { AiTwotoneMail } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";

const AboutSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      id="about"
      ref={ref}
      className="    w-full shrink-0  lg:p-[11.33333vh_360px_202px]  text-white"
    >
      <div className="  wrapper">
        <div className=" flex flex-col lg:flex-row  gap-11">
          <div className="lg:w-[40vw]   ">
            <h2 className="   text-[5.3vh]   font-light  mb-3">About </h2>

            <h3 className=" text-4xl   flex flex-col  lg:flex-row lg:items-end gap-y-3.5 gap-x-2.25 whitespace-nowrap mb-4">
              <span>Mohammed Osama</span>{" "}
              <span className=" ml-1 relative  bottom-1   text-[1rem]    font-thin">
                محمد أسامة
              </span>
            </h3>

            <p className="  text-sm  mb-8 ">
              After graduating from university and gaining experience as a
              social worker Starting in October 2021, he will work as a web
              engineer at a production company. Strengths and abilities:
              Animation, interaction, and markup using js and css
            </p>

            <div className="  flex  flex-col lg:flex-row items-center   gap-7">
              <Button className=" w-full max-w-[170px]  h-fit py-2.25 ">
                Resoume
              </Button>
              <Button className=" w-full max-w-[170px]   h-fit py-2.25">
                Github
              </Button>
            </div>
          </div>

          <div className="   flex items-center justify-center self-center  h-96 w-96 relative">
            <div className="     lg:left-32 lg:absolute lg:top-20 ">
              <MdOutlineMailOutline className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-accent z-10" />
              <svg
                viewBox="0 0 200 200"
                width="200"
                height="200"
                className=" animate-spin  [animation-duration:_10s]"
              >
                <defs>
                  {/* Top Arc: Moving Right to Left (makes text face center) */}
                  <path
                    id="topInwardPath"
                    d="M 25, 100 A 75,75 0 0,0 175, 100"
                    fill="none"
                  />

                  {/* Bottom Arc: Moving Left to Right (makes text face center) */}
                  <path
                    id="bottomInwardPath"
                    d="M 175, 100 A 75,75 0 0,0 25, 100"
                    fill="none"
                  />
                </defs>

                <text
                  fill="#f2f2f2"
                  font-family="sans-serif"
                  font-size="12"
                  letter-spacing="3"
                  // font-weight="600"
                  className=" font-thi text-ac"
                >
                  {/* Top Text - Anchored to the middle of the top arc */}
                  <textPath
                    href="#topInwardPath"
                    startOffset="50%"
                    text-anchor="middle"
                  >
                    moeosama1@outlook.com
                  </textPath>

                  {/* Bottom Text - Anchored to the middle of the bottom arc */}
                  <textPath
                    href="#bottomInwardPath"
                    startOffset="50%"
                    text-anchor="middle"
                  >
                    moeosama1@outlook.com
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
export default AboutSection;
// <svg
//       viewBox="0 0 200 200"
//       width="200"
//       height="200"
//       className=" animate-spin  left-32 absolute top-20  [animation-duration:_10s]"
//     >
//       <defs>
//         {/* Top Arc: Drawn Left to Right (Clockwise) */}
//         <path
//           id="topOutward"
//           d="M 25, 100 A 75,75 0 0,1 175, 100"
//           fill="none"
//         />
//         {/* Bottom Arc: Drawn Right to Left (Counter-Clockwise) */}
//         <path
//           id="bottomOutward"
//           d="M 175, 100 A 75,75 0 0,1 25, 100"
//           fill="none"
//         />
//       </defs>

//       <text
//         fill="#f2f2f2"
//         font-family="sans-serif"
//         font-size="12"
//         letter-spacing="3"
//         font-weight="600"
//         className=" text-ac"
//       >
//         {/* Top Text - Anchored to the middle of the top arc */}
//         <textPath
//           href="#topOutward"
//           startOffset="50%"
//           text-anchor="middle"
//         >
//           moeosama1@outlook.com
//         </textPath>

//         {/* Bottom Text - Anchored to the middle of the bottom arc */}
//         <textPath
//           href="#bottomOutward"
//           startOffset="50%"
//           text-anchor="middle"
//         >
//           moeosama1@outlook.com
//         </textPath>
//       </text>
//     </svg>
