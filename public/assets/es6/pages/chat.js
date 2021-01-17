class Chat {

    static init() {

        const chartContent = '.chat-content'

        $('.chat-user-list .chat-list-item').on('click', () => {
            $(chartContent).addClass('open')
        })

        $('.chat-close').on('click', () => {
            $(chartContent).removeClass('open')
        })
    }
}

$(() => { Chat.init(); });

