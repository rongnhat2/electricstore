<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <link rel="icon" href="../assets/images/favicon.png" type="image/x-icon">
    <link rel="shortcut icon" href="../assets/images/favicon.png" type="image/x-icon">
    <title>Admin - Login</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset("manager/assets/css/fontawesome.css") }}">
    <link rel="stylesheet" type="text/css" href="{{ asset("manager/assets/css/icofont.css") }}">
    <link rel="stylesheet" type="text/css" href="{{ asset("manager/assets/css/themify.css") }}">
    <link rel="stylesheet" type="text/css" href="{{ asset("manager/assets/css/flag-icon.css") }}">
    <link rel="stylesheet" type="text/css" href="{{ asset("manager/assets/css/feather-icon.css") }}">
    <link rel="stylesheet" type="text/css" href="{{ asset("manager/assets/css/bootstrap.css") }}">
    <link rel="stylesheet" type="text/css" href="{{ asset("manager/assets/css/style.css") }}">
    <link rel="stylesheet" href="{{ asset("manager/assets/css/color-1.css") }}" id="color" media="screen">
    <link rel="stylesheet" type="text/css" href="{{ asset("manager/assets/css/responsive.css") }}">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
  </head>
  <body>
    <!-- Loader starts-->
    <div class="loader-wrapper">
      <div class="theme-loader">    
        <div class="loader-p"></div>
      </div>
    </div>
    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-5"><img class="bg-img-cover bg-center" src="{{ asset("manager/assets/images/login/3.jpg") }}" alt="looginpage"></div>
          <div class="col-xl-7 p-0">    
            <div class="login-card">
              <form class="theme-form login-form" method="POST" action="{{ route('admin.login') }}">
                @csrf
                <h4>Đăng nhập</h4>
                <h6>Chào mừng trở lại! Đăng nhập vào tài khoản của bạn.</h6>
                @if ( Session::has('error') )
                    <div class="alert alert-danger" role="alert">
                        {{ Session::get('error') }}
                    </div>
                @endif
                <div class="form-group">
                  <label>Email</label>
                  <div class="input-group"><span class="input-group-text"><i class="icon-email"></i></span>
                    <input class="form-control" type="email" required="" name="email" placeholder="Test@gmail.com">
                  </div>
                </div>
                <div class="form-group">
                  <label>Mật khẩu</label>
                  <div class="input-group"><span class="input-group-text"><i class="icon-lock"></i></span>
                    <input class="form-control" type="password" name="password" required="" placeholder="*********">
                    <div class="show-hide"><span class="show"></span></div>
                  </div>
                </div>
                <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Đăng nhập</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <script src="https://kit.fontawesome.com/d8162761f2.js"></script>
    <script src="{{ asset("manager/assets/js/jquery-3.5.1.min.js") }}"></script>
    <script src="{{ asset("manager/assets/js/icons/feather-icon/feather.min.js") }}"></script>
    <script src="{{ asset("manager/assets/js/icons/feather-icon/feather-icon.js") }}"></script>
    <script src="{{ asset("manager/assets/js/sidebar-menu.js") }}"></script>
    <script src="{{ asset("manager/assets/js/config.js") }}"></script>
    <script src="{{ asset("manager/assets/js/bootstrap/popper.min.js") }}"></script>
    <script src="{{ asset("manager/assets/js/bootstrap/bootstrap.min.js") }}"></script>
    <script src="{{ asset("manager/assets/js/script.js") }}"></script>
  </body>
</html>