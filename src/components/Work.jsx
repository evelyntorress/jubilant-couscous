import React from "react";
import onClickNews from "../assets/onclick-news.jpeg";
import expressMovies from "../assets/express-movies.jpeg";
import eccommerceImage from "../assets/image-1.png"

function Work() {
  return (
    <div name="work" className="w-full m:h-screen text-gray-600">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-pink-200">
            Projects
          </p>
        </div>
        {/* Grid container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div>
            <p className="text-xl font-semibold py-4">OnClick News</p>
            <img src={onClickNews} alt="profile" width="400" height="400" />
            <div>
              <div className="pt-4 text-center flex">
                <a
                  href="https://pooja3093.github.io/refactored-succotash-/"
                  target={"blank"}
                >
                  <button className="text-black border-2 border-gray-600 px-4 py-1 my-3 flex items-center hover:bg-sky-500/60 hover:border-gray-500 mr-5">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Pooja3093/refactored-succotash-"
                  target={"blank"}
                >
                  <button className="text-black border-2 border-gray-600 px-5 py-1 my-3 flex items-center hover:bg-sky-500/60 hover:border-gray-500">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div>
            <p className="text-xl font-semibold py-4">Express Movies</p>
            <img src={expressMovies} alt="profile" width="400" height="400" />
            <div>
              <div className="pt-4 text-center flex">
                <a
                  href="https://vast-shelf-82768.herokuapp.com/"
                  target={"blank"}
                >
                  <button className="text-black border-2 border-gray-600 px-4 py-1 my-3 flex items-center hover:bg-sky-500/60 hover:border-gray-500 mr-5">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/WilliamL1998/crispy-octo-bassoon"
                  target={"blank"}
                >
                  <button className="text-black border-2 border-gray-600 px-5 py-1 my-3 flex items-center hover:bg-sky-500/60 hover:border-gray-500">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div>
            <p className="text-xl font-semibold py-4">E-commerce Website</p>
            <img src={eccommerceImage} alt="profile" width="400" height="400" />
            <div>
              <div className="pt-4 text-center flex">
                <a
                  href="https://damp-earth-50504.herokuapp.com/"
                  target={"blank"}
                >
                  <button className="text-black border-2 border-gray-600 px-4 py-1 my-3 flex items-center hover:bg-sky-500/60 hover:border-gray-500 mr-5">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/andresparraarze/project-3"
                  target={"blank"}
                >
                  <button className="text-black border-2 border-gray-600 px-5 py-1 my-3 flex items-center hover:bg-sky-500/60 hover:border-gray-500">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        {/* Project 1 */}
          <div>
            <p className="text-xl font-semibold py-4">OnClick News</p>
            <img src={onClickNews} alt="profile" width="400" height="400" />
            <div>
              <div className="pt-4 text-center flex">
                <a
                  href="https://pooja3093.github.io/refactored-succotash-/"
                  target={"blank"}
                >
                  <button className="text-black border-2 border-gray-600 px-4 py-1 my-3 flex items-center hover:bg-sky-500/60 hover:border-gray-500 mr-5">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Pooja3093/refactored-succotash-"
                  target={"blank"}
                >
                  <button className="text-black border-2 border-gray-600 px-5 py-1 my-3 flex items-center hover:bg-sky-500/60 hover:border-gray-500">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div>
            <p className="text-xl font-semibold py-4">Express Movies</p>
            <img src={expressMovies} alt="profile" width="400" height="400" />
            <div>
              <div className="pt-4 text-center flex">
                <a
                  href="https://vast-shelf-82768.herokuapp.com/"
                  target={"blank"}
                >
                  <button className="text-black border-2 border-gray-600 px-4 py-1 my-3 flex items-center hover:bg-sky-500/60 hover:border-gray-500 mr-5">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/WilliamL1998/crispy-octo-bassoon"
                  target={"blank"}
                >
                  <button className="text-black border-2 border-gray-600 px-5 py-1 my-3 flex items-center hover:bg-sky-500/60 hover:border-gray-500">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        {/* Project 3 */}
          <div>
            <p className="text-xl font-semibold py-4">E-commerce Website</p>
            <img src={eccommerceImage} alt="profile" width="400" height="400" />
            <div>
              <div className="pt-4 text-center flex">
                <a
                  href="https://damp-earth-50504.herokuapp.com/"
                  target={"blank"}
                >
                  <button className="text-black border-2 border-gray-600 px-4 py-1 my-3 flex items-center hover:bg-sky-500/60 hover:border-gray-500 mr-5">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/andresparraarze/project-3"
                  target={"blank"}
                >
                  <button className="text-black border-2 border-gray-600 px-5 py-1 my-3 flex items-center hover:bg-sky-500/60 hover:border-gray-500">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Work;
