function viewMore() {
    document.querySelector('.see_more').classList.remove('disable')
    document.querySelector('.see_more').classList.add('enable')

    document.querySelector('.meet_the_new').querySelector('.view_more').classList.add('disable_display')
    document.querySelector('.meet_the_new').querySelector('.view_more').classList.remove('enable_display')
}

function viewLess() {
    document.querySelector('.see_more').classList.add('disable')
    document.querySelector('.see_more').classList.remove('enable')

    document.querySelector('.meet_the_new').querySelector('.view_more').classList.remove('disable_display')
    document.querySelector('.meet_the_new').querySelector('.view_more').classList.add('enable_display')
}

const modalLargerView = document.querySelector('.modal_view')
const close = document.querySelector('.close')
const largerView = document.querySelector('.larger_view')
const miniatures = document.querySelector('.see_more_details').querySelectorAll('img')

function closeModal() {
    modalLargerView.classList.remove('modal_enable')
    modalLargerView.classList.add('modal_disable')
}

for( let miniature of miniatures ) {
    miniature.addEventListener('click', () => {
        modalLargerView.classList.remove('modal_disable')
        modalLargerView.classList.add('modal_enable')

        let image = miniature.outerHTML
        largerView.innerHTML = '<img src="/img/closed.png" class="close" onclick="closeModal()" alt="">' + image
    })
}