// import { Facebook, Instagram, Twitter, Linkedin } from "react-bootstrap-icons";
const Footer = () => {
  return (
    <>
      <div className="bg-slate-600  mt-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 p-16 ">
          <div className="text-white">
            <h1 className="text-2xl text-white">GET IN TOUCH</h1>
            <br />
            <p>
              No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
              et dolor sed dolor. Rebum tempor no vero est magna amet no
            </p>
            <br />
            <ul type="none">
              <li className="flex">
                <img
                  src="https://www.svgrepo.com/show/444828/location-1.svg"
                  alt=""
                  width={"20px"}
                />{" "}
                <span className="ml-4">123 St reet, New York, USA</span>
              </li>
              <li className="flex">
                <img
                  src="https://www.svgrepo.com/show/194101/mail-email.svg"
                  alt=""
                  width={"20px"}
                />{" "}
                <span className="ml-4">info@example.com</span>
              </li>
              <li className="flex">
                <img
                  src="https://www.svgrepo.com/show/226343/telephone-call.svg"
                  alt=""
                  width={"20px"}
                />{" "}
                <span className="ml-4">0123456789</span>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-2xl text-white">QUICK SHOP</h1>
            <br />
            <ul type="none" className="text-white">
              <li className="hover:underline">&gt; Home </li>
              <li className="hover:underline">&gt; Our Shop </li>
              <li className="hover:underline">&gt; Shop Details </li>
              <li className="hover:underline">&gt; Shop Cart </li>
              <li className="hover:underline">&gt; Checkout </li>
              <li className="hover:underline">&gt; Contact Us </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl text-white">MY ACCOUNT</h1>
            <br />
            <ul type="none" className="text-white">
              <li className="hover:underline">&gt; Home </li>
              <li className="hover:underline">&gt; Our Shop </li>
              <li className="hover:underline">&gt; Shop Details </li>
              <li className="hover:underline">&gt; Shop Cart </li>
              <li className="hover:underline">&gt; Checkout </li>
              <li className="hover:underline">&gt; Contact Us </li>
            </ul>
          </div>

          <div className="text-white">
            <h1 className="text-2xl text-white">NEWSLETTER</h1>
            <br />
            <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
            <br />
            <div className="h-8 w-56 bg-white flex">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="h-8"
              />
              <button className="bg-orange-400 text-white p-1">Signup</button>
            </div>
            <br />
          </div>
        </div>
        <br />
        <br />
        <hr className="" />

        <div className="flex justify-between w-[90%] m-auto p-5">
          <p className="text-white">
            &copy;{" "}
            <span className="text-yellow-400 hover:underline">Domain</span>. All
            Rights Reserved. Designed by{" "}
            <span className="text-yellow-400 hover:underline">HTML Codex </span>
          </p>
          <img
            src="https://demo.htmlcodex.com/1479/online-shop-website-template/img/payments.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default Footer;
