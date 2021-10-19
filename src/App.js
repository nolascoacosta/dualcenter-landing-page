import Header from "./components/Header";
import React from "react";

function App() {
  return (
      <main>
          <div className="mx-auto py-2">
              <Header />

              <div className="flex items-center justify-between mt-14 ml-10">

                  <div className="flex-1 mx-4 py-4 m-5 ">
                      <h1 className="p-4">HORIZONS</h1>
                      <p className="p-4">This quick-start template is great for capturing leads with any offer, whether it’s a webinar, ebook, or promotional coupon.</p>
                      <a className="p-4" href="/#"
                         className="px-4 py-1 text-lg text-white font-semibold  border
                         bg-yellow-500
                        ">MAKE IT YOURS</a>
                  </div>

                  <div className="flex-1 mx-4 py-4 m-5 ">
                      <h1 className="p-4">Category</h1>
                      <p className="p-4">This quick-start template is great for capturing leads with any offer, whether it’s a webinar, ebook, or promotional coupon.</p>
                  </div>
              </div>
              <div className="container mx-auto px-10">
                  <iframe className="mx-auto px" id="frame" src="https://templates.unbounce.com/horizons/" width="100%" style={{height: "4000px"}}></iframe>
              </div>

              <div className="flex flex-col text-center items-center" >
                  <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 grid col-span-12">
                      <a href="#">
                          <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div className="p-5">
                          <a href="#">
                              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">New Listing</h5>
                          </a>
                          <p className="font-normal text-gray-700 mb-3">Keep your visitors in the loop to keep them coming back—notify them of new listings when they come up.</p>
                          <a href="/#"
                             className="px-4 py-1 text-md text-blue-600 font-semibold  border border-blue-600
                            hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none

                            ">VIEW THIS TEMPLATE</a>
                      </div>
                  </div>
                  <div className="bg-white shadow-md border border-gray-200 max-w-sm mb-5 col-span-12">
                      <a href="#">
                          <img className="" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div className="p-5">
                          <a href="#">
                              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Multor</h5>
                          </a>
                          <p className="font-normal text-gray-700 mb-3">Schedule more virtual appointments, online classes, and video consultations with this high-converting lead capture template.</p>
                          <a href="/#"
                             className="px-4 py-1 text-md text-blue-600 font-semibold  border border-blue-600
                            hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none

                            ">VIEW THIS TEMPLATE</a>
                      </div>
                  </div>
                  <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 col-span-12">
                      <a href="#">
                          <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div className="p-5">
                          <a href="#">
                              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">O-SaaS
                              </h5>
                          </a>
                          <p className="font-normal text-gray-700 mb-3">A theme that’s designed to show off your SaaS product. There’s plenty of contrast, space for key benefits, a pricing grid, and more.</p>
                          <a href="/#"
                             className="px-4 py-1 text-md text-blue-600 font-semibold  border border-blue-600
                            hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none

                            ">VIEW THIS TEMPLATE</a>
                      </div>
                  </div>
                  <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 col-span-12">
                      <a href="#">
                          <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div className="p-5">
                          <a href="#">
                              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Marque</h5>
                          </a>
                          <p className="font-normal text-gray-700 mb-3">Capture leads and trigger downloads for any ebook or digital publication. Show users why your ebook is a must-read by including a sneak peek at what’s inside.</p>
                          <a href="/#"
                             className="px-4 py-1 text-md text-blue-600 font-semibold  border border-blue-600
                            hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none

                            ">VIEW THIS TEMPLATE</a>
                      </div>
                  </div>
              </div>


          </div>
      </main>
  );
}

export default App;
