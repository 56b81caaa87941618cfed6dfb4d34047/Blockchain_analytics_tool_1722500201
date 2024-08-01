/* Summary: The hero component contains the following two parts:
- To the left: There is a hero title text in h1 heading. Underneath it, a hero subtitle line of text. All this text is left-aligned. Underneath this, there are two white buttons in the same line, both justified in alignment.
- To the right: There is an image relevant to the app.
*/
Vue.component("simple_hero_component_1722500204", {
    template: `
        <section id="hero-section" class="bg-gradient-to-br from-pink-500 via-purple-600 to-black flex-1 min-h-screen">
            <nav class="bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 dark:border-gray-700">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" class="flex items-center">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Logo</span>
                    </a>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent">
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-purple-700 md:hover:bg-transparent md:border-0 md:hover:text-pink-300 md:p-0" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-purple-700 md:hover:bg-transparent md:border-0 md:hover:text-pink-300 md:p-0">About</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-purple-700 md:hover:bg-transparent md:border-0 md:hover:text-pink-300 md:p-0">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="hero-container" class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                <div id="hero-text-container" class="mr-auto place-self-center lg:col-span-7">
                    
                    <div id="hero-title-container-text" class="flex">
                        <h1 id="hero-title" class="flex-1 max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">Unlock the Power of Blockchain Analytics</h1>
                    </div>

                    <div id="hero-subtitle-container" class="flex">
                        <p id="hero-subtitle" class="flex-1 max-w-2xl mb-6 font-light text-pink-200 lg:mb-8 md:text-lg lg:text-xl">Gain Invaluable Insights into Emerging Blockchain Data</p>
                    </div>

                    <div id="hero-buttons-container" class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <div id="hero-button-1-container" class="flex">
                            <a id="hero-button-1" href="https://github.com/themesberg/landwind" class="flex-1 items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white bg-purple-600 rounded-lg sm:w-auto hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 backdrop-filter backdrop-blur-lg bg-opacity-30">Start Analyzing Now</a>
                        </div>

                        <div id="hero-button-2-container" class="flex">
                            <a id="hero-button-2" href="https://www.figma.com/community/file/1125744163617429490" class="flex-1 items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-white bg-pink-500 rounded-lg sm:w-auto focus:outline-none hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 backdrop-filter backdrop-blur-lg bg-opacity-30">Learn More</a>
                        </div>
                        <div id="hero-button-3-container" class="flex">
                            <button id="hero-button-3" class="flex-1 items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-white bg-black rounded-lg sm:w-auto focus:outline-none hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 backdrop-filter backdrop-blur-lg bg-opacity-30">Hello World</button>
                        </div>
                    </div>
                    
                </div>
                <div id="hero-image-container" class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img id="hero-image" src="./images/hero.png" alt="hero image" class="rounded-lg shadow-2xl">
                </div>
            </div>
        </section>            
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
