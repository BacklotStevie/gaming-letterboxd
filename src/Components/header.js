import * as React from "react"

const Header = ({ siteTitle }) => {
  return (
    <>
      <nav class="justify-between flex-wrap bg-teal p-5">
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-lg place-items: center lg:flex-grow text-center">
            <a href="" class="block mt-4 lg:inline-block lg:mt-0 text-black text-decoration: underline hover:no-underline hover:text-red-700 mr-7">
              Login/User
            </a>
            <a href="" class="block mt-4 lg:inline-block lg:mt-0 text-black text-decoration: underline hover:no-underline hover:text-red-700 mr-7">
              Activity
            </a>
            <a href="" class="block mt-4 lg:inline-block lg:mt-0 text-black text-decoration: underline hover:no-underline hover:text-red-700">
               Other
            </a>

        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
