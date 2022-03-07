@extends('admin.layout')
@section('title', 'Quản lý kho') 

@section('css')
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/datatables.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/datatable-extension.css') }}">
@endsection()

@section('body')
  <div class="container-fluid">
    <div class="page-header">
      <div class="row">
        <div class="col-sm-6">
          <h3>Quản lí kho</h3>
        </div>
        <div class="col-sm-6">
          <!-- Bookmark Start-->
          <div class="bookmark">
            <ul>
              <li class="modal-control" atr="Side Modal"><a href="javascript:void(0)"><i data-feather="plus"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="email-wrap bookmark-wrap">
      <div class="row">
        <div class="col-xl-3 xl-30">
          <div class="email-sidebar"><a class="btn btn-primary email-aside-toggle" href="javascript:void(0)">contact filter    </a>
            <div class="email-left-aside">
              <div class="card">
                <div class="card-body">
                  <div class="email-app-sidebar left-bookmark"> 
                    <ul class="nav main-menu contact-options status-list" role="tablist"> 
                      <li><a href="javascript:void(0)" class="status-event" atr="Item" data-id=""><span class="title">Kho hàng</span></a></li>
                      <li><a href="javascript:void(0)" class="status-event is-select" atr="History" data-id=""><span class="title">Lịch sử nhập - Xuất kho</span></a></li> 
                      <li><a href="javascript:void(0)" class="status-event" atr="Order"><span class="title">Yêu cầu xuất kho</span></a></li>
                      <li><a href="javascript:void(0)" class="status-event" atr="Export"><span class="title">Xuất đơn hàng</span></a></li>
                      <li><a href="javascript:void(0)" class="status-event" atr="Shipping"><span class="title">Đơn đang vận chuyển</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-md-12 box-col-8 xl-70">
          <div class="email-right-aside bookmark-tabcontent contacts-tabs">
            <div class="card email-body radius-left">
              <div class="ps-0">
                <div class="tab-content">
                  <div class="tab-pane fade active show" id="pills-personal" role="tabpanel" aria-labelledby="pills-personal-tab">
                    <div class="card">
                      <div class="card-body">
                        <div class="dt-ext data-table-wrapper">
                          <table class="display" id="data-table">  </table>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection()

@section('sub_layout')
<div class="customizer-contain " id="side-modal-create">
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
<div class="customizer-contain " id="side-modal-order">
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
<div class="customizer-contain " id="side-modal-export">
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
<div class="customizer-contain " id="side-modal-shipping">
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

    <script src="{{ asset('manager/assets/js-manager/page/warehouse.js') }}"></script>
@endsection()