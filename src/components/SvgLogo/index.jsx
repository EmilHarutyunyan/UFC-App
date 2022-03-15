import React from 'react'
import MMA from "../../assets/img/mma.png"
import {SvgWrapper} from "./Svglogo.styles"
function SvgLogo() {
  return (
    <>
    
    <SvgWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="1580.831" height="729.501" viewBox="0 0 1580.831 729.501">
          <defs>
            <filter id="Path_862" x="0" y="11.463" width="772.293" height="716.216" filterUnits="userSpaceOnUse">
              <feOffset dx="69" dy="17" input="SourceAlpha"/>
              <feGaussianBlur stdDeviation="47" result="blur"/>
              <feFlood flood-opacity="0.161"/>
              <feComposite operator="in" in2="blur"/>
              <feComposite in="SourceGraphic"/>
            </filter>
            <filter id="Path_860" x="851.987" y="7.041" width="728.844" height="722.46" filterUnits="userSpaceOnUse">
              <feOffset dx="69" dy="17" input="SourceAlpha"/>
              <feGaussianBlur stdDeviation="47" result="blur-2"/>
              <feFlood flood-opacity="0.161"/>
              <feComposite operator="in" in2="blur-2"/>
              <feComposite in="SourceGraphic"/>
            </filter>
            <filter id="Path_861" x="532.44" y="6" width="642.849" height="388.408" filterUnits="userSpaceOnUse">
              <feOffset dx="69" dy="17" input="SourceAlpha"/>
              <feGaussianBlur stdDeviation="47" result="blur-3"/>
              <feFlood flood-opacity="0.161"/>
              <feComposite operator="in" in2="blur-3"/>
              <feComposite in="SourceGraphic"/>
            </filter>
            <filter id="Path_859" x="436.439" y="171.205" width="690.72" height="556.214" filterUnits="userSpaceOnUse">
              <feOffset dx="69" dy="17" input="SourceAlpha"/>
              <feGaussianBlur stdDeviation="47" result="blur-4"/>
              <feFlood flood-opacity="0.161"/>
              <feComposite operator="in" in2="blur-4"/>
              <feComposite in="SourceGraphic"/>
            </filter>
          </defs>
          <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_862)">
            <path id="Path_862-2" data-name="Path 862" d="M174.831,63.2H340.816L253.661,355.886c-5.984,20.553,6.764,37.464,28.1,37.464h0c21.334,0,43.448-16.911,49.431-37.464L418.346,63.2H565.339L464.915,437.318c-8.846,33.041-44.228,60.1-78.31,60.1H132.163c-40.586,0-65.3-32-54.635-71.285L174.831,63.2Z" transform="translate(-3.05 72.26)" fill="#ececec" fill-rule="evenodd"/>
          </g>
          <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_860)">
            <path id="Path_860-2" data-name="Path 860" d="M556.739,61.5H773.457c31.74,0,85.594,25.5,74.407,65.822l-4.423,15.87h-193.3c-9.886,0-20.293,8.065-22.894,17.691l-60.1,217.5c-2.6,9.626,3.122,17.691,13.269,17.691H774.5l-14.049,51.513c-8.065,29.919-40.326,54.375-72.066,54.375H459.7c-40.326,0-65.041-31.22-54.895-69.464l84.294-320C496.641,84.655,527.08,61.5,556.739,61.5Z" transform="translate(521.46 69.54)" fill="#ececec" fill-rule="evenodd"/>
          </g>
          <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_861)">
            <path id="Path_861-2" data-name="Path 861" d="M609.59,167.248H439.7v.26h-160L310.4,61.1h330.15L609.59,167.248Z" transform="translate(324.74 68.9)" fill="#d20a0a" fill-rule="evenodd"/>
          </g>
          <image href={MMA} className="mma-logo" width="530" height="625" transform="translate(368)"/>
          <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_859)">
            <path id="Path_859-2" data-name="Path 859" d="M402.8,398.814h-160L321.11,124.6H651.52L620.56,226.065H450.152Z" transform="translate(265.64 170.61)" fill="#ececec" fill-rule="evenodd"/>
          </g>
      </svg>
    </SvgWrapper>
  </>
  )

}
export default SvgLogo;

