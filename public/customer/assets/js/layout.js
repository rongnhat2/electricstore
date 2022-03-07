const ViewIndex = {
    Auth: {
        isLogin(){
            return $("#auth-value").val() == 1 ? true : false;
        },
        Register: {
            resource: "#signup",
            getVal(){
                var resource = this.resource;
                var fd = new FormData();
                var required_data = [];
                var onPushData = true;

                var data_email              = $(`${resource}`).find('.data-email').val();
                var data_password           = $(`${resource}`).find('.data-password').val();
                var data_password_repert    = $(`${resource}`).find('.data-password-repert').val(); 
                var data_name               = $(`${resource}`).find('.data-name').val();
                var data_phone              = $(`${resource}`).find('.data-phone').val();
                var data_address              = $(`${resource}`).find('.data-address').val();

                if (ViewIndex.Config.isEmail(data_email) == null || data_email == '')  onPushData = false; 
                if (data_password == "")  onPushData = false;
                if (data_password_repert == "")  onPushData = false;
                if (data_name == "")  onPushData = false;
                if (data_phone == "")  onPushData = false;
                if (data_address == "")  onPushData = false;

                if (onPushData) {
                    fd.append('data_email', data_email);
                    fd.append('data_password', data_password); 
                    fd.append('data_name', data_name);
                    fd.append('data_phone', data_phone); 
                    fd.append('data_address', data_address); 
                    return fd;
                }else{ 
                    return false;
                }
            },
            onPush(name, callback){
                var resource = this.resource;
                $(document).on('click', `${resource} .form-submit`, function() {
                    if($(this).attr('atr').trim() == name) {
                        var data = ViewIndex.Auth.Register.getVal();
                        if (data) callback(data); 
                    }
                });
            },
            init(){
                $(document).on('keypress', `.data-phone`, function(event) {
                    return ViewIndex.Config.onNumberKey(event);
                });
            }
        },
        Login: {
            resource: "#login",
            getVal(){
                var resource = this.resource;
                var fd = new FormData();
                var required_data = [];
                var onPushData = true;

                var data_email              = $(`${resource}`).find('.data-email').val();
                var data_password           = $(`${resource}`).find('.data-password').val(); 

                if (ViewIndex.Config.isEmail(data_email) == null || data_email == '')  onPushData = false; 
                if (data_password == "")  onPushData = false; 

                if (onPushData) {
                    fd.append('data_email', data_email);
                    fd.append('data_password', data_password);  
                    return fd;
                }else{ 
                    return false;
                }
            },
            onPush(name, callback){
                var resource = this.resource;
                $(document).on('click', `${resource} .form-submit`, function() {
                    if($(this).attr('atr').trim() == name) {
                        var data = ViewIndex.Auth.Login.getVal();
                        if (data) callback(data); 
                    }
                });
            },
            init(){
                $(document).on('keypress', `.data-phone`, function(event) {
                    return ViewIndex.Config.onNumberKey(event);
                });
            }
        },
        Forgot: {
            resource: "#forgotPassword",
            getVal(){
                var resource = this.resource;
                var fd = new FormData();
                var required_data = [];
                var onPushData = true;
                var data_email              = $(`${resource}`).find('.data-email').val(); 
                if (ViewIndex.Config.isEmail(data_email) == null || data_email == '')  onPushData = false;  
                if (onPushData) {
                    fd.append('data_email', data_email); 
                    return fd;
                }else{ 
                    return false;
                }
            },
            onPush(name, callback){
                var resource = this.resource;
                $(document).on('click', `${resource} .form-submit`, function() {
                    if($(this).attr('atr').trim() == name) {
                        var data = ViewIndex.Auth.Forgot.getVal();
                        if (data) callback(data); 
                    }
                });
            },
        },
        Reset: {
            resource: "#forgotPassword",
            getVal(){
                var resource = this.resource;
                var fd = new FormData();
                var required_data = [];
                var onPushData = true;
                var data_email              = $(`${resource}`).find('.data-email').val(); 
                var data_password              = $(`${resource}`).find('.data-password').val();
                var data_code              = $(`${resource}`).find('.data-code').val();
                if (ViewIndex.Config.isEmail(data_email) == null || data_email == '')  onPushData = false;  
                if (data_password == "")  onPushData = false; 
                if (data_code == "")  onPushData = false; 

                if (onPushData) {
                    fd.append('data_email', data_email); 
                    fd.append('data_password', data_password); 
                    fd.append('data_code', data_code); 
                    return fd;
                }else{ 
                    return false;
                }
            },
            onPush(name, callback){
                var resource = this.resource;
                $(document).on('click', `${resource} .form-submit`, function() {
                    if($(this).attr('atr').trim() == name) {
                        var data = ViewIndex.Auth.Reset.getVal();
                        if (data) callback(data); 
                    }
                });
            },
        },
        response: { 
            success(message){
                $(".js-validate .js-response").remove();
                $(".js-validate").prepend(`<div class="js-response js-success"><li>${message}</li></div>`)
            },
            error(message){
                $(".js-validate .js-response").remove();
                $(".js-validate").prepend(`<div class="js-response js-errors"><li>${message}</li></div>`)
            },                  
        },
        init(){
            ViewIndex.Auth.Register.init()
        }
    },
    Category: {
        render_top(data){ 
            $("#basicsAccordion .navbar-nav").append(`
                <li class="nav-item hs-has-mega-menu u-header__nav-item" >
                    <a class="nav-link u-header__nav-link " href="/category?tag=0" aria-haspopup="true" aria-expanded="false">Tất cả sản phẩm</a> 
                </li>
            `)
            $("#basicsAccordion .navbar-nav").append(`
                <li class="nav-item hs-has-mega-menu u-header__nav-item" >
                    <a class="nav-link u-header__nav-link " href="/category?status=sale" aria-haspopup="true" aria-expanded="false">Đang giảm giá</a> 
                </li>
            `)
            data.map(v => {
                $("#category-search").append(`<option value="${v.category.id}">${v.category.name}</option>`) 
                $('#headerSidebarList').append(`
                    <li class="u-has-submenu u-header-collapse__submenu">
                        <a class="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="/category?tag=${v.category.id}" data-target="#headerSidebar${v.category.id}" 
                            role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebar${v.category.id}">
                            ${v.category.name}
                        </a> 
                    </li>
                `)  
                $("#basicsAccordion .navbar-nav").append(`
                    <li class="nav-item hs-has-mega-menu u-header__nav-item"
                        data-event="hover"
                        data-animation-in="slideInUp"
                        data-animation-out="fadeOut"
                        data-position="left">
                        <a id="basicMegaMenu${v.category.id}" class="nav-link u-header__nav-link " href="/category?tag=${v.id}" aria-haspopup="true" aria-expanded="false">${v.category.name}</a> 
                    </li>
                `)
            })  
        }
    },
    Cart: { 
        add_to_card(name, callback){
            $(document).on('click', `.action-add-to-card`, function() {
                if($(this).attr('atr').trim() == name) {
                    callback($(this));
                }
            });
        },
        update(){
            var card_data = localStorage.getItem("card")
            var count = (card_data == null || card_data == "") ? 0 : card_data.split(",").length;
            $(".cart-count .count").html(count)
        }
    },
    Compare: { 
        add_to_card( callback){
            $(document).on('click', `.action-add-to-compare`, function() {
                callback($(this));
            });
        },
        update(){
            var card_data = localStorage.getItem("compare")
            var count = (card_data == null || card_data == "") ? 0 : card_data.split(",").length;
            $(".cart-count .count").html(count)
        }
    },
    Config: {
        onNumberKey(evt){
            var charCode = (evt.which) ? evt.which : event.keyCode
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;
            return true;
        },
        isEmail(email){
            return email.match( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ );
        },
        formatPrices(num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        },
        toNoTag(string){
            return string.replace(/(<([^>]+)>)/ig, "");
        },
    },
    onSearch(callback){
        $(document).on('keyup', '.product-search-field', function() {
            $('.suggest-list .suggess-wrapper').remove()
            var data = $(this).val();
            var data = $(this).val();
            var data_text      = $(this).val();
            var data_category  = $(`#category-search`).val();
            var fd = new FormData();
            fd.append('data_text', data_text);
            fd.append('data_category', data_category);
            if (data_text) callback(fd, data_text);
        });

        $(document).mouseup(function(e) {
            var container = $(".searchProduct");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.suggest-list .suggess-wrapper').remove()
            }
        });
    },
    init(){ 
        ViewIndex.Auth.init(); 
    }
};
(() => {
    ViewIndex.init()
    function init(){
        getCategory();
        getCart();
        ViewIndex.Cart.update();
    }
    async function redirect_logined(url) {
        await delay(2000);
        window.location.replace(url);
    }
    function delay(delayInms) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(2);
            }, delayInms);
        });
    }
    ViewIndex.onSearch((fd, text) => {
        Api.Product.GetSearch(fd).done(res => { 
            $('.suggest-list .suggess-wrapper').remove()
            $('.suggest-list')
                .append(`<div class="suggess-wrapper"></div>`)
            if (res.data.length > 0) {
                res.data.map(v => {
                    $(".suggess-wrapper").append(`<div class="suggess-item"><a title="${v.name}" href="/product/${v.slug}?id=${v.id}">${highlight(text, v.name)}</a></div>`)
                })
            }else{
                $(".suggess-wrapper").append(`<div class="suggess-item">Không có kết quả tìm kiếm</div>`)
            }
        })
    })
    function highlight(text, inputText) {
        var index = inputText.toLowerCase().indexOf(text.toLowerCase());
       inputText = inputText.substring(0,index) + "<span class='highlight'>" + inputText.substring(index,index+text.length) + "</span>" + inputText.substring(index + text.length);
       return inputText
        
    }
    ViewIndex.Cart.add_to_card("Add to card", (item) => {
        var card        = localStorage.getItem("card"); 
        var data_id     = item.attr("data-id");
        if (card == null || card == "") {
            localStorage.setItem("card", data_id);  
        }else{
            var card_array  = card.split(",");
            hasId = card_array.includes(data_id)
            if (!hasId) {
                card_array.push(data_id) 
                localStorage.setItem("card", card_array.toString()); 
            }
        }
        if (ViewIndex.Auth.isLogin()) updateCartUser();
        item.html(`<i class="fas fa-check"></i>`)
        ViewIndex.Cart.update();
    })

    function getCart(){
        if (ViewIndex.Auth.isLogin()) {
            Api.Cart.GetCart()
                .done(res => { 
                    if (res.status == 200) {
                        var cart = localStorage.getItem("card") == null ? [] : localStorage.getItem("card").split(","); 
                        if (res.data.cart != null) {
                            res.data.cart.split(",").map(v => {
                                cart.includes(v) ? "" : cart.push(v);
                            })
                            localStorage.setItem("card", cart);
                        }
                        updateCartUser();
                    }else{
                        redirect_logined(res.data)
                    }
                })
        }
    }
    function updateCartUser(){
        var cart = localStorage.getItem("card");
        if (cart != null) {
            var fd = new FormData();
            fd.append('cart', cart); 
            Api.Cart.Update(fd)
                .done(res => {
                    ViewIndex.Cart.update();
                })
                .fail(err => {  })
                .always(() => { });
        }
    }

    ViewIndex.Auth.Register.onPush("Register", (fd) => {
        Api.Auth.Register(fd)
            .done(res => {  
                if (res.status == 200) {
                    ViewIndex.Auth.response.error(res.message); 
                }else{
                    ViewIndex.Auth.response.success(res.message) 
                    redirect_logined(res.data)
                }
            })
            .fail(err => {   })
            .always(() => { });
    }) 
    ViewIndex.Auth.Login.onPush("Login", (fd) => {
        Api.Auth.Login(fd)
            .done(res => {  
                if (res.status == 500) {
                    ViewIndex.Auth.response.error(res.message); 
                }else{
                    ViewIndex.Auth.response.success(res.message) ;
                    redirect_logined(res.data)
                }
            })
            .fail(err => {   })
            .always(() => { });
    }) 
    ViewIndex.Auth.Forgot.onPush("Forgot", (fd) => {
        $(".form-submit[atr=Forgot]").html(`<i class="fas fa-spinner"></i>`);
        Api.Auth.Forgot(fd)
            .done(res => {  
                if (res.status == 200) {
                    ViewIndex.Auth.response.success(res.message) 
                    $(".form-email").css({"display": "none"})
                    $(".form-code").css({"display": "block"})
                    $(".form-password").css({"display": "block"})
                    $(".form-submit[atr=Forgot]").html(`Đổi mật khẩu`);
                    $("#forgotPassword .form-submit").attr("atr", "Reset");
                }else{
                    ViewIndex.Auth.response.error(res.message); 
                    $(".form-submit[atr=Forgot]").html(`Lấy lại mật khẩu`);
                }
            })
            .fail(err => {   })
            .always(() => { });
    }) 
    ViewIndex.Auth.Reset.onPush("Reset", (fd) => {
        $(".form-submit[atr=Forgot]").html(`<i class="fas fa-spinner"></i>`);
        Api.Auth.Reset(fd)
            .done(res => {  
                if (res.status == 200) {
                    ViewIndex.Auth.response.success(res.message)  
                    redirect_logined(res.data)
                }else{
                    ViewIndex.Auth.response.error(res.message); 
                }
            })
            .fail(err => {   })
            .always(() => { });
    }) 

    function getCategory(){
        Api.Category.GetAll()
            .done(res => {
                ViewIndex.Category.render_top(res.data);
            })
            .fail(err => {  })
            .always(() => { });
    }
    init()
})();
