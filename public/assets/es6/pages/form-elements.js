class FormElements {

    static init() {
        $('.select2').select2();
        $('.datepicker-input').datepicker();

        new Quill('#editor', {
            theme: 'snow'
        });
    }
}

$(() => { FormElements.init(); });

