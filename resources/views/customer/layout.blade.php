<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Title -->
        <title>Home-v1 | Electro - Responsive Website Template</title>

        <!-- Required Meta Tags Always Come First -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Favicon -->
        <link rel="shortcut icon" href="{{ asset("favicon.ico") }}">

        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap" rel="stylesheet">

        <!-- CSS Implementing Plugins -->
        <link rel="stylesheet" href="{{ asset("customer/assets/vendor/font-awesome/css/fontawesome-all.min.css") }}">
        <link rel="stylesheet" href="{{ asset("customer/assets/css/font-electro.css") }}">

        <link rel="stylesheet" href="{{ asset("customer/assets/vendor/animate.css/animate.min.css") }}">
        <link rel="stylesheet" href="{{ asset("customer/assets/vendor/hs-megamenu/src/hs.megamenu.css") }}">
        <link rel="stylesheet" href="{{ asset("customer/assets/vendor/ion-rangeslider/css/ion.rangeSlider.css") }}">
        <link rel="stylesheet" href="{{ asset("customer/assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css") }}">
        <link rel="stylesheet" href="{{ asset("customer/assets/vendor/fancybox/jquery.fancybox.css") }}">
        <link rel="stylesheet" href="{{ asset("customer/assets/vendor/slick-carousel/slick/slick.css") }}">
        <link rel="stylesheet" href="{{ asset("customer/assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css") }}">

        <!-- CSS Electro Template -->
        <link rel="stylesheet" href="{{ asset("customer/assets/css/theme.css") }}">
        <link rel="stylesheet" href="{{ asset("customer/assets/css/custom.css") }}">
        <meta name="csrf-token" content="{{ csrf_token() }}" />
    </head>

    <body>

        <!-- ========== HEADER ========== -->
        <header id="header" class="u-header u-header-left-aligned-nav">
            <input type="hidden" class="auth-value" id="auth-value" value="<?php echo $customer_data['is_login']; ?>">
            <div class="u-header__section">
                <!-- Topbar -->
                <div class="u-header-topbar py-2 d-none d-xl-block">
                    <div class="container">
                        <div class="d-flex align-items-center">
                            <div class="topbar-left">
                                <a href="#" class="text-gray-110 font-size-13 u-header-topbar__nav-link"> PC STORE</a>
                            </div>
                            <div class="topbar-right ml-auto">
                                <ul class="list-inline mb-0 d-flex">
                                    <li class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border d-flex align-items-center">
                                        <?php if ($customer_data['is_login']): ?> 
                                        <a title="My Account" href="/profile" style="display: flex;align-items: center;">
                                            <div class="user-avatar" style="background-image: url('/<?php echo $customer_data['avatar'] ?>');"></div><?php echo $customer_data['name'] ?>
                                        </a>
                                        <?php else: ?>
                                        <a id="sidebarNavToggler" href="javascript:;" role="button" class="u-header-topbar__nav-link"
                                            aria-controls="sidebarContent"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            data-unfold-event="click"
                                            data-unfold-hide-on-scroll="false"
                                            data-unfold-target="#sidebarContent"
                                            data-unfold-type="css-animation"
                                            data-unfold-animation-in="fadeInRight"
                                            data-unfold-animation-out="fadeOutRight"
                                            data-unfold-duration="500">
                                            <i class="ec ec-user mr-1"></i> Đăng kí <span class="text-gray-50">hoặc</span> Đăng nhập
                                        </a>
                                        <?php endif ?> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-2 py-xl-4 bg-primary-down-lg">
                    <div class="container my-0dot5 my-xl-0">
                        <div class="row align-items-center">
                            <!-- Logo-offcanvas-menu -->
                            <div class="col-auto">
                                <!-- Nav -->
                                <nav class="navbar navbar-expand u-header__navbar py-0 justify-content-xl-between max-width-270 min-width-270">
                                    <a class="order-1 order-xl-0 navbar-brand u-header__navbar-brand u-header__navbar-brand-center text-logo" href="/" aria-label="Electro">
                                        PC STORE
                                    </a>
                                    <button id="sidebarHeaderInvokerMenu" type="button" class="navbar-toggler d-block btn u-hamburger mr-3 mr-xl-0"
                                        aria-controls="sidebarHeader"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-unfold-event="click"
                                        data-unfold-hide-on-scroll="false"
                                        data-unfold-target="#sidebarHeader1"
                                        data-unfold-type="css-animation"
                                        data-unfold-animation-in="fadeInLeft"
                                        data-unfold-animation-out="fadeOutLeft"
                                        data-unfold-duration="500">
                                        <span id="hamburgerTriggerMenu" class="u-hamburger__box">
                                            <span class="u-hamburger__inner"></span>
                                        </span>
                                    </button>
                                </nav>
                                <aside id="sidebarHeader1" class="u-sidebar u-sidebar--left" aria-labelledby="sidebarHeaderInvokerMenu">
                                    <div class="u-sidebar__scroller">
                                        <div class="u-sidebar__container">
                                            <div class="u-header-sidebar__footer-offset">
                                                <div class="position-absolute top-0 right-0 z-index-2 pt-4 pr-7">
                                                    <button type="button" class="close ml-auto"
                                                        aria-controls="sidebarHeader"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        data-unfold-event="click"
                                                        data-unfold-hide-on-scroll="false"
                                                        data-unfold-target="#sidebarHeader1"
                                                        data-unfold-type="css-animation"
                                                        data-unfold-animation-in="fadeInLeft"
                                                        data-unfold-animation-out="fadeOutLeft"
                                                        data-unfold-duration="500">
                                                        <span aria-hidden="true"><i class="ec ec-close-remove text-gray-90 font-size-20"></i></span>
                                                    </button>
                                                </div>
                                                <div class="js-scrollbar u-sidebar__body">
                                                    <div id="headerSidebarContent" class="u-sidebar__content u-header-sidebar__content">
                                                        <a class="d-flex ml-0 navbar-brand u-header__navbar-brand u-header__navbar-brand-vertical text-logo" href="/" aria-label="Electro">
                                                            PC STORE
                                                        </a>
                                                        <ul id="headerSidebarList" class="u-header-collapse__nav"> 

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <footer id="SVGwaveWithDots" class="u-header-sidebar__footer" style="">
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item pr-3">
                                                        <a class="u-header-sidebar__footer-link text-gray-90" href="#">Privacy</a>
                                                    </li>
                                                    <li class="list-inline-item pr-3">
                                                        <a class="u-header-sidebar__footer-link text-gray-90" href="#">Terms</a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="u-header-sidebar__footer-link text-gray-90" href="#">
                                                            <i class="fas fa-info-circle"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div class="position-absolute right-0 bottom-0 left-0 z-index-n1">
                                                    <img class="js-svg-injector" src="{{ asset("customer/assets/svg/components/wave-bottom-with-dots.svg") }}" alt="Image Description" data-parent="#SVGwaveWithDots">
                                                </div>
                                            </footer>
                                        </div>
                                    </div>
                                </aside>
                            </div>

                            <div class="col d-none d-xl-block">
                                <nav class="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
                                    <!-- Navigation -->
                                    <div id="navBar" class="collapse navbar-collapse u-header__navbar-collapse">
                                        <ul class="navbar-nav u-header__navbar-nav">
                                            <li class="nav-item u-header__nav-item">
                                                <a class="nav-link u-header__nav-link" href="/">Trang chủ</a>
                                            </li>
                                            <li class="nav-item u-header__nav-item">
                                                <a class="nav-link u-header__nav-link" href="/category?tag=0">Tất cả sản phẩm</a>
                                            </li>
                                            <li class="nav-item u-header__nav-item">
                                                <a class="nav-link u-header__nav-link" href="#">Dịch vụ</a>
                                            </li>
                                            <li class="nav-item u-header__nav-item">
                                                <a class="nav-link u-header__nav-link" href="#">Liên hệ</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div class="d-none d-xl-block col-md-auto">
                                <div class="d-flex">
                                    <i class="ec ec-support font-size-50 text-primary"></i>
                                    <div class="ml-2">
                                        <div class="phone">
                                            <strong>Support</strong> <a href="tel:800856800604" class="text-gray-90">0976828051</a>
                                        </div>
                                        <div class="email">
                                            E-mail: <a href="mailto:info@electro.com?subject=Help Need" class="text-gray-90">info@electro.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="d-xl-none col col-xl-auto text-right text-xl-left pl-0 pl-xl-3 position-static">
                                <div class="d-inline-flex">
                                    <ul class="d-flex list-unstyled mb-0 align-items-center">
                                        <!-- Search -->
                                        <li class="col d-xl-none px-2 px-sm-3 position-static">
                                            <a id="searchClassicInvoker" class="font-size-22 text-gray-90 text-lh-1 btn-text-secondary" href="javascript:;" role="button"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Search"
                                                aria-controls="searchClassic"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                data-unfold-target="#searchClassic"
                                                data-unfold-type="css-animation"
                                                data-unfold-duration="300"
                                                data-unfold-delay="300"
                                                data-unfold-hide-on-scroll="true"
                                                data-unfold-animation-in="slideInUp"
                                                data-unfold-animation-out="fadeOut">
                                                <span class="ec ec-search"></span>
                                            </a>
                                            <div id="searchClassic" class="dropdown-menu dropdown-unfold dropdown-menu-right left-0 mx-2" aria-labelledby="searchClassicInvoker">
                                                <form class="js-focus-state input-group px-3 suggest-list" autocomplete="off">
                                                    <input class="form-control" type="search" placeholder="Search Product">
                                                    <div class="input-group-appe nd">
                                                        <button class="btn btn-primary px-3" type="button"><i class="font-size-18 ec ec-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>
                                        <li class="col d-none d-xl-block"><a href="../shop/compare.html" class="text-gray-90" data-toggle="tooltip" data-placement="top" title="Compare"><i class="font-size-22 ec ec-compare"></i></a></li>
                                        <li class="col d-none d-xl-block"><a href="../shop/wishlist.html" class="text-gray-90" data-toggle="tooltip" data-placement="top" title="Favorites"><i class="font-size-22 ec ec-favorites"></i></a></li>
                                        <li class="col d-xl-none px-2 px-sm-3"><a href="../shop/my-account.html" class="text-gray-90" data-toggle="tooltip" data-placement="top" title="My Account"><i class="font-size-22 ec ec-user"></i></a></li>
                                        <li class="col pr-xl-0 px-2 px-sm-3">
                                            <a href="../shop/cart.html" class="text-gray-90 position-relative d-flex " data-toggle="tooltip" data-placement="top" title="Cart">
                                                <i class="font-size-22 ec ec-shopping-bag"></i>
                                                <span class="width-22 height-22 bg-dark position-absolute d-flex align-items-center justify-content-center rounded-circle left-12 top-8 font-weight-bold font-size-12 text-white">2</span>
                                                <span class="d-none d-xl-block font-weight-bold font-size-16 text-gray-90 ml-3">$1785.00</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-none d-xl-block bg-primary">
                    <div class="container">
                        <div class="row align-items-stretch min-height-50">
                            <!-- Vertical Menu -->
                            <div class="col-md-auto d-none d-xl-flex align-items-end">
                                <div class="max-width-270 min-width-270">
                                    <!-- Basics Accordion -->
                                    <div id="basicsAccordion">
                                        <!-- Card -->
                                        <div class="card border-0 rounded-0">
                                            <div class="card-header bg-primary rounded-0 card-collapse border-0" id="basicsHeadingOne">
                                                <button type="button" class="btn-link btn-remove-focus btn-block d-flex card-btn py-3 text-lh-1 px-4 shadow-none btn-primary rounded-top-lg border-0 font-weight-bold text-gray-90"
                                                    data-toggle="collapse"
                                                    data-target="#basicsCollapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="basicsCollapseOne">
                                                    <span class="pl-1 text-gray-90 text-white">Danh mục</span>
                                                    <span class="text-gray-90 ml-3 text-white">
                                                        <span class="ec ec-arrow-down-search"></span>
                                                    </span>
                                                </button>
                                            </div>
                                            <div id="basicsCollapseOne" class="collapse {{$navigationStatus}} vertical-menu v1"
                                                aria-labelledby="basicsHeadingOne"
                                                data-parent="#basicsAccordion">
                                                <div class="card-body p-0">
                                                    <nav class="js-mega-menu navbar navbar-expand-xl u-header__navbar u-header__navbar--no-space hs-menu-initialized">
                                                        <div id="navBar" class="collapse navbar-collapse u-header__navbar-collapse">
                                                            <ul class="navbar-nav u-header__navbar-nav border-primary border-top-0">
                                                                {{-- <li class="nav-item u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-position="left">
                                                                    <a href="#" class="nav-link u-header__nav-link font-weight-bold">Value of the Day</a>
                                                                </li>
                                                                <li class="nav-item u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-position="left">
                                                                    <a href="#" class="nav-link u-header__nav-link font-weight-bold">Top 100 Offers</a>
                                                                </li>
                                                                <li class="nav-item u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-position="left">
                                                                    <a href="#" class="nav-link u-header__nav-link font-weight-bold">New Arrivals</a>
                                                                </li> --}}
                                                            </ul>
                                                        </div>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col align-self-center">
                                <form class="js-focus-state suggest-list"  autocomplete="off">
                                    <label class="sr-only" for="searchProduct">Tìm kiếm</label>
                                    <div class="input-group">
                                        <input type="email" class="form-control py-2 pl-5 font-size-15 border-0 height-40 rounded-left-pill product-search-field" name="email" id="searchProduct" placeholder="Tìm kiếm sản phẩm" aria-label="Search for Products" aria-describedby="searchProduct1" required>
                                        <div class="input-group-append">
                                            <!-- Select -->
                                            <select class=" custom-search-categories-select"
                                                data-style="btn height-40 text-gray-60 font-weight-normal border-0 rounded-0 bg-white px-5 py-2 " id="category-search">
                                                <option value="0" selected>Tất cả danh mục</option>
                                            </select>
                                            <!-- End Select -->
                                            <button class="btn btn-dark height-40 py-2 px-3 rounded-right-pill" type="button" id="searchProduct1">
                                                <span class="ec ec-search font-size-24"></span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <!-- End Search-Form -->
                            </div>
                            <!-- End Search bar -->
                            <!-- Header Icons -->
                            <div class="col-md-auto align-self-center">
                                <div class="d-flex">
                                    <ul class="d-flex list-unstyled mb-0">
                                        <li class="col">
                                            <a href="../shop/compare.html" class="text-gray-90 text-white" data-toggle="tooltip" data-placement="top" title="Compare">
                                                <i class="font-size-22 ec ec-compare"></i>
                                            </a>
                                        </li> 
                                        <li class="col pr-0">
                                            <a href="{{ route('customer.view.cart') }}" class="text-gray-90 text-white position-relative d-flex cart-count" data-toggle="tooltip" data-placement="top" title="Cart">
                                                <i class="font-size-22 ec ec-shopping-bag"></i>
                                                <span class="width-22 height-22 bg-dark position-absolute flex-content-center text-white rounded-circle left-12 top-8 font-weight-bold font-size-12  count"> </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- End Header Icons -->
                        </div>
                    </div>
                </div>
                <!-- End Vertical-and-secondary-menu -->
            </div>
        </header>
        <!-- ========== END HEADER ========== -->

        @yield('body')

        <!-- ========== FOOTER ========== -->
        <footer> 
            <div class="pt-8 pb-4 bg-gray-13">
                <div class="container mt-1">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="mb-6">
                                <a href="#" class="d-inline-block text-logo">text-logo </a>
                            </div>
                            <div class="mb-4">
                                <div class="row no-gutters">
                                    <div class="col-auto">
                                        <i class="ec ec-support text-primary font-size-56"></i>
                                    </div>
                                    <div class="col pl-3">
                                        <div class="font-size-13 font-weight-light">Liên hệ</div>
                                        <a href="tel:+80080018588" class="font-size-20 text-gray-90">0976828051</a>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-4">
                                <h6 class="mb-1 font-weight-bold">Địa chỉ</h6>
                                <address class="">
                                    250 Kim Giang Hà Nội
                                </address>
                            </div>
                            <div class="my-4 my-md-4">
                                <ul class="list-inline mb-0 opacity-7">
                                    <li class="list-inline-item mr-0">
                                        <a class="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" href="#">
                                            <span class="fab fa-facebook-f btn-icon__inner"></span>
                                        </a>
                                    </li>
                                    <li class="list-inline-item mr-0">
                                        <a class="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" href="#">
                                            <span class="fab fa-google btn-icon__inner"></span>
                                        </a>
                                    </li>
                                    <li class="list-inline-item mr-0">
                                        <a class="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" href="#">
                                            <span class="fab fa-twitter btn-icon__inner"></span>
                                        </a>
                                    </li>
                                    <li class="list-inline-item mr-0">
                                        <a class="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" href="#">
                                            <span class="fab fa-github btn-icon__inner"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="row">
                                <div class="col-12 col-md mb-4 mb-md-0">
                                </div>

                                <div class="col-12 col-md mb-4 mb-md-0">
                                </div>

                                <div class="col-12 col-md mb-4 mb-md-0">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="bg-gray-14 py-2">
                <div class="container">
                    <div class="flex-center-between d-block d-md-flex">
                        <div class="mb-3 mb-md-0">© <a href="#" class="font-weight-bold text-gray-90">Electro</a> - All rights Reserved</div> 
                    </div>
                </div>
            </div> 
        </footer> 
        <?php if (!$customer_data['is_login']): ?>
        <aside id="sidebarContent" class="u-sidebar u-sidebar__lg" aria-labelledby="sidebarNavToggler">
            <div class="u-sidebar__scroller">
                <div class="u-sidebar__container">
                    <div class="js-scrollbar u-header-sidebar__footer-offset pb-3">
                        <!-- Toggle Button -->
                        <div class="d-flex align-items-center pt-4 px-7">
                            <button type="button" class="close-auth-button close ml-auto"
                                aria-controls="sidebarContent"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-unfold-event="click"
                                data-unfold-hide-on-scroll="false"
                                data-unfold-target="#sidebarContent"
                                data-unfold-type="css-animation"
                                data-unfold-animation-in="fadeInRight"
                                data-unfold-animation-out="fadeOutRight"
                                data-unfold-duration="500">
                                <i class="ec ec-close-remove"></i>
                            </button>
                        </div>
                        <div class="js-scrollbar u-sidebar__body">
                            <div class="u-sidebar__content u-header-sidebar__content">
                                <form class="js-validate">
                                    
                                    <div id="login" data-target-group="idForm">
                                        <!-- Title -->
                                        <header class="text-center mb-7">
                                        <h2 class="h4 mb-0">Chào mừng chở lại!</h2>
                                        <p>Đăng nhập vào hệ thống.</p>
                                        </header>
                                        <div class="form-group">
                                            <div class="js-form-message js-focus-state">
                                                <label class="sr-only" for="signinEmail">Email</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="signinEmailLabel">
                                                            <i class="fas fa-at"></i>
                                                        </span>
                                                    </div>
                                                    <input type="email" class="form-control data-email" name="email" id="signinEmail" placeholder="Email" aria-label="Email" aria-describedby="signinEmailLabel" required
                                                    data-msg="Email không đúng định dạng."
                                                    data-error-class="u-has-error"
                                                    data-success-class="u-has-success">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="js-form-message js-focus-state">
                                              <label class="sr-only" for="signinPassword">Mật khẩu</label>
                                              <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="signinPasswordLabel">
                                                        <span class="fas fa-lock"></span>
                                                    </span>
                                                </div>
                                                <input type="password" class="form-control data-password" name="password" id="signinPassword" placeholder="Mật khẩu" aria-label="Password" aria-describedby="signinPasswordLabel" required
                                                   data-msg="Your password is invalid. Please try again."
                                                   data-error-class="u-has-error"
                                                   data-success-class="u-has-success">
                                              </div>
                                            </div>
                                        </div> 
                                        <div class="d-flex justify-content-end mb-4">
                                            <a class="js-animation-link small link-muted" href="javascript:;"
                                               data-target="#forgotPassword"
                                               data-link-group="idForm"
                                               data-animation-in="slideInUp">Quên mật khẩu?</a>
                                        </div>

                                        <div class="mb-2">
                                            <button type="button" class="btn btn-block btn-sm btn-primary transition-3d-hover color-white form-submit" atr="Login">Đăng nhập</button>
                                        </div>

                                        <div class="text-center mb-4">
                                            <span class="small text-muted">Bạn chưa có tài khoản?</span>
                                            <a class="js-animation-link small text-dark" href="javascript:;"
                                               data-target="#signup"
                                               data-link-group="idForm"
                                               data-animation-in="slideInUp">Đăng ký
                                            </a>
                                        </div>
                                    </div>
                                    <div id="signup" style="display: none; opacity: 0;" data-target-group="idForm">
                                        <header class="text-center mb-7">
                                        <h2 class="h4 mb-0">Đăng ký.</h2>
                                        </header>
                                        <div class="form-group">
                                            <div class="js-form-message js-focus-state">
                                                <label class="sr-only" for="signupEmail">Email</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="signupEmailLabel">
                                                            <i class="fas fa-at"></i>
                                                        </span>
                                                    </div>
                                                    <input type="email" class="form-control data-email" name="email" id="signupEmail" placeholder="Email" aria-label="Email" aria-describedby="signupEmailLabel" required
                                                    data-msg="Email không đúng định dạng."
                                                    data-error-class="u-has-error"
                                                    data-success-class="u-has-success">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="js-form-message js-focus-state">
                                                <label class="sr-only" for="signupPassword">Mật khẩu</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="signupPasswordLabel">
                                                            <span class="fas fa-lock"></span>
                                                        </span>
                                                    </div>
                                                    <input type="password" class="form-control data-password" name="password" id="signupPassword" placeholder="Mật khẩu" aria-label="Password" aria-describedby="signupPasswordLabel" required
                                                    data-msg="Password không đúng định dạng."
                                                    data-error-class="u-has-error"
                                                    data-success-class="u-has-success">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="js-form-message js-focus-state">
                                            <label class="sr-only" for="signupConfirmPassword">Nhập lại mật khẩu</label>
                                                <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="signupConfirmPasswordLabel">
                                                        <span class="fas fa-key"></span>
                                                    </span>
                                                </div>
                                                <input type="password" class="form-control data-password-repert" name="confirmPassword" id="signupConfirmPassword" placeholder="Nhập lại mật khẩu" aria-label="Confirm Password" aria-describedby="signupConfirmPasswordLabel" required
                                                data-msg="Password nhập lại không đúng."
                                                data-error-class="u-has-error"
                                                data-success-class="u-has-success">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="js-form-message js-focus-state">
                                                <label class="sr-only" for="signupName">Họ và tên</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="signupNameLabel">
                                                            <span class="fas fa-user"></span>
                                                        </span>
                                                    </div>
                                                    <input type="text" class="form-control data-name" name="name" id="signupName" placeholder="Họ và tên" aria-label="Name" aria-describedby="signupNameLabel" required
                                                    data-msg="Trường bắt buộc."
                                                    data-error-class="u-has-error"
                                                    data-success-class="u-has-success">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="js-form-message js-focus-state">
                                                <label class="sr-only" for="signupPhone">Số điện thoại</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="signupPhoneLabel">
                                                            <i class="fas fa-phone"></i>
                                                        </span>
                                                    </div>
                                                    <input type="text" class="form-control data-phone" name="phone" id="signupPhone" placeholder="Số điện thoại" aria-label="Phone" aria-describedby="signupPhoneLabel" required
                                                    data-msg="Trường bắt buộc."
                                                    data-error-class="u-has-error"
                                                    data-success-class="u-has-success">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="js-form-message js-focus-state">
                                                <label class="sr-only" for="signupAddress">Địa chỉ</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="signupAddressLabel">
                                                            <i class="fas fa-address-card"></i>
                                                        </span>
                                                    </div>
                                                    <input type="text" class="form-control data-address" name="address" id="signupAddress" placeholder="Địa chỉ" aria-label="Address" aria-describedby="signupAddressLabel" required
                                                    data-msg="Trường bắt buộc."
                                                    data-error-class="u-has-error"
                                                    data-success-class="u-has-success">
                                                </div>
                                            </div>
                                        </div>         
                                        <div class="mb-2">
                                            <button type="button" class="btn btn-block btn-sm btn-primary transition-3d-hover color-white form-submit" atr="Register">Đăng ký</button>
                                        </div>

                                        <div class="text-center mb-4">
                                            <span class="small text-muted">Bạn đã có tài khoản?</span>
                                            <a class="js-animation-link small text-dark" href="javascript:;"
                                                data-target="#login"
                                                data-link-group="idForm"
                                                data-animation-in="slideInUp">Đăng nhập
                                            </a>
                                        </div> 
                                    </div>
                                    <div id="forgotPassword" style="display: none; opacity: 0;" data-target-group="idForm">
                                        <header class="text-center mb-7">
                                            <h2 class="h4 mb-0">Quên mật khẩu.</h2>
                                            <p>Nhập email để khôi phục mật khẩu.</p>
                                        </header>
                                        <div class="form-group form-email">
                                            <div class="js-form-message js-focus-state">
                                                <label class="sr-only" for="recoverEmail">Email</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="recoverEmailLabel">
                                                            <i class="fas fa-at"></i>
                                                        </span>
                                                    </div>
                                                    <input type="email" class="form-control data-email" name="email" id="recoverEmail" placeholder="Email" aria-label="Your email" aria-describedby="recoverEmailLabel" required
                                                    data-msg="Hãy nhập email của bạn."
                                                    data-error-class="u-has-error"
                                                    data-success-class="u-has-success">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group form-password" style="display: none;">
                                            <div class="js-form-message js-focus-state">
                                                <label class="sr-only" for="recoverEmail">Mật khẩu mới</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="recoverCodeLabel">
                                                            <span class="fas fa-lock"></span>
                                                        </span>
                                                    </div>
                                                    <input type="password" class="form-control data-password" name="text" id="recoverEmail" placeholder="Mật khẩu mới" aria-describedby="recoverCodeLabel"  required
                                                    data-msg="Trường bắt buộc."
                                                    data-error-class="u-has-error"
                                                    data-success-class="u-has-success">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group form-code" style="display: none;">
                                            <div class="js-form-message js-focus-state">
                                                <label class="sr-only" for="recoverEmail">Mã xác thực</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="recoverCodeLabel">
                                                            <i class="fas fa-code"></i>
                                                        </span>
                                                    </div>
                                                    <input type="text" class="form-control data-code" name="text" id="recoverEmail" placeholder="Mã xác thực" aria-describedby="recoverCodeLabel"  required
                                                    data-msg="Trường bắt buộc."
                                                    data-error-class="u-has-error"
                                                    data-success-class="u-has-success">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-2">
                                            <button type="button" class="btn btn-block btn-sm btn-primary transition-3d-hover color-white form-submit" atr="Forgot">Lấy lại mật khẩu</button>
                                        </div>
                                        <div class="text-center mb-4">
                                            <span class="small text-muted">Bạn đã có tài khoản?</span>
                                            <a class="js-animation-link small text-dark" href="javascript:;"
                                                data-target="#login"
                                                data-link-group="idForm"
                                                data-animation-in="slideInUp">Đăng nhập
                                            </a>
                                        </div> 
                                    </div> 
                                </form>
                            </div>
                        </div>
                        <!-- End Content -->
                    </div>
                </div>
            </div>
        </aside> 
        <?php endif ?> 
        <a class="js-go-to u-go-to" href="#"
            data-position='{"bottom": 15, "right": 15 }'
            data-type="fixed"
            data-offset-top="400"
            data-compensation="#header"
            data-show-effect="slideInUp"
            data-hide-effect="slideOutDown">
            <span class="fas fa-arrow-up u-go-to__inner"></span>
        </a> 

        <!-- JS Global Compulsory -->
        <script src="{{ asset("customer/assets/vendor/jquery/dist/jquery.min.js") }}"></script>
        <script src="{{ asset("customer/assets/vendor/jquery-migrate/dist/jquery-migrate.min.js") }}"></script>
        <script src="{{ asset("customer/assets/vendor/popper.js/dist/umd/popper.min.js") }}"></script>
        <script src="{{ asset("customer/assets/vendor/bootstrap/bootstrap.min.js") }}"></script>

        <!-- JS Implementing Plugins -->
        <script src="{{ asset("customer/assets/vendor/appear.js") }}"></script>
        <script src="{{ asset("customer/assets/vendor/jquery.countdown.min.js") }}"></script>
        <script src="{{ asset("customer/assets/vendor/hs-megamenu/src/hs.megamenu.js") }}"></script>
        <script src="{{ asset("customer/assets/vendor/svg-injector/dist/svg-injector.min.js") }}"></script>
        <script src="{{ asset("customer/assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js") }}"></script>
        <script src="{{ asset("customer/assets/vendor/jquery-validation/dist/jquery.validate.min.js") }}"></script>
        <script src="{{ asset("customer/assets/vendor/ion-rangeslider/js/ion.rangeSlider.min.js") }}"></script>
        <script src="{{ asset("customer/assets/vendor/fancybox/jquery.fancybox.min.js") }}"></script>
        <script src="{{ asset("customer/assets/vendor/typed.js/lib/typed.min.js") }}"></script>
        <script src="{{ asset("customer/assets/vendor/slick-carousel/slick/slick.js") }}"></script>
        <script src="{{ asset("customer/assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js") }}"></script>

        <!-- JS Electro -->
        <script src="{{ asset("customer/assets/js/hs.core.js") }}"></script>
        <script src="{{ asset("customer/assets/js/components/hs.countdown.js") }}"></script>
        <script src="{{ asset("customer/assets/js/components/hs.header.js") }}"></script>
        <script src="{{ asset("customer/assets/js/components/hs.hamburgers.js") }}"></script>
        <script src="{{ asset("customer/assets/js/components/hs.unfold.js") }}"></script>
        <script src="{{ asset("customer/assets/js/components/hs.focus-state.js") }}"></script>
        <script src="{{ asset("customer/assets/js/components/hs.malihu-scrollbar.js") }}"></script>
        <script src="{{ asset("customer/assets/js/components/hs.range-slider.js") }}"></script>
        <script src="{{ asset("customer/assets/js/components/hs.validation.js") }}"></script>
        <script src="{{ asset("customer/assets/js/components/hs.fancybox.js") }}"></script>
        <script src="{{ asset("customer/assets/js/components/hs.onscroll-animation.js") }}"></script>
        <script src="{{ asset("customer/assets/js/components/hs.slick-carousel.js") }}"></script>
        <script src="{{ asset("customer/assets/js/components/hs.show-animation.js") }}"></script>
        <script src="{{ asset("customer/assets/js/components/hs.svg-injector.js") }}"></script>
        <script src="{{ asset("customer/assets/js/components/hs.go-to.js") }}"></script>
        <script src="{{ asset("customer/assets/js/components/hs.selectpicker.js") }}"></script>

        <!-- JS Plugins Init. -->
        <script>
            $(window).on('load', function () {
                // initialization of HSMegaMenu component
                $('.js-mega-menu').HSMegaMenu({
                    event: 'hover',
                    direction: 'horizontal',
                    pageContainer: $('.container'),
                    breakpoint: 767.98,
                    hideTimeOut: 0
                });

                // initialization of svg injector module
                $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
            });

            $(document).on('ready', function () {
                // initialization of header
                $.HSCore.components.HSHeader.init($('#header'));

                // initialization of animation
                $.HSCore.components.HSOnScrollAnimation.init('[data-animation]');

                // initialization of unfold component
                $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
                    afterOpen: function () {
                        $(this).find('input[type="search"]').focus();
                    }
                });

                // initialization of popups
                $.HSCore.components.HSFancyBox.init('.js-fancybox');

                // initialization of countdowns
                var countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {
                    yearsElSelector: '.js-cd-years',
                    monthsElSelector: '.js-cd-months',
                    daysElSelector: '.js-cd-days',
                    hoursElSelector: '.js-cd-hours',
                    minutesElSelector: '.js-cd-minutes',
                    secondsElSelector: '.js-cd-seconds'
                });

                // initialization of malihu scrollbar
                $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));

                // initialization of forms
                $.HSCore.components.HSFocusState.init();

                // initialization of form validation
                $.HSCore.components.HSValidation.init('.js-validate', {
                    rules: {
                        confirmPassword: {
                            equalTo: '#signupPassword'
                        }
                    }
                });

                // initialization of show animations
                $.HSCore.components.HSShowAnimation.init('.js-animation-link');

                // initialization of fancybox
                $.HSCore.components.HSFancyBox.init('.js-fancybox');

                // initialization of slick carousel
                // $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
                $.HSCore.components.HSRangeSlider.init('.js-range-slider');

                // initialization of go to
                $.HSCore.components.HSGoTo.init('.js-go-to');

                // initialization of hamburgers
                $.HSCore.components.HSHamburgers.init('#hamburgerTrigger');

                // initialization of unfold component
                $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
                    beforeClose: function () {
                        $('#hamburgerTrigger').removeClass('is-active');
                    },
                    afterClose: function() {
                        $('#headerSidebarList .collapse.show').collapse('hide');
                    }
                });

                $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
                    e.preventDefault();

                    var target = $(this).data('target');

                    if($(this).attr('aria-expanded') === "true") {
                        $(target).collapse('hide');
                    } else {
                        $(target).collapse('show');
                    }
                });

                // initialization of unfold component
                $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));

                // $.HSCore.components.HSSelectPicker.init('.js-select');
            });
        </script>

        <script type="text/javascript" src="{{ asset("customer/assets/js/pagination.js") }}"></script>
        <script type="text/javascript" src="{{ asset("customer/assets/js/api.js") }}"></script>
        <script type="text/javascript" src="{{ asset("customer/assets/js/layout.js") }}"></script>
        @yield('js')
    </body>
</html>
