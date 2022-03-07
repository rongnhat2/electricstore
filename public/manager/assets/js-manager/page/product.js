const View = {
    table: {
        __generateDTRow(data){
            return [
                `<div class="id-order">${data.id}</div>`,
                data.name,
                data.images.split(",").map(v => {
                    return `<img src="/${v}" style="width: 70px; margin: 2px" alt=""> `
                }).join(""),
                data.metadata.split(",").map(v => {
                    return `<div class="span badge rounded-pill pill-badge-primary ">${v}</div> `
                }).join(""),
                `<span class="action-box large delete-btn modal-control" atr="Side Modal View" data-id="${data.id}" title="View"><i class="icon"><i class="icon-eye"></i></i></span>
                <span class="action-box large delete-btn modal-control" atr="Side Modal Delete" data-id="${data.id}" title="Delete"><i class="icon"><i class="icon-trash"></i></i></span>`
            ]
        },
        init(){
            var row_table = [
                    {
                        title: 'ID',
                        name: 'id',
                        orderable: true,
                        width: '5%',
                    },
                    {
                        title: 'Tên',
                        name: 'name',
                        orderable: true,
                        width: '15%',
                    },
                    {
                        title: 'Hình ảnh',
                        name: 'name',
                        orderable: true,
                        width: '50%',
                    },
                    {
                        title: 'Metadata',
                        name: 'icon',
                        orderable: true,
                        width: '20%',
                    }, 
                    {
                        title: 'Hành động',
                        name: 'Action',
                        orderable: true,
                        width: '10%',
                    },
                ];
            ViewIndex.table.init("#data-table", row_table);
        }
    },
    Metadata: {
        getVal(resource){
            var data_return = [];
            $(`${resource} .data-meta`).each(function(index, el) {
                data_return.push(`${$(this).attr("data-meta")}: ${$(this).val()}`)
            });
            return data_return.toString();
        },
    },
	SideModal: {
		Create: {
			resource: '#side-modal-create',
            setDefaul(){ this.init();  },
            setVal(data){ },
            getVal(){
                var resource = this.resource;
                var fd = new FormData();
                var required_data = [];
                var onPushData = true;

                var data_name           = $(`${resource}`).find('.data-name').val();
                var data_sku            = $(`${resource}`).find('.data-sku').val();
                var data_prices         = $(`${resource}`).find('.data-prices').val();
                var data_supplier       = $(`${resource}`).find('.data-supplier').val();
                var data_category       = $(`${resource}`).find('.data-category').val();
                var data_type           = $(`${resource}`).find('.data-type').val();
                var data_description    = $(`${resource}`).find('.data-description').val();
                var data_detail         = $(`${resource}`).find('.data-detail').val();
                var data_meta           = View.Metadata.getVal(resource);
                var data_images         = $(`${resource}`).find(".image-list")[0].files;

                // --Required Value
                if (data_images.length <= 0) { required_data.push('Hãy chọn ảnh.'); onPushData = false } 
                if (data_name == '') { required_data.push('Nhập tên sản phẩm.'); onPushData = false }
                if (data_prices == '') { required_data.push('Nhập đơn giá.'); onPushData = false }
                if (data_sku == '') { required_data.push('Nhập sku.'); onPushData = false }
                if (data_supplier == '') { required_data.push('Chọn nhà phân phối.'); onPushData = false }
                if (data_category == '') { required_data.push('Chọn danh mục.'); onPushData = false } 
                if (data_type == '') { required_data.push('Chọn loại sản phẩm.'); onPushData = false } 
                if (data_description == '') { required_data.push('Nhập mô tả ngắn.'); onPushData = false } 
                if (data_detail == '') { required_data.push('Nhập mô tả đầy đủ.'); onPushData = false } 
                if (data_meta == '') { required_data.push('Nhập đầy đủ metadata.'); onPushData = false } 

                if (onPushData) {
                    fd.append('data_name', data_name); 
                    fd.append('data_sku', data_sku); 
                    fd.append('data_prices', data_prices); 
                    fd.append('data_supplier', data_supplier);
                    fd.append('data_category', data_category); 
                    fd.append('data_type', data_type); 
                    fd.append('data_description', data_description); 
                    fd.append('data_detail', data_detail); 
                    fd.append('data_meta', data_meta); 
                    fd.append('image_list_length', data_images.length);
                    for (var i = 0; i < data_images.length; i++) {
                        fd.append('image_list_item_'+i, data_images[i]);
                    }
                    return fd;
                }else{
                    $(`${resource}`).find('.error-log .js-errors').remove();
                    var required_noti = ``;
                    for (var i = 0; i < required_data.length; i++) { required_noti += `<li class="error">${required_data[i]}</li>`; }
                    $(`${resource}`).find('.error-log').prepend(` <ul class="js-errors">${required_noti}</ul> `)
                    return false;
                }
            },
            onPush(name, callback){
                var resource = this.resource;
                $(document).on('click', `${this.resource} .push-modal`, function() {
                    if($(this).attr('atr').trim() == name) {
                        var data = View.SideModal.Create.getVal();
                        if (data) callback(data);
                    }
                });
            },
            init(){
                var modalTitleHTML  = `Tạo mới`;
                var modalBodyHTML   = Template.Product.Create();
                var modalFooterHTML = ['Đóng', 'Tạo mới'];

                ViewIndex.SideModal.launch(this.resource, modalTitleHTML, modalBodyHTML, modalFooterHTML);
                ViewIndex.summerNote.init(".data-detail", "Mô tả đầy đủ", 400);
            }
		},
		Update: {
			resource: '#side-modal-update',
            setDefaul(){ this.init();  },
            setVal(data){ 
            	var resource = this.resource;
            	$(`${resource} .data-name`).val(data.data_category[0].name)
            	$(`${resource} .data-id`).val(data.data_category[0].id)
            	data.data_category[0].metadata
	            	.split(",")
	            	.map(v => {
	            		View.Metadata.append("#metadata", v)
            	}).join("")
            	data.data_type
	            	.map(v => {
	            		View.Metadata.append("#sub-category", v.name, v.id)
            	}).join("")
            },
            getVal(){
                var resource = this.resource;
                var fd = new FormData();
                var required_data = [];
                var onPushData = true;

                var data_id      = $(`${resource}`).find('.data-id').val();
                var data_name      = $(`${resource}`).find('.data-name').val();
                var data_meta      = View.Metadata.getVal("#metadata");
                var data_category  = View.Metadata.getVal("#sub-category");
                var data_remove  	= View.Metadata.data_remove.toString();

                if (data_name == "") { required_data.push('Hãy nhập tên danh mục.'); onPushData = false }

                if (onPushData) {
                    fd.append('data_id', data_id);
                    fd.append('data_name', data_name);
                    fd.append('data_meta', data_meta);
                    fd.append('data_category', data_category);
                    fd.append('data_remove', data_remove);
                    return fd;
                }else{
                    $(`${resource}`).find('.error-log .js-errors').remove();
                    var required_noti = ``;
                    for (var i = 0; i < required_data.length; i++) { required_noti += `<li class="error">${required_data[i]}</li>`; }
                    $(`${resource}`).find('.error-log').prepend(` <ul class="js-errors">${required_noti}</ul> `)
                    return false;
                }
            },
            onPush(name, callback){
                var resource = this.resource;
                $(document).on('click', `${this.resource} .push-modal`, function() {
                    if($(this).attr('atr').trim() == name) {
                        var data = View.SideModal.Update.getVal();
                        if (data) callback(data);
                    }
                });
            },
            init(){
                var modalTitleHTML  = `Cập nhật`;
                var modalBodyHTML   = Template.Category.Create();
                var modalFooterHTML = ['Đóng', 'Cập nhật'];

                ViewIndex.SideModal.launch(this.resource, modalTitleHTML, modalBodyHTML, modalFooterHTML);
            }
		},
        Delete: {
            resource: '#side-modal-delete',
            setDefaul(){ this.init(); },
            textDefaul(){ },
            setVal(data){ },
            getVal(){ },
            onPush(name, callback){
                var resource = this.resource;
                $(document).on('click', `${this.resource} .push-modal`, function() {
                    if($(this).attr('atr').trim() == name) {
                        callback();
                    }
                });
            },
            init() {
                var modalTitleHTML = `Xóa`;
                var modalBodyHTML  = Template.Category.Delete();
                var modalFooterHTML = ['Đóng', 'Xóa'];
                ViewIndex.SideModal.launch(this.resource, modalTitleHTML, modalBodyHTML, modalFooterHTML);
            }
        },
        Group: {
            renderSupplier(resource, data){
                $(`${resource} .data-supplier option`).remove();
                $(`${resource} .data-supplier`).append(`<option value="0">-----------------------------</option>`)
                data.map(v => {
                    $(`${resource} .data-supplier`).append(`<option value="${v.id}">${v.name}</option>`)
                })
            },
            renderCategory(resource, data){
                $(`${resource} .data-category option`).remove();
                $(`${resource} .data-category`).append(`<option value="0">-----------------------------</option>`)
                data.map(v => {
                    $(`${resource} .data-category`).append(`<option value="${v.id}">${v.name}</option>`)
                })
            },
            onCategoryChange(callback){
                $(document).on('change', `.data-category`, function() {
                    callback($(this).val());
                });
            },
            renderType(resource, data){
                $(`${resource} .data-type option`).remove();
                $(`${resource} .data-type`).append(`<option value="0">-----------------------------</option>`)
                data.map(v => {
                    $(`${resource} .data-type`).append(`<option value="${v.id}">${v.name}</option>`)
                })
            },
            renderMetadata(resource, data){
                $(`${resource} .metadata-list-item .metadata-item`).remove(); 
                data.metadata.split(",").map(v => {
                    $(`${resource} .metadata-list-item`)
                        .append(`<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 metadata-item">
                                    <div class="form-group">
                                        <label>${v}</label>
                                        <input class="form-control data-meta" type="text" data-meta="${v}" placeholder="" required="">
                                    </div>
                                </div>`)
                })
            },
        },
		init(){
			View.SideModal.Create.init();
			View.SideModal.Update.init();
			View.SideModal.Delete.init(); 
		}
	},
    init(){
    	ViewIndex.SideModal.init(View.SideModal.Create.resource, 1600);
    	ViewIndex.SideModal.init(View.SideModal.Update.resource, 1600);
    	ViewIndex.SideModal.init(View.SideModal.Delete.resource, 1600);
    	View.SideModal.init();
        View.table.init();
    }
};
(() => {
    View.init();
    ViewIndex.SideModal.onControl("Side Modal", () => {
    	var resource = View.SideModal.Create.resource;
    	ViewIndex.SideModal.onShow(resource);

        Api.Category.GetAll().done(res => {View.SideModal.Group.renderCategory(resource, res.data);})
        Api.Supplier.GetAll().done(res => {View.SideModal.Group.renderSupplier(resource, res.data);})
        View.SideModal.Group.onCategoryChange((id) => {
            Api.Category.getOne(id).done(res => {
                View.SideModal.Group.renderMetadata(resource, res.data.data_category[0]);
                View.SideModal.Group.renderType(resource, res.data.data_type);
            })
        })

    	View.SideModal.Create.onPush("Push", (fd) => {
            ViewIndex.helper.showToastProcessing('Processing', 'Đang tạo!');
            ViewIndex.SideModal.onHide(resource)
            Api.Product.Store(fd)
                .done(res => {
                    ViewIndex.helper.showToastSuccess('Success', 'Tạo thành công !');
                    getData();
                })
                .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
                .always(() => { });
            View.SideModal.Create.setDefaul();
        })
    })


    ViewIndex.SideModal.onControl("Side Modal View", (id) => {
        var resource = View.SideModal.Update.resource; 
    	ViewIndex.SideModal.onShow(resource);

        Api.Product.getOne(id)
            .done(res => {
                console.log(res);
          //   	View.SideModal.Update.setVal(res.data)
          //   	View.SideModal.Update.onPush("Push", (fd) => {
		        //     ViewIndex.helper.showToastProcessing('Processing', 'Đang tạo!');
		        //     ViewIndex.SideModal.onHide(resource)
		        //     Api.Category.Update(fd)
		        //         .done(res => {
		        //             ViewIndex.helper.showToastSuccess('Success', 'Cập nhật thành công !');
		        //             getData();
		        //         })
		        //         .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
		        //         .always(() => { });
		        //     View.SideModal.Update.setDefaul();
		        // })
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { }); 
    })

    ViewIndex.SideModal.onControl("Side Modal Delete", (id) => {
        var resource = View.SideModal.Delete.resource;
        ViewIndex.SideModal.onShow(resource);
        View.SideModal.Delete.onPush("Push", () => {
        ViewIndex.helper.showToastProcessing('Processing', 'Đang xóa!');
        ViewIndex.SideModal.onHide(resource)
        Api.Category.Delete(id)
            .done(res => {
                ViewIndex.helper.showToastSuccess('Success', 'Xóa thành công !');
                getData();
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { });
            View.SideModal.Delete.setDefaul();
        })
    })

    function init(){
        getData();
    }
    function getData(){
        Api.Product.GetAll()
            .done(res => {
                ViewIndex.table.clearRows();
                Object.values(res.data).map(v => {
                    ViewIndex.table.insertRow(View.table.__generateDTRow(v));
                    ViewIndex.table.render();
                })
                ViewIndex.table.render();
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { });
    }
    init();
})();