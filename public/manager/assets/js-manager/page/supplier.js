const View = {
    table: {
        __generateDTRow(data){
            return [
                `<div class="id-order">${data.id}</div>`,
                data.name,
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
                        width: '10%',
                    },
                    {
                        title: 'Tên',
                        name: 'name',
                        orderable: true,
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

                var data_name      = $(`${resource}`).find('.data-name').val();
                if (data_name == "") { required_data.push('Hãy nhập tên thương hiệu.'); onPushData = false }

                if (onPushData) {
                    fd.append('data_name', data_name);
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
                var modalBodyHTML   = Template.Supplier.Create();
                var modalFooterHTML = ['Đóng', 'Tạo mới'];

                ViewIndex.SideModal.launch(this.resource, modalTitleHTML, modalBodyHTML, modalFooterHTML);
            }
		},
		Update: {
			resource: '#side-modal-update',
            setDefaul(){ this.init();  },
            setVal(data){ 
            	var resource = this.resource;
            	$(`${resource} .data-name`).val(data[0].name)
            	$(`${resource} .data-id`).val(data[0].id) 
            },
            getVal(){
                var resource = this.resource;
                var fd = new FormData();
                var required_data = [];
                var onPushData = true;

                var data_id      = $(`${resource}`).find('.data-id').val();
                var data_name      = $(`${resource}`).find('.data-name').val(); 

                if (data_name == "") { required_data.push('Hãy nhập tên danh mục.'); onPushData = false }

                if (onPushData) {
                    fd.append('data_id', data_id);
                    fd.append('data_name', data_name); 
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
                var modalBodyHTML   = Template.Supplier.Create();
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
                var modalBodyHTML  = Template.Supplier.Delete();
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
    	ViewIndex.SideModal.init(View.SideModal.Create.resource, 350);
    	ViewIndex.SideModal.init(View.SideModal.Update.resource, 350);
    	ViewIndex.SideModal.init(View.SideModal.Delete.resource, 350);
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
            Api.Supplier.Store(fd)
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
        Api.Supplier.getOne(id)
            .done(res => {
            	View.SideModal.Update.setVal(res.data)
            	View.SideModal.Update.onPush("Push", (fd) => {
		            ViewIndex.helper.showToastProcessing('Processing', 'Đang tạo!');
		            ViewIndex.SideModal.onHide(resource)
		            Api.Supplier.Update(fd)
		                .done(res => {
		                    ViewIndex.helper.showToastSuccess('Success', 'Cập nhật thành công !');
		                    getData();
		                })
		                .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
		                .always(() => { });
		            View.SideModal.Update.setDefaul();
		        })
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
        Api.Supplier.Delete(id)
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
        Api.Supplier.GetAll()
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