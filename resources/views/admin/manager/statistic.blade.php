@extends('admin.layout')
@section('title', 'Thống kê') 

@section('css')
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/animate.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/chartist.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/date-picker.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/prism.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/vector-map.css') }}">
@endsection()

@section('body')
<div class="container-fluid dashboard-default-sec">
    <div class="row">
      <div class="col-xl-5 box-col-12 des-xl-100"> 
        <div class="row"> 
          <div class="col-xl-6 col-md-3 col-sm-6 box-col-3 des-xl-25 rate-sec">
            <div class="card income-card card-secondary">                                    
              <div class="card-body text-center"> 
                <h5 class="data-turnover"> </h5>
                <p>Tổng doanh thu</p>
                <a class="btn-arrow arrow-secondary" href="javascript:void(0)"><i class="toprightarrow-secondary fa fa-arrow-up me-2"></i>90.54% </a>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-md-3 col-sm-6 box-col-3 des-xl-25 rate-sec">
            <div class="card income-card card-secondary">                                    
              <div class="card-body text-center"> 
                <h5 class="data-item_sell"> </h5>
                <p>Sản phẩm đã bán</p>
                <a class="btn-arrow arrow-secondary" href="javascript:void(0)"><i class="toprightarrow-secondary fa fa-arrow-up me-2"></i>90.54% </a>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-md-3 col-sm-6 box-col-3 des-xl-25 rate-sec">
            <div class="card income-card card-secondary">                                    
              <div class="card-body text-center"> 
                <h5 class="data-order_time"> </h5>
                <p>Tổng số đơn hàng</p>
                <a class="btn-arrow arrow-secondary" href="javascript:void(0)"><i class="toprightarrow-secondary fa fa-arrow-up me-2"></i>90.54% </a>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-md-3 col-sm-6 box-col-3 des-xl-25 rate-sec">
            <div class="card income-card card-secondary">                                    
              <div class="card-body text-center"> 
                <h5 class="data-customer_buy"> </h5>
                <p>Khách hàng đã mua</p>
                <a class="btn-arrow arrow-secondary" href="javascript:void(0)"><i class="toprightarrow-secondary fa fa-arrow-up me-2"></i>90.54% </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-7 box-col-12 des-xl-100 dashboard-sec">

      </div> 
    </div>
</div> 
@endsection()

@section('sub_layout')

@endsection()

@section('js')
    <script src="{{ asset('manager/assets/js/chart/chartist/chartist.js') }}"></script>
    <script src="{{ asset('manager/assets/js/chart/chartist/chartist-plugin-tooltip.js') }}"></script>
    <script src="{{ asset('manager/assets/js/chart/knob/knob.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/chart/knob/knob-chart.js') }}"></script>
    <script src="{{ asset('manager/assets/js/chart/apex-chart/apex-chart.js') }}"></script>
    <script src="{{ asset('manager/assets/js/chart/apex-chart/stock-prices.js') }}"></script>
    <script src="{{ asset('manager/assets/js/prism/prism.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/clipboard/clipboard.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/counter/jquery.waypoints.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/counter/jquery.counterup.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/counter/counter-custom.js') }}"></script>
    <script src="{{ asset('manager/assets/js/custom-card/custom-card.js') }}"></script>
    <script src="{{ asset('manager/assets/js/notify/bootstrap-notify.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/vector-map/jquery-jvectormap-2.0.2.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/vector-map/map/jquery-jvectormap-world-mill-en.js') }}"></script>
    <script src="{{ asset('manager/assets/js/vector-map/map/jquery-jvectormap-us-aea-en.js') }}"></script>
    <script src="{{ asset('manager/assets/js/vector-map/map/jquery-jvectormap-uk-mill-en.js') }}"></script>
    <script src="{{ asset('manager/assets/js/vector-map/map/jquery-jvectormap-au-mill.js') }}"></script>
    <script src="{{ asset('manager/assets/js/vector-map/map/jquery-jvectormap-chicago-mill-en.js') }}"></script>
    <script src="{{ asset('manager/assets/js/vector-map/map/jquery-jvectormap-in-mill.js') }}"></script>
    <script src="{{ asset('manager/assets/js/vector-map/map/jquery-jvectormap-asia-mill.js') }}"></script>
    <script src="{{ asset('manager/assets/js/dashboard/default.js') }}"></script>
    <script src="{{ asset('manager/assets/js/notify/index.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datepicker/date-picker/datepicker.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datepicker/date-picker/datepicker.en.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datepicker/date-picker/datepicker.custom.js') }}"></script>


    <script src="{{ asset('manager/assets/js-manager/page/index.js') }}"></script>
@endsection()