import React from "react";

const Card = () => {
  return (
    <>
      <div className="cards">
        <h1 className="mt-10 mb-2 text-center text-4xl">
          This is Cart in React Js
        </h1>
        <hr className="w-1/2 mx-auto border-b-2" />
        <div className="cards-all flex">
        <div className="cartOne shadow-2xl rounded-xl max-w-[300px] m-10 h-[400px]">
          <div className="cartOne-img w-full h-[200px]">
            <img
              className="w-full rounded-xl h-[100%] object-cover"
              src="https://images.pexels.com/photos/10863290/pexels-photo-10863290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="cardOne-main mt-2 ml-3 ">
            <h1 className="text-2xl font-bold mb-1font-sans text-black-700">
              Best Books
            </h1>
            <p className="text-[13px] text-gray-700 my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem est, impedit consequatur esse nostrum fuga.
            </p>
            <div className="btn-All">
              <button className="my-5 mx-2 bg-gray-300 hover:bg-gray-800 hover:text-white  text-[14px] w-[78px] h-7 rounded-lg">
                Best Book
              </button>
              <button className="my-5 mx-2 bg-gray-300 hover:bg-gray-800 hover:text-white  text-[14px] w-[78px] h-7 rounded-lg">
                Best Price
              </button>
              <button className="my-5 mx-2 bg-gray-300 hover:bg-gray-800 hover:text-white  text-[14px] w-[78px] h-7 rounded-lg">
                Best Sell
              </button>
            </div>
          </div>
        </div> <div className="cartOne shadow-2xl rounded-xl max-w-[300px] m-10 h-[400px]">
          <div className="cartOne-img w-full h-[200px]">
            <img
              className="w-full rounded-xl h-[100%] object-cover"
              src="https://images.pexels.com/photos/10863290/pexels-photo-10863290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="cardOne-main mt-2 ml-3 ">
            <h1 className="text-2xl font-bold mb-1font-sans text-black-700">
              Best Books
            </h1>
            <p className="text-[13px] text-gray-700 my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem est, impedit consequatur esse nostrum fuga.
            </p>
            <div className="btn-All">
              <button className="my-5 mx-2 bg-gray-300 hover:bg-gray-800 hover:text-white  text-[14px] w-[78px] h-7 rounded-lg">
                Best Book
              </button>
              <button className="my-5 mx-2 bg-gray-300 hover:bg-gray-800 hover:text-white  text-[14px] w-[78px] h-7 rounded-lg">
                Best Price
              </button>
              <button className="my-5 mx-2 bg-gray-300 hover:bg-gray-800 hover:text-white  text-[14px] w-[78px] h-7 rounded-lg">
                Best Sell
              </button>
            </div>
          </div>
        </div> <div className="cartOne shadow-2xl rounded-xl max-w-[300px] m-10 h-[400px]">
          <div className="cartOne-img w-full h-[200px]">
            <img
              className="w-full rounded-xl h-[100%] object-cover"
              src="https://images.pexels.com/photos/10863290/pexels-photo-10863290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="cardOne-main mt-2 ml-3 ">
            <h1 className="text-2xl font-bold mb-1font-sans text-black-700">
              Best Books
            </h1>
            <p className="text-[13px] text-gray-700 my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem est, impedit consequatur esse nostrum fuga.
            </p>
            <div className="btn-All">
              <button className="my-5 mx-2 bg-gray-300 hover:bg-gray-800 hover:text-white  text-[14px] w-[78px] h-7 rounded-lg">
                Best Book
              </button>
              <button className="my-5 mx-2 bg-gray-300 hover:bg-gray-800 hover:text-white  text-[14px] w-[78px] h-7 rounded-lg">
                Best Price
              </button>
              <button className="my-5 mx-2 bg-gray-300 hover:bg-gray-800 hover:text-white  text-[14px] w-[78px] h-7 rounded-lg">
                Best Sell
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Card;
