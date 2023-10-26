"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <header>
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Image
            src={"/assests/logo.png"}
            width={200}
            height={100}
            alt="logo"
            className="w-[150px] md:w-[200px]"
          />
        </div>
        <nav className="nav__menu hidden md:block md:flex-grow mr-20 z-10">
          <ul className="menu flex text-lg tracking-wide font-base text-white gap-20 justify-end">
            <li className="brightness-90 hover:brightness-100">
              <Link href={"#about"}>
                About Us
              </Link>
            </li>

            <li className="brightness-90 hover:brightness-100">
              <Link href={"#mission"}>
                Our Mission
              </Link>
            </li>

            <li className="brightness-90 hover:brightness-100">
              <Link href={"#vision"}>
                Our Vision
              </Link>
            </li>
          </ul>
        </nav>
        <div className="button hidden md:flex bg-primary z-10 md:w-[177px] md:h-[54px] justify-center items-center rounded-[10px] text-white ">
          <Button text="Contact Us" link="#contact" />
        </div>
        <div className="hamburger sm:hidden z-10">
          {toggleMenu ? (
            <GiHamburgerMenu
              onClick={() => setToggleMenu(false)}
              color="white"
              fontSize="28px"
            />
          ) : (
            <AiOutlineClose
              onClick={() => setToggleMenu(true)}
              color="white"
              fontSize="28px"
            />
          )}
        </div>
      </div>
      <div className="mobileMenu sm:hidden">
        {!toggleMenu && (
          <nav className="absolute container top-24 py-10 left-0 w-full list-none flex flex-col gap-5 font-medium tracking-wide text-white z-10 bg-primary">
            <ul className="list__item flex flex-col gap-5">
              <li>
                <Link href={"#about"}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href={"#mission"}>
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href={"#vision"}>
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href={"#contact"}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
