const View = { 
    Product: {
        renderNewArrivals(data){
            data.map(v => {
                var image           = v.images.split(",")[0];
                var real_prices     = View.formatNumber(v.discount == 0 ? v.prices : v.prices - (v.prices*v.discount/100));
                $("#new-arrivals .products").append(`
                    <div class="landscape-product-widget product">
                        <a class="woocommerce-LoopProduct-link" href="/product/${v.slug}?id=${v.id}">
                            <div class="media">
                                <img class="wp-post-image" src="/${image}" alt="">
                                <div class="media-body">
                                    <span class="price">
                                        <ins>
                                            <span class="amount">${v.discount == 0 ? "" : View.formatNumber(v.prices)+"đ"}</span>
                                        </ins>
                                        <del>
                                            <span class="amount">${real_prices}</span>
                                        </del>
                                    </span>
                                    <h2 class="woocommerce-loop-product__title">${v.name}</h2>
                                    <div class="techmarket-product-rating">
                                        <div title="Rated 0 out of 5" class="star-rating">
                                            <span style="width:0%">
                                                <strong class="rating">0</strong> out of 5</span>
                                        </div>
                                        <span class="review-count">(0)</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                `)
            })
            LayoutView.SlickJS.init("#new-arrivals");
        },
        renderListItem(data){
            $(".list-unstyled").find(".product-item").remove() 
            var cards = localStorage.getItem("card") == null ? "" : localStorage.getItem("card").split(",");
            data.map(v => {
                var image           = v.images.split(",")[0];
                var real_prices     = View.formatNumber(v.discount == 0 ? v.prices : v.prices - (v.prices*v.discount/100));
                var metadata        = v.metadata.split(",").map(v => {
                                        return `<li>${v.split(':')[0]} - ${v.split(':')[1]}</li>`
                                    }).join("");

                $("#pills-one-example1 .list-unstyled").append(`
                    <li class="col-6 col-md-3 col-wd-2gdot4 product-item">
                        <div class="product-item__outer h-100">
                            <div class="product-item__inner px-xl-4 p-3">
                                <div class="product-item__body pb-xl-2">
                                    <h5 class="mb-1 product-item__title"><a href="/product/${v.slug}?id=${v.id}" class="text-blue font-weight-bold">${v.name}</a></h5>
                                    <div class="mb-2">
                                        <a href="/product/${v.slug}?id=${v.id}" class="d-block text-center"><img class="img-fluid" src="/${image}" alt="Image Description"></a>
                                    </div>
                                    <div class="flex-center-between mb-1">
                                        <div class="prodcut-price"> 
                                            <div class="text-gray-100 ${v.discount == 0 ? "" : "discount-price"}">${real_prices} đ</div>
                                        </div>
                                        <div class="d-none d-xl-block prodcut-add-cart" data-id="${v.id}" atr="Add to card">
                                            <a href="#" class="btn-add-cart btn-primary transition-3d-hover action-add-to-card" data-id="${v.id}" atr="Add to card">
                                                ${cards.includes(v.id+"") ? `<i class="fas fa-check"></i>` : `<i class="ec ec-add-to-cart"></i>`}
                                            </a>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </li> 
                `)
                $("#pills-two-example1 .list-unstyled").append(`
                    <li class="col-6 col-md-3 col-wd-2gdot4 product-item">
                        <div class="product-item__outer h-100">
                            <div class="product-item__inner px-xl-4 p-3">
                                <div class="product-item__body pb-xl-2"> 
                                    <h5 class="mb-1 product-item__title"><a href="/product/${v.slug}?id=${v.id}" class="text-blue font-weight-bold">${v.name}</a></h5>
                                    <div class="mb-2">
                                        <a href="/product/${v.slug}?id=${v.id}" class="d-block text-center"><img class="img-fluid" src="/${image}" alt="Image Description"></a>
                                    </div>
                                    <div class="mb-3">
                                        <a class="d-inline-flex align-items-center small font-size-14" href="#">
                                            <div class="text-warning mr-2">
                                                <small class="fas fa-star"></small>
                                                <small class="fas fa-star"></small>
                                                <small class="fas fa-star"></small>
                                                <small class="fas fa-star"></small>
                                                <small class="far fa-star text-muted"></small>
                                            </div>
                                            <span class="text-secondary">(40)</span>
                                        </a>
                                    </div>
                                    <ul class="font-size-12 p-0 text-gray-110 mb-4">
                                        ${metadata}
                                    </ul>
                                    <div class="text-gray-20 mb-2 font-size-12">SKU: FW511948218</div>
                                    <div class="flex-center-between mb-1">
                                        <div class="prodcut-price"> 
                                            <div class="text-gray-100 ${v.discount == 0 ? "" : "discount-price"}"">${real_prices} đ</div>
                                        </div>
                                        <div class="d-none d-xl-block prodcut-add-cart">
                                            <a href="/product/${v.slug}?id=${v.id}" class="btn-add-cart btn-primary transition-3d-hover action-add-to-card" data-id="${v.id}" atr="Add to card">
                                                ${cards.includes(v.id+"") ? `<i class="fas fa-check"></i>` : `<i class="ec ec-add-to-cart"></i>`}
                                            </a>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </li> 
                `) 
            })
        }
    },
    Category: {
        render_top(data){
            var category_id = View.URL.get("tag");
            $('.category-list').append(`<li><a class="dropdown-item" href="/category?tag=0">Tất cả sản phẩm<span class="text-gray-25 font-size-12 font-weight-normal"> </span></a></li>`);
            $('.category-list').append(`<li><a class="dropdown-item" href="/category?status=sale">Đang giảm giá<span class="text-gray-25 font-size-12 font-weight-normal"> </span></a></li>`);
            data.map(v => {
                $('.category-list').append(`
                    <li><a class="dropdown-item" href="/category?tag=${v.category.id}">${v.category.name}<span class="text-gray-25 font-size-12 font-weight-normal"> </span></a></li>
                `)
            }) 
        },
        setData(data){
            var page_title = "";
            if (View.URL.get("tag") == null || View.URL.get("tag") == 0) {
                if (View.URL.get("status") == "new") {
                    page_title = "Sản phẩm mới";
                }else if (View.URL.get("status") == "sale"){
                    page_title = "Đang giảm giá";
                }else{
                    page_title = "Tất cả sản phẩm";
                }
            }else{
                page_title = data.name;
            }
            $(".page-title").html(page_title)
            $(".category-name").html(data.name)
        }
    },
    Layout: {
        setDefaul(){
            $(".pageSize").val(View.URL.get("pageSize") == null || View.URL.get("pageSize") == "" ? 10 : View.URL.get("pageSize"))
        },
        setData(data){
            var page        = View.URL.get("page") ?? 1;
            var pageSize    = View.URL.get("pageSize") ?? $(".pageSize").val();
            $(".count-start").html((page-1) * pageSize + 1);
            $(".count-end").html(page * pageSize > data ? data : page * pageSize);
            $(".count-total").html(data);
            $(".page-total").html(Math.ceil(data/pageSize));
            $(".pageSize").val(View.URL.get("pageSize") == null || View.URL.get("pageSize") == "" ? 10 : View.URL.get("pageSize"))
        }
    },
    pagination: {
        page: 1,
        pageSize: 10,
        total: 0,
        onChange(callback) {
            const oThis = this;
            $(document).on('click', '.woocommerce-pagination .paginate_button.page-item:not(.disabled, .active)', function () {
                const page = $(this).text();
                let nextPage = null;
                if (page.match(/Next/g)) {
                    nextPage = oThis.page + 1;
                }
                else if (page.match(/Previous/g)) {
                    nextPage = oThis.page - 1;
                }
                else {
                    nextPage = +page;
                }
                callback(+nextPage);
                oThis.page = +nextPage;
            });
        },
        length(){
            return Math.ceil(this.total / this.pageSize);
        },
        render() {
            const paginationHTML = generatePagination(this.page, Math.ceil(this.total / this.pageSize));  
            $('.woocommerce-pagination').html(paginationHTML)

            const startEntry = this.pageSize * (this.page - 1) + 1;
            const lastEntry = Math.min(this.pageSize * this.page, this.total);
        }
    },
    isNumberKey(evt){
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    },
    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
    filterPrices(callback){
        $(document).on('click', `.filter-prices`, function() {
            callback()
        });
    },
    onChangePage(callback){
        $(document).on('click', `.change-page-number`, function() {
            callback()
        });
    },
    onChangePageSize(callback){
        $(document).on('change', `.pageSize`, function() {
            callback()
        });
    },
    Sort: {
        onChange(callback){
            $(document).on('change', `#ec-select`, function() {
                callback( )
            });
        },
        getVal(){
            return $("#ec-select").val()
        },
        setVal(data){
            return $("#ec-select").val(data)
        }
    },
    URL: {
        setURL(filters){
            const param     = (new URLSearchParams({ ...filters })).toString();
            window.history.pushState('','', '?' + param);
        },
        getFilterURL(){
            // lấy ra url và trả về chuỗi filter tương ứng
            var urlParam    = new URLSearchParams(window.location.search);
            return filters  = {
                keyword:        urlParam.get('keyword') ?? '',
                tag:            urlParam.get('tag') ?? '0',
                page:           View.pagination.page ?? '1',
                pageSize:       $(".pageSize").val() ?? "10",
                prices:         $(".js-range-slider").val().replace(/,/g, ''),
                sort:           View.Sort.getVal(),
                status:         urlParam.get('status') ?? '',
            };
        },
        get(id){
            var urlParam    = new URLSearchParams(window.location.search);
            return urlParam.get(id)
        }
    },
    Auth: {
        get(){
            return $(".authen").val() == "" ? 0 : $(".authen").val();
        }
    },
    isNumberKey(evt){
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 49 || charCode > 57))
            return false;
        return true;
    },
    init(){
        $(document).on('keypress', `#page-number`, function(event) {
            return View.isNumberKey(event);
        });
    }
};
(() => {
    View.init()
    function init(){ 
        getCategory();
        getProductList();
        // getNewArrivals();
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
    function getCategory(){
        Api.Category.GetAll()
            .done(res => {
                View.Category.render_top(res.data);
            })
            .fail(err => {  })
            .always(() => { });
    }
    function getProductList(){
        View.Layout.setDefaul()
        Api.Product.GetAll(View.URL.getFilterURL())
            .done(res => {
                View.Product.renderListItem(res.data.data);
                View.Category.setData(res.data.category);
                View.Layout.setData(res.data.count);
                View.pagination.pageSize = $(".pageSize").val();
                View.pagination.total = res.data.count;
                View.pagination.render();
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

    View.Sort.onChange(() => {
        View.URL.setURL(View.URL.getFilterURL())
        getProductList();
    })
    View.pagination.onChange((page) => {
        View.pagination.page = page; 
        View.URL.setURL(View.URL.getFilterURL())
        getProductList();
    })

    View.filterPrices(() => {
        View.URL.setURL(View.URL.getFilterURL())
        getProductList();
    })
    View.onChangePage(() => {
        View.URL.setURL(View.URL.getFilterURL())
        getProductList();
    })
    View.onChangePageSize(() => {
        View.pagination.page = 1;
        View.URL.setURL(View.URL.getFilterURL())
        getProductList();
    })
 
    init()
})();
