import { getAll } from "../../../api/cateNews";
const News = {
async render(cateId) {
const { data: newsCateList } = await getAll();

return /* html */ `
<section class="bg-[#f3f4f6] py-9 "> 
    <div class="container max-w-6xl mx-auto px-3">
        <div class="">
            <p class="text-base font-semibold leading-7 text-indigo-600 mx-auto text-center">Deploy faster</p>
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mt-2">PHƯƠNG PHÁP
                GIAO DỊCH</h1>

        </div>

        <!-- Product List -->
        <section class="py-10 bg-gray-100 ">
            <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <article
                    class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                    <a href="#">
                        <div class="relative flex items-end overflow-hidden rounded-xl">
                            <img src="https://res.cloudinary.com/ddxwrjamy/image/upload/v1686208648/ttdativasdmw9jotircd.jpg"
                                alt="Hotel Photo" />
                            <div
                                class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>

                                <button class="text-sm">Tham Gia</button>
                            </div>
                        </div>

                        <div class="mt-1 p-2">
                            <h2 class="text-slate-700">Copy Trader</h2>
                            <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                            <div class="mt-3 flex items-end justify-between">
                            <div class="flex flex-row-reverse md:mt-2 lg:mt-0">
                            <span
                                class="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 "> +91</span><span
                                class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <img class="h-full w-full rounded-full object-cover"
                                    src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png"
                                    alt="">
                            </span>
                            <span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <img class="h-full w-full rounded-full object-cover"
                                    src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png"
                                    alt="">
                            </span>
                            <span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <img class="h-full w-full rounded-full object-cover"
                                    src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png"
                                    alt="">
                            </span>
                        </div>
                                <div
                                    class="flex items-center space-x-1.5 rounded-lg bg-amber-400 px-4 py-1.5 text-white duration-100 hover:bg-amber-300">
                                    <i class="fas fa-angle-right"></i>
                                    <a href="https://t.me/simfx_copytrade">
                                    <button class="text-sm">Tham Gia</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </a>
                </article>
                <article
                    class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                    <a href="#">
                        <div class="relative flex items-end overflow-hidden rounded-xl">
                            <img src="https://res.cloudinary.com/ddxwrjamy/image/upload/v1686208497/v9uxg7js7oke8vx1249v.jpg"
                                alt="Hotel Photo" />
                            <div
                                class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                
                            </div>
                        </div>

                        <div class="mt-1 p-2">
                            <h2 class="text-slate-700">Robot Trade</h2>
                            <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                            <div class="mt-3 flex items-end justify-between">
                            <div class="flex flex-row-reverse md:mt-2 lg:mt-0">
                            <span
                                class="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 ">+421</span><span
                                class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <img class="h-full w-full rounded-full object-cover"
                                    src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png"
                                    alt="">
                            </span>
                            <span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <img class="h-full w-full rounded-full object-cover"
                                    src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png"
                                    alt="">
                            </span>
                            <span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <img class="h-full w-full rounded-full object-cover"
                                    src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png"
                                    alt="">
                            </span>
                        </div>
                                <div
                                    class="flex items-center space-x-1.5 rounded-lg bg-amber-400 px-4 py-1.5 text-white duration-100 hover:bg-amber-300">
                                    <i class="fas fa-angle-right"></i>
                                    <a href="https://t.me/snirobottradegold">
                                    <button class="text-sm">Tham Gia</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </a>
                </article>

                <article
                    class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                    <a href="#">
                        <div class="relative flex items-end overflow-hidden rounded-xl">
                            <img src="https://res.cloudinary.com/ddxwrjamy/image/upload/v1686216643/anh-1-1623371930810985706108-57-0-492-696-crop-16233721284602049304397_w44kka.jpg"
                                alt="Hotel Photo" />

                        </div>

                        <div class="mt-1 p-2">
                            <h2 class="text-slate-700">Cộng Đồng Trader</h2>
                            <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                            <div class="mt-3 flex items-end justify-between">
                                <div class="flex flex-row-reverse md:mt-2 lg:mt-0">
                                    <span
                                        class="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 ">+421</span><span
                                        class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                        <img class="h-full w-full rounded-full object-cover"
                                            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png"
                                            alt="">
                                    </span>
                                    <span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                        <img class="h-full w-full rounded-full object-cover"
                                            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png"
                                            alt="">
                                    </span>
                                    <span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                        <img class="h-full w-full rounded-full object-cover"
                                            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png"
                                            alt="">
                                    </span>
                                </div>
                                <div
                                    class="flex items-center space-x-1.5 rounded-lg bg-amber-400 px-4 py-1.5 text-white duration-100 hover:bg-amber-300">
                                    <i class="fas fa-angle-right"></i>

                                    <a href="https://t.me/simfxgroupchat">
                                    <button class="text-sm">Tham Gia</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </a>
                </article>

                <article
                    class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                    <a href="#">
                        <div class="relative flex items-end overflow-hidden rounded-xl">
                            <img src="https://res.cloudinary.com/ddxwrjamy/image/upload/v1686208355/iae6wkwdwkhycwly5hha.jpg"
                                alt="Hotel Photo" />
                            <div
                                class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span class="ml-1 text-sm text-slate-400">100 $</span>
                            </div>
                            <div
                                class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>

                                <button class="text-sm">Đăng Ký</button>
                            </div>
                        </div>

                        <div class="mt-1 p-2">
                            <h2 class="text-slate-700">Tín Hiệu Vip</h2>
                            <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                            <div class="mt-3 flex items-end justify-between">
                                <p class="text-lg font-bold text-blue-500"></p>
                                <div
                                    class="flex items-center space-x-1.5 rounded-lg bg-amber-400 px-4 py-1.5 text-white duration-100 hover:bg-amber-300">
                                    <i class="fas fa-angle-right"></i>
                                    <a href="/#/contact">
                                        <button class="text-sm">Đăng Ký</button>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </a>
                </article>
        </section>
    </div>
</section>
`;
},
};

export default News;