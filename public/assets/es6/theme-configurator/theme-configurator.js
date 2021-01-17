function themeConfigurator() {

    $(document).on('change', 'input[name="header-theme"]', ()=>{
        const context = $('input[name="header-theme"]:checked').val();
        console.log(context)
        $(".app").removeClass (function (index, className) {
            return (className.match (/(^|\s)is-\S+/g) || []).join(' ');
        }).addClass( 'is-'+ context );
    });

    $('#side-nav-theme-toogle').on('change', (e)=> {
        $('.app .layout').toggleClass("is-side-nav-dark");
        e.preventDefault();
    });
    
    $('#side-nav-fold-toogle').on('change', (e)=> {
        $('.app .layout').toggleClass("is-folded");
        e.preventDefault();
    });
}

export default { themeConfigurator }