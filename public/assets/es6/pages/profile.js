class PagesProfile {

    static init() {

        $('#list-view-btn').on('click', (e) => {
            $('#list-view').removeClass('d-none');
            $('#card-view').addClass('d-none')
            $(e.currentTarget).addClass('active');
            $('#card-view-btn').removeClass('active');
        })

        $('#card-view-btn').on('click', (e) => {
            $('#card-view').removeClass('d-none');
            $('#list-view').addClass('d-none');
            $(e.currentTarget).addClass('active');
            $('#list-view-btn').removeClass('active');
        })
    }
}

$(() => { PagesProfile.init(); });

