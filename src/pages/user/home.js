import $ from "jquery";
import Header from "../../components/user/header";
import Hea from "../../components/user/home/hea";
import Why from "../../components/user/home/why";
import Category from "../../components/user/home/category";
import News from "../../components/user/home/news";

import Footer from "../../components/user/footer";

import "slick-carousel";
import Products from "../../components/user/home/products";
import Feedback from "../../components/user/home/feedback";

const HomePage = {
    getTitile() {
        return "Trang chủ - SimNinh Trader"
    },
    async render() {
        return/* html */ `
    ${await Hea.render("home")}
    
    <main> 
     <!-- banner -->
    ${await Header.render()}
     <!-- end banner -->
     <!-- why -->
     ${await Category.render()}
     <!-- end why -->
     <!-- why -->
     ${await News.render()}
     <!-- end why -->

      <!-- why -->
      ${ await Why.render()}
      <!-- end why -->
      
    
      <!-- why -->
      ${await Products.render()}
      <!-- end why -->
     
      <!-- why -->
      ${await Feedback.render()}
      <!-- end why -->
      <!-- why -->
     
      <!-- end why -->

      <!-- why -->
     
      <!-- end why -->
    
    </main>


    ${Footer.render()}
    `;

    },
    afterRender() {

        Header.afterRender();
        Why.afterRender();
        
        Footer.afterRender();

        // slider
        $(document).ready(() => {
            $("#banner").slick({
                autoplay: true,
                prevArrow: /* html */ `<button class="invisible group-hover:visible w-9 h-9 absolute top-1/2 -translate-y-1/2 z-10 left-6 group-hover:left-4 transition-all ease-linear duration-200 hover:bg-[#D9A953] hover:text-white hover:border-[#D9A953] rounded-full border-2 border-gray-400 text-gray-400"><i class="fas fa-chevron-left"></i></button>`,
                nextArrow: /* html */ `<button class="invisible group-hover:visible w-9 h-9 absolute top-1/2 -translate-y-1/2 z-10 right-6 group-hover:right-4 transition-all ease-linear duration-200 hover:bg-[#D9A953] hover:text-white hover:border-[#D9A953] rounded-full border-2 border-gray-400 text-gray-400"><i class="fas fa-chevron-right"></i></button>`,
            });

            $("#home__show").slick({
                slidesToShow: 6,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 5,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                ],
                prevArrow: /* html */ `<button class="invisible group-hover:visible w-9 h-9 absolute top-1/2 -translate-y-1/2 z-10 left-6 group-hover:left-4 transition-all ease-linear duration-200 hover:bg-[#D9A953] hover:text-white hover:border-[#D9A953] rounded-full border-2 border-gray-400 text-gray-400"><i class="fas fa-chevron-left"></i></button>`,
                nextArrow: /* html */ `<button class="invisible group-hover:visible w-9 h-9 absolute top-1/2 -translate-y-1/2 z-10 right-6 group-hover:right-4 transition-all ease-linear duration-200 hover:bg-[#D9A953] hover:text-white hover:border-[#D9A953] rounded-full border-2 border-gray-400 text-gray-400"><i class="fas fa-chevron-right"></i></button>`,
            });

            $("#home__feedback").slick({
                autoplay: true,
                prevArrow: /* html */ `<button class="invisible group-hover:visible w-9 h-9 absolute top-1/2 -translate-y-1/2 z-10 left-6 group-hover:left-4 transition-all ease-linear duration-200 hover:bg-[#D9A953] hover:text-white hover:border-[#D9A953] rounded-full border-2 border-gray-400 text-gray-400"><i class="fas fa-chevron-left"></i></button>`,
                nextArrow: /* html */ `<button class="invisible group-hover:visible w-9 h-9 absolute top-1/2 -translate-y-1/2 z-10 right-6 group-hover:right-4 transition-all ease-linear duration-200 hover:bg-[#D9A953] hover:text-white hover:border-[#D9A953] rounded-full border-2 border-gray-400 text-gray-400"><i class="fas fa-chevron-right"></i></button>`,
            });
        });




    },

}

export default HomePage