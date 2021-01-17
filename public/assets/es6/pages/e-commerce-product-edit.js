class OrderList {

    static init() {
        $('.select2').select2();

        new Quill('#productDescription', {
            theme: 'snow'
        });
    }
}

$(() => { OrderList.init(); });

