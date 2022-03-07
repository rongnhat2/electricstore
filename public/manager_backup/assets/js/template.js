const Template = {
	Category: {
		Create(){
			return `<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 offset-3">
							<div class="card">
								<div class="card-body">
									<div class="row">
										<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-20">
											<div class="error-log"></div>
										</div>
										<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				                            <div class="form-group">
				                                <label >Tên danh mục <span class="data-name-return"></span></label>
				                                <input type="text" class="form-control data-name" placeholder="Tên danh mục">
				                            </div>   
				                            <div class="form-group metadata-group">
			                                	<div class="row m-b-20">
				                                	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				                                		<button class="btn btn-primary metadata-create" atr="Metadata Create"><i class="fas fa-plus"></i> Thuộc tính</button>
				                                	</div> 
				                                </div>  
				                            </div>  
										</div>
										<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 layout-border-left">
				                            <h6>Truy vấn</h6>
				                            <div class="classify-group">

				                            </div>
				                            <div class="justify-center">
				                            	<button class="btn btn-primary classify-create" atr="Classify Create"><i class="fas fa-plus"></i> Phân loại</button>
				                            </div>
										</div>
									</div>
								</div>
							</div>
						</div>
	            	</div>`
		},
		Update(){
			return `<input type="hidden" class="form-control data-id" required="">
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 offset-3">
							<div class="card">
								<div class="card-body">
									<div class="row">
										<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-20">
											<div class="error-log"></div>
										</div>
										<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				                            <div class="form-group">
				                                <label >Tiêu đề <span class="data-name-return"></span></label>
				                                <input type="text" class="form-control data-name" placeholder="Tiêu đề">
				                            </div>   
				                            <div class="form-group image-select-group">
					                            <div class="form-header">
					                                <label>Icon (220 x 220) </label>
					                                <label class="image-select" for="image-update"><i class="fas fa-search m-r-10"></i>Chọn ảnh</label>
					                                <input type="file" class="form-control image-input" id="image-update" name="image"  accept="image/*">
					                            </div>
					                            <div class="form-preview icon-preview form_1_1" style="background-image: url('/manager/images_global/noimage.jpg');"> </div>
				                            </div>
										</div>
										<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 layout-border-left">
				                            <div class="form-group metadata-group">
			                                	<div class="row m-b-20">
				                                	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				                                		<button class="btn btn-primary metadata-create" atr="Metadata Create"><i class="fas fa-plus"></i> Metadata</button>
				                                	</div> 
				                                </div>  
				                            </div>   
										</div>
									</div>
								</div>
							</div>
						</div>
	            	</div>`
		},
		Delete(){
			return `<div class="wrapper d-flex justify-center"><img src="/manager/images_global/funny.gif" alt=""></div>`
		}
	},
	Product: {
		Create(){
			return `<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
							<div class="error-log"></div>
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
		                            <div class="form-group">
		                                <label >Đơn giá *</label>
		                                <input type="text" class="form-control data-prices" placeholder="Đơn giá">
		                            </div>  
		                        </div>  
								<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
		                            <div class="form-group">
		                                <label >SKU *</label>
		                                <input type="text" class="form-control data-sku" placeholder="SKU">
		                            </div>  
		                        </div>  
		                    </div>   
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
		                            <div class="form-group">
		                                <label >Nhà cung cấp *</label>
		                                <select name="" class="form-control supplier-list data-supplier">
		                                	<option value="0">--------------------------------</option>
		                                </select>
		                            </div>   
		                        </div>  
								<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
		                            <div class="form-group">
		                                <label >Chất lượng *</label>
		                                <select name="" class="form-control classify-list data-classify">
		                                	<option value="0">Tiêu chuẩn</option>
		                                	<option value="1">Trung cấp</option>
		                                	<option value="2">Cao cấp</option>
		                                	<option value="3">Siêu cao cấp</option>
		                                </select>
		                            </div>   
		                        </div>  
		                    </div>   
                            <div class="form-group">
                                <label >Danh mục *</label>
                                <select name="" class="form-control category-list data-category"></select>
                                <div class="row metadata-list m-t-20"></div>
                            </div>   
						</div>
						<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 border-left">
	                        <div class="form-group image-select-group col-md-12">
	                        	<div class="form-header">
	                                <label>Hình ảnh *( 600 x 600 ) </label>
	                                <label class="image-select" for="image_list"><i class="fas fa-search m-r-10"></i>Chọn ảnh</label>
	                                <input type="file" class="form-control image-list" id="image_list" name="image_list[]" required="" accept="image/*" multiple="">
	                            </div>
		                        <div class="form-preview multi-upload">
		                        </div>
				            </div>
						</div>
						<div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 border-left">
                    		<div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <label >Tên sản phẩm *<span class="data-name-return"></span></label>
                                        <input type="text" class="form-control data-name" placeholder="Tên sản phẩm">
                                    </div>   
                                </div>  
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <label >Mô tả ngắn <span class="data-description-return"></span></label>
                                        <textarea class="form-control data-description " name="description" placeholder="Mô tả ngắn" rows="4" required=""></textarea>
                                    </div>   
                                </div>  
                            </div>
                    		<div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group summernote">
                                        <label >Mô tả đầy đủ </label>
                                        <textarea class="form-control data-detail " name="detail" placeholder="Mô tả đầy đủ" rows="4" required=""></textarea>
                                    </div>    
                                </div>  
                            </div>
						</div>
	            	</div>`
		},
		Update(){
			return `<input type="hidden" class="form-control data-id" required="">
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
							<div class="error-log"></div>
                            <div class="form-group">
                                <label >Đơn giá *</label>
                                <input type="number" class="form-control data-prices" placeholder="Đơn giá">
                            </div>   
                            <div class="form-group">
                                <label >Danh mục *</label>
                                <select name="" class="form-control category-list data-category"></select>
                                <div class="row metadata-list m-t-20"></div>
                            </div>   
						</div>
						<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 border-left">
	                        <div class="form-group image-select-group col-md-12">
	                        	<div class="form-header">
	                                <label>Hình ảnh *( 600 x 600 ) </label>
	                                <label class="image-select" for="image_list_update"><i class="fas fa-search m-r-10"></i>Chọn ảnh</label>
	                                <input type="file" class="form-control image-list" id="image_list_update" name="image_list[]" required="" accept="image/*" multiple="">
	                            </div>
		                        <div class="form-preview multi-upload">
		                        	
		                        </div>
				            </div>
						</div>
						<div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 border-left">
                    		<div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <label >Tên sản phẩm *<span class="data-name-return"></span></label>
                                        <input type="text" class="form-control data-name" placeholder="Tên sản phẩm">
                                    </div>   
                                </div>  
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <label >Mô tả ngắn <span class="data-description-return"></span></label>
                                        <textarea class="form-control data-description " name="description" placeholder="Mô tả ngắn" rows="4" required=""></textarea>
                                    </div>   
                                </div>  
                            </div>
                    		<div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group summernote">
                                        <label >Mô tả đầy đủ </label>
                                        <textarea class="form-control data-detail " name="detail" placeholder="Mô tả đầy đủ" rows="4" required=""></textarea>
                                    </div>    
                                </div>  
                            </div>
						</div>
	            	</div>`
		},
		Delete(){
			return `<div class="wrapper d-flex justify-center"><img src="/manager/images_global/funny.gif" alt=""></div>`
		}
	},
}