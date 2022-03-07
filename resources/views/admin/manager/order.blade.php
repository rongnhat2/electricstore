@extends('admin.layout')
@section('title', 'Quản lý đơn hàng') 

@section('css')
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/datatables.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/datatable-extension.css') }}">
@endsection()

@section('body')
  <div class="container-fluid">
    <div class="page-header">
      <div class="row">
        <div class="col-sm-6">
          <h3>Quản lí đơn hàng</h3>
        </div>
        <div class="col-sm-6"> 
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="email-wrap bookmark-wrap">
      <div class="row">
        <div class="col-xl-3 xl-30">
          <div class="email-sidebar"> 
            <div class="email-left-aside">
              <div class="card">
                <div class="card-body">
                  <div class="email-app-sidebar left-bookmark"> 
                    <ul class="nav main-menu contact-options order-tab" role="tablist"> 
                      <li><a href="javascript:void(0)" class="badge-light"><span class="title">Tất cả đơn hàng</span></a></li>
                      <li><a href="javascript:void(0)" order-status="0"><span class="title">Đang chờ</span></a></li>
                      <li><a href="javascript:void(0)" order-status="1"><span class="title">Chưa hoàn thiện</span></a></li>
                      <li><a href="javascript:void(0)" order-status="2"><span class="title">Đã hoàn thiện</span></a></li>
                      <li><a href="javascript:void(0)" order-status="3"><span class="title">Đang lấy hàng</span></a></li>
                      <li><a href="javascript:void(0)" order-status="4"><span class="title">Đang vận chuyển</span></a></li>
                      <li><a href="javascript:void(0)" order-status="5"><span class="title">Đã vận chuyển</span></a></li>
                      <li><a href="javascript:void(0)" order-status="6"><span class="title">Đã hủy</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-md-12 box-col-8 xl-70">
          <div class="card">
            <div class="card-body">
              <div class="dt-ext ">
                <table class="display" id="data-table">  </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection()

@section('sub_layout')
<div class="customizer-contain " id="side-modal-update">
    <div class="tab-content" >
        <div class="customizer-header"> 
          <i class="icofont-close icon-close side-modal-close"></i>
            <h5 class="m-0">Live customizer</h5>
        </div>
        <div class="customizer-body is-scrolling"> 
          
        </div>
        <div class="customizer-footer d-flex justify-content-end align-items-center"> 
            <button type="button" class="btn btn-primary push-modal" atr="Push"></button>
        </div>
    </div>
</div>
@endsection()

@section('js')
  <script src="{{ asset('manager/assets/js/datatable/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datatable/datatable-extension/dataTables.buttons.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datatable/datatable-extension/jszip.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datatable/datatable-extension/buttons.colVis.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datatable/datatable-extension/pdfmake.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datatable/datatable-extension/vfs_fonts.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datatable/datatable-extension/dataTables.autoFill.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datatable/datatable-extension/dataTables.select.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datatable/datatable-extension/buttons.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datatable/datatable-extension/buttons.html5.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datatable/datatable-extension/buttons.print.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datatable/datatable-extension/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datatable/datatable-extension/dataTables.responsive.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datatable/datatable-extension/responsive.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datatable/datatable-extension/dataTables.keyTable.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datatable/datatable-extension/dataTables.colReorder.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datatable/datatable-extension/dataTables.fixedHeader.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datatable/datatable-extension/dataTables.rowReorder.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datatable/datatable-extension/dataTables.scroller.min.js') }}"></script>
    <script src="{{ asset('manager/assets/js/datatable/datatable-extension/custom.js') }}"></script>

    <script src="{{ asset('manager/assets/js-manager/page/order.js') }}"></script>
@endsection()