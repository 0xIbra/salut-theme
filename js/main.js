$(document).ready(() => {
    $('.navbar-toggler').click(() => {
        $($(this).data('target')).toggleClass('active')
    })

    $('.sidebar-overlay').click(() => {
        $('.sidebar-wrapper').removeClass('show')
    })
})