const View = {
    table: {
        __generateDTRow(data){
            return [
                `<div class="id-order">${data.id}</div>`,
                data.name,
                ViewIndex.table.formatNumber(data.prices) + ` đ`,
                // data.category_name,
                data.images == "" ? null : data.images.split(",").map(v => {
                    return `<div class="image-table-preview" style="background-image: url('/${v}')"></div>`
                }).join(""),
                data.metadata.split(" | ").map(v => {
                    return `<p><span class="text-bold metadata-title">${v.split(" ~ ")[0]}:</span><span class="badge badge-pill badge-blue">${v.split(" ~ ")[1]}</span> </p>`
                }).join(""),
                `<label class="switch" data-id="${data.id}" data-status="${data.status == '1' ? '0' : '1'}" atr="Status"> <span class="slider round ${data.trending == '1' ? 'active' : ''}"></span> </label>`,
                `<div class="view-data modal-fs-control" style="cursor: pointer" atr="View" data-id="${data.id}"><i class="anticon anticon-edit"></i></div>
                <div class="view-data modal-fs-control" style="cursor: pointer" atr="Delete" data-id="${data.id}"><i class="anticon anticon-delete"></i></div>`
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
                        width: '10%',
                    },
                    {
                        title: 'Đơn giá',
                        name: 'name',
                        orderable: true,
                        width: '10%',
                    },
                    {
                        title: 'Hình ảnh',
                        name: 'name',
                        orderable: true,
                        width: '20%',
                    },
                    {
                        title: 'Metadata',
                        name: 'icon',
                        orderable: true,
                        width: '30%',
                    },
                    {
                        title: 'Trending',
                        name: 'icon',
                        orderable: true,
                        width: '10%',
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
            var data_return = "";
            var list_metadata = $( `${resource} .metadata-item` ).filter((index, item) => $(item).val() != "");
            list_metadata.each(function( index ) {
                if ($(this).val() != ""){
                    data_return += $(this).val()
                    if (index < list_metadata.length - 1) data_return += " | ";
                }
            });
            return data_return;
        },
        setVal(resource, value_input){
            $(`${resource} .metadata-group`).append(`
                <div class="row m-b-10 meta-item">
                    <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                        <input type="text" class="form-control metadata-item" placeholder="" value="${value_input}">
                    </div> 
                    <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                        <button class="btn btn-danger metadata-remove" atr="Metadata Delete"><i class="fas fa-times"></i></button>
                    </div> 
                </div>  
            `);
        },
        Create(resource){
            $(`${resource} .metadata-group`).append(`
                <div class="row m-b-10 meta-item">
                    <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                        <input type="text" class="form-control metadata-item" placeholder="">
                    </div> 
                    <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                        <button class="btn btn-danger metadata-remove" atr="Metadata Delete"><i class="fas fa-times"></i></button>
                    </div> 
                </div>  
            `);
        },
        onCreate(resource, name){
            $(document).on('click', `${resource} .metadata-create`, function() {
                if($(this).attr('atr').trim() == name) {
                    View.Metadata.Create(resource);
                }
            });
        },
        onRemove(resource, name){
            $(document).on('click', `${resource} .metadata-remove`, function() {
                if($(this).attr('atr').trim() == name) {
                    $(this).parent().parent().remove();
                }
            });
        },
        clear(resource){
            $(`${resource} .metadata-group`).find('.meta-item').remove()
        }
    },
    modals: {
        onControl(name, callback){
            $(document).on('click', '.modal-fs-control', function() {
                var id = $(this).attr('data-id');
                if($(this).attr('atr').trim() == name) {
                    callback(id);
                }
            });
        },
        onClose(){
            $(document).on('click', '.modal-close', function() {
                $('.modal-fullscreen').removeClass('show');
                $('body').removeClass('modal-fs-open');
            });
            $(document).on('click', '.close-modal', function() {
                $('.modal-fullscreen').removeClass('show');
                $('body').removeClass('modal-fs-open');
            });
            $(document).mouseup(function(e) {
                var container = $(".fs-body");
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    $('.modal-fullscreen').removeClass('show');
                    $('body').removeClass('modal-fs-open');
                }
            });
        },
        launch(resource, modalTitleHTML, modalBodyHTML, modalFooterHTML){
            $(`${resource} .fs-title .modal-title`).html(modalTitleHTML);
            $(`${resource} .fs-content .fs-content-wrapper`).html(modalBodyHTML);
            $(`${resource} .fs-footer .close-modal`).html(modalFooterHTML[0]);
            $(`${resource} .fs-footer .push-modal`).html(modalFooterHTML[1]);
        },
        onShow(resource){
            $(resource).addClass('show');
            $('body').addClass('modal-fs-open');
            $(document).off('click', `${resource} .push-modal`);
        },
        onHide(resource){
            $(resource).removeClass('show');
            $('body').removeClass('modal-fs-open');
        },
        Create: {
            resource: '#create-modal',
            setDefaul(){ this.init();  },
            createCategory(data){ 
                var resource = this.resource;
                $(`${this.resource} .category-list`).find("option").remove()
                $(`${this.resource} .category-list`).append(`<option value="0">----------</option>`)
                data.map(v => {
                    $(`${this.resource} .category-list`).append(`<option value="${v.id}">${v.name}</option>`)
                })
            },
            getVal(){
                var resource = this.resource;
                var fd = new FormData();
                var required_data = [];
                var onPushData = true;

                // --get Value
                var data_name           = $(`${resource}`).find('.data-name').val();
                var data_prices         = $(`${resource}`).find('.data-prices').val();
                var data_category       = $(`${resource}`).find('.data-category').val();
                var data_supplier       = $(`${resource}`).find('.data-supplier').val();
                var data_classify       = $(`${resource}`).find('.data-classify').val();
                var data_sku            = $(`${resource}`).find('.data-sku').val();
                var data_description    = $(`${resource}`).find('.data-description').val();
                var data_detail         = $(`${resource}`).find('.data-detail').val();
                var data_images         = $(`${resource}`).find(".image-list")[0].files;
                var data_metadata       = $(`${resource}`).find('.metadata-item input');

                // --Required Value
                if (data_images.length <= 0) { required_data.push('Hãy chọn ảnh.'); onPushData = false }
                if (data_metadata.length <= 0) { required_data.push('Hãy chọn danh mục.'); onPushData = false }
                if (data_name == '') { required_data.push('Nhập tên sản phẩm.'); onPushData = false }
                if (data_prices == '') { required_data.push('Nhập giá sản phẩm.'); onPushData = false }
                if (data_sku == '') { required_data.push('Nhập sku.'); onPushData = false }

                if (onPushData) {
                    fd.append('data_name', data_name);
                    fd.append('data_category', data_category);
                    fd.append('data_supplier', data_supplier);
                    fd.append('data_classify', data_classify);
                    fd.append('data_sku', data_sku);
                    fd.append('data_description', data_description);
                    fd.append('data_detail', data_detail);
                    fd.append('data_prices', data_prices);

                    fd.append('image_list_length', data_images.length);
                    for (var i = 0; i < data_images.length; i++) {
                        fd.append('image_list_item_'+i, data_images[i]);
                    }

                    var metadata_string = ""
                    for (var i = 0; i < data_metadata.length; i++) {
                        metadata_string += $(data_metadata[i]).attr("data-metadata") + " ~ " + $(data_metadata[i]).val()
                        if (i != data_metadata.length-1) metadata_string += " | "
                    }
                    fd.append('data_metadata', metadata_string);
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
                        var data = View.modals.Create.getVal();
                        if (data) callback(data);
                    }
                });
            },
            onChange(callback){
                var resource = this.resource;
                $(document).on('change', `${this.resource} .category-list`, function() {
                    callback($(this).val());
                });
            },
            onRender(data){
                var resource = this.resource;
                $(`${this.resource} .metadata-list`).find('.metadata-item').remove();
                data[0].metadata.split(" | ").map(v => {
                    $(`${this.resource} .metadata-list`).append(`
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 metadata-item">
                            <div class="form-group">
                                <label >${v}</label>
                                <input type="text" class="form-control" data-metadata="${v}" placeholder="${v}">
                            </div>   
                        </div> 
                    `)
                })
            },
            init() {
                var modalTitleHTML  = `Tạo mới`;
                var modalBodyHTML   = Template.Product.Create();
                var modalFooterHTML = ['Đóng', 'Tạo mới'];

                View.modals.launch(this.resource, modalTitleHTML, modalBodyHTML, modalFooterHTML);
                ViewIndex.textCount.init('.data-name', '.data-name-return', 254);
                ViewIndex.textCount.init('.data-description', '.data-description-return', 254);

                ViewIndex.summerNote.init(".data-detail", "Mô tả đầy đủ", 400);
            }
        },
        Update: {
            resource: '#update-modal',
            setDefaul(){ this.init();  },
            textDefaul(){
                ViewIndex.textCount.defaul(this.resource +' .data-name', this.resource + ' .data-name-return', 254)
            },
            createCategory(data){ 
                var resource = this.resource;
                $(`${this.resource} .category-list`).find("option").remove()
                $(`${this.resource} .category-list`).append(`<option value="0">----------</option>`)
                data.map(v => {
                    $(`${this.resource} .category-list`).append(`<option value="${v.id}">${v.name}</option>`)
                })
            },
            setVal(data){
                $(this.resource).find('.data-id').val(data[0].id);
                $(this.resource).find('.data-name').val(data[0].name);
                $(this.resource).find('.data-description').val(data[0].description);
                ViewIndex.summerNote.update(`${this.resource} .data-detail`, data[0].detail);
                $(this.resource).find('.data-prices').val(data[0].prices);
                $(this.resource).find('.data-category').val(data[0].category_id);
                data[0].images == "" ? null : ViewIndex.multiImage.setVal(data[0].images);

                $(`${this.resource} .metadata-list`).find('.metadata-item').remove();
                data[0].metadata.split(" | ").map(v => {
                    $(`${this.resource} .metadata-list`).append(`
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 metadata-item">
                            <div class="form-group">
                                <label >${v.split("~")[0]}</label>
                                <input type="text" class="form-control" data-metadata="${v.split("~")[0]}" placeholder="${v.split("~")[0]}" value="${v.split("~")[1]}">
                            </div>   
                        </div> 
                    `)
                })
            },
            getVal(){
                var resource = this.resource;
                var fd = new FormData();
                var required_data = [];
                var onPushData = true;

                // --get Value
                var data_id             = $(`${resource}`).find('.data-id').val();
                var data_name           = $(`${resource}`).find('.data-name').val();
                var data_prices         = $(`${resource}`).find('.data-prices').val();
                var data_category       = $(`${resource}`).find('.data-category').val();
                var data_description    = $(`${resource}`).find('.data-description').val();
                var data_detail         = $(`${resource}`).find('.data-detail').val();
                
                var data_images         = $(`${resource}`).find(".image-list")[0].files;
                var data_metadata       = $(`${resource}`).find('.metadata-item input');
                var data_images_preview = "";
                $(`${resource}`).find('.image-preview-item.image-load-data').each(function(index, el) {
                    var string_data = $(this).attr("data-url");
                    data_images_preview += string_data + ","
                });

                // --Required Value
                if (data_metadata.length <= 0) { required_data.push('Hãy chọn danh mục.'); onPushData = false }
                if (data_name == '') { required_data.push('Nhập tên sản phẩm.'); onPushData = false }

                if (onPushData) {
                    fd.append('data_id', data_id);
                    fd.append('data_name', data_name);
                    fd.append('data_category', data_category);
                    fd.append('data_description', data_description);
                    fd.append('data_detail', data_detail);
                    fd.append('data_prices', data_prices);
                    fd.append('data_images_preview', data_images_preview);

                    fd.append('image_list_length', data_images.length);
                    for (var i = 0; i < data_images.length; i++) {
                        fd.append('image_list_item_'+i, data_images[i]);
                    }

                    var metadata_string = ""
                    for (var i = 0; i < data_metadata.length; i++) {
                        metadata_string += $(data_metadata[i]).attr("data-metadata") + " ~ " + $(data_metadata[i]).val()
                        if (i != data_metadata.length-1) metadata_string += " | "
                    }
                    fd.append('data_metadata', metadata_string);
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
                        var data = View.modals.Update.getVal();
                        if (data) callback(data);
                    }
                });
            },
            onChange(callback){
                var resource = this.resource;
                $(document).on('change', `${this.resource} .category-list`, function() {
                    callback($(this).val());
                });
            },
            onRender(data){
                var resource = this.resource;
                $(`${this.resource} .metadata-list`).find('.metadata-item').remove();
                data[0].metadata.split(" | ").map(v => {
                    $(`${this.resource} .metadata-list`).append(`
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 metadata-item">
                            <div class="form-group">
                                <label >${v}</label>
                                <input type="text" class="form-control" data-metadata="${v}" placeholder="${v}">
                            </div>   
                        </div> 
                    `)
                })
            },
            init() {
                var modalTitleHTML = `Cập nhật dịch vụ`;
                var modalBodyHTML  = Template.Product.Update();
                var modalFooterHTML = ['Đóng', 'Cập nhật'];
                View.modals.launch(this.resource, modalTitleHTML, modalBodyHTML, modalFooterHTML);

                $(document).off('click', `${View.modals.Update.resource} .metadata-create`);
                $(document).off('click', `${View.modals.Update.resource} .metadata-remove`);
                View.Metadata.onCreate(View.modals.Update.resource, "Metadata Create");
                View.Metadata.onRemove(View.modals.Update.resource, "Metadata Delete");
            }
        },
        Delete: {
            resource: '#delete-modal',
            setDefaul(){ this.init(); },
            textDefaul(){ },
            setVal(data){ },
            getVal(){
            },
            onPush(name, callback){
                var resource = this.resource;
                $(document).on('click', `${this.resource} .push-modal`, function() {
                    if($(this).attr('atr').trim() == name) {
                        callback();
                    }
                });
            },
            init() {
                var modalTitleHTML = `Xóa bài viết`;
                var modalBodyHTML  = Template.Product.Delete();
                var modalFooterHTML = ['Đóng', 'Xóa'];
                View.modals.launch(this.resource, modalTitleHTML, modalBodyHTML, modalFooterHTML);
            }
        },
        init() {
            this.onClose();

            this.Create.init();
            this.Update.init();
            this.Delete.init();
        }
    },
    isNumberKey(evt){
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    },
    init(){
        View.table.init();
        View.modals.init();
        $(document).on('keypress', `.data-prices`, function(event) {
            return View.isNumberKey(event);
        });
    }
};
(() => {
    View.init();


    View.modals.onControl("Create", () => {
        var resource = View.modals.Create.resource;
        View.modals.onShow(resource);
        Api.Category.GetAll()
            .done(res => {
                View.modals.Create.createCategory(res.data);
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { });

        View.modals.Create.onPush("Push", (fd) => {
            ViewIndex.helper.showToastProcessing('Processing', 'Đang tạo!');
            Api.Product.Store(fd)
                .done(res => {
                    ViewIndex.helper.showToastSuccess('Success', 'Tạo thành công !');
                    getData();
                })
                .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
                .always(() => { });
            View.modals.onHide(resource)
            View.modals.Create.setDefaul();
        })
    })
    View.modals.Create.onChange((id) => {
        Api.Category.getOne(id)
            .done(res => {
                View.modals.Create.onRender(res.data);
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { }); 
    })
    View.modals.onControl("View", (id) => {
        var resource = View.modals.Update.resource;
        View.Metadata.clear(View.modals.Update.resource)
        Api.Category.GetAll()
            .done(res => {
                View.modals.Update.createCategory(res.data);
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { });
        Api.Product.getOne(id)
            .done(res => {
                console.log(res);
                View.modals.onShow(resource);
                View.modals.Update.setVal(res.data);
                View.modals.Update.textDefaul();
                View.modals.Update.onPush("Push", (fd) => {
                ViewIndex.helper.showToastProcessing('Processing', 'Đang cập nhật!');
                Api.Product.Update(fd)
                    .done(res => {
                        ViewIndex.helper.showToastSuccess('Success', 'Cập nhật thành công !');
                        getData();
                    })
                    .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
                    .always(() => { });
                    View.modals.onHide(resource)
                    View.modals.Update.setDefaul();
                })
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { }); 
    })
    View.modals.Update.onChange((id) => {
        Api.Category.getOne(id)
            .done(res => {
                View.modals.Update.onRender(res.data);
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { }); 
    })
    View.modals.onControl("Delete", (id) => {
        var resource = View.modals.Delete.resource;
        View.modals.onShow(resource);
        View.modals.Delete.onPush("Push", () => {
        ViewIndex.helper.showToastProcessing('Processing', 'Đang xóa!');
        Api.Product.Delete(id)
            .done(res => {
                ViewIndex.helper.showToastSuccess('Success', 'Xóa thành công !');
                getData();
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { });
            View.modals.onHide(resource)
            View.modals.Delete.setDefaul();
        })
    })
    ViewIndex.table.onSwitch(debounce((item) => {
        Api.Product.Trending(item.attr('data-id'))
            .done(res => {
                getData()
                item.find('.slider').toggleClass('active');
            })
            .fail(err => {
                console.log(err);
            })
            .always(() => {
            });
    }, 500));


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
    function debounce(f, timeout) {
        let isLock = false;
        let timeoutID = null;
        return function(item) {
            if(!isLock) {
                f(item);
                isLock = true;
            }
            clearTimeout(timeoutID);
            timeoutID = setTimeout(function() {
                isLock = false;
            }, timeout);
        }
    }
    init();
})();
