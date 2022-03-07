<header class="main-nav">
  <div class="sidebar-user text-center">
    <a class="setting-primary" href="javascript:void(0)"> <i data-feather="settings"></i></a>
    <img class="img-90 rounded-circle" src="{{ asset('manager/assets/images/dashboard/1.png') }}" alt="">
    <div class="badge-bottom"><span class="badge badge-primary">New</span></div>
    <a href="user-profile.html">
      <h6 class="mt-3 f-14 f-w-600">Nguyễn Nhât Long</h6>
    </a>
    <p class="mb-0 font-roboto">Super Admin</p> 
  </div>
  <nav>
    <div class="main-navbar">
      <div class="left-arrow" id="left-arrow"><i data-feather="arrow-left"></i></div>
      <div id="mainnav">           
        <ul class="nav-menu custom-scrollbar is-scrolling">
          <li class="back-btn">
            <div class="mobile-back text-end"><span>Back</span><i class="fa fa-angle-right ps-2" aria-hidden="true"></i></div>
          </li>
          <li class="sidebar-main-title">
            <div>
              <h6>Thống kê</h6>
            </div>
          </li>
          <li><a class="nav-link menu-title link-nav" href="{{ route('admin.statistic.index') }}"><i data-feather="bar-chart-2"></i>Doanh thu</span></a></li>
          <li class="sidebar-main-title">
            <div>
              <h6>Danh mục</h6>
            </div>
          </li>
          <li><a class="nav-link menu-title link-nav" href="{{ route('admin.category.index') }}"><i data-feather="menu"></i><span>Danh mục</span></a></li>
          <li><a class="nav-link menu-title link-nav" href="{{ route('admin.supplier.index') }}"><i data-feather="globe"></i><span>Thương hiệu</span></a></li>
          <li><a class="nav-link menu-title link-nav" href="{{ route('admin.product.index') }}"><i data-feather="box"></i><span>Sản phẩm</span></a></li>
          <li><a class="nav-link menu-title link-nav" href="{{ route('admin.warehouse.index') }}"><i data-feather="database"></i><span>Kho</span></a></li>
          <li><a class="nav-link menu-title link-nav" href="{{ route('admin.order.index') }}"><i data-feather="file-text"></i>Đơn hàng</span></a></li>
          <li class="sidebar-main-title">
            <div>
              <h6>Đối tượng</h6>
            </div>
          </li>
          <li><a class="nav-link menu-title link-nav" href="{{ route('admin.manager.index') }}"><i data-feather="user-check"></i><span>Nhân viên </span></a></li>
          <li><a class="nav-link menu-title link-nav" href="{{ route('admin.supplier.index') }}"><i data-feather="users"></i><span>Khách hàng</span></a></li>
        </ul>
      </div>
      <div class="right-arrow" id="right-arrow"><i data-feather="arrow-right"></i></div>
    </div>
  </nav>
</header>