import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        {/* <div className="nav-top flex items-center bg-black h-[48px] text-stone-200 text-[14px] gap-[20px]" >
          <p className=''>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <a href="" className='border-b bottom border-stone-200'>ShopNow</a>
          <select name="" id="">
            <option value="">English</option>
            <option value="">Russian</option>
            <option value="">Uzbek</option>
            <option value="">Turkish</option>
          </select>
        </div> */}
        <div class="bg-black text-stone-200 font-sans h-[48px] text-[16px]">
          <div class="max-w-screen-xl mx-auto flex justify-center items-center px-4 py-2 relative">
            <div class="text-center">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
              <a href="#" class="font-bold underline ml-8">ShopNow</a>
              </div>
            <div class="hidden sm:flex items-center space-x-1 cursor-pointer select-none absolute right-4">
            <select name="" id="" class="bg-black outline-none cursor-pointer">
              <option value="">English</option>
              <option value="">Russian</option>
              <option value="">Uzbekistan</option>
            </select>
            <i class="fas fa-chevron-down text-xs"></i>
      </div>
    </div>
        </div>

        {/* <div className="nav-bottom ">
          <div className="container">
            <div className="logo">
              <h1>Exclusive</h1>
            </div>
            <div className="links">
              <a href="">Home</a>
              <a href="">Contact</a>
              <a href="">About</a>
              <a href="">Sign Up</a>
            </div>
            <form class="w-full max-w-md bg-stone-300 rounded-lg flex items-center px-4">
              <label for="search" class="sr-only">Search</label>
                <div class="relative">
                  <input
                    id="search"
                    name="search"
                    type="search"
                    placeholder="What are you looking for?"
                    class="w-full rounded-lg py-3 px-4 pr-12 text-stone-900 text-sm font-sans placeholder-stone-900 focus:outline-none"
                  />
                  <button
                      type="submit"
                      class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-900"
                      aria-label="Search"
                    >
                      <i class="fas fa-search"></i>
                  </button>
                </div>
            </form>
          </div>
        </div> */}
      </nav>
    </div>
  )
}

export default Navbar