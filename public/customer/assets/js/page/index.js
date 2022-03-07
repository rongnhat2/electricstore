const View = {
    Auth: {
        get(){
            return $(".authen").val() == "" ? 0 : $(".authen").val();
        }
    },
    Product: {
        renderNewArrivals(data){
            var cards = localStorage.getItem("card") == null ? "" : localStorage.getItem("card").split(",");
            data.map(v => {
                var image           = v.images.split(",")[0];
                var real_prices     = View.formatNumber(v.discount == 0 ? v.prices : v.prices - (v.prices*v.discount/100));
                $("#new-arrivals").append(`
                    <li class="col-6 col-wd-2 col-md-2 product-item">
                        <div class="product-item__outer h-100">
                            <div class="product-item__inner px-xl-4 p-3">
                                <div class="product-item__body pb-xl-2">
                                    <div class="mb-2"><a href="/product/${v.slug}?id=${v.id}" class="font-size-12 text-gray-5">${v.category_name}</a></div>
                                    <h5 class="mb-1 product-item__title"><a href="/product/${v.slug}?id=${v.id}" class="text-blue font-weight-bold">${v.name}</a></h5>
                                    <div class="mb-2">
                                        <a href="/product/${v.slug}?id=${v.id}" class="d-block text-center rect-1-1">
                                            <img class="img-fluid rect-1-1" src="/${image}" alt="Image Description">
                                        </a>
                                    </div>
                                    <div class="flex-center-between mb-1">
                                        <div class="prodcut-price d-flex align-items-center flex-wrap position-relative">
                                            ${v.discount == 0 
                                                ?  `<div class="text-gray-100">${View.formatNumber(v.prices)+"đ"}</div>`
                                                :   `<ins class="font-size-20 text-red text-decoration-none mr-2">${View.formatNumber(v.prices - (v.prices*v.discount/100))+"đ"}</ins>
                                                    <del class="font-size-12 tex-gray-6 position-absolute bottom-100"> - ${View.formatNumber(v.prices)} đ </del>`
                                            }
                                        </div>
                                        <div class="d-none d-xl-block prodcut-add-cart">
                                            <div class="btn-add-cart btn-primary transition-3d-hover action-add-to-card" data-id="${v.id}" atr="Add to card">
                                                ${cards.includes(v.id+"") ? `<i class="fas fa-check"></i>` : `<i class="ec ec-add-to-cart"></i>`}
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </li>
                `)
            })
        },
        renderDiscountProducts(data){
            var cards = localStorage.getItem("card") == null ? "" : localStorage.getItem("card").split("-");
            data.map(v => {
                var image           = v.images.split(",")[0];
                var real_prices     = View.formatNumber(v.discount == 0 ? v.prices : v.prices - (v.prices*v.discount/100));
                $("#discount-arrivals").append(`
                    <li class="col-6 col-wd-2 col-md-2 product-item">
                        <div class="product-item__outer h-100">
                            <div class="product-item__inner px-xl-4 p-3">
                                <div class="product-item__body pb-xl-2">
                                    <div class="mb-2"><a href="/product/${v.slug}?id=${v.id}" class="font-size-12 text-gray-5">${v.category_name}</a></div>
                                    <h5 class="mb-1 product-item__title"><a href="/product/${v.slug}?id=${v.id}" class="text-blue font-weight-bold">${v.name}</a></h5>
                                    <div class="mb-2">
                                        <a href="/product/${v.slug}?id=${v.id}" class="d-block text-center"><img class="img-fluid" src="/${image}" alt="Image Description"></a>
                                    </div>
                                    <div class="flex-center-between mb-1">
                                        <div class="prodcut-price d-flex align-items-center flex-wrap position-relative">
                                            ${v.discount == 0 
                                                ?  `<div class="text-gray-100">${View.formatNumber(v.prices)+"đ"}</div>`
                                                :   `<ins class="font-size-20 text-red text-decoration-none mr-2">${View.formatNumber(v.prices)+"đ"}</ins>
                                                    <del class="font-size-12 tex-gray-6 position-absolute bottom-100"> - ${View.formatNumber(v.prices*v.discount/100)} đ </del>`
                                            }
                                        </div>
                                        <div class="d-none d-xl-block prodcut-add-cart">
                                            <a href="#" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></a>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </li>
                `)
            })
        },
        renderTrending(data){
            data.map(v => {
                var image           = v.images.split(",")[0];
                var real_prices     = View.formatNumber(v.discount == 0 ? v.prices : v.prices - (v.prices*v.discount/100));
                $("#trending-carousel").append(`
                    <div class="js-slide bg-img-hero-center">
                        <div class="row min-height-420 py-7 py-md-0">
                            <div class="offset-xl-3 col-xl-4 col-6 mt-md-8">
                                <h1 class="font-size-64 text-lh-57 font-weight-light"
                                    data-scs-animation-in="fadeInUp">
                                    <span class="d-block font-size-55">${v.sku}</span>
                                </h1>
                                <h6 class="font-size-15 font-weight-bold mb-3"
                                    data-scs-animation-in="fadeInUp"
                                    data-scs-animation-delay="200">${v.name}
                                </h6>
                                <div class="mb-4"
                                    data-scs-animation-in="fadeInUp"
                                    data-scs-animation-delay="300">
                                    <span class="font-size-13">Giá từ</span>
                                    <div class="font-size-50 font-weight-bold text-lh-45">
                                        <sup class="">đ</sup>${View.formatNumber(v.prices)}
                                    </div>
                                </div>
                                <a href="/product/${v.slug}?id=${v.id}" class="btn btn-primary text-white transition-3d-hover rounded-lg font-weight-normal py-2 px-md-7 px-3 font-size-16"
                                    data-scs-animation-in="fadeInUp"
                                    data-scs-animation-delay="400">
                                    Xem sản phẩm
                                </a>
                            </div>
                            <div class="col-xl-5 col-6  d-flex align-items-center flex-end"
                                data-scs-animation-in="zoomIn"
                                data-scs-animation-delay="500">
                                <img class="img-fluid" src="${image}" alt="Image Description">
                            </div>
                        </div>
                    </div>`)
            })
            $.HSCore.components.HSSlickCarousel.init('#trending-carousel');
        },
        RecentlyProduct(data){
            console.log(data);
            var cards = localStorage.getItem("card") == null ? "" : localStorage.getItem("card").split(",");
            data.map(v => {
                var image           = v.images.split(",")[0];
                var real_prices     = View.formatNumber(v.discount == 0 ? v.prices : v.prices - (v.prices*v.discount/100));
                $("#recently-viewed-list").append(`
                    <li class="col-6 col-wd-2 col-md-2 product-item">
                        <div class="product-item__outer h-100">
                            <div class="product-item__inner px-xl-4 p-3">
                                <div class="product-item__body pb-xl-2">
                                    <div class="mb-2"></div>
                                    <h5 class="mb-1 product-item__title"><a href="/product/${v.slug}?id=${v.id}" class="text-blue font-weight-bold">${v.name}</a></h5>
                                    <div class="mb-2">
                                        <a href="/product/${v.slug}?id=${v.id}" class="d-block text-center rect-1-1">
                                            <img class="img-fluid rect-1-1" src="/${image}" alt="Image Description">
                                        </a>
                                    </div>
                                    <div class="flex-center-between mb-1">
                                        <div class="prodcut-price d-flex align-items-center flex-wrap position-relative">
                                            ${v.discount == 0 
                                                ?  `<div class="text-gray-100">${View.formatNumber(v.prices)+"đ"}</div>`
                                                :   `<ins class="font-size-20 text-red text-decoration-none mr-2">${View.formatNumber(v.prices)+"đ"}</ins>
                                                    <del class="font-size-12 tex-gray-6 position-absolute bottom-100"> - ${View.formatNumber(v.prices*v.discount/100)} đ </del>`
                                            }
                                        </div>
                                        <div class="d-none d-xl-block prodcut-add-cart">
                                            <div class="btn-add-cart btn-primary transition-3d-hover action-add-to-card" data-id="${v.id}" atr="Add to card">
                                                ${cards.includes(v.id+"") ? `<i class="fas fa-check"></i>` : `<i class="ec ec-add-to-cart"></i>`}
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </li>
                `)
            })
        },
    },
    Category: { 
        render_top(data){
            console.log(data);
            data.map((v, k) => {
                if (k == 0) {
                    $('.category-list-tab').attr("id-select", v.id)
                }
                $('.category-list-tab').append(`
                    <li class="nav-item flex-shrink-0 flex-lg-shrink-1 category-tab-select" data-id="${v.category.id}">
                        <a class="nav-link ${k == 0 ? "active" : ""} " id="Tpills-one-${v.category.id}-tab" data-toggle="pill" href="#Tpills-tab-${v.category.id}" role="tab" aria-controls="#Tpills-tab-${v.category.id}" aria-selected="true">
                            <div class="d-md-flex justify-content-md-center align-items-md-center">
                                ${v.category.name}
                            </div>
                        </a>
                    </li>
                `)
            })
        },
        render_item(data){
            var cards = localStorage.getItem("card") == null ? "" : localStorage.getItem("card").split(",");
            var data_middle = ""
            var left_data = "";
            var right_data = "";
            data.map((v, k) => {
                var image           = v.images.split(",")[0];
                var discount        = v.discount;
                var real_prices     = View.formatNumber(v.discount == 0 ? v.prices : v.prices - (v.prices*v.discount/100));
                if (k == 0) {
                    data_middle = `
                        <div class="col-md-6 col-wd-4 products-group-1">
                            <ul class="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                <li class="col product-item remove-divider">
                                    <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                        <div class="product-item__inner bg-white p-3">
                                            <div class="product-item__body d-flex flex-column">
                                                <div class="mb-1">
                                                    <div class="mb-2"><a href="#" class="font-size-12 text-gray-5">${v.category_name}</a></div>
                                                    <h5 class="mb-0 product-item__title"><a href="/product/${v.slug}?id=${v.id}" class="text-blue font-weight-bold">${v.name}</a></h5>
                                                </div>
                                                <div class="mb-1 ">
                                                    <a href="/product/${v.slug}?id=${v.id}" class="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5">
                                                        <img class="img-fluid" src="${image}" alt="Image Description">
                                                    </a>
                                                </div>
                                                <div class="flex-center-between">
                                                    <div class="prodcut-price">
                                                        ${real_prices} đ
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <div class="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover action-add-to-card" data-id="${v.id}" atr="Add to card">
                                                            <i class="ec ec-add-to-cart mr-2"></i> Thêm vào giỏ hàng
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    `
                }else{
                    if (k % 2 == 0) {
                        left_data += `<li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                    <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                        <div class="product-item__inner bg-white p-3">
                                            <div class="product-item__body pb-xl-2">
                                                <div class="mb-2"><a href="#" class="font-size-12 text-gray-5">${v.category_name}</a></div>
                                                <h5 class="mb-1 product-item__title"><a href="/product/${v.slug}?id=${v.id}" class="text-blue font-weight-bold">${v.name}</a></h5>
                                                <div class="mb-2">
                                                    <a href="/product/${v.slug}?id=${v.id}" class="d-block text-center"><img class="img-fluid" src="${image}" alt="Image Description"></a>
                                                </div>
                                                <div class="flex-center-between mb-1">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">${real_prices} đ</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="#" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </li>`
                    }else{
                        right_data +=  `<li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                    <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                        <div class="product-item__inner bg-white p-3">
                                            <div class="product-item__body pb-xl-2">
                                                <div class="mb-2"><a href="#" class="font-size-12 text-gray-5">${v.name}</a></div>
                                                <h5 class="mb-1 product-item__title"><a href="/product/${v.slug}?id=${v.id}" class="text-blue font-weight-bold">${v.name}</a></h5>
                                                <div class="mb-2">
                                                    <a href="/product/${v.slug}?id=${v.id}" class="d-block text-center"><img class="img-fluid" src="${image}" alt="Image Description"></a>
                                                </div>
                                                <div class="flex-center-between mb-1">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">${real_prices} đ</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="#" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </li>`
                    }
                }
            })
            var data_first = `<div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row left_data">
                                    ${left_data}
                                </ul>
                            </div>`
            var data_last = `<div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row right_data">
                                    ${right_data}
                                </ul>
                            </div>`
            $(".data-category-item-render").html(data_first + data_middle + data_last)
        },
        render_item2(category, data, data_type){
            var cards = localStorage.getItem("card") == null ? "" : localStorage.getItem("card").split(",");
            var value_item = "";
            var value_type = "";
            data.map(v => {
                var image           = v.images.split(",")[0];
                var real_prices     = View.formatNumber(v.discount == 0 ? v.prices : v.prices - (v.prices*v.discount/100));
                value_item += `<li class="col-6 col-wd-2 col-md-2 product-item">
                                <div class="product-item__outer h-100">
                                    <div class="product-item__inner px-xl-4 p-3">
                                        <div class="product-item__body pb-xl-2">
                                            <div class="mb-2"></div>
                                            <h5 class="mb-1 product-item__title"><a href="/product/${v.slug}?id=${v.id}" class="text-blue font-weight-bold">${v.name}</a></h5>
                                            <div class="mb-2">
                                                <a href="/product/${v.slug}?id=${v.id}" class="d-block text-center rect-1-1">
                                                    <img class="img-fluid rect-1-1" src="/${image}" alt="Image Description">
                                                </a>
                                            </div>
                                            <div class="flex-center-between mb-1">
                                                <div class="prodcut-price d-flex align-items-center flex-wrap position-relative">
                                                    ${v.discount == 0 
                                                        ?  `<div class="text-gray-100">${View.formatNumber(v.prices)+"đ"}</div>`
                                                        :   `<ins class="font-size-20 text-red text-decoration-none mr-2">${View.formatNumber(v.prices)+"đ"}</ins>
                                                            <del class="font-size-12 tex-gray-6 position-absolute bottom-100"> - ${View.formatNumber(v.prices*v.discount/100)} đ </del>`
                                                    }
                                                </div>
                                                <div class="d-none d-xl-block prodcut-add-cart">
                                                    <div class="btn-add-cart btn-primary transition-3d-hover action-add-to-card" data-id="${v.id}" atr="Add to card">
                                                        ${cards.includes(v.id+"") ? `<i class="fas fa-check"></i>` : `<i class="ec ec-add-to-cart"></i>`}
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </li>`
            });
            data_type.map(v => {
                value_type += `<li class="nav-item flex-shrink-0 flex-md-shrink-1">
                                    <a class="nav-link text-gray-8" href="#">${v.name}</a>
                                </li>`
            });
            $(".category-list-container").append(`
                <div class="container">
                    <div class="space-top-2">
                        <dv class=" d-flex justify-content-between border-bottom border-color-1 flex-md-nowrap flex-wrap border-sm-bottom-0">
                            <h3 class="section-title mb-0 pb-2 font-size-22"><a href="">${category.name}</a></h3>
                            <ul class="nav nav-pills mb-2 pt-3 pt-md-0 mb-0 border-top border-color-1 border-md-top-0 align-items-center font-size-15 font-size-15-md flex-nowrap flex-md-wrap overflow-auto overflow-md-visble">
                                ${value_type}
                            </ul>
                        </dv>
                        <ul class="row list-unstyled products-group no-gutters" id="new-arrivals">
                            ${value_item}
                        </ul>
                    </div>
                </div> 
            `)
        }
    },
    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
    init(){

    }
};
(() => {
    View.init()
    function init(){
        getCategory();
        getTrending();
        getNewArrivals();
        getDiscountProducts();
        getViewed();
        $(document).on('click', `.category-tab-select`, function() {
            getItemCategory($(this).attr('data-id'));
        });
    }
    function debounce(f, timeout) {
        let isLock = false;
        let timeoutID = null;
        return function(item) {
            if(!isLock) {
                f(item);
                isLock = true;
            }
            clearTimeout(timeoutID);
            timeoutID = setTimeout(function() {
                isLock = false;
            }, timeout);
        }
    }



    function getViewed(){
        if (localStorage.getItem("view") == null) {
            $(".item-viewed").css({ "display": "none"})
        }else{
            var history = localStorage.getItem("view").split(",");
            var qty = [];
            for (var i = history.length-1; i >= 0; i--) {
                if (qty.length < 6) {
                    qty.push(history[i])
                }
            }
            Api.Product.GetRecently(qty.toString())
                .done(res => {
                    console.log(res);
                    View.Product.RecentlyProduct(res.data);
                })
                .fail(err => {  })
                .always(() => { });
        }
    }
    function getTrending(){
        Api.Product.Trending()
            .done(res => {
                View.Product.renderTrending(res.data);
            })
            .fail(err => {  })
            .always(() => { });
    }
    function getNewArrivals(){
        Api.Product.NewArrivals()
            .done(res => {
                View.Product.renderNewArrivals(res.data);
            })
            .fail(err => {  })
            .always(() => { });
    }
    function getDiscountProducts(){
        Api.Product.DiscountProducts()
            .done(res => {
                View.Product.renderDiscountProducts(res.data);
            })
            .fail(err => {  })
            .always(() => { });
    }
    function getCategory(){
        Api.Category.GetAll()
            .done(res => {
                View.Category.render_top(res.data);
                res.data.category.map(v => {
                    getItemCategory(v);
                })
            })
            .fail(err => {  })
            .always(() => { });
    }
    function getItemCategory(category_item){
        Api.Product.GetItemCategory(category_item.id)
            .done(res => {
                View.Category.render_item2(category_item, res.data.product, res.data.type);
            })
            .fail(err => {  })
            .always(() => { });
    }
    init()
})();
