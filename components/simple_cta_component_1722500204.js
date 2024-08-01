/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722500204", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-400 via-purple-500 to-black flex-1 min-h-screen flex items-center justify-center">
        <div id="cta-inner-container" class="max-w-screen-xl px-8 py-16 mx-auto backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white dark:bg-opacity-30 dark:bg-black rounded-3xl shadow-2xl">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white dark:text-purple-200 text-shadow">Unlock Blockchain Insights</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-8 font-medium text-pink-100 dark:text-pink-200 md:text-xl">Harness the power of our cutting-edge blockchain analysis platform in this cosmic realm.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 focus:ring-4 focus:ring-purple-300 font-bold rounded-full text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-offset-2 focus:ring-offset-purple-200">Explore New Dimensions</a>
                </div>
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
