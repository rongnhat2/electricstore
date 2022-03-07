@extends('admin.layout')
@section('title', 'Quản lý sản phẩm') 

@section('css')
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/datatables.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('manager/assets/css/datatable-extension.css') }}">
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
@endsection()

@section('body')

          <div class="container-fluid">
            <div class="page-header">
              <div class="row">
                <div class="col-sm-6">
                  <h3>Quản lí sản phẩm</h3>
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
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <div class="dt-ext ">
                      <table class="display" id="data-table"> 
                      </table>
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
<div class="customizer-contain " id="side-modal-delete">
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

    <script src="{{ asset('manager/assets/js/editor/summernote/summernote-lite.min.js') }}"></script>

    <script src="{{ asset('manager/assets/js-manager/page/product.js') }}"></script>
@endsection()