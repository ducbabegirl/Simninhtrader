import { getAllJoinCategory } from "../../api/product";
import Footer from "../../components/user/footer";
import Header from "../../components/user/header";
import ProductContent from "../../components/user/products/productContent";
import Sidebar from "../../components/user/products/sidebar";

const ProductsPage = {
    getTitle() {
        return "Sách - SimNinh";
    },
    async render(pageNumber) {
        let currentPage = pageNumber;
        const { data } = await getAllJoinCategory();

        // phân trang
        const limit = 9; // limit
        const total = data.length; // tổng số sp
        const totalPage = Math.ceil(total / limit); // tổng số page
        currentPage = pageNumber ?? 1; // lấy số trang hiện tại
        if (currentPage >= totalPage) {
            currentPage = totalPage;
        } else if (currentPage < 0) {
            currentPage = 1;
        }
        const start = (currentPage - 1) * limit;

        // ds sp theo limit
        const { data: productList } = await getAllJoinCategory(start, limit);

        return /* html */ `
        ${await Header.render("products")}

        <!-- content -->
        <main>
            <section class="container max-w-6xl mx-auto px-3 pt-8 mb-5 text-center">
                <div class="flex justify-center">
                    <a href="/#/" class="transition duration-300 ease-linear hover:text-[#ffbf00] block pr-6 font-semibold relative after:content-[''] after:absolute after:right-3 after:bg-gray-500 after:w-[1px] after:h-4 after:rotate-12 after:top-1/2 after:-translate-y-1/2">Trang chủ</a>
                    <a href="/#/products" class="transition duration-300 ease-linear hover:text-[#ffbf00] font-semibold">Sản phẩm</a>
                </div>
                <h1 class="text-[#ffbf00] font-semibold text-3xl mt-1">Danh sách</h1>
            </section>

            <section class="container max-w-6xl mx-auto px-3 grid grid-cols-12 gap-6 mb-8">
                ${await Sidebar.render()}

                ${ProductContent.render(productList, currentPage, total, totalPage, start, limit, "products")}
            </section>
        </main>
        <!-- end content -->

        ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
        Footer.afterRender();
        ProductContent.afterRender();
    },
};

export default ProductsPage;