class PagesPricing {

    static init() {

        $('#monthly-btn').on('click', (e) => {
            $('#monthly-view').removeClass('d-none');
            $('#annual-view').addClass('d-none')
            $(e.currentTarget).addClass('active');
            $('#annual-btn').removeClass('active');
        })

        $('#annual-btn').on('click', (e) => {
            $('#annual-view').removeClass('d-none');
            $('#monthly-view').addClass('d-none');
            $(e.currentTarget).addClass('active');
            $('#list-view-btn').removeClass('active');
        })
    }
}

$(() => { PagesPricing.init(); });

