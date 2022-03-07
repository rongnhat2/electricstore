const View = {
    table: {
        __generateDTRow(data){
            return [
                `<div class="id-order">${data.id}</div>`,
                data.name,
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
                        width: '10%',
                    },
                    {
                        title: 'Tên',
                        name: 'name',
                        orderable: true,
                    },
                    {
                        title: 'Metadata',
                        name: 'icon',
                        orderable: true,
                        width: '40%',
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
		data_remove: [],
		getVal(resource){
            var data_return = [];
            $( `${resource} .metadata-container` ).each(function(index, el) {
            	data_return.push($(this).find(".meta-value").val())
            });
            return data_return.toString();
		},
        append(resource, data, id = 0){
            $(`${resource} .metadata-list`).append(`
            	<div class="metadata-container">
            		<input type="hidden" class="meta-id" value="${id}">
            		<input type="hidden" class="meta-value" value="${data}">
	                <div class="meta-label">${data}</div>
	      			<div class="meta-action">
	      				<span class="action-box large delete-btn meta-remove" title="Delete Task"><i class="icon"><i class="icon-trash"></i></i></span>
	      			</div> 
	      		</div> 
            `);
        },
        create(resource, data){
            $(`${resource} .metadata-list`).append(`
            	<div class="metadata-container">
            		<input type="hidden" class="meta-value" value="${data}">
	                <div class="meta-label">${data}</div>
	      			<div class="meta-action">
	      				<span class="action-box large delete-btn meta-remove" title="Delete Task"><i class="icon"><i class="icon-trash"></i></i></span>
	      			</div> 
	      		</div> 
            `);
        },
        onCreate(resource, name){
            $(document).on('keypress', `${resource} .meta-create`, function(e) {
            	if (e.which == 13) {
            		var data = $(this).val();
            		if (data) View.Metadata.create(resource, data);
				    $(this).val("")
				}
            });
        },
        onRemove(resource, name){
            $(document).on('click', `${resource} .meta-remove`, function() {
            	View.Metadata.data_remove.push($(this).parent().parent().find(".meta-id").val());
                $(this).parent().parent().remove();
            });
        },
        init(resource){
            $(`${resource} .metadata-list`).find('.metadata-container').remove()
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
                var data_meta      = View.Metadata.getVal(`${resource} #metadata`);
                var data_category  = View.Metadata.getVal(`${resource} #sub-category`);

                if (data_name == "") { required_data.push('Hãy nhập tên danh mục.'); onPushData = false }
                if (data_meta == "") { required_data.push('Hãy nhập Metadata.'); onPushData = false }

                if (onPushData) {
                    fd.append('data_name', data_name);
                    fd.append('data_meta', data_meta);
                    fd.append('data_category', data_category);
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
                var modalBodyHTML   = Template.Category.Create();
                var modalFooterHTML = ['Đóng', 'Tạo mới'];

                ViewIndex.SideModal.launch(this.resource, modalTitleHTML, modalBodyHTML, modalFooterHTML);
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
                var data_meta      = View.Metadata.getVal(`${resource} #metadata`);
                var data_category  = View.Metadata.getVal(`${resource} #sub-category`);
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
            setVal(id){ 
                var resource = this.resource;
                $(`${resource} .data-id`).val(id) 
            },
            getVal(){
                var resource = this.resource;
                var fd = new FormData();
                var required_data = []; 
                var onPushData = true;

                var data_id      = $(`${resource}`).find('.data-id').val(); 

                if (data_id == "") {   onPushData = false }

                if (onPushData) {
                    fd.append('data_id', data_id); 
                    return fd;
                } 
            },
            onPush(name, callback){
                var resource = this.resource;
                $(document).on('click', `${this.resource} .push-modal`, function() {
                    if($(this).attr('atr').trim() == name) {
                        var data = View.SideModal.Delete.getVal();
                        if (data) callback(data);
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

			View.Metadata.init();
			
            $(document).off('click', `#metadata .meta-create`);
            $(document).off('click', `#metadata .meta-remove`);
            View.Metadata.onCreate("#metadata");
            View.Metadata.onRemove("#metadata");

            $(document).off('click', `#sub-category .meta-create`);
            $(document).off('click', `#sub-category .meta-remove`);
            View.Metadata.onCreate("#sub-category");
            View.Metadata.onRemove("#sub-category");
		}
	},
    init(){
    	ViewIndex.SideModal.init(View.SideModal.Create.resource, 500);
    	ViewIndex.SideModal.init(View.SideModal.Update.resource, 500);
    	ViewIndex.SideModal.init(View.SideModal.Delete.resource, 500);
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
            Api.Category.Store(fd)
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
        View.Metadata.init(View.SideModal.Update.resource);
    	ViewIndex.SideModal.onShow(resource);
        Api.Category.getOne(id)
            .done(res => {
            	View.SideModal.Update.setVal(res.data)
            	View.SideModal.Update.onPush("Push", (fd) => {
		            ViewIndex.helper.showToastProcessing('Processing', 'Đang tạo!');
		            ViewIndex.SideModal.onHide(resource)
		            Api.Category.Update(fd)
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
        View.SideModal.Delete.setVal(id)
        ViewIndex.SideModal.onShow(resource);
        View.SideModal.Delete.onPush("Push", (fd) => {
        ViewIndex.helper.showToastProcessing('Processing', 'Đang xóa!');
        ViewIndex.SideModal.onHide(resource)
        Api.Category.Delete(fd)
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
        Api.Category.GetAll()
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