import React, { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/"
  },
  {
    id: "about",
    title: "About",
    path: "#about"
  },
  {
    id: "education",
    title: "Education",
    path: "#education"
  },
  {
    id: "skills",
    title: "Skills",
    path: "#skills"
  },
  {
    id: "projects",
    title: "Projects",
    path: "#projects"
  },
  {
    id: "experience",
    title: "Experience",
    path: "#experience"
  },
  {
    id: "contact",
    title: "Contact",
    path: "#contact"
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <header>
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          {/* my name */}
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="text-3xl"><span className="text-green-500">A</span>yan <span className="text-green-500">B</span>era</span>
            </a>
          </div>
          {/* other menu on large screen */}
          <div className="flex lg:hidden">
            {/* menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <Bars3Icon aria-hidden="true" className="h-6 w-6" color="white" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            {navLinks &&
              navLinks.map((link) => (
                <a
                  key={link?.id}
                  href={link?.path}
                  className="text-xl font-semibold leading-6 text-white-900"
                >
                  {link?.title}
                </a>
              ))}
          </PopoverGroup>
        </nav>
        {/* other menus on mobile screen */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navLinks &&
                    navLinks.map((link) => (
                      <a
                        key={link?.id}
                        href={link?.path}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {link?.title}
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
};

export default Header;
