class Icon {

    static init() {
        function copy(value)  {
            const promise = new Promise((resolve) => {
                let copyTextArea = null;
                try {
                    copyTextArea = document.createElement("textarea");
                    copyTextArea.style.height = '0px';
                    copyTextArea.style.opacity = '0';
                    copyTextArea.style.width = '0px';
                    document.body.appendChild(copyTextArea);
                    copyTextArea.value = value;
                    copyTextArea.select();
                    document.execCommand('copy');
                    resolve(value);
                } finally {
                    if (copyTextArea && copyTextArea.parentNode) {
                        copyTextArea.parentNode.removeChild(copyTextArea);
                    }
                }
            });
    
            return (promise);
        }

        function showToast() {
            var toastHTML = `<div class="toast fade hide" data-delay="1500">
                <div class="toast-body">
                    <i class="anticon anticon-check-o text-success"></i>
                    <span class="ml-1">Copied</span>
                </div>
            </div>`
        
            $('#notification-toast').append(toastHTML)
            $('#notification-toast .toast').toast('show');
            setTimeout(function(){ 
                $('#notification-toast .toast:first-child').remove();
            }, 1500);
        }

        $('.icons-list li').on('click', (e) => {
            const $this = $(e.currentTarget);
            const copiedString = $this.children('.icon-wrap').html()
            copy(copiedString).then(() => {
                showToast()
            });
        })
    }
    
}

$(() => { Icon.init(); });

