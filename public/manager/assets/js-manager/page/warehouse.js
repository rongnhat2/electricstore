const View = {
    product: [],
    tableData: {
        __generateDTRow(data){
            return [
                data.product_id,
                data.name,
                ViewIndex.Config.formatPrices(data.quantity),
                ViewIndex.Config.formatPrices(data.reserve),
                ViewIndex.Config.formatPrices(data.prices) + ` đ`,
            ]
        },
        init(){
            var row_table = [
                    {
                        title: 'ID',
                        name: 'name',
                        orderable: true,
                        width: '5%',
                    },
                    {
                        title: 'Tên sản phẩm',
                        name: 'name',
                        orderable: true,
                    },
                    {
                        title: 'Số lượng',
                        name: 'name',
                        orderable: true,
                    },
                    {
                        title: 'Đặt trước',
                        name: 'name',
                        orderable: true,
                    },
                    {
                        title: 'Giá bán',
                        name: 'name',
                        orderable: true,
                    },
                ];
            ViewIndex.table.init("#data-table", row_table);
        }
    }, 
    tableHistory: {
        __generateDTRow(data){
            var total_price = 0 ;
            data.history_detail.map(v => {
                total_price += v.prices * v.quantity;
            })

            return [
                data.history.id,
                data.history.email,
                ViewIndex.Config.formatPrices(total_price) + ` đ`,
                data.history.created_at,
                `<span class="action-box large delete-btn modal-control" atr="Side Modal View" data-id="${data.history.id}" title="View"><i class="icon"><i class="icon-eye"></i></i></span>`
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
                        title: 'Người nhập kho',
                        name: 'name',
                        orderable: true,
                    },
                    {
                        title: 'Tổng giá trị',
                        name: 'icon',
                        orderable: true,
                    }, 
                    {
                        title: 'Thời gian',
                        name: 'icon',
                        orderable: true,
                    }, 
                    {
                        title: ' ',
                        name: 'Action',
                        orderable: true,
                        width: '5%',
                    },
                ];
            ViewIndex.table.init("#data-table", row_table);
        }
    }, 
    tableOrder: {
        __generateDTRow(data){
            var order_status = [
                "Chờ xác nhận",
                "Chưa hoàn thiện",
                "Đã hoàn thiện",
                "Chờ giao hàng",
                "Đang giao hàng",
                "Đã giao hàng",
                "Đã hủy",
            ];
            var order_status_text = [
                "badge rounded-pill badge-light text-dark",
                "badge rounded-pill badge-light text-dark",
                "badge rounded-pill badge-warning text-dark",
                "badge rounded-pill badge-warning text-dark",
                "badge rounded-pill badge-secondary",
                "badge rounded-pill badge-primary",
                "badge rounded-pill badge-danger",
            ];
            var payment = [
                "",
                "Thanh toán khi nhận hàng",
                "Thanh toán online",
            ];
            var payment_status = [
                "Chưa thanh toán",
                "Đã thanh toán",
            ];
            return [
                `<div class="id-order">${data.id}</div>`,
                `<div class="user-data mb-2">
                    <i class="fa fa-user mr-2"></i><span class="data-name">${data.name}</span>
                </div>
                <div class="user-data mb-2">
                    <i class="fa fa-phone mr-2"></i><span class="data-phone">${data.phone}</span>
                </div> `,
                `<div class="user-data mb-2 ${order_status_text[data.order_status]}">${order_status[data.order_status]}</div>`,
                `<div class="user-data mb-2">
                    <i class="fa fa-credit-card mr-2"></i><span class="data-payment">${payment[data.payment_value]}</span>
                </div>
                <div class="user-data mb-2">
                    <i class="fa fa-check-circle mr-2"></i><span class="data-payment-status">${payment_status[data.payment_status]}</span>
                </div>`,
                data.created_at,
                `<span class="action-box large delete-btn modal-control" atr="Side Modal Order" data-id="${data.id}" title="Order"><i class="icon"><i class="icon-eye"></i></i></span>`
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
                        title: 'Thông tin khách hàng',
                        name: 'name',
                        orderable: true,
                    },
                    {
                        title: 'Trạng thái',
                        name: 'icon',
                        orderable: true,
                    }, 
                    {
                        title: 'Thanh toán',
                        name: 'icon',
                        orderable: true,
                    }, 
                    {
                        title: 'Ngày đặt',
                        name: 'icon',
                        orderable: true,
                    }, 
                    {
                        title: ' ',
                        name: 'Action',
                        orderable: true,
                        width: '5%',
                    },
                ];
            ViewIndex.table.init("#data-table", row_table);
        }
    }, 
    tableExport: {
        __generateDTRow(data){
            var order_status = [
                "Chờ xác nhận",
                "Chưa hoàn thiện",
                "Đã hoàn thiện",
                "Chờ giao hàng",
                "Đang giao hàng",
                "Đã giao hàng",
                "Đã hủy",
            ];
            var order_status_text = [
                "badge rounded-pill badge-light text-dark",
                "badge rounded-pill badge-light text-dark",
                "badge rounded-pill badge-warning text-dark",
                "badge rounded-pill badge-warning text-dark",
                "badge rounded-pill badge-secondary",
                "badge rounded-pill badge-primary",
                "badge rounded-pill badge-danger",
            ];
            var payment = [
                "",
                "Thanh toán khi nhận hàng",
                "Thanh toán online",
            ];
            var payment_status = [
                "Chưa thanh toán",
                "Đã thanh toán",
            ];
            return [
                `<div class="id-order">${data.id}</div>`,
                `<div class="user-data mb-2">
                    <i class="fa fa-user mr-2"></i><span class="data-name">${data.name}</span>
                </div>
                <div class="user-data mb-2">
                    <i class="fa fa-phone mr-2"></i><span class="data-phone">${data.phone}</span>
                </div> `,
                `<div class="user-data mb-2 ${order_status_text[data.order_status]}">${order_status[data.order_status]}</div>`,
                `<div class="user-data mb-2">
                    <i class="fa fa-credit-card mr-2"></i><span class="data-payment">${payment[data.payment_value]}</span>
                </div>
                <div class="user-data mb-2">
                    <i class="fa fa-check-circle mr-2"></i><span class="data-payment-status">${payment_status[data.payment_status]}</span>
                </div>`,
                data.created_at,
                `<span class="action-box large delete-btn modal-control" atr="Side Modal Export" data-id="${data.id}" title="View"><i class="icon"><i class="icon-eye"></i></i></span>`
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
                        title: 'Thông tin khách hàng',
                        name: 'name',
                        orderable: true,
                    },
                    {
                        title: 'Trạng thái',
                        name: 'icon',
                        orderable: true,
                    }, 
                    {
                        title: 'Thanh toán',
                        name: 'icon',
                        orderable: true,
                    }, 
                    {
                        title: 'Ngày đặt',
                        name: 'icon',
                        orderable: true,
                    }, 
                    {
                        title: ' ',
                        name: 'Action',
                        orderable: true,
                        width: '5%',
                    },
                ];
            ViewIndex.table.init("#data-table", row_table);
        }
    }, 
    tableShipping: {
        __generateDTRow(data){
            var order_status = [
                "Chờ xác nhận",
                "Chưa hoàn thiện",
                "Đã hoàn thiện",
                "Chờ giao hàng",
                "Đang giao hàng",
                "Đã giao hàng",
                "Đã hủy",
            ];
            var order_status_text = [
                "badge rounded-pill badge-light text-dark",
                "badge rounded-pill badge-light text-dark",
                "badge rounded-pill badge-warning text-dark",
                "badge rounded-pill badge-warning text-dark",
                "badge rounded-pill badge-secondary",
                "badge rounded-pill badge-primary",
                "badge rounded-pill badge-danger",
            ];
            var payment = [
                "",
                "Thanh toán khi nhận hàng",
                "Thanh toán online",
            ];
            var payment_status = [
                "Chưa thanh toán",
                "Đã thanh toán",
            ];
            return [
                `<div class="id-order">${data.id}</div>`,
                `<div class="user-data mb-2">
                    <i class="fa fa-user mr-2"></i><span class="data-name">${data.name}</span>
                </div>
                <div class="user-data mb-2">
                    <i class="fa fa-phone mr-2"></i><span class="data-phone">${data.phone}</span>
                </div> `,
                `<div class="user-data mb-2 ${order_status_text[data.order_status]}">${order_status[data.order_status]}</div>`,
                `<div class="user-data mb-2">
                    <i class="fa fa-credit-card mr-2"></i><span class="data-payment">${payment[data.payment_value]}</span>
                </div>
                <div class="user-data mb-2">
                    <i class="fa fa-check-circle mr-2"></i><span class="data-payment-status">${payment_status[data.payment_status]}</span>
                </div>`,
                data.created_at,
                `<span class="action-box large delete-btn modal-control" atr="Side Modal Shipping" data-id="${data.id}" title="View"><i class="icon"><i class="icon-eye"></i></i></span>`
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
                        title: 'Thông tin khách hàng',
                        name: 'name',
                        orderable: true,
                    },
                    {
                        title: 'Trạng thái',
                        name: 'icon',
                        orderable: true,
                    }, 
                    {
                        title: 'Thanh toán',
                        name: 'icon',
                        orderable: true,
                    }, 
                    {
                        title: 'Ngày đặt',
                        name: 'icon',
                        orderable: true,
                    }, 
                    {
                        title: ' ',
                        name: 'Action',
                        orderable: true,
                        width: '5%',
                    },
                ];
            ViewIndex.table.init("#data-table", row_table);
        }
    }, 
    Item: {
        getVal(resource){
            var data_return = [];
            var list_classify = $( `${resource} .item-product` );
            list_classify.each(function( index ) {
                var type_item       = {};
                type_item.item      = $(this).find(".data-item").val()
                type_item.quantity  = $(this).find(".data-quantity").val() 
                type_item.price     = $(this).find(".data-price").val() 
                if (type_item.quantity) data_return.push(type_item)
            });
            return JSON.stringify(Object.assign({}, data_return));
        },
        Create(resource){
            $(`${resource} .item-list`).append(`
                <div class="item-product row m-b-10">
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <select name="" class="form-control category-list data-item">
                            ${View.product.map(v => {
                                return `<option value="${v.id}">${v.id}-${v.name}</option>`
                            }).join("")}
                        </select>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <input type="text" class="form-control data-quantity" placeholder="Số lượng">
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <input type="text" class="form-control data-price" placeholder="Đơn giá">
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                        <button class="btn btn-danger item-remove" atr="Item Delete"><i class="fa fa-trash-o"></i></button>
                    </div>
                </div>
            `);
        },
        onCreate(resource, name){
            $(document).on('click', `${resource} .item-create`, function() {
                if($(this).attr('atr').trim() == name) {
                    View.Item.Create(resource);
                }
            });
        },
        onRemove(resource, name){
            $(document).on('click', `${resource} .item-remove`, function() {
                if($(this).attr('atr').trim() == name) {
                    $(this).parent().parent().remove();
                }
            });
        },
        clear(resource){
            $(`${resource} .item-list`).find('.item-product').remove()
        },
        init(){
            $(document).on('keypress', `.data-quantity`, function(event) {
                return ViewIndex.Config.onNumberKey(event);
            }); 
            $(document).on('keypress', `.data-price`, function(event) {
                return ViewIndex.Config.onNumberKey(event);
            }); 
        }
    },
    TabData: {
        onChange(name, callback){
            $(document).on('click', `.status-event`, function() {
                $(".status-event").removeClass("is-select");
                $(this).addClass("is-select");
                if($(this).attr('atr').trim() == name) {
                    $(".data-table-wrapper").find("#data-table_wrapper").remove()
                    $(".data-table-wrapper").append(`<table id="data-table" class="table"> </table>`)
                    callback();
                }
            });
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

                // --get Value
                var data_metadata       = View.Item.getVal(resource);

                if (onPushData) { 
                    fd.append('data_metadata', data_metadata);
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
                var modalTitleHTML  = `Nhập kho`;
                var modalBodyHTML   = Template.Warehouse.Create();
                var modalFooterHTML = ['Đóng', 'Xác nhận nhập kho'];

                $(document).off('click', `${View.SideModal.Create.resource} .item-create`);
                $(document).off('click', `${View.SideModal.Create.resource} .item-remove`);

                View.Item.onCreate(View.SideModal.Create.resource, "Item Create");
                View.Item.onRemove(View.SideModal.Create.resource, "Item Delete");

                ViewIndex.SideModal.launch(this.resource, modalTitleHTML, modalBodyHTML, modalFooterHTML);
            }
        },
        Update: {
            resource: '#side-modal-update',
            setDefaul(){ this.init();  },
            setVal(data){ 
                $(".sub-warehouse tbody tr").remove()
                data.map(v => {
                    $(".sub-warehouse tbody")
                        .append(`<tr>
                            <td>${v.name}</td>
                            <td>${ViewIndex.Config.formatPrices(v.quantity)}</td>
                            <td>${ViewIndex.Config.formatPrices(v.prices)} đ</td>
                            <td>${ViewIndex.Config.formatPrices(v.quantity * v.prices)} đ</td>
                          </tr>`)
                })
            },
            getVal(){
                return $(".status-option select").val()
            },
            onPush(name, callback){
                var resource = this.resource;
                $(document).on('click', `${this.resource} .push-modal`, function() {
                    if($(this).attr('atr').trim() == name) {
                        callback();
                    }
                });
            },
            init(){
                var modalTitleHTML  = `Chi tiết đơn nhập`;
                var modalBodyHTML   = Template.Warehouse.Update();
                var modalFooterHTML = ['Đóng', 'Cập nhật'];

                ViewIndex.SideModal.launch(this.resource, modalTitleHTML, modalBodyHTML, modalFooterHTML);
            }
        }, 
        Order: {
            resource: '#side-modal-order',
            setDefaul(){ this.init();  },
            setVal(data){ 
                $(".sub-warehouse tbody tr").remove()
                data.map(v => {
                    $(".sub-warehouse tbody")
                        .append(`<tr>
                            <td>${v.name}</td>
                            <td>${ViewIndex.Config.formatPrices(v.quantity)}</td>
                            <td>${ViewIndex.Config.formatPrices(v.prices)} đ</td>
                            <td>${ViewIndex.Config.formatPrices(v.quantity * v.prices)} đ</td>
                          </tr>`)
                })
            },
            getVal(){
                return $(".status-option select").val()
            },
            onPush(name, callback){
                var resource = this.resource;
                $(document).on('click', `${this.resource} .push-modal`, function() {
                    if($(this).attr('atr').trim() == name) {
                        callback();
                    }
                });
            },
            init(){
                var modalTitleHTML  = `Xác nhận đóng gói`;
                var modalBodyHTML   = Template.Warehouse.Update();
                var modalFooterHTML = ['Đóng', 'Đã đóng gói'];

                ViewIndex.SideModal.launch(this.resource, modalTitleHTML, modalBodyHTML, modalFooterHTML);
            }
        }, 
        Export: {
            resource: '#side-modal-export',
            setDefaul(){ this.init();  },
            setVal(data){ 
                $(".sub-warehouse tbody tr").remove()
                data.map(v => {
                    $(".sub-warehouse tbody")
                        .append(`<tr>
                            <td>${v.name}</td>
                            <td>${ViewIndex.Config.formatPrices(v.quantity)}</td>
                            <td>${ViewIndex.Config.formatPrices(v.prices)} đ</td>
                            <td>${ViewIndex.Config.formatPrices(v.quantity * v.prices)} đ</td>
                          </tr>`)
                })
            },
            getVal(){
                return $(".status-option select").val()
            },
            onPush(name, callback){
                var resource = this.resource;
                $(document).on('click', `${this.resource} .push-modal`, function() {
                    if($(this).attr('atr').trim() == name) {
                        callback();
                    }
                });
            },
            init(){
                var modalTitleHTML  = `Xác nhận giao hàng`;
                var modalBodyHTML   = Template.Warehouse.Update();
                var modalFooterHTML = ['Đóng', 'Đã bàn giao'];

                ViewIndex.SideModal.launch(this.resource, modalTitleHTML, modalBodyHTML, modalFooterHTML);
            }
        }, 
        Shipping: {
            resource: '#side-modal-shipping',
            setDefaul(){ this.init();  },
            setVal(data){ 
                $(".sub-warehouse tbody tr").remove()
                data.map(v => {
                    $(".sub-warehouse tbody")
                        .append(`<tr>
                            <td>${v.name}</td>
                            <td>${ViewIndex.Config.formatPrices(v.quantity)}</td>
                            <td>${ViewIndex.Config.formatPrices(v.prices)} đ</td>
                            <td>${ViewIndex.Config.formatPrices(v.quantity * v.prices)} đ</td>
                          </tr>`)
                })
                option_list = `<option value="5">Đã vận chuyển</option><option value="6">Hủy đơn</option>`
                $(".status-option").html(`<select>${option_list}</select>`);
            },
            getVal(){
                return $("#side-modal-shipping .status-option select").val()
            },
            onPush(name, callback){
                var resource = this.resource;
                $(document).on('click', `${this.resource} .push-modal`, function() {
                    if($(this).attr('atr').trim() == name) {
                        callback();
                    }
                });
            },
            init(){
                var modalTitleHTML  = `Đơn hàng đang giao`;
                var modalBodyHTML   = Template.Warehouse.Update();
                var modalFooterHTML = ['Đóng', 'Xác nhận'];

                ViewIndex.SideModal.launch(this.resource, modalTitleHTML, modalBodyHTML, modalFooterHTML);
            }
        }, 
		init(){ 
            View.SideModal.Create.init();  
            View.SideModal.Update.init();  
            View.SideModal.Order.init();  
            View.SideModal.Export.init();  
            View.SideModal.Shipping.init();  
		}
	},
    init(){ 
        ViewIndex.SideModal.init(View.SideModal.Create.resource, 900); 
        ViewIndex.SideModal.init(View.SideModal.Update.resource, 1600); 
        ViewIndex.SideModal.init(View.SideModal.Order.resource, 1600); 
        ViewIndex.SideModal.init(View.SideModal.Export.resource, 1600); 
        ViewIndex.SideModal.init(View.SideModal.Shipping.resource, 1600); 
    	View.SideModal.init();
        // View.tableWarehouse.init();
        View.tableHistory.init();
        View.Item.init();
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
            Api.Warehouse.Store(fd)
                .done(res => {
                    ViewIndex.helper.showToastSuccess('Success', 'Tạo thành công !');
                    getHistory();
                })
                .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
                .always(() => { });
            View.SideModal.Create.setDefaul();
        })
    })

    ViewIndex.SideModal.onControl("Side Modal View", (id) => {
        var resource = View.SideModal.Update.resource; 
        ViewIndex.SideModal.onShow(resource);
        Api.Warehouse.getOne(id)
            .done(res => {
                View.SideModal.Update.setVal(res.data)
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { }); 
    })  
    ViewIndex.SideModal.onControl("Side Modal Order", (id) => {
        var resource = View.SideModal.Order.resource; 
        ViewIndex.SideModal.onShow(resource);
        Api.Order.GetOne(id)
            .done(res => {
                View.SideModal.Order.setVal(res.data.order_detail)
                View.SideModal.Order.onPush("Push", () => {
                    ViewIndex.SideModal.onHide(resource)
                    var fd = new FormData();
                    fd.append('data_id', id);
                    fd.append('data_status', 3);
                    Api.Order.Update(fd)
                        .done(res => {
                            ViewIndex.helper.showToastSuccess('Success', 'Cập nhật thành công !');
                            getOrderFullfil()
                        })
                        .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
                        .always(() => { });
                    View.SideModal.Order.setDefaul();
                })
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { }); 
    })  
    ViewIndex.SideModal.onControl("Side Modal Export", (id) => {
        var resource = View.SideModal.Export.resource; 
        ViewIndex.SideModal.onShow(resource);
        Api.Order.GetOne(id)
            .done(res => {
                View.SideModal.Export.setVal(res.data.order_detail)
                View.SideModal.Export.onPush("Push", () => {
                    ViewIndex.SideModal.onHide(resource)
                    var fd = new FormData();
                    fd.append('data_id', id);
                    fd.append('data_status', 4);
                    Api.Order.Update(fd)
                        .done(res => {
                            ViewIndex.helper.showToastSuccess('Success', 'Cập nhật thành công !');
                            getOrderExport()
                        })
                        .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
                        .always(() => { });
                    View.SideModal.Export.setDefaul();
                })
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { }); 
    })  
    ViewIndex.SideModal.onControl("Side Modal Shipping", (id) => {
        console.log(1);
        var resource = View.SideModal.Shipping.resource; 
        ViewIndex.SideModal.onShow(resource);
        Api.Order.GetOne(id)
            .done(res => {
                View.SideModal.Shipping.setVal(res.data.order_detail)
                View.SideModal.Shipping.onPush("Push", () => {
                    ViewIndex.SideModal.onHide(resource)
                    var fd = new FormData();
                    fd.append('data_id', id);
                    fd.append('data_status', View.SideModal.Shipping.getVal());
                    Api.Order.Update(fd)
                        .done(res => {
                            ViewIndex.helper.showToastSuccess('Success', 'Cập nhật thành công !');
                            getOrderShipping()
                        })
                        .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
                        .always(() => { });
                    View.SideModal.Shipping.setDefaul();
                })
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { }); 
    })  

    View.TabData.onChange("Item", () => {
        View.tableData.init();
        getData()
    })
    View.TabData.onChange("History", () => {
        View.tableHistory.init();
        getHistory()
    })
    View.TabData.onChange("Order", () => {
        View.tableOrder.init();
        getOrderFullfil()
    })
    View.TabData.onChange("Export", () => {
        View.tableOrder.init();
        getOrderExport()
    })
    View.TabData.onChange("Shipping", () => {
        View.tableOrder.init();
        getOrderShipping()
    })

    function init(){
        getProduct();
        getHistory();
    }
    function getData(){
        Api.Warehouse.GetDataItem()
            .done(res => {
                ViewIndex.table.clearRows();
                Object.values(res.data).map(v => {
                    ViewIndex.table.insertRow(View.tableData.__generateDTRow(v));
                    ViewIndex.table.render();
                })
                ViewIndex.table.render();
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { });
    }
    function getHistory(){
        Api.Warehouse.GetDataHistory()
            .done(res => {
                ViewIndex.table.clearRows();
                Object.values(res.data).map(v => {
                    ViewIndex.table.insertRow(View.tableHistory.__generateDTRow(v));
                    ViewIndex.table.render();
                })
                ViewIndex.table.render();
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { });
    }
    function getOrderFullfil(){
        Api.Warehouse.GetOrderFullfil()
            .done(res => {
                ViewIndex.table.clearRows();
                Object.values(res.data).map(v => {
                    ViewIndex.table.insertRow(View.tableOrder.__generateDTRow(v));
                    ViewIndex.table.render();
                })
                ViewIndex.table.render();
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { });
    }
    function getOrderExport(){
        Api.Warehouse.GetOrderExport()
            .done(res => {
                ViewIndex.table.clearRows();
                Object.values(res.data).map(v => {
                    ViewIndex.table.insertRow(View.tableExport.__generateDTRow(v));
                    ViewIndex.table.render();
                })
                ViewIndex.table.render();
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { });
    }
    function getOrderShipping(){
        Api.Warehouse.GetOrderShipping()
            .done(res => {
                ViewIndex.table.clearRows();
                Object.values(res.data).map(v => {
                    ViewIndex.table.insertRow(View.tableShipping.__generateDTRow(v));
                    ViewIndex.table.render();
                })
                ViewIndex.table.render();
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { });
    }

    function getProduct(){
        Api.Product.GetAll()
            .done(res => {
                View.product = res.data;
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { });
    }
    init();
})();