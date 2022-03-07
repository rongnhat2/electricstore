const Template = {
	Category: {
		Create(){
			return `<div class="error-log"></div>
						<div class="row">
							<input type="hidden" class="data-id">
			        		<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
			        			<div class="form-group">
					              	<label >Tên danh mục</label>
					              	<input class="form-control data-name" type="text" placeholder="" required="">
					            </div>
			        			<div class="form-group" id="metadata">
			              	<label >Metadata</label>
			              	<div class="metadata-list"> 
			              	</div>
			              	<input class="form-control meta-create m-b-10" type="text" placeholder="Thêm mới" required="">
				            </div>
			        		</div>
			        		<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
			        			<div class="form-group" id="sub-category">
			              	<label >Danh mục phụ</label>
			              	<div class="metadata-list">
			              	</div>
			              	<input class="form-control meta-create m-b-10" type="text" placeholder="Thêm mới" required="">
				            </div>
		        		</div>
		        	</div>`
		},
		Delete(){
			return `<div class="wrapper d-flex justify-center"><img src="/manager/images_global/funny.gif" alt="" style="width: 100%"></div><input type="hidden" class="data-id">`
		},
	},
	Supplier: {
		Create(){
			return `<div class="error-log"></div>
					<input type="hidden" class="data-id">
					<div class="form-group">
		              	<label >Tên thương hiệu</label>
		              	<input class="form-control data-name" type="text" placeholder="" required="">
		            </div>`
		},
		Delete(){
			return `<div class="wrapper d-flex justify-center"><img src="/manager/images_global/funny.gif" alt="" style="width: 100%"></div>`
		},
	},
	Product: {
		Create(){
			return `<div class="error-log"></div>
		                <div class="row">
		                    <input type="hidden" class="data-id">
		                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
		                        <div class="form-group">
		                            <label >Tên sản phẩm</label>
		                            <input class="form-control data-name" type="text" placeholder="" required="">
		                        </div>
		                        <div class="form-group">
		                            <label >SKU</label>
		                            <input class="form-control data-sku" type="text" placeholder="" required="">
		                        </div>
		                        <div class="form-group">
		                            <label >Đơn giá</label>
		                            <input class="form-control data-prices" type="text" placeholder="" required="">
		                        </div>
		                        <div class="form-group">
		                            <label >Nhà cung cấp</label>
		                            <select name="" class="form-control data-supplier" id=""> </select>
		                        </div>
		                        <div class="form-group">
		                            <label >Danh mục</label>
		                            <select name="" class="form-select data-category" id=""> </select>
		                            <div class="metadata-category-list">
		                                <h6>Metadata</h6>
		                                <div class="row metadata-list-item"> </div>          
		                            </div>
		                        </div>
		                        <div class="form-group">
		                            <label >Phân loại</label>
		                            <select name="" class="form-select data-type" id=""> </select>
		                        </div>
		                    </div>
		                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
		                        <div class="form-group">
		                            <label>Hình ảnh</label>
		                            <input type="file" class="form-control image-list" id="image-update" name="image"  accept="image/*" multiple="">
		                            <div class="form-preview multi-upload"> </div>
		                        </div>
		                    </div>
		                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
		                        <div class="form-group">
		                            <label >Mô tả</label>
		                            <textarea name="" id="" class="form-control data-description" rows="5"></textarea>
		                        </div>
		                        <div class="form-group">
		                            <label >Chi tiết</label>
		                            <textarea class="form-control summernote data-detail" name="" id="" rows="5"></textarea>
		                        </div>
		                    </div>
		                </div>
		            </div>`
		},
	},
	Order: {
		Update(){
			return `<div class="row">
			            <div class="col-md-3">
			              <div class="customer-wrapper">
			                <div class="customer-avatar-wrapper">
			                  <div class="customer-avatar"> </div>
			                </div>
			                <h4 class="customer-name"></h4> 
			                <p class="customer-info data-phone"></p>
			                <p class="customer-info data-address"></p>
			              </div>
			            </div>
			            <div class="col-md-9">
			              <div class="order-item-wrapper" >
			                <div class="order-header "> </div>
			                <div class="order-body"> </div>
			                <div class="order-footer">
			                  Tổng số tiền: <span class="total-prices"></span>
			                </div>
			              </div>
			              <div class="status-option"> </div>
			            </div>
			          </div>`
		},
	},
	Warehouse: {
		Create(){
			return `<div class="row warehouse-modal">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
							<div class="card">
								<div class="card-body">
									<div class="item-list">

									</div>
									<button type="button" class="btn btn-success item-create" atr="Item Create">Tạo mới</button>
								</div>
							</div>
						</div>
	            	</div>`
		},
        Update(){
            return `<table class="table table-bordered sub-warehouse">
                        <thead>
                          <tr>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Đơn giá nhập</th>
                            <th>Thành tiền</th>
                          </tr>
                        </thead>
                        <tbody> 
                        </tbody>
                      </table>
			              <div class="status-option"> </div>`
        },
	},
	Manager: {
		Create(){
			return `<div class="error-log"></div>
		                <div class="row">
		                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
		                        <div class="form-group">
		                            <label >Email</label>
		                            <input class="form-control data-email" type="text" placeholder="" required="">
		                        </div>
		                        <div class="form-group">
		                            <label >Mật khẩu</label>
		                            <input class="form-control data-password" type="password" placeholder="" required="">
		                        </div> 
		                    </div>
		                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
		                        <div class="form-group">
		                            <label >Họ và tên</label>
		                            <input class="form-control data-name" type="text" placeholder="" required="">
		                        </div>
		                        <div class="form-group">
		                            <label >Số điện thoại</label>
		                            <input class="form-control data-phone" type="text" placeholder="" required="">
		                        </div>
		                        <div class="form-group">
		                            <label >Địa chỉ</label>
		                            <input class="form-control data-address" type="text" placeholder="" required="">
		                        </div> 
		                    </div>
		                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
		                        <div class="form-group">
		                            <label >Phân quyền</label>
		                            <select name="" class="form-select data-role" id="">
		                            	<option value="0">Quản lý</option>
		                            	<option value="1">Nhân viên giao hàng</option>
		                            </select>
		                        </div>
		                    </div>
		                </div>
		            </div>`
		},
	},
}