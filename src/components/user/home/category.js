const Category = {
    async render() {
       
        return /* html */ `

        <div class="py-16 bg-white">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div class="md:5/12 lg:w-5/12">
                    <img src="https://res.cloudinary.com/ddxwrjamy/image/upload/v1687004350/325166931_563668212004794_8468431683190386542_n_nwweul.jpg"
                        alt="image" loading="lazy" width="" height="">
                </div>
                <div class="md:7/12 lg:w-6/12">
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sim Ninh Trader</h2>
                    <p class="mt-4 text-gray-500"> Năm 2020,Tôi bắt đầu thành lập Cộng đồng đầu tư SIMFX. Tới nay, với những giá trị cốt lõi Sim Ninh Trader trao tặng tới các nhà đầu tư  <br>
                    Cộng đồng đầu tư SIMFX vẫn đang phát triển lớn mạnh từng ngày, mục tiêu tạo nơi giao lưu, học hỏi và cùng nhau kiếm tiền từ Thị trường Forex. 
                     </p>
  
                    <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">Giới Thiệu</dt>
                            <dd class="mt-2 text-sm text-gray-500">Tôi là 1 trader tự do bắt đầu con đường giao dịch Forex chuyên nghiệp từ năm 2016.</dd>
                        </div>
                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">Học Vấn</dt>
                            <dd class="mt-2 text-sm text-gray-500">Tốt nghiệp trường đại học bách khoa năm 2014-2015</dd>
                        </div>
                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">Kinh Nghiệm Làm Việc</dt>
                            <dd class="mt-2 text-sm text-gray-500">Các sàn đã giao dịch: AETOSMarkets, FPMarkets, Vantage, Exness, ICMarkets, XM,...</dd>
                        </div>
                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">Kĩ năng</dt>
                            <dd class="mt-2 text-sm text-gray-500">Phương pháp giao dịch chủ đạo: Quan tài Vàng, Price Action, Smart Money Concept, Wyckoff, BookMap,..</dd>
                        </div>
                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">Chứng Chỉ</dt>
                            <dd class="mt-2 text-sm text-gray-500">Chứng chỉ Pháp luật về chứng khoán và thị trường chứng khoán </dd>
                            
                        </div>
                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">Sở Thích</dt>
                            <dd class="mt-2 text-sm text-gray-500">Đọc sách kinh tế chứng khoán , du lịch , thể thao đá bóng</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </div>
        
        `;
    },
};

export default Category;