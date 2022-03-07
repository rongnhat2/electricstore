const View = {
    table: {
        __generateDTRow(data){
            var role  = [
                "Quản lý",
                "Nhân viên giao hàng",
            ];
            return [
                `<div class="id-order">${data.id}</div>`,
                `<div class="user-data mb-2">
                    <i class="fa fa-user mr-2"></i><span class="data-name">${data.name ?? "[ Chưa có dữ liệu ]"}</span>
                </div>
                <div class="user-data mb-2">
                    <i class="fa fa-phone mr-2"></i><span class="data-phone">${data.email}</span>
                </div>`,
                `<div class="user-data mb-2">
                    <i class="fa fa-user mr-2"></i><span class="data-name">${data.phone ?? "[ Chưa có dữ liệu ]"}</span>
                </div>
                <div class="user-data mb-2">
                    <i class="fa fa-phone mr-2"></i><span class="data-phone">${data.address ?? "[ Chưa có dữ liệu ]"}</span>
                </div>`,
                `<div class="user-data mb-2">
                    <i class="fa fa-user mr-2"></i><span class="data-name">${role[data.role ?? 0]}</span>
                </div>`,
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
                        title: 'Thông tin cá nhân',
                        name: 'name',
                        orderable: true,
                        width: '15%',
                    },
                    {
                        title: 'Thông tin phụ',
                        name: 'name',
                        orderable: true,
                        width: '15%',
                    },
                    {
                        title: 'Chức vụ',
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

                var data_email              = $(`${resource}`).find('.data-email').val();
                var data_password           = $(`${resource}`).find('.data-password').val(); 
                var data_name               = $(`${resource}`).find('.data-name').val();
                var data_phone              = $(`${resource}`).find('.data-phone').val();
                var data_address            = $(`${resource}`).find('.data-address').val();
                var data_role               = $(`${resource}`).find('.data-role').val();

                // --Required Value
                if (ViewIndex.Config.isEmail(data_email) == null || data_email == '')  { required_data.push('Email không đúng định dạng.');onPushData = false; }
                if (data_password == "") { required_data.push('Nhập mật khẩu .'); onPushData = false;} 
                if (data_name == "") { required_data.push('Hãy nhập tên  .'); onPushData = false;}
                if (data_phone == "") { required_data.push('Hãy nhập tên số điện thoại.'); onPushData = false;}
                if (data_address == "") { required_data.push('Hãy nhập địa chỉ.'); onPushData = false;}

                if (onPushData) {
                    fd.append('data_email', data_email);
                    fd.append('data_password', data_password); 
                    fd.append('data_name', data_name);
                    fd.append('data_phone', data_phone); 
                    fd.append('data_address', data_address); 
                    fd.append('data_role', data_role); 
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
                var modalBodyHTML   = Template.Manager.Create();
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
    	View.SideModal.Create.onPush("Push", (fd) => {
            ViewIndex.helper.showToastProcessing('Processing', 'Đang tạo!');
            ViewIndex.SideModal.onHide(resource)
            Api.Manager.Store(fd)
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
        Api.Manager.GetAll()
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