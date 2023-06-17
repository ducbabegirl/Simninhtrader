import Navigo from "navigo";
import "slick-carousel/slick/slick.css";
import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "toastr/build/toastr.css";
import "sweetalert2/dist/sweetalert2.css";

import HomePage from "./pages/user/home";
import ContactPage from "./pages/user/contact";
import NotFoundPage from "./pages/user/notFound";
import DashboardPage from "./pages/admin/dashboard";
import RegisterPage from "./pages/auth/register";
import LoginPage from "./pages/auth/login";
import { getUser } from "./utils";

import ProductsPage from "./pages/user/products";
import ProductDetailPage from "./pages/user/productDetails";
import ProductByCatePage from "./pages/user/productByCate";

import SearchProductPage from "./pages/user/searchProduct";

import AdminProductListPage from "./pages/admin/product";
import AdminAddProductPage from "./pages/admin/product/add";
import AdminEditProductPage from "./pages/admin/product/edit";

import AdminCateListPage from "./pages/admin/category";
import AdminAddCatePage from "./pages/admin/category/add";
import AdminEditCatePage from "./pages/admin/category/edit";

import AdminUserListPage from "./pages/admin/user";
import AdminAddUserPage from "./pages/admin/user/add";
import AdminEditUserPage from "./pages/admin/user/edit";

import AdminProfilePage from "./pages/admin/profile";
import AdminUpdatePassPage from "./pages/admin/profile/updatePass";

import AdminCmtListPage from "./pages/admin/comments";
import AdminDetailCmtPage from "./pages/admin/comments/detail";

import AdminNewsListPage from "./pages/admin/news";
import AdminAddNewsPage from "./pages/admin/news/add";
import AdminEditNewsPage from "./pages/admin/news/edit";


import AdminStoreListPage from "./pages/admin/store";
import AdminAddStorePage from "./pages/admin/store/add";
import AdminEditStorePage from "./pages/admin/store/edit";
import AdminContactListPage from "./pages/admin/contact";
import AdminDetailContactPage from "./pages/admin/contact/details";





const router = new Navigo("/", { linksSelector: "a", hash: true });
const print = async (content, id, pageNumber) => {
  document.querySelector("#app").innerHTML = await content.render(id, pageNumber);

  if (content.afterRender) content.afterRender(id);

  // change title
  if (content.getTitle) document.title = await content.getTitle(id);
};
router.on("/admin/*", () => { }, {
  before(done) {
    const userInfo = getUser();

    if (userInfo && userInfo.role) {
      done();
    } else {
      document.location.href = "/#/";
    }
  },
});
router.on("/my-account/*", () => { }, {
  before(done) {
    const userInfo = getUser();

    if (userInfo) {
      done();
    } else {
      document.location.href = "/#/";
    }
  },
});


router.on({
  "/": () => {
    print(HomePage)
  },
 


  "/contact": () => {
    print(ContactPage);
  },
  "/login": () => {
    print(LoginPage);
  },
  "/register": () => {
    print(RegisterPage);
  },
  "/products": () => {
    print(ProductsPage);
  },
  "/products/page/:page": ({ data }) => {
    print(ProductsPage, data.page);
  },
  "/product/:id": ({ data }) => {
    print(ProductDetailPage, data.id);
  },
  "/product/:id/page/:page": ({ data }) => {
    print(ProductDetailPage, data.id, data.page);
  },
  "/product/search/:keyword": ({ data }) => {
    print(SearchProductPage, data.keyword);
  },
  "/product/search/:keyword/page/:page": ({ data }) => {
    print(SearchProductPage, data.keyword, data.page);
  },
  "/category/:id": ({ data }) => {
    print(ProductByCatePage, data.id);
  },
  "/category/:id": ({ data }) => {
    print(ProductByCatePage, data.id);
  },
  "/category/:id/page/:page": ({ data }) => {
    print(ProductByCatePage, data.id, data.page);
  },
  "/admin": () => {
    print(DashboardPage);
  },
  "/admin/product": () => {
    print(AdminProductListPage);
  },
  "/admin/product/page/:page": ({ data }) => {
    print(AdminProductListPage, data.page);
  },
  "/admin/product/add": () => {
    print(AdminAddProductPage);
  },
  "/admin/product/:id/edit": ({ data }) => {
    print(AdminEditProductPage, data.id);
  },
  "/admin/category": () => {
    print(AdminCateListPage);
  },
  "/admin/category/page/:page": ({ data }) => {
    print(AdminCateListPage, data.page);
  },
  "/admin/category/add": () => {
    print(AdminAddCatePage);
  },
  "/admin/category/:id/edit": ({ data }) => {
    print(AdminEditCatePage, data.id);
  },
  "/admin/user": () => {
    print(AdminUserListPage);
  },
  "/admin/user/page/:page": ({ data }) => {
    print(AdminUserListPage, data.page);
  },
  "/admin/user/add": () => {
    print(AdminAddUserPage);
  },
  "/admin/user/:id/edit": ({ data }) => {
    print(AdminEditUserPage, data.id);
  },
  "/admin/profile": () => {
    print(AdminProfilePage);
  },
  "/admin/profile/change-password": () => {
    print(AdminUpdatePassPage);
  },
  "/admin/comment": () => {
    print(AdminCmtListPage);
  },
  "/admin/comment/:id/detail": ({ data }) => {
    print(AdminDetailCmtPage, data.id);
  },
  "/admin/news": () => {
    print(AdminNewsListPage);
  },
  "/admin/news/page/:page": ({ data }) => {
    print(AdminNewsListPage, data.page);
  },
  "/admin/news/add": () => {
    print(AdminAddNewsPage);
  },
  "/admin/news/:id/edit": ({ data }) => {
    print(AdminEditNewsPage, data.id);
  },
  "/admin/store": () => {
    print(AdminStoreListPage);
},
"/admin/store/page/:page": ({ data }) => {
    print(AdminStoreListPage, data.page);
},
"/admin/store/add": () => {
    print(AdminAddStorePage);
},
"/admin/store/:id/edit": ({ data }) => {
    print(AdminEditStorePage, data.id);
},
"/admin/contact": () => {
  print(AdminContactListPage);
},
"/admin/contact/page/:page": ({ data }) => {
  print(AdminContactListPage, data.page);
},
"/admin/contact/:id/detail": ({ data }) => {
  print(AdminDetailContactPage, data.id);
},


})
router.notFound(() => {
  print(NotFoundPage);
});

router.resolve();





