import React from "react";

function Footer() {
  return (
    <div className=" dark:bg-neutral-900 pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-[90rem] mx-auto pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)] py-12">
        <div className="flex justify-between flex-col-reverse md:flex-row items-center md:items-end">
          <span className="text-gray-600 dark:text-gray-400">
            <footer>
              <div className="py-8 mx-auto max-w-7xl">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                  <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                      <div>
                        <h3 className="text-sm text-white dark:text-white">
                          Solutions
                        </h3>
                        <ul
                          className="mt-4 space-y-1.5 list-none ml-0"
                          role="list"
                        >
                          <li>
                            <a
                              className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                              href=""
                            >
                              Documentation
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                              href=""
                            >
                              API Reference
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                              href=""
                            >
                              Blog
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                              href=""
                            >
                              Releases
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                              href=""
                            >
                              FAQ
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                              href=""
                            >
                              Enterprise
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-12 md:!mt-0">
                        <h3 className="text-sm text-white dark:text-white">
                          Support
                        </h3>
                        <ul className="mt-4 space-y-1.5 list-none ml-0">
                            <li>
                                <a className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition" href="">GitHub</a>
                            </li>
                            <li>
                                <a className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition" href="">Discord</a>
                            </li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 className="text-sm text-white dark:text-white">Company</h3>
                            <ul className="mt-4 space-y-1.5 list-none ml-0">
                                <li>
                                    <a className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition" href="">Open Source Software</a>
                                </li>
                                <li>
                                    <a className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition" href="">GitHub</a>
                                </li>
                                <li>
                                    <a className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition" href="">Twitter</a>
                                </li>

                            </ul>
                        </div>
                        <div className="mt-12 md:!mt-0">
                            <h3 className="text-sm text-white dark:text-white">Legal</h3>
                            <ul className="mt-4 space-y-1.5 list-none ml-0">
                                <li>
                                    <a className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition" href="">Privacy Policy</a>
                                </li>
                                <li>
                                    <a className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition" href="">Terms of Use</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
