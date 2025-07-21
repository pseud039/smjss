import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import HomeHero from "../components/HomeHero";
import BG from "../assets/BG Image.png";
import sec2 from "../assets/section1.png";
import proj1 from "../assets/proj1.png";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

export default function Homepage() {
  const marqueeRef = useRef();

  useEffect(() => {
    const el = marqueeRef.current;
    const clones = el.querySelectorAll("#marquee-text");

    const contentWidth = el.offsetWidth;
    let width = 0;
    if (window.innerWidth < 640) {
      width = contentWidth * 2;
    } else {
      width = contentWidth;
    }

    gsap.to(clones, {
      x: -width / 2,
      ease: "none",
      repeat: -1,
      duration: 10,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % (width / 2)), // wrap
      },
    });
  }, []);
  return (
    <div className="realtive min-h-screen bg-white">
      <HomeHero />
      {/* Know about us section */}
      <section className="w-full min-h-screen py-10 grid grid-cols-1">
        <div className=" grid grid-cols-1 md:grid-cols-[1.5fr_1fr] max-w-7xl mx-auto px-2 pr-4 md:px-4 gap-8">
          <div className="flex flex-col">
            <div className="flex flex-row gap-[1px] items-start ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="3"
                viewBox="0 0 72 3"
                fill="none"
                className="shrink-0 mt-3 mr-3 w-8 sm:w-16 md:w-[72px] transition-all duration-300"
              >
                <path d="M0 1.5H72" stroke="#1D2130" strokeWidth="2" />
              </svg>
              <div className="flex-1">
                <div className="text-[var(--color-primary-text)] font-[Roboto] text-left text-base tracking-wide font-medium">
                  KNOW ABOUT US
                </div>
                <h2 className=" pt-8 font-bold text-2xl md:text-3xl leading-tight text-[var(--color-primary-text)]">
                  We provide a place for children with special needs
                </h2>
                <div className="block py-5 line-clamp-4 text-[var(--color-secondary-text)] font-normal text-base leading-[25.6px]">
                  Established in July 2023 in Pratapgarh, Uttar Pradesh, Sanvi
                  Mahila Jan Seva Sansthan is a nonprofit organization dedicated
                  to empowering women and children, fostering health and
                  education, and building a more equitable society.
                </div>
                <div className="hidden line-clamp-7 md:block text-[var(--color-secondary-text)] font-normal text-base leading-[25.6px] mb-3">
                  Guided by the belief that sustainable change begins with
                  empowered individuals, the organization works tirelessly to
                  address critical issues such as women's health and hygiene,
                  child welfare, education, and skill development. Through its
                  community-based programs, Sanvi Mahila Jan Seva Sansthan
                  strives to create opportunities, support growth, and ensure
                  that every individual—especially women and children—can lead a
                  life of dignity, independence, and purpose.
                </div>
                <Link to="/aboutus" className="flex-1 sm:flex-none">
                  <button className="btn-primary py-4 mt-4">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] shrink-0 w-full max-w-[480px] my-2">
            <img src={BG}></img>
          </div>
        </div>
        <div className=" mx-8 my-4 flex flex-col justify-center">
          <div className="flex flex-rows my-8 text-[var(--color-primary-text)] tracking-wide text-base font-medium uppercase ">
            <div className=" ml-12 pl-12 mr-3">Our Programs</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1094"
              height="3"
              viewBox="0 0 1094 3"
              fill="none"
              className="shrink-0 mt-3 mr-3 w-8 md:w-[1094px] transition-all duration-300"
            >
              <path d="M0 1.5H1094" stroke="#E5E5E5" strokeWidth="2" />
            </svg>
          </div>
          <div className="overflow-hidden whitespace-nowrap pt-4">
            <div
              ref={marqueeRef}
              className="text-[var(--color-secondary-text)] text-base font-medium"
            >
              <div className="inline-block" id="marquee-text">
                <span className="mx-4">EDUCATION</span>
                <span className="mx-4"> SANVI PRATHAM FELLOWSHIP </span>
                <span className="mx-4">WOMEN EMPOWERNMENT</span>
                <span className="mx-4"> CHILD WELFARE</span>
                <span className="mx-4">HUMANITARIAN RELIEF PROGRAM</span>
                <span className="mx-4">HEALTH</span>
              </div>
              <div className="inline-block" id="marquee-text">
                <span className="mx-4"> EDUCATION</span>
                <span className="mx-4"> SANVI PRATHAM FELLOWSHIP </span>
                <span className="mx-4">WOMEN EMPOWERNMENT</span>
                <span className="mx-4"> CHILD WELFARE</span>
                <span className="mx-4">HUMANITARIAN RELIEF PROGRAM</span>
                <span className="mx-4">HEALTH</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen py-10 bg-[#FCEDC6]">
        {/* Header */}
        <div className="flex flex-row items-start mx-4 md:mx-16 px-4 md:px-12 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="3"
            viewBox="0 0 72 3"
            fill="none"
            className="shrink-0 mt-3 mr-3 w-8 sm:w-16 md:w-[72px] transition-all duration-300"
          >
            <path d="M0 1.5H72" stroke="#1D2130" strokeWidth="2" />
          </svg>
          <div className="text-base font-bold tracking-wide text-[var(--color-primary-text)] uppercase">
            What we do
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-8 md:mx-30 px-4 md:px-[72px]">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="font-bold text-2xl md:text-3xl leading-tight text-[var(--color-primary-text)]">
              Some services we provide for our children
            </h2>

            <div className=" hidden md:block text-[var(--color-secondary-text)] text-base leading-relaxed">
              We envision a society where every woman and child has the tools,
              resources, and confidence to lead a life of dignity, health, and
              opportunity. Together, we are building a brighter tomorrow, one
              life at a time.
            </div>

            {/* Services List */}
            <ul className="space-y-4 mt-6">
              <li className="flex items-start space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                >
                  <rect
                    y="0.359375"
                    width="28"
                    height="28"
                    rx="4"
                    fill="black"
                  />
                  <path
                    d="M14.9395 18.957H15.8184V21.3594H14.9395V18.957Z"
                    fill="#FFEBB9"
                  />
                  <path
                    d="M13.1816 18.957H14.0605V21.3594H13.1816V18.957Z"
                    fill="#FFEBB9"
                  />
                  <path
                    d="M17.459 6.35938H11.541C11.2983 6.35938 11.1016 6.55613 11.1016 6.79883V21.3594H12.3027V18.5176C12.3027 18.2749 12.4995 18.0781 12.7422 18.0781H16.2578C16.5005 18.0781 16.6973 18.2749 16.6973 18.5176V21.3594H17.8984V6.79883C17.8984 6.55613 17.7017 6.35938 17.459 6.35938ZM13.1816 16.7598C13.1816 17.0025 12.9849 17.1992 12.7422 17.1992C12.4995 17.1992 12.3027 17.0025 12.3027 16.7598V15.8809C12.3027 15.6382 12.4995 15.4414 12.7422 15.4414C12.9849 15.4414 13.1816 15.6382 13.1816 15.8809V16.7598ZM13.1816 14.123C13.1816 14.3657 12.9849 14.5625 12.7422 14.5625C12.4995 14.5625 12.3027 14.3657 12.3027 14.123V13.2441C12.3027 13.0014 12.4995 12.8047 12.7422 12.8047C12.9849 12.8047 13.1816 13.0014 13.1816 13.2441V14.123ZM14.9395 16.7598C14.9395 17.0025 14.7427 17.1992 14.5 17.1992C14.2573 17.1992 14.0605 17.0025 14.0605 16.7598V15.8809C14.0605 15.6382 14.2573 15.4414 14.5 15.4414C14.7427 15.4414 14.9395 15.6382 14.9395 15.8809V16.7598ZM14.9395 14.123C14.9395 14.3657 14.7427 14.5625 14.5 14.5625C14.2573 14.5625 14.0605 14.3657 14.0605 14.123V13.2441C14.0605 13.0014 14.2573 12.8047 14.5 12.8047C14.7427 12.8047 14.9395 13.0014 14.9395 13.2441V14.123ZM16.6973 16.7598C16.6973 17.0025 16.5005 17.1992 16.2578 17.1992C16.0151 17.1992 15.8184 17.0025 15.8184 16.7598V15.8809C15.8184 15.6382 16.0151 15.4414 16.2578 15.4414C16.5005 15.4414 16.6973 15.6382 16.6973 15.8809V16.7598ZM16.6973 14.123C16.6973 14.3657 16.5005 14.5625 16.2578 14.5625C16.0151 14.5625 15.8184 14.3657 15.8184 14.123V13.2441C15.8184 13.0014 16.0151 12.8047 16.2578 12.8047C16.5005 12.8047 16.6973 13.0014 16.6973 13.2441V14.123ZM13.1816 11.4863C13.1816 11.729 12.9849 11.9258 12.7422 11.9258C12.4995 11.9258 12.3027 11.729 12.3027 11.4863V10.6074C12.3027 10.3647 12.4995 10.168 12.7422 10.168C12.9849 10.168 13.1816 10.3647 13.1816 10.6074V11.4863ZM14.9395 11.4863C14.9395 11.729 14.7427 11.9258 14.5 11.9258C14.2573 11.9258 14.0605 11.729 14.0605 11.4863V10.6074C14.0605 10.3647 14.2573 10.168 14.5 10.168C14.7427 10.168 14.9395 10.3647 14.9395 10.6074V11.4863ZM16.6973 11.4863C16.6973 11.729 16.5005 11.9258 16.2578 11.9258C16.0151 11.9258 15.8184 11.729 15.8184 11.4863V10.6074C15.8184 10.3647 16.0151 10.168 16.2578 10.168C16.5005 10.168 16.6973 10.3647 16.6973 10.6074V11.4863ZM13.1816 8.84961C13.1816 9.0923 12.9849 9.28906 12.7422 9.28906C12.4995 9.28906 12.3027 9.0923 12.3027 8.84961V7.9707C12.3027 7.72801 12.4995 7.53125 12.7422 7.53125C12.9849 7.53125 13.1816 7.72801 13.1816 7.9707V8.84961ZM14.9395 8.84961C14.9395 9.0923 14.7427 9.28906 14.5 9.28906C14.2573 9.28906 14.0605 9.0923 14.0605 8.84961V7.9707C14.0605 7.72801 14.2573 7.53125 14.5 7.53125C14.7427 7.53125 14.9395 7.72801 14.9395 7.9707V8.84961ZM16.6973 8.84961C16.6973 9.0923 16.5005 9.28906 16.2578 9.28906C16.0151 9.28906 15.8184 9.0923 15.8184 8.84961V7.9707C15.8184 7.72801 16.0151 7.53125 16.2578 7.53125C16.5005 7.53125 16.6973 7.72801 16.6973 7.9707V8.84961Z"
                    fill="#FFEBB9"
                  />
                  <path
                    d="M21.5605 12.2188H18.7773V21.3594H21.5605C21.8032 21.3594 22 21.1626 22 20.9199V12.6582C22 12.4155 21.8032 12.2188 21.5605 12.2188ZM20.8281 17.9316C20.8281 18.1743 20.6314 18.3711 20.3887 18.3711C20.146 18.3711 19.9492 18.1743 19.9492 17.9316V17.0527C19.9492 16.81 20.146 16.6133 20.3887 16.6133C20.6314 16.6133 20.8281 16.81 20.8281 17.0527V17.9316ZM20.8281 15.2949C20.8281 15.5376 20.6314 15.7344 20.3887 15.7344C20.146 15.7344 19.9492 15.5376 19.9492 15.2949V14.416C19.9492 14.1733 20.146 13.9766 20.3887 13.9766C20.6314 13.9766 20.8281 14.1733 20.8281 14.416V15.2949Z"
                    fill="#FFEBB9"
                  />
                  <path
                    d="M7.43945 12.2188C7.19676 12.2188 7 12.4155 7 12.6582V20.9199C7 21.1626 7.19676 21.3594 7.43945 21.3594H10.2227V12.2188H7.43945ZM9.05078 17.9316C9.05078 18.1743 8.85402 18.3711 8.61133 18.3711C8.36863 18.3711 8.17188 18.1743 8.17188 17.9316V17.0527C8.17188 16.81 8.36863 16.6133 8.61133 16.6133C8.85402 16.6133 9.05078 16.81 9.05078 17.0527V17.9316ZM9.05078 15.2949C9.05078 15.5376 8.85402 15.7344 8.61133 15.7344C8.36863 15.7344 8.17188 15.5376 8.17188 15.2949V14.416C8.17188 14.1733 8.36863 13.9766 8.61133 13.9766C8.85402 13.9766 9.05078 14.1733 9.05078 14.416V15.2949Z"
                    fill="#FFEBB9"
                  />
                </svg>
                <div className="text-[var(--color-secondary-text)] ">
                  <div className="font-bold text-xl text-[var(--color-primary-text)] pb-1">
                    Education Programs
                  </div>
                  <li className="list-disc">
                    <i>
                      Remedial Program, Beti Bachao Beti Padhao, Balshalaa Early
                      Learning Centers.
                    </i>
                  </li>
                  <li className="list-disc">
                    Over<span className="font-bold"> 1,946 girls educated</span>
                    , 160+ children supported via tuition.
                  </li>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <img
                  className="rounded-[6px] w-7 h-7"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC80lEQVR4nO2Ya0iTURjHz+bmnNOaZEnRzajsQkVR0CeD/BAl5Ic+hJFpZBDrYqNIpTupGJpZRCMCI4ki7eZlC62hszUQKomg1AoEc2lrQVRUNvjHeWF+sF3evZedYe+HP2O8h+c8v/NczsMhhBBMEBHWDiggRIkIYZ4+UGqEsD9pKBEhEp9WijEZGk1c0O86nRaTkg2xGRHq2LnyIoy8fQif14Wfw12wNtRg5fKMsTU5mzLRba/Dn89PuTXveu7CbMpFXJw6NkCMk5Pw0nmDc268frgd2JC1FkeKtgf87vO6cPtaOdRqNXuQK7UlQZ2k+jLwCKMeZ8g1hTs2swVJ1Cfg21BHSCf5qNtexxZkSUa6aAif18UdBlOQ6WlTJAEZePWAfY10tlpEg5w9vY89CG2x4Yo5lNx9Vq7zMQehqjhhEgQx6nFy94uAPeUBofdA082qiEFKzflC95QHxN+K2+5d4A1RXXZAzH7ygfhhbI3nw0LQVCTi9pIXhIrOTrWV5oAAv0aewLRrixT7EERLu/NzuOHRD+F534b1maulsk8QTWWtW4Oh3la8cNRjwbxZUtomiLampaZAn6CT2i7BBBFBLGr2zDScLCnkGkF8vFZ+EJVKhfQ5M7BqxSJemppqDGtz2dL5GO63jTWFsuN75APRajUoPpiHwdctEd3cvz85kbd1I28In9eF9vsX5QExJOo540KHwp6uet4QPq8L+bnZ0oNQiI6Wy6JG9MbrFQEhPvbZxMxe0YH47u6Eq/0qKk/t5Z6HJIYAkQuCjuOWmmIUbMvmHA32riURBAjfwe9x06WIo9B8q5p7fAtmd/HCufjw5t9mcezwzojrlshdE7Sr9T+/E1BfB+1SRAK8QKrO7BdV2JGoVDhEeBChaRWpjh4qEAMhb41EEQKydS0+6n3WEPKWJ3KABIOh/+mjnETOICog49PMYbUgyaBnDQBBIP7I0G5Gf2MAAIJBYlSEtQMKCFEiQpinD5QaIexPGv9VRP4CGflv2F/LSwkAAAAASUVORK5CYII="
                  alt="trust--v1"
                ></img>
                <div className="text-[var(--color-secondary-text)]">
                  <div className="font-bold text-xl text-[var(--color-primary-text)] pb-1">
                    Women Empowerment
                  </div>
                  <li className="list-disc">
                    <span className="font-bold">200 women trained</span> in
                    tailoring.
                  </li>
                  <li className="list-disc">
                    Rights awareness, financial literacy, entrepreneurship
                    support.
                  </li>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <img
                  className="rounded-[6px] w-7 h-7"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEFElEQVR4nO2ZeVDNURTHb5tQlKVJwsietBCpiCwllMnWSE2TZVBGJSEGYUJlC80kzUSUoaTGPhEhGdvYxqCxL8mSZTC2N/M1547e9OYtvd771e9l3h9nfu/9fvf37vncc86955zHGGP4T4SJrYAehOktwkR3H+hjhIm/0tBbhDXw6pmYGGPaZB+cPJSKg7vXISF+Nlxd+sDAwKBpWMTZsSc2JUbh1f2jkFSXy8nTO4WIjwmDuVkL3QOxtbHC4qhQ3C7LUai8Inl2twjDhvQXH4RcZMwod5wqSMXv92VqA0hqyffK8/BwcxQXJCM1XiPlJbXk17syBE/xFQ8kfPp4rSEk1eU8lkRzrc621qh+Wqw1xPfK82jX1kI8kPzs9YJYIzdzrSbzCwPh5emiUKlvlaV4fOtwvUBGe7uJB3I4J1mhUgsjg9GsmQncB/XDpABvjPXxQMWNQ0ohXtw7AiMjQ/FAqipOyO06q5bMktuW6SRXZY2UtQs01UEYkMJcWYtM9PeWG7M8NlwlxJ8Pl+Bg301ckBkh/jJKbUuOlXk+xN0ZP99eVAmSn71eGx2EAbFobc4Du0apFXEz+P0edp2Qs2tNnRCUf9lYtxMfhGRfxmquVEzENP6drnQm1LVLPbpZAPteXbWdXzgQ2pl2bVvGP1PQ1gXwo+oCtqcsQhvLVkLMzwQDqXGxkKAxKgE+PCnG5nXR6G5nK+TcDEILZb3KIMgCBNsA8zJBfsjRoQc2JETyz1T5Kcqf5oQH8ud0DfDz0k0Qf7+hXOG+ve3gOdgJX16WSCEeXM/DwP72MDY2QvqWpfwelbc6DXL1bBYvVakynBkaAL/RHhygSydrlB5Ll8LpPIjkX+0dMWsS3FwdMM7XE6lJC/H19TkZV2sSIBI1RA/CGtgiA5z74EBWotoyNXCU+K5lamoC76EDEBrkx11Kg7IUrcxb8vqEYqljh/aNC2Jt1RaJK+fxk7m2v1NCeDxvCz/RzVqqbq7RNrxzazw+vyiRKaYsLbQ+JJlaA6nJVju7VSakYHZ6AnxHDpZWetQipZW/UZqt9D0azxoDpCg3pV67Uk1qHjs/mL9fXpypdNzHZ6dh1d5SN0AoFd+REof71w7KuR0diGkb4xS+V3IkDS5OvRovRorqAKHmA20CNLZnt86ImhvEy9+4BSG8Vr9SkiUz/uLJDIzwchUCAIK7FsVHwb4kzA6bwFMUeo86KEmr50vHEBClLQICoN4g1BygdIM6iuQu1Msid3rzULaDUiNPbhdKU5ObF/Ziwlgvbf8DgdYgmduX8w67omcERau8J30VPj0/IwNz9/J+fvgZGmrUq4LgIKSsOuNaNDdF4PjhWBIdyq8aNtvQYCBNQJjYCuhBmN4iTHT3gT5GmPgrrZb8BYXYLwfl7AQUAAAAAElFTkSuQmCC"
                  alt="giving"
                ></img>
                {/* <div className="w-2 h-2 bg-[var(--color-primary-text)] rounded-full mt-2 shrink-0"></div> */}
                <div className="text-[var(--color-secondary-text)]">
                  <div className="font-bold text-xl text-[var(--color-primary-text)] pb-1">
                    Humanitarian relief program
                  </div>
                  <li className="list-disc">
                    <span className="font-semibold">Emergency Help:</span>{" "}
                    Providing food, water, shelter, and medical aid during
                    disasters.
                  </li>
                  <li className="list-disc">
                    <span className="font-semibold">Recovery Support:</span>{" "}
                    Helping families rebuild and prepare for future emergencies.
                  </li>
                </div>
              </li>
              <li className="hidden flex items-start space-x-3">
                <div className="w-2 h-2 bg-[var(--color-primary-text)] rounded-full mt-2 shrink-0"></div>
                <div className="text-[var(--color-secondary-text)]">
                  <span className="font-semibold">Family Support:</span>{" "}
                  Counseling and guidance for families to better support their
                  children
                </div>
              </li>
              <li className="hidden flex items-start space-x-3">
                <div className="w-2 h-2 bg-[var(--color-primary-text)] rounded-full mt-2 shrink-0"></div>
                <div className="text-[var(--color-secondary-text)]">
                  <span className="font-semibold">Community Integration:</span>{" "}
                  Programs to help children participate actively in community
                  activities
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column - Image/Visual Content */}
          <div className=" hidden md:block pl-13 flex items-center justify-center">
            <img
              src={sec2}
              alt="rescued kid studying"
              className=" w-auto h-auto max-w-[480px] max-h-[568px] pl-12 "
            ></img>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen py-10 bg-white">
        <div className="flex flex-row items-start mx-4 md:ml-16 px-4 md:pl-12 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="3"
            viewBox="0 0 72 3"
            fill="none"
            className="shrink-0 mt-3 mr-3 w-8 sm:w-16 md:w-[72px] transition-all duration-300"
          >
            <path d="M0 1.5H72" stroke="#1D2130" strokeWidth="2" />
          </svg>
          <div className="text-base font-bold tracking-wide text-[var(--color-primary-text)] uppercase">
            Projects we have done
          </div>
        </div>
        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-8 mx-8 md:ml-30 px-4 md:pl-[72px]">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="font-bold text-2xl md:text-3xl leading-tight text-[var(--color-primary-text)] max-w-[640px]">
              We are creating a place where children with special needs can
              thrive
            </h2>
            <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                className="rounded-[20px] h-80 bg-center bg-cover relative overflow-hidden shadow-3xl"
                style={{ backgroundImage: `url(${proj1})` }}
              >
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg mb-2">
                    Mission smile
                  </h3>
                  <p className="text-white text-sm opacity-90">Kids studying</p>
                  <button className="mt-4 btn-secondary text-white text-sm w-48">
                    Learn more
                  </button>
                </div>
              </div>
              <div
                className="rounded-[20px] h-80 bg-center bg-cover relative overflow-hidden shadow-3xl"
                style={{ backgroundImage: `url(${proj1})` }}
              >
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Weekly excursions
                  </h3>
                  <p className="text-white text-sm opacity-90">
                    Lorem ipsum dolor sit amet...
                  </p>
                  <button className="mt-4 btn-secondary text-white text-sm w-48">
                    Learn more
                  </button>
                </div>
              </div>
              <div
                className="rounded-[20px] h-80 bg-center bg-cover relative overflow-hidden shadow-3xl"
                style={{ backgroundImage: `url(${proj1})` }}
              >
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Monthly public awareness
                  </h3>
                  <p className="text-white text-sm opacity-90">
                    Lorem ipsum dolor sit amet...
                  </p>
                  <button className="mt-4  btn-secondary text-white text-sm w-48">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=""></section>
    </div>
  );
}
