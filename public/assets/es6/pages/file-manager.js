class FileManager {

    static init() {

        const hide = 'd-none'
        const fileItems = '.file-manager-content-files .file';
        const fileDetail = '.file-manager-content-details .content-details';
        const fileContentDetails = '.file-manager-content-details'
        const fileDetailNoData = '.file-manager-content-details .content-details-no-data';

        function showFileDetails () {
            $(fileDetailNoData).addClass(hide)
            $(fileDetail).removeClass(hide)
        }

        function hideFileDetails () {
            $(fileDetailNoData).removeClass(hide)
            $(fileDetail).addClass(hide)
        }

        $(fileItems).on('click', (e) => {
            showFileDetails()
            $(fileItems).removeClass('active')
            $(e.currentTarget).addClass('active')
            $(fileContentDetails).addClass('details-open')
        })

        $('.unselect-bg').on('click', (e) => {
            hideFileDetails()
            $(fileItems).removeClass('active')
        })

        $('.content-details-close a').on('click', (e) => {
            $(fileContentDetails).removeClass('details-open')
        })

        $('#open-manager-menu').on('click', (e) => {
            $('.file-manager-nav').addClass('nav-open')
            $(e.currentTarget).addClass(hide)
            $('#close-manager-menu').removeClass(hide)
        })

        $('#close-manager-menu').on('click', (e) => {
            $('.file-manager-nav').removeClass('nav-open')
            $(e.currentTarget).addClass(hide)
            $('#open-manager-menu').removeClass(hide)
        })
    }
}

$(() => { FileManager.init(); });

