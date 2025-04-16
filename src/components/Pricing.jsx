import React from "react";

function Pricing() {
  return (
    <div className="px-5 py-16 mx-auto max-w-none min-h-screen bg-neutral-950 max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <div className="mx-auto my-0 mb-16 text-center max-w-[1224px]">
        <div className="px-4 py-3 mb-4 text-sm leading-5 border border-solid border-gray-200 border-opacity-10 rounded-[58px] text-stone-300">
          Our Plans
        </div>
        <div className="mt-4">
          <div className="flex gap-2.5 justify-center items-center mb-4 text-5xl tracking-tighter text-white leading-[56px] max-sm:text-4xl max-sm:leading-10">
            <span>Check out our</span>
            <span className="relative pr-1 text-pink-50 border-solid bg-blue-600 bg-opacity-20 border-r-[3px] border-r-sky-200">
              pricing
            </span>
          </div>
          <div className="text-lg leading-6 text-stone-300 max-sm:text-base max-sm:leading-6">
            See the pricing that fits your company
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-center mx-auto my-0 max-w-[1224px] max-md:px-5 max-md:py-0">
        <div className="px-4 py-10 rounded-2xl shadow-md bg-stone-950 w-[374px] max-md:w-full max-md:max-w-[500px] max-sm:px-4 max-sm:py-8">
          <div className="mx-auto my-0 max-w-[342px]">
            <div className="mb-5 text-3xl tracking-tight leading-8 text-zinc-100">
              Tech Retainer Plan
            </div>
            <div className="mb-10 text-sm leading-5">
              <span className="text-zinc-500">Perfect for</span>
              <span className="font-bold text-white">
                {" "}
                startups, businesses, or agencies
              </span>
              <span className="text-zinc-500">
                {" "}
                looking for reliable ongoing development support. Starting at
                $1K/month.
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-center">
                <div className="flex justify-center items-center w-7 h-7 bg-neutral-800 rounded-[999px]">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          '<svg id="34:19" layer-name="System / Code" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 24px; height: 24px"> <path d="M15 7L20 12L15 17M9 17L4 12L9 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                      }}
                    />
                  </div>
                </div>
                <div className="text-base leading-6 text-white text-opacity-90">
                  1 Dedicated Senior Design Partner
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex justify-center items-center w-7 h-7 bg-neutral-800 rounded-[999px]">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          '<svg id="30:250" layer-name="SVG" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 24px; height: 24px"> <path d="M12.6667 2.6001H3.33333C2.59695 2.6001 2 3.19705 2 3.93343V13.2668C2 14.0031 2.59695 14.6001 3.33333 14.6001H12.6667C13.403 14.6001 14 14.0031 14 13.2668V3.93343C14 3.19705 13.403 2.6001 12.6667 2.6001Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 6.6001H14" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 14.6001V6.6001" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                      }}
                    />
                  </div>
                </div>
                <div className="text-base leading-6 text-white text-opacity-90">
                  Custom design system
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex justify-center items-center w-7 h-7 bg-neutral-800 rounded-[999px]">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          '<svg id="30:256" layer-name="SVG" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 24px; height: 24px"> <path d="M9.66675 7.26668C9.11341 7.26668 8.66675 6.82002 8.66675 6.26668V2.93335C8.66675 2.38002 9.11341 1.93335 9.66675 1.93335C10.2201 1.93335 10.6667 2.38002 10.6667 2.93335V6.26668C10.6667 6.82002 10.2201 7.26668 9.66675 7.26668Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13.6667 7.26685H12.6667V6.26685C12.6667 5.71351 13.1134 5.26685 13.6667 5.26685C14.2201 5.26685 14.6667 5.71351 14.6667 6.26685C14.6667 6.82018 14.2201 7.26685 13.6667 7.26685Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.33325 9.93335C6.88659 9.93335 7.33325 10.38 7.33325 10.9333V14.2667C7.33325 14.82 6.88659 15.2667 6.33325 15.2667C5.77992 15.2667 5.33325 14.82 5.33325 14.2667V10.9333C5.33325 10.38 5.77992 9.93335 6.33325 9.93335Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2.33325 9.93335H3.33325V10.9333C3.33325 11.4867 2.88659 11.9333 2.33325 11.9333C1.77992 11.9333 1.33325 11.4867 1.33325 10.9333C1.33325 10.38 1.77992 9.93335 2.33325 9.93335Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.33325 10.2668C9.33325 9.71351 9.77992 9.26685 10.3333 9.26685H13.6666C14.2199 9.26685 14.6666 9.71351 14.6666 10.2668C14.6666 10.8202 14.2199 11.2668 13.6666 11.2668H10.3333C9.77992 11.2668 9.33325 10.8202 9.33325 10.2668Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.3333 13.2668H9.33325V14.2668C9.33325 14.8202 9.77992 15.2668 10.3333 15.2668C10.8866 15.2668 11.3333 14.8202 11.3333 14.2668C11.3333 13.7135 10.8866 13.2668 10.3333 13.2668Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.66659 6.93335C6.66659 6.38002 6.21992 5.93335 5.66659 5.93335H2.33325C1.77992 5.93335 1.33325 6.38002 1.33325 6.93335C1.33325 7.48668 1.77992 7.93335 2.33325 7.93335H5.66659C6.21992 7.93335 6.66659 7.48668 6.66659 6.93335Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.66675 3.93335H6.66675V2.93335C6.66675 2.38002 6.22008 1.93335 5.66675 1.93335C5.11341 1.93335 4.66675 2.38002 4.66675 2.93335C4.66675 3.48668 5.11341 3.93335 5.66675 3.93335Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                      }}
                    />
                  </div>
                </div>
                <div className="text-base leading-6 text-white text-opacity-90">
                  Seamless communication via WA or Slack
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex justify-center items-center w-7 h-7 bg-neutral-800 rounded-[999px]">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          '<svg id="30:267" layer-name="SVG" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 24px; height: 24px"> <path d="M14.6666 1.93335L7.33325 9.26668" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.6666 1.93335L9.99992 15.2667L7.33325 9.26668L1.33325 6.60002L14.6666 1.93335Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                      }}
                    />
                  </div>
                </div>
                <div className="text-base leading-6 text-white text-opacity-90">
                  Daily update with 24/5 design support
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex justify-center items-center w-7 h-7 bg-neutral-800 rounded-[999px]">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          '<svg id="30:272" layer-name="SVG" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 24px; height: 24px"> <path d="M14.6666 8.6001H10.6666L9.33325 10.6001H6.66659L5.33325 8.6001H1.33325" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3.63325 4.00685L1.33325 8.60018V12.6002C1.33325 12.9538 1.47373 13.2929 1.72378 13.543C1.97382 13.793 2.31296 13.9335 2.66659 13.9335H13.3333C13.6869 13.9335 14.026 13.793 14.2761 13.543C14.5261 13.2929 14.6666 12.9538 14.6666 12.6002V8.60018L12.3666 4.00685C12.2562 3.7847 12.086 3.59776 11.8752 3.46703C11.6644 3.3363 11.4213 3.26698 11.1733 3.26685H4.82659C4.57853 3.26698 4.33543 3.3363 4.12462 3.46703C3.9138 3.59776 3.74364 3.7847 3.63325 4.00685Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                      }}
                    />
                  </div>
                </div>
                <div className="text-base leading-6 text-white text-opacity-90">
                  Unlimited revisions
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex justify-center items-center w-7 h-7 bg-neutral-800 rounded-[999px]">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          '<svg id="30:277" layer-name="SVG" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 24px; height: 24px"> <path d="M3.33325 4.26668C3.33325 3.64784 3.57908 3.05435 4.01667 2.61677C4.45425 2.17918 5.04775 1.93335 5.66659 1.93335H7.99992V6.60002H5.66659C5.04775 6.60002 4.45425 6.35418 4.01667 5.9166C3.57908 5.47901 3.33325 4.88552 3.33325 4.26668Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 1.93335H10.3333C10.6398 1.93335 10.9432 1.9937 11.2263 2.11096C11.5094 2.22822 11.7666 2.4001 11.9832 2.61677C12.1999 2.83344 12.3718 3.09066 12.4891 3.37375C12.6063 3.65685 12.6667 3.96027 12.6667 4.26668C12.6667 4.5731 12.6063 4.87652 12.4891 5.15961C12.3718 5.4427 12.1999 5.69993 11.9832 5.9166C11.7666 6.13327 11.5094 6.30514 11.2263 6.4224C10.9432 6.53966 10.6398 6.60002 10.3333 6.60002H8V1.93335Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 8.93343C8 8.62701 8.06035 8.3236 8.17761 8.0405C8.29488 7.75741 8.46675 7.50019 8.68342 7.28352C8.90009 7.06685 9.15731 6.89497 9.44041 6.77771C9.7235 6.66045 10.0269 6.6001 10.3333 6.6001C10.6398 6.6001 10.9432 6.66045 11.2263 6.77771C11.5094 6.89497 11.7666 7.06685 11.9832 7.28352C12.1999 7.50019 12.3718 7.75741 12.4891 8.0405C12.6063 8.3236 12.6667 8.62701 12.6667 8.93343C12.6667 9.23985 12.6063 9.54327 12.4891 9.82636C12.3718 10.1095 12.1999 10.3667 11.9832 10.5833C11.7666 10.8 11.5094 10.9719 11.2263 11.0892C10.9432 11.2064 10.6398 11.2668 10.3333 11.2668C10.0269 11.2668 9.7235 11.2064 9.44041 11.0892C9.15731 10.9719 8.90009 10.8 8.68342 10.5833C8.46675 10.3667 8.29488 10.1095 8.17761 9.82636C8.06035 9.54327 8 9.23985 8 8.93343Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3.33325 13.6002C3.33325 12.9813 3.57908 12.3878 4.01667 11.9503C4.45425 11.5127 5.04775 11.2668 5.66659 11.2668H7.99992V13.6002C7.99992 14.219 7.75409 14.8125 7.3165 15.2501C6.87892 15.6877 6.28542 15.9335 5.66659 15.9335C5.04775 15.9335 4.45425 15.6877 4.01667 15.2501C3.57908 14.8125 3.33325 14.219 3.33325 13.6002Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3.33325 8.93343C3.33325 8.31459 3.57908 7.7211 4.01667 7.28352C4.45425 6.84593 5.04775 6.6001 5.66659 6.6001H7.99992V11.2668H5.66659C5.04775 11.2668 4.45425 11.0209 4.01667 10.5833C3.57908 10.1458 3.33325 9.55227 3.33325 8.93343Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                      }}
                    />
                  </div>
                </div>
                <div className="text-base leading-6 text-white text-opacity-90">
                  World-class execution in Figma
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex justify-center items-center w-7 h-7 bg-neutral-800 rounded-[999px]">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          '<svg id="30:285" layer-name="SVG" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 24px; height: 24px"> <path d="M8.00008 11.9335C9.84103 11.9335 11.3334 10.4411 11.3334 8.60018C11.3334 6.75923 9.84103 5.26685 8.00008 5.26685C6.15913 5.26685 4.66675 6.75923 4.66675 8.60018C4.66675 10.4411 6.15913 11.9335 8.00008 11.9335Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 1.26685V2.60018" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 14.6001V15.9334" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2.81323 3.41333L3.7599 4.36" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.24 12.8401L13.1867 13.7868" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M0.666748 8.6001H2.00008" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 8.6001H15.3333" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2.81323 13.7868L3.7599 12.8401" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.24 4.36L13.1867 3.41333" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                      }}
                    />
                  </div>
                </div>
                <div className="text-base leading-6 text-white text-opacity-90">
                  2-4 weeks of deliverables
                </div>
              </div>
            </div>
            <div className="flex gap-2.5 mt-10 max-sm:flex-col">
              <button className="px-6 py-4 text-base font-medium tracking-tighter leading-4 rounded-xl shadow cursor-pointer bg-neutral-800 border-[none] h-[52px] text-zinc-100 w-[166px] max-sm:w-full">
                Book a 15-min call
              </button>
              <button className="px-6 py-4 text-base font-medium tracking-tighter leading-4 bg-white rounded-xl shadow cursor-pointer border-[none] h-[52px] text-neutral-950 w-[166px] max-sm:w-full">
                Sample Work
              </button>
            </div>
          </div>
        </div>
        <div className="px-4 py-10 rounded-2xl shadow-md bg-stone-950 w-[374px] max-md:w-full max-md:max-w-[500px] max-sm:px-4 max-sm:py-8">
          <div className="mx-auto my-0 max-w-[342px]">
            <div className="mb-5 text-3xl tracking-tight leading-8 text-zinc-100">
              Project Plan
            </div>
            <div className="mb-10 text-sm leading-5">
              <span className="text-zinc-500">Perfect for</span>
              <span className="font-bold text-white">
                {" "}
                startups, businesses, or agencies
              </span>
              <span className="text-zinc-500">
                {" "}
                looking for reliable ongoing development support. Starting at
                $1K/month.
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-center">
                <div className="flex justify-center items-center w-7 h-7 bg-neutral-800 rounded-[999px]">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          '<svg id="34:23" layer-name="System / Code" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 24px; height: 24px"> <path d="M15 7L20 12L15 17M9 17L4 12L9 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                      }}
                    />
                  </div>
                </div>
                <div className="text-base leading-6 text-white text-opacity-90">
                  1 Dedicated Senior Design Partner
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex justify-center items-center w-7 h-7 bg-neutral-800 rounded-[999px]">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          '<svg id="30:385" layer-name="SVG" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 24px; height: 24px"> <path d="M12.6667 2.6001H3.33333C2.59695 2.6001 2 3.19705 2 3.93343V13.2668C2 14.0031 2.59695 14.6001 3.33333 14.6001H12.6667C13.403 14.6001 14 14.0031 14 13.2668V3.93343C14 3.19705 13.403 2.6001 12.6667 2.6001Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 6.6001H14" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 14.6001V6.6001" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                      }}
                    />
                  </div>
                </div>
                <div className="text-base leading-6 text-white text-opacity-90">
                  Custom design system
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex justify-center items-center w-7 h-7 bg-neutral-800 rounded-[999px]">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          '<svg id="30:391" layer-name="SVG" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 24px; height: 24px"> <path d="M9.6665 7.26668C9.11317 7.26668 8.6665 6.82002 8.6665 6.26668V2.93335C8.6665 2.38002 9.11317 1.93335 9.6665 1.93335C10.2198 1.93335 10.6665 2.38002 10.6665 2.93335V6.26668C10.6665 6.82002 10.2198 7.26668 9.6665 7.26668Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13.6665 7.26685H12.6665V6.26685C12.6665 5.71351 13.1132 5.26685 13.6665 5.26685C14.2198 5.26685 14.6665 5.71351 14.6665 6.26685C14.6665 6.82018 14.2198 7.26685 13.6665 7.26685Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.3335 9.93335C6.88683 9.93335 7.3335 10.38 7.3335 10.9333V14.2667C7.3335 14.82 6.88683 15.2667 6.3335 15.2667C5.78016 15.2667 5.3335 14.82 5.3335 14.2667V10.9333C5.3335 10.38 5.78016 9.93335 6.3335 9.93335Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2.3335 9.93335H3.3335V10.9333C3.3335 11.4867 2.88683 11.9333 2.3335 11.9333C1.78016 11.9333 1.3335 11.4867 1.3335 10.9333C1.3335 10.38 1.78016 9.93335 2.3335 9.93335Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.3335 10.2668C9.3335 9.71351 9.78016 9.26685 10.3335 9.26685H13.6668C14.2202 9.26685 14.6668 9.71351 14.6668 10.2668C14.6668 10.8202 14.2202 11.2668 13.6668 11.2668H10.3335C9.78016 11.2668 9.3335 10.8202 9.3335 10.2668Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.3335 13.2668H9.3335V14.2668C9.3335 14.8202 9.78016 15.2668 10.3335 15.2668C10.8868 15.2668 11.3335 14.8202 11.3335 14.2668C11.3335 13.7135 10.8868 13.2668 10.3335 13.2668Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.66683 6.93335C6.66683 6.38002 6.22016 5.93335 5.66683 5.93335H2.3335C1.78016 5.93335 1.3335 6.38002 1.3335 6.93335C1.3335 7.48668 1.78016 7.93335 2.3335 7.93335H5.66683C6.22016 7.93335 6.66683 7.48668 6.66683 6.93335Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.6665 3.93335H6.6665V2.93335C6.6665 2.38002 6.21984 1.93335 5.6665 1.93335C5.11317 1.93335 4.6665 2.38002 4.6665 2.93335C4.6665 3.48668 5.11317 3.93335 5.6665 3.93335Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                      }}
                    />
                  </div>
                </div>
                <div className="text-base leading-6 text-white text-opacity-90">
                  Seamless communication via WA or Slack
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex justify-center items-center w-7 h-7 bg-neutral-800 rounded-[999px]">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          '<svg id="30:402" layer-name="SVG" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 24px; height: 24px"> <path d="M14.6668 1.93335L7.3335 9.26668" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.6668 1.93335L10.0002 15.2667L7.3335 9.26668L1.3335 6.60002L14.6668 1.93335Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                      }}
                    />
                  </div>
                </div>
                <div className="text-base leading-6 text-white text-opacity-90">
                  Daily update with 24/5 design support
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex justify-center items-center w-7 h-7 bg-neutral-800 rounded-[999px]">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          '<svg id="30:407" layer-name="SVG" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 24px; height: 24px"> <path d="M14.6668 8.6001H10.6668L9.3335 10.6001H6.66683L5.3335 8.6001H1.3335" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3.6335 4.00685L1.3335 8.60018V12.6002C1.3335 12.9538 1.47397 13.2929 1.72402 13.543C1.97407 13.793 2.31321 13.9335 2.66683 13.9335H13.3335C13.6871 13.9335 14.0263 13.793 14.2763 13.543C14.5264 13.2929 14.6668 12.9538 14.6668 12.6002V8.60018L12.3668 4.00685C12.2564 3.7847 12.0863 3.59776 11.8755 3.46703C11.6647 3.3363 11.4216 3.26698 11.1735 3.26685H4.82683C4.57877 3.26698 4.33567 3.3363 4.12486 3.46703C3.91405 3.59776 3.74388 3.7847 3.6335 4.00685Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                      }}
                    />
                  </div>
                </div>
                <div className="text-base leading-6 text-white text-opacity-90">
                  Unlimited revisions
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex justify-center items-center w-7 h-7 bg-neutral-800 rounded-[999px]">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          '<svg id="30:412" layer-name="SVG" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 24px; height: 24px"> <path d="M3.3335 4.26668C3.3335 3.64784 3.57933 3.05435 4.01691 2.61677C4.4545 2.17918 5.04799 1.93335 5.66683 1.93335H8.00016V6.60002H5.66683C5.04799 6.60002 4.4545 6.35418 4.01691 5.9166C3.57933 5.47901 3.3335 4.88552 3.3335 4.26668Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 1.93335H10.3333C10.6398 1.93335 10.9432 1.9937 11.2263 2.11096C11.5094 2.22822 11.7666 2.4001 11.9832 2.61677C12.1999 2.83344 12.3718 3.09066 12.4891 3.37375C12.6063 3.65685 12.6667 3.96027 12.6667 4.26668C12.6667 4.5731 12.6063 4.87652 12.4891 5.15961C12.3718 5.4427 12.1999 5.69993 11.9832 5.9166C11.7666 6.13327 11.5094 6.30514 11.2263 6.4224C10.9432 6.53966 10.6398 6.60002 10.3333 6.60002H8V1.93335Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 8.93343C8 8.62701 8.06035 8.3236 8.17761 8.0405C8.29488 7.75741 8.46675 7.50019 8.68342 7.28352C8.90009 7.06685 9.15731 6.89497 9.44041 6.77771C9.7235 6.66045 10.0269 6.6001 10.3333 6.6001C10.6398 6.6001 10.9432 6.66045 11.2263 6.77771C11.5094 6.89497 11.7666 7.06685 11.9832 7.28352C12.1999 7.50019 12.3718 7.75741 12.4891 8.0405C12.6063 8.3236 12.6667 8.62701 12.6667 8.93343C12.6667 9.23985 12.6063 9.54327 12.4891 9.82636C12.3718 10.1095 12.1999 10.3667 11.9832 10.5833C11.7666 10.8 11.5094 10.9719 11.2263 11.0892C10.9432 11.2064 10.6398 11.2668 10.3333 11.2668C10.0269 11.2668 9.7235 11.2064 9.44041 11.0892C9.15731 10.9719 8.90009 10.8 8.68342 10.5833C8.46675 10.3667 8.29488 10.1095 8.17761 9.82636C8.06035 9.54327 8 9.23985 8 8.93343Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3.3335 13.6002C3.3335 12.9813 3.57933 12.3878 4.01691 11.9503C4.4545 11.5127 5.04799 11.2668 5.66683 11.2668H8.00016V13.6002C8.00016 14.219 7.75433 14.8125 7.31675 15.2501C6.87916 15.6877 6.28567 15.9335 5.66683 15.9335C5.04799 15.9335 4.4545 15.6877 4.01691 15.2501C3.57933 14.8125 3.3335 14.219 3.3335 13.6002Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3.3335 8.93343C3.3335 8.31459 3.57933 7.7211 4.01691 7.28352C4.4545 6.84593 5.04799 6.6001 5.66683 6.6001H8.00016V11.2668H5.66683C5.04799 11.2668 4.4545 11.0209 4.01691 10.5833C3.57933 10.1458 3.3335 9.55227 3.3335 8.93343Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                      }}
                    />
                  </div>
                </div>
                <div className="text-base leading-6 text-white text-opacity-90">
                  World-class execution in Figma
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex justify-center items-center w-7 h-7 bg-neutral-800 rounded-[999px]">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          '<svg id="30:420" layer-name="SVG" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 24px; height: 24px"> <path d="M7.99984 11.9335C9.84079 11.9335 11.3332 10.4411 11.3332 8.60018C11.3332 6.75923 9.84079 5.26685 7.99984 5.26685C6.15889 5.26685 4.6665 6.75923 4.6665 8.60018C4.6665 10.4411 6.15889 11.9335 7.99984 11.9335Z" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 1.26685V2.60018" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 14.6001V15.9334" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2.81348 3.41333L3.76014 4.36" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.2402 12.8401L13.1869 13.7868" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M0.666504 8.6001H1.99984" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 8.6001H15.3333" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2.81348 13.7868L3.76014 12.8401" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.2402 4.36L13.1869 3.41333" stroke="#E8E8E8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                      }}
                    />
                  </div>
                </div>
                <div className="text-base leading-6 text-white text-opacity-90">
                  2-4 weeks of deliverables
                </div>
              </div>
            </div>
            <div className="flex gap-2.5 mt-10 max-sm:flex-col">
              <button className="px-6 py-4 text-base font-medium tracking-tighter leading-4 rounded-xl shadow cursor-pointer bg-neutral-800 border-[none] h-[52px] text-zinc-100 w-[166px] max-sm:w-full">
                Book a 15-min call
              </button>
              <button className="px-6 py-4 text-base font-medium tracking-tighter leading-4 bg-white rounded-xl shadow cursor-pointer border-[none] h-[52px] text-neutral-950 w-[166px] max-sm:w-full">
                Sample Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
