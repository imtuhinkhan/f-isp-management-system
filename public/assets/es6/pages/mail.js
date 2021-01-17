class AppMail {

    static init() {
        $('#mail-list .mail-list .list-info').on('click', (e) => {
            $('#mail-list').addClass('d-none')
            $('#mail-content').removeClass('d-none')
        })

        $('#back').on('click', (e) => {
            $('#mail-content').addClass('d-none')
            $('#mail-list').removeClass('d-none')
        })

        $('.mail-open-nav').on('click', (e) => {
            $('#mail-nav').addClass('nav-open')
        })

        $('.mail-close-nav').on('click', (e) => {
            $('#mail-nav').removeClass('nav-open')
        })

        $('.mail-open-compose').on('click', (e) => {
            $('#mail-compose').removeClass('d-none')
            $('#mail-content').addClass('d-none')
            $('#mail-list').addClass('d-none')
            $('#mail-nav').removeClass('nav-open')
        })

        $('.mail-close-compose').on('click', (e) => {
            $('#mail-compose').addClass('d-none')
            $('#mail-content').addClass('d-none')
            $('#mail-list').removeClass('d-none')
        })

        $("#checkAll").on('change',function(){
            $('#mail-list input[type="checkbox"]').prop('checked',$(this).is(":checked"));
        }); 

        new Quill('#mail-compose-editor', {
            theme: 'snow'
        });
    }
}

$(() => { AppMail.init(); });

