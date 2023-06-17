import toastr from "toastr";
import $ from "jquery";
// eslint-disable-next-line no-unused-vars
import validate from "jquery-validation";
import Footer from "../../components/user/footer";
import Header from "../../components/user/header";
import { getAll } from "../../api/store";
import { add } from "../../api/contact";
import { reRender } from "../../utils";

const ContactPage = {
    getTitle() {
        return "Liên hệ - SimNinh Trader";
    },
    async render() {
        const { data: storeList } = await getAll();

        return /* html */ `
        ${await Header.render("contact")}

        <!-- content -->
        <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />

        <!-- ====== Contact Section Start -->
        <section class="bg-white py-20 lg:py-[120px] overflow-hidden relative z-10">
            <div class="container">
                <div class="flex flex-wrap lg:justify-between -mx-4">
                    <div class="w-full lg:w-1/2 xl:w-6/12 px-4">
                        <div class="max-w-[570px] mb-12 lg:mb-0">
                            <span class="block mb-4 text-base text-primary font-semibold">
                                Contact Us
                            </span>
                            <h2 class="
                          text-dark
                          mb-6
                          uppercase
                          font-bold
                          text-[32px]
                          sm:text-[40px]
                          lg:text-[36px]
                          xl:text-[40px]
                          ">
                                GET IN TOUCH WITH US
                            </h2>
                            <p class="text-base text-body-color leading-relaxed mb-9">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                adiqua minim veniam quis nostrud exercitation ullamco
                            </p>
        
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
                        <div class="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
                            <form  id="contact__form">
                                <div class="mb-6">
                                    <input type="text" placeholder="Họ và tên" name="contact__form-name" id="contact__form-name" class="
                                w-full
                                rounded
                                py-3
                                px-[14px]
                                text-body-color text-base
                                border border-[f0f0f0]
                                outline-none
                                focus-visible:shadow-none
                                focus:border-primary
                                "  />
                                </div>
                                <div class="mb-6">
                                    <input type="email" placeholder=" Email" id="contact__form-email" name="contact__form-email" class="
                                w-full
                                rounded
                                py-3
                                px-[14px]
                                text-body-color text-base
                                border border-[f0f0f0]
                                outline-none
                                focus-visible:shadow-none
                                focus:border-primary
                                " />
                                </div>
                                <div class="mb-6">
                                    <input type="text" placeholder="Số điện thoại"  id="contact__form-phone" name="contact__form-phone" class="
                                w-full
                                rounded
                                py-3
                                px-[14px]
                                text-body-color text-base
                                border border-[f0f0f0]
                                outline-none
                                focus-visible:shadow-none
                                focus:border-primary
                                " />
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                <select name="contact__form-store" id="contact__form-store" class="outline-none w-full p-2.5 bg-slate-50 ">
                                    <option class="">Vui Lòng Chọn</option>
                                    ${storeList.map((store) => `<option value="${store.id}">${store.name}</option>`).join("")}
                                 
                                  
                                </select>
                            </div>
                                <div class="mb-6 mt-5">
                                    <textarea rows="6" placeholder="Your Message" name="contact__form-content" id="contact__form-content" class="
                                w-full
                                rounded
                                py-3
                                px-[14px]
                                text-body-color text-base
                                border border-[f0f0f0]
                                resize-none
                                outline-none
                                focus-visible:shadow-none
                                focus:border-primary
                                "></textarea>
                                </div>
                                <div class="col-span-12">
                                <div class="flex items-center">
                                    <input type="checkbox" data-error=".error-checkbox" name="contact__form-checkbox" id="contact__form-checkbox">
                                    <label for="contact__form-checkbox" class="ml-2">Tôi xác nhận các thông tin cá nhân cung cấp ở trên là hoàn toàn chính xác</label>
                                </div>
                                <div class="error-checkbox pl-3 text-sm mt-0.5 text-red-500"></div>
                            </div>
                                <div>
                                <button type="submit" class="
                        w-full
                        text-white
                        bg-primary
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        ">
                                Send Message
                            </button>
                                </div>
                            </form>
                            <div>
                                <span class="absolute -top-10 -right-9 z-[-1]">
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                            fill="#fbbf24" />
                                    </svg>
                                </span>
                                <span class="absolute -right-10 top-[90px] z-[-1]">
                                    <svg width="34" height="134" viewBox="0 0 34 134" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)"
                                            fill="#13C296" />
                                        <circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)"
                                            fill="#13C296" />
                                        <circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)"
                                            fill="#13C296" />
                                        <circle cx="31.9993" cy="88" r="1.66667" transform="rotate(180 31.9993 88)"
                                            fill="#13C296" />
                                        <circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 73.3333)"
                                            fill="#13C296" />
                                        <circle cx="31.9993" cy="45" r="1.66667" transform="rotate(180 31.9993 45)"
                                            fill="#13C296" />
                                        <circle cx="31.9993" cy="16" r="1.66667" transform="rotate(180 31.9993 16)"
                                            fill="#13C296" />
                                        <circle cx="31.9993" cy="59" r="1.66667" transform="rotate(180 31.9993 59)"
                                            fill="#13C296" />
                                        <circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)"
                                            fill="#13C296" />
                                        <circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="132" r="1.66667" transform="rotate(180 17.3333 132)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="117.333" r="1.66667" transform="rotate(180 17.3333 117.333)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="102.667" r="1.66667" transform="rotate(180 17.3333 102.667)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="88" r="1.66667" transform="rotate(180 17.3333 88)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="73.3333" r="1.66667" transform="rotate(180 17.3333 73.3333)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="45" r="1.66667" transform="rotate(180 17.3333 45)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="16" r="1.66667" transform="rotate(180 17.3333 16)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="59" r="1.66667" transform="rotate(180 17.3333 59)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="30.6666" r="1.66667" transform="rotate(180 17.3333 30.6666)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="1.66665" r="1.66667" transform="rotate(180 17.3333 1.66665)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="132" r="1.66667" transform="rotate(180 2.66536 132)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="117.333" r="1.66667" transform="rotate(180 2.66536 117.333)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="102.667" r="1.66667" transform="rotate(180 2.66536 102.667)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="88" r="1.66667" transform="rotate(180 2.66536 88)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="73.3333" r="1.66667" transform="rotate(180 2.66536 73.3333)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="45" r="1.66667" transform="rotate(180 2.66536 45)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="16" r="1.66667" transform="rotate(180 2.66536 16)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="59" r="1.66667" transform="rotate(180 2.66536 59)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="30.6666" r="1.66667" transform="rotate(180 2.66536 30.6666)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="1.66665" r="1.66667" transform="rotate(180 2.66536 1.66665)"
                                            fill="#13C296" />
                                    </svg>
                                </span>
                                <span class="absolute -left-7 -bottom-7 z-[-1]">
                                    <svg width="107" height="134" viewBox="0 0 107 134" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="104.999" cy="132" r="1.66667" transform="rotate(180 104.999 132)"
                                            fill="#13C296" />
                                        <circle cx="104.999" cy="117.333" r="1.66667" transform="rotate(180 104.999 117.333)"
                                            fill="#13C296" />
                                        <circle cx="104.999" cy="102.667" r="1.66667" transform="rotate(180 104.999 102.667)"
                                            fill="#13C296" />
                                        <circle cx="104.999" cy="88" r="1.66667" transform="rotate(180 104.999 88)"
                                            fill="#13C296" />
                                        <circle cx="104.999" cy="73.3333" r="1.66667" transform="rotate(180 104.999 73.3333)"
                                            fill="#13C296" />
                                        <circle cx="104.999" cy="45" r="1.66667" transform="rotate(180 104.999 45)"
                                            fill="#13C296" />
                                        <circle cx="104.999" cy="16" r="1.66667" transform="rotate(180 104.999 16)"
                                            fill="#13C296" />
                                        <circle cx="104.999" cy="59" r="1.66667" transform="rotate(180 104.999 59)"
                                            fill="#13C296" />
                                        <circle cx="104.999" cy="30.6666" r="1.66667" transform="rotate(180 104.999 30.6666)"
                                            fill="#13C296" />
                                        <circle cx="104.999" cy="1.66665" r="1.66667" transform="rotate(180 104.999 1.66665)"
                                            fill="#13C296" />
                                        <circle cx="90.3333" cy="132" r="1.66667" transform="rotate(180 90.3333 132)"
                                            fill="#13C296" />
                                        <circle cx="90.3333" cy="117.333" r="1.66667" transform="rotate(180 90.3333 117.333)"
                                            fill="#13C296" />
                                        <circle cx="90.3333" cy="102.667" r="1.66667" transform="rotate(180 90.3333 102.667)"
                                            fill="#13C296" />
                                        <circle cx="90.3333" cy="88" r="1.66667" transform="rotate(180 90.3333 88)"
                                            fill="#13C296" />
                                        <circle cx="90.3333" cy="73.3333" r="1.66667" transform="rotate(180 90.3333 73.3333)"
                                            fill="#13C296" />
                                        <circle cx="90.3333" cy="45" r="1.66667" transform="rotate(180 90.3333 45)"
                                            fill="#13C296" />
                                        <circle cx="90.3333" cy="16" r="1.66667" transform="rotate(180 90.3333 16)"
                                            fill="#13C296" />
                                        <circle cx="90.3333" cy="59" r="1.66667" transform="rotate(180 90.3333 59)"
                                            fill="#13C296" />
                                        <circle cx="90.3333" cy="30.6666" r="1.66667" transform="rotate(180 90.3333 30.6666)"
                                            fill="#13C296" />
                                        <circle cx="90.3333" cy="1.66665" r="1.66667" transform="rotate(180 90.3333 1.66665)"
                                            fill="#13C296" />
                                        <circle cx="75.6654" cy="132" r="1.66667" transform="rotate(180 75.6654 132)"
                                            fill="#13C296" />
                                        <circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)"
                                            fill="#13C296" />
                                        <circle cx="75.6654" cy="117.333" r="1.66667" transform="rotate(180 75.6654 117.333)"
                                            fill="#13C296" />
                                        <circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)"
                                            fill="#13C296" />
                                        <circle cx="75.6654" cy="102.667" r="1.66667" transform="rotate(180 75.6654 102.667)"
                                            fill="#13C296" />
                                        <circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)"
                                            fill="#13C296" />
                                        <circle cx="75.6654" cy="88" r="1.66667" transform="rotate(180 75.6654 88)"
                                            fill="#13C296" />
                                        <circle cx="31.9993" cy="88" r="1.66667" transform="rotate(180 31.9993 88)"
                                            fill="#13C296" />
                                        <circle cx="75.6654" cy="73.3333" r="1.66667" transform="rotate(180 75.6654 73.3333)"
                                            fill="#13C296" />
                                        <circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 73.3333)"
                                            fill="#13C296" />
                                        <circle cx="75.6654" cy="45" r="1.66667" transform="rotate(180 75.6654 45)"
                                            fill="#13C296" />
                                        <circle cx="31.9993" cy="45" r="1.66667" transform="rotate(180 31.9993 45)"
                                            fill="#13C296" />
                                        <circle cx="75.6654" cy="16" r="1.66667" transform="rotate(180 75.6654 16)"
                                            fill="#13C296" />
                                        <circle cx="31.9993" cy="16" r="1.66667" transform="rotate(180 31.9993 16)"
                                            fill="#13C296" />
                                        <circle cx="75.6654" cy="59" r="1.66667" transform="rotate(180 75.6654 59)"
                                            fill="#13C296" />
                                        <circle cx="31.9993" cy="59" r="1.66667" transform="rotate(180 31.9993 59)"
                                            fill="#13C296" />
                                        <circle cx="75.6654" cy="30.6666" r="1.66667" transform="rotate(180 75.6654 30.6666)"
                                            fill="#13C296" />
                                        <circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)"
                                            fill="#13C296" />
                                        <circle cx="75.6654" cy="1.66665" r="1.66667" transform="rotate(180 75.6654 1.66665)"
                                            fill="#13C296" />
                                        <circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)"
                                            fill="#13C296" />
                                        <circle cx="60.9993" cy="132" r="1.66667" transform="rotate(180 60.9993 132)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="132" r="1.66667" transform="rotate(180 17.3333 132)"
                                            fill="#13C296" />
                                        <circle cx="60.9993" cy="117.333" r="1.66667" transform="rotate(180 60.9993 117.333)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="117.333" r="1.66667" transform="rotate(180 17.3333 117.333)"
                                            fill="#13C296" />
                                        <circle cx="60.9993" cy="102.667" r="1.66667" transform="rotate(180 60.9993 102.667)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="102.667" r="1.66667" transform="rotate(180 17.3333 102.667)"
                                            fill="#13C296" />
                                        <circle cx="60.9993" cy="88" r="1.66667" transform="rotate(180 60.9993 88)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="88" r="1.66667" transform="rotate(180 17.3333 88)"
                                            fill="#13C296" />
                                        <circle cx="60.9993" cy="73.3333" r="1.66667" transform="rotate(180 60.9993 73.3333)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="73.3333" r="1.66667" transform="rotate(180 17.3333 73.3333)"
                                            fill="#13C296" />
                                        <circle cx="60.9993" cy="45" r="1.66667" transform="rotate(180 60.9993 45)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="45" r="1.66667" transform="rotate(180 17.3333 45)"
                                            fill="#13C296" />
                                        <circle cx="60.9993" cy="16" r="1.66667" transform="rotate(180 60.9993 16)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="16" r="1.66667" transform="rotate(180 17.3333 16)"
                                            fill="#13C296" />
                                        <circle cx="60.9993" cy="59" r="1.66667" transform="rotate(180 60.9993 59)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="59" r="1.66667" transform="rotate(180 17.3333 59)"
                                            fill="#13C296" />
                                        <circle cx="60.9993" cy="30.6666" r="1.66667" transform="rotate(180 60.9993 30.6666)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="30.6666" r="1.66667" transform="rotate(180 17.3333 30.6666)"
                                            fill="#13C296" />
                                        <circle cx="60.9993" cy="1.66665" r="1.66667" transform="rotate(180 60.9993 1.66665)"
                                            fill="#13C296" />
                                        <circle cx="17.3333" cy="1.66665" r="1.66667" transform="rotate(180 17.3333 1.66665)"
                                            fill="#13C296" />
                                        <circle cx="46.3333" cy="132" r="1.66667" transform="rotate(180 46.3333 132)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="132" r="1.66667" transform="rotate(180 2.66536 132)"
                                            fill="#13C296" />
                                        <circle cx="46.3333" cy="117.333" r="1.66667" transform="rotate(180 46.3333 117.333)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="117.333" r="1.66667" transform="rotate(180 2.66536 117.333)"
                                            fill="#13C296" />
                                        <circle cx="46.3333" cy="102.667" r="1.66667" transform="rotate(180 46.3333 102.667)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="102.667" r="1.66667" transform="rotate(180 2.66536 102.667)"
                                            fill="#13C296" />
                                        <circle cx="46.3333" cy="88" r="1.66667" transform="rotate(180 46.3333 88)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="88" r="1.66667" transform="rotate(180 2.66536 88)"
                                            fill="#13C296" />
                                        <circle cx="46.3333" cy="73.3333" r="1.66667" transform="rotate(180 46.3333 73.3333)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="73.3333" r="1.66667" transform="rotate(180 2.66536 73.3333)"
                                            fill="#13C296" />
                                        <circle cx="46.3333" cy="45" r="1.66667" transform="rotate(180 46.3333 45)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="45" r="1.66667" transform="rotate(180 2.66536 45)"
                                            fill="#13C296" />
                                        <circle cx="46.3333" cy="16" r="1.66667" transform="rotate(180 46.3333 16)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="16" r="1.66667" transform="rotate(180 2.66536 16)"
                                            fill="#13C296" />
                                        <circle cx="46.3333" cy="59" r="1.66667" transform="rotate(180 46.3333 59)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="59" r="1.66667" transform="rotate(180 2.66536 59)"
                                            fill="#13C296" />
                                        <circle cx="46.3333" cy="30.6666" r="1.66667" transform="rotate(180 46.3333 30.6666)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="30.6666" r="1.66667" transform="rotate(180 2.66536 30.6666)"
                                            fill="#13C296" />
                                        <circle cx="46.3333" cy="1.66665" r="1.66667" transform="rotate(180 46.3333 1.66665)"
                                            fill="#13C296" />
                                        <circle cx="2.66536" cy="1.66665" r="1.66667" transform="rotate(180 2.66536 1.66665)"
                                            fill="#13C296" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ====== Contact Section End -->      
      

        ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
        Footer.afterRender();

        const fullName = $("#contact__form-name");
        const phone = $("#contact__form-phone");
        const email = $("#contact__form-email");
        const storeId = $("#contact__form-store");
        const content = $("#contact__form-content");

        $("#contact__form").validate({
            rules: {
                "contact__form-name": "required",
                "contact__form-phone": {
                    required: true,
                    valid_phone: true,
                },
                "contact__form-email": {
                    required: true,
                    email: true,
                },
                "contact__form-store": "required",
                "contact__form-content": "required",
                "contact__form-checkbox": "required",
            },
            messages: {
                "contact__form-name": "Vui lòng nhập họ tên",
                "contact__form-phone": {
                    required: "Vui lòng nhập số điện thoại",
                    valid_phone: "Không đúng định dạng, vui lòng nhập lại",
                },
                "contact__form-email": {
                    required: "Vui lòng nhập địa chỉ email",
                    email: "Không đúng định dạng, vui lòng nhập lại",
                },
                "contact__form-store": "Vui lòng chọn chi nhánh feedback",
                "contact__form-content": "Vui lòng nhập nội dung feedback",
                "contact__form-checkbox": "Vui lòng đồng ý với các điều khoản của chúng tôi",
            },
            errorPlacement: (error, element) => {
                const placement = $(element).data("error");
                if (placement) {
                    $(placement).html(error);
                } else {
                    $(error).insertAfter(element);
                }
            },
            submitHandler() {
                (async () => {
                    const date = new Date();

                    add({
                        content: content.val(),
                        name: fullName.val(),
                        email: email.val(),
                        phone: phone.val(),
                        storeId: +storeId.val(),
                        createdAt: date.toISOString(),
                    })
                        .then(() => toastr.success("Gửi thành công"))
                        .then(() => reRender(ContactPage, "#app"));
                })();
            },
        });

        $.validator.addMethod("valid_phone", (value) => {
            const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
            return regexPhone.test(value);
        });
    },
};

export default ContactPage;