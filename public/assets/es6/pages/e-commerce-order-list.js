class OrderList {

    static init() {
        $('.e-commerce-table').DataTable();

        $("#checkAll").on('change',function(){
            $('.e-commerce-table input[type="checkbox"]').prop('checked',$(this).is(":checked"));
        }); 
    }
}

$(() => { OrderList.init(); });

