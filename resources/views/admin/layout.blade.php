<!DOCTYPE html>
<html lang="en" class="is-scrolling">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="viho admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities.">
    <meta name="keywords" content="admin template, viho admin template, dashboard template, flat admin template, responsive admin template, web app">
    <meta name="author" content="pixelstrap">
    <link rel="icon" href="../assets/images/favicon.png" type="image/x-icon">
    <link rel="shortcut icon" href="../assets/images/favicon.png" type="image/x-icon">
    <title>Electro - @yield('title')</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/fontawesome.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/icofont.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/themify.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/flag-icon.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/feather-icon.css') }}">
    @yield('css')
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/bootstrap.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/style.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/color-1.css') }}" media="screen" id="color">
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/responsive.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/custom.css') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
  </head>
  <body>
    <div class="loader-wrapper">
      <div class="theme-loader">    
        <div class="loader-p"></div>
      </div>
    </div>
    <div class="page-wrapper compact-wrapper" id="pageWrapper">
      <div class="page-main-header">
        <div class="main-header-right row m-0">
          <div class="main-header-left">
            <div class="logo-wrapper"><a href="index.html"><img class="img-fluid" src="../assets/images/logo/logo.png" alt=""></a></div>
            <div class="dark-logo-wrapper"><a href="index.html"><img class="img-fluid" src="../assets/images/logo/dark-logo.png" alt=""></a></div>
            <div class="toggle-sidebar"><i class="status_toggle middle" data-feather="align-center" id="sidebar-toggle"></i></div>
          </div>
          <div class="left-menu-header col">
            <ul>
              <li>
                <form class="form-inline search-form">
                  <div class="search-bg"><i class="fa fa-search"></i>
                    <input class="form-control-plaintext" placeholder="Search here.....">
                  </div>
                </form><span class="d-sm-none mobile-search search-bg"><i class="fa fa-search"></i></span>
              </li>
            </ul>
          </div>
          <div class="nav-right col pull-right right-menu p-0">
            <ul class="nav-menus">
              <li><a class="text-dark" href="#!" onclick="javascript:toggleFullScreen()"><i data-feather="maximize"></i></a></li>
              <li class="onhover-dropdown p-0">
                <button class="btn btn-primary-light" type="button">
                  <a href="javascript:void(0);"
                     onclick="event.preventDefault();
                                   document.getElementById('logout-form').submit();"><i data-feather="log-out"></i>Đăng xuất
                  </a>
                </button>
              </li>
              <form id="logout-form" action="{{ route('admin.logout') }}" method="POST" class="d-none">
                  @csrf
              </form>
            </ul>
          </div>
          <div class="d-lg-none mobile-toggle pull-right w-auto"><i data-feather="more-horizontal"></i></div>
        </div>
      </div> 
      <div class="page-body-wrapper sidebar-icon">
        @include('admin.sidebar') 
        <div class="page-body"> 
          @yield('body')
        </div> 
        <footer class="footer">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 footer-copyright">
                <p class="mb-0">Copyright 2021-22 © viho All rights reserved.</p>
              </div>
              <div class="col-md-6">
                <p class="pull-right mb-0">Hand crafted & made with <i class="fa fa-heart font-secondary"></i></p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    @yield('sub_layout')
    @include('admin.toast')
    <script src="{{ asset('manager/assets/js/jquery-3.5.1.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/icons/feather-icon/feather.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/icons/feather-icon/feather-icon.js') }}"></script>
    <script src="{{ asset('manager/assets/js/sidebar-menu.js') }}"></script>
    <script src="{{ asset('manager/assets/js/config.js') }}"></script>
    <script src="{{ asset('manager/assets/js/bootstrap/popper.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/bootstrap/bootstrap.min.js') }}"></script>


    <script src="{{ asset('manager/assets/js-manager/layout.js') }}"></script>
    <script src="{{ asset('manager/assets/js-manager/api.js') }}"></script>
    <script src="{{ asset('manager/assets/js-manager/template.js') }}"></script>

    @yield('js')
    
    <script src="{{ asset('manager/assets/js/script.js') }}"></script>
    {{-- Custom layout --}}
    {{-- <script src="{{ asset('manager/assets/js/theme-customizer/customizer.js') }}"></script> --}}
  </body>
</html>