const Api = {
    Category: {},
    Supplier: {},
    Product: {},
    Type: {},
    Image: {},
    Order: {},
    Warehouse: {},
    Statistic: {},
    Manager: {},

};
(() => {
    $.ajaxSetup({
        headers: { 
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr('content'),
        },
        crossDomain: true
    });
})();


//Category
(() => {
    Api.Category.GetAll = () => $.ajax({
        url: `/apip/category/get`,
        method: 'GET',
    });
    Api.Category.Store = (data) => $.ajax({
        url: `/apip/category/store`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Category.getOne = (id) => $.ajax({
        url: `/apip/category/get-one/${id}`,
        method: 'GET',
    });
    Api.Category.Update = (data) => $.ajax({
        url: `/apip/category/update`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Category.Delete = (data) => $.ajax({
        url: `/apip/category/delete`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
})();


//Supplier
(() => {
    Api.Supplier.GetAll = () => $.ajax({
        url: `/apip/supplier/get`,
        method: 'GET',
    });
    Api.Supplier.Store = (data) => $.ajax({
        url: `/apip/supplier/store`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Supplier.getOne = (id) => $.ajax({
        url: `/apip/supplier/get-one/${id}`,
        method: 'GET',
    });
    Api.Supplier.Update = (data) => $.ajax({
        url: `/apip/supplier/update`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Supplier.Delete = (id) => $.ajax({
        url: `/apip/supplier/delete/${id}`,
        method: 'GET',
    });
})();



//Product
(() => {
    Api.Product.GetAll = () => $.ajax({
        url: `/apip/product/get`,
        method: 'GET',
    });
    Api.Product.Store = (data) => $.ajax({
        url: `/apip/product/store`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    
    Api.Product.getOne = (id) => $.ajax({
        url: `/apip/product/get-one/${id}`,
        method: 'GET',
    });
    Api.Product.Update = (data) => $.ajax({
        url: `/apip/product/update`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Product.Delete = (id) => $.ajax({
        url: `/apip/product/delete/${id}`,
        method: 'GET',
    });
    Api.Product.Trending = (id) => $.ajax({
        url: `/apip/product/update-trending`,
        method: 'PUT',
        dataType: 'json',
        data: {
            id: id ?? '',
        }
    });
    
})();

//Order
(() => {
    Api.Order.GetAll = (id) => $.ajax({
        url: `/apip/order/get`,
        method: 'GET',
        dataType: 'json',
        data: {
            id: id ?? null,
        }
    });
    Api.Order.GetOne = (id) => $.ajax({
        url: `/apip/order/get-one/${id}`,
        method: 'GET',
    });
    Api.Order.Update = (data) => $.ajax({
        url: `/apip/order/update`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
})();

// Image
(() => {
    Api.Image.Create = (data) => $.ajax({
        url: `/apip/post-image`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
})();

// Warehouse
(() => {
    Api.Warehouse.GetDataItem = () => $.ajax({
        url: `/apip/warehouse/get-item`,
        method: 'GET',
    });
    Api.Warehouse.GetDataHistory = () => $.ajax({
        url: `/apip/warehouse/get-history`,
        method: 'GET',
    }); 
    Api.Warehouse.GetOrderFullfil = () => $.ajax({
        url: `/apip/warehouse/get-order-fullfil`,
        method: 'GET',
    }); 
    Api.Warehouse.GetOrderExport = () => $.ajax({
        url: `/apip/warehouse/get-order-export`,
        method: 'GET',
    }); 
    Api.Warehouse.GetOrderShipping = () => $.ajax({
        url: `/apip/warehouse/get-order-shipping`,
        method: 'GET',
    }); 

    Api.Warehouse.Store = (data) => $.ajax({
        url: `/apip/warehouse/store`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Warehouse.getOne = (id) => $.ajax({
        url: `/apip/warehouse/get-ware-one/${id}`,
        method: 'GET',
    });
})();

// Statistic
(() => {
    Api.Statistic.getTotal = () => $.ajax({
        url: `/apip/statistic/get-total`,
        method: 'GET',
    });
    Api.Statistic.getBestSale = () => $.ajax({
        url: `/apip/statistic/get-best-sale`,
        method: 'GET',
    });
    Api.Statistic.getCustomerBuy = () => $.ajax({
        url: `/apip/statistic/get-customer`,
        method: 'GET',
    });
})();


//Manager
(() => {
    Api.Manager.GetAll = () => $.ajax({
        url: `/apip/manager/get`,
        method: 'GET',
    });
    Api.Manager.Store = (data) => $.ajax({
        url: `/apip/manager/store`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Manager.getOne = (id) => $.ajax({
        url: `/apip/manager/get-one/${id}`,
        method: 'GET',
    });
    Api.Manager.Update = (data) => $.ajax({
        url: `/apip/manager/update`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Manager.Delete = (data) => $.ajax({
        url: `/apip/manager/delete`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
})();