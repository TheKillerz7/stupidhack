import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CheckoutPage() {
  const [onDeliveryFirst, setOnDeliveryFirst] = useState<Boolean>(true);
  const [onPlaceOrder, setOnPlaceOrder] = useState<Boolean>(false);

  const router = useRouter();

  const placeOrderHandle = () => {
    setOnPlaceOrder(true);
    setTimeout(() => {
      router.replace("/thank-you");
    }, 3000);
  };

  return (
    <div>
      <div
        className={
          "fixed w-full h-screen top-0 left-0 flex items-center justify-center z-20 bg-black transition duration-500 ease-in-out " +
          (onPlaceOrder ? "opacity-100" : "opacity-0 pointer-events-none")
        }
      >
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white transition ease-in-out duration-150 cursor-not-allowed"
        >
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <div className="flex items-center text-lg">
            <Image
              src="/imgs/icon-bank-kbank.png"
              className="mr-2"
              alt=""
              width={30}
              height={20}
            />
            Charging 💳Visa for{" "}
            <pre className="text-red-400 mt-0.5 text-xl ml-2">$79999</pre> . . .
          </div>
        </button>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
              <Image
                className="m-2 h-24 w-28 rounded-md border bg-gray-200 object-cover object-center"
                src="/imgs/all-product-capy.png"
                alt=""
                width={500}
                height={500}
              />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold text-gray-700">
                  Nike Air Max Pro 8888 - Super Light
                </span>
                <span className="float-right text-gray-400">42EU - 8.5US</span>
                <p className="text-lg font-bold text-gray-700">$0.00</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <div className="mt-5 grid gap-6">
            <div onClick={() => setOnDeliveryFirst(true)} className="relative">
              <span
                className={
                  "absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 bg-white " +
                  (onDeliveryFirst ? "border-gray-700" : "border-gray-300")
                }
              ></span>
              <label
                className={
                  "flex cursor-pointer select-none rounded-lg transition duration-200 ease-in-out border border-gray-300 p-4 " +
                  (onDeliveryFirst && "bg-white")
                }
              >
                <Image
                  className="w-14 object-contain"
                  src="/imgs/ps4-capy.png"
                  alt=""
                  width={500}
                  height={500}
                />
                <div className="ml-5">
                  <span
                    className={
                      "mt-2 font-semibold transition duration-200 ease-in-out " +
                      (onDeliveryFirst && "text-gray-700")
                    }
                  >
                    Fedex Delivery
                  </span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
            <div onClick={() => setOnDeliveryFirst(false)} className="relative">
              <span
                className={
                  "absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 bg-white " +
                  (!onDeliveryFirst ? "border-gray-700" : "border-gray-300")
                }
              ></span>
              <label
                className={
                  "flex cursor-pointer select-none transition duration-200 ease-in-out rounded-lg border border-gray-300 p-4 " +
                  (!onDeliveryFirst && "bg-white")
                }
              >
                <Image
                  className="w-14 object-contain"
                  src="/imgs/ps4-capy.png"
                  alt=""
                  width={500}
                  height={500}
                />
                <div className="ml-5">
                  <span
                    className={
                      "mt-2 font-semibold transition duration-200 ease-in-out " +
                      (!onDeliveryFirst && "text-gray-700")
                    }
                  >
                    efedex Delivery
                  </span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
            <hr />
            <p className="text-xl font-medium">Summary</p>
            <div>
              <div className="flex justify-between">
                <div>Subtotal</div>
                <div>$0.00</div>
              </div>
              <div className="flex justify-between mb-2">
                <div>Shipping</div>
                <div>$0.00</div>
              </div>
              <div className="flex justify-between mb-7 items-end">
                <div>Total</div>
                <div className="text-2xl ">$0.00</div>
              </div>
              <hr />
              <button
                onClick={placeOrderHandle}
                className="hover:bg-black hover:text-white cursor-pointer transition duration-300 ease-in-out border border-white bg-white w-full py-1.5 my-7 rounded-md text-center text-gray-700 font-medium"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
