const View = {
    table: {
        __generateDTRow(data){
            var order_status = [
                "Chờ xác nhận",
                "Chưa hoàn thiện",
                "Đã hoàn thiện",
                "Đang lấy hàng",
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
                `<span class="action-box large delete-btn modal-control" atr="Side Modal View" data-id="${data.id}" title="View"><i class="icon"><i class="icon-eye"></i></i></span>`
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
	tab: {
        now: null,
        tabToggle(item){
            $(".order-tab a").removeClass("badge-light")
            item.addClass("badge-light") 
        },
        onChange(callback){
            $(document).on('click', `.order-tab a`, function() {
                View.tab.tabToggle($(this))
                callback($(this).attr("order-status"))
            });
        },
	},
	SideModal: { 
		Update: {
			resource: '#side-modal-update',
            setDefaul(){ this.init();  },
            setVal(data){ 
                var resource = this.resource;
                $(resource).find(".customer-avatar").css({"background-image": `url('/${data.order[0].avatar}')`})
                $(resource).find(".customer-name").text(data.order[0].name) 
                $(resource).find(".data-phone").text(data.order[0].phone)
                $(resource).find(".data-address").text(data.order[0].address)
                var sub_order = "";
                var has_order = true;
                data.order_detail.map((v1,k1) => {
                    var image           = v1.images.split(",")[0];
                    var real_prices     = ViewIndex.Config.formatPrices(v1.discount == 0 ? v1.prices : v1.prices - (v1.prices*v1.discount/100));
                    var discount_price  = v1.discount == 0 ? "" : `<del>${ViewIndex.Config.formatPrices(v1.prices*v1.discount/100)} đ</del>`
                    var warehouse_quatity = v1.warehouse_quatity ?? 0;
                    var has_visible = v1.quantity < warehouse_quatity;

                    if (!has_visible) has_order = false;
                    sub_order += `<div class="order-item">
                                    <div class="item-image" style="background-image: url('/${image}')"> </div>
                                    <div class="item-data">
                                        <h4 class="item-name">${v1.name}</h4>
                                        <p class="item-quantity">x${v1.quantity}</p>
                                        <p class="item-quantity ${has_visible ? "" : "text-red"}">Khả dụng: ${warehouse_quatity}</p>
                                    </div>
                                    <div class="item-price">
                                        ${discount_price}
                                        <span>${real_prices} đ</span>
                                    </div>
                                </div>`
                })
                $(resource).find(".order-body").html(sub_order)
                $(resource).find(".total-prices").text(ViewIndex.Config.formatPrices(data.order[0].total) + " đ")

                $(".status-option select").remove();
                if (data.order[0].order_status == 0) {
                    option_list = has_order 
                        ? `<option value="2">Xác nhận đơn</option><option value="6">Hủy đơn</option>` 
                        : `<option value="1">Tiếp tục đặt trước</option><option value="6">Hủy đơn</option>`
                    $(".status-option").append(`<select>${option_list}</select>`);
                }else if(data.order[0].order_status == 1) {
                    option_list = `<option value="2">Đã hoàn thiện</option>`
                    $(".status-option").append(`<select>${option_list}</select>`);
                }else if(data.order[0].order_status == 2){
                    option_list = `<option value="3">Yêu cầu xuất hàng</option>
                                    <option value="1">Chưa hoàn thiện</option>`
                    $(".status-option").append(`<select>${option_list}</select>`);
                }else if(data.order[0].order_status == 3){
                    option_list = `<option value="4">Đã lấy hàng</option>`
                    $(".status-option").append(`<select>${option_list}</select>`);
                }else if(data.order[0].order_status == 4){
                    option_list = `<option value="5">Đã vận chuyển</option><option value="6">Hủy đơn</option>`
                    $(".status-option").append(`<select>${option_list}</select>`);
                }
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
                var modalTitleHTML  = `Chi tiết đơn hàng`;
                var modalBodyHTML   = Template.Order.Update();
                var modalFooterHTML = ['Đóng', 'Cập nhật'];

                ViewIndex.SideModal.launch(this.resource, modalTitleHTML, modalBodyHTML, modalFooterHTML);
            }
		}, 
		init(){ 
			View.SideModal.Update.init();  
		}
	},
    init(){ 
    	ViewIndex.SideModal.init(View.SideModal.Update.resource, 1600); 
    	View.SideModal.init();
        View.table.init();
    }
};
(() => {
    View.init(); 
    ViewIndex.SideModal.onControl("Side Modal View", (id) => {
        var resource = View.SideModal.Update.resource; 
    	ViewIndex.SideModal.onShow(resource);
        Api.Order.GetOne(id)
            .done(res => {
            	View.SideModal.Update.setVal(res.data)
            	View.SideModal.Update.onPush("Push", () => {
		            ViewIndex.SideModal.onHide(resource)
                    var fd = new FormData();
                    fd.append('data_id', id);
                    fd.append('data_status', View.SideModal.Update.getVal());
		            Api.Order.Update(fd)
		                .done(res => {
		                    ViewIndex.helper.showToastSuccess('Success', 'Cập nhật thành công !');
		                    getData(View.tab.now);
		                })
		                .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
		                .always(() => { });
		            View.SideModal.Update.setDefaul();
		        })
            })
            .fail(err => { ViewIndex.helper.showToastError('Error', 'Có lỗi sảy ra'); })
            .always(() => { }); 
    }) 
    View.tab.onChange((id) => {
        View.tab.now = id;
        getData(id)
    })
    function init(){
        getData();
    }
    function getData(id){
        Api.Order.GetAll(id)
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