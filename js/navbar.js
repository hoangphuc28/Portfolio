const arr = ['home-page', 'about-page', 'project-page', 'contact-page']
const arr2 = ['1', '2', '3', '4']
handleClick = (id, id2) => {
    if(document.getElementById(id).classList.contains('not-selected')) {
        document.getElementById(id).classList.remove('not-selected')
    }
    if(!document.getElementById(id2).classList.contains('selected')) {
        document.getElementById(id2).classList.add('selected')
    }
    arr2.map(item => {
        if(item !== id2) {
            document.getElementById(item).classList.remove('selected')
        }
    })
    arr.map(item => {
        if(item !== id) {
            document.getElementById(item).classList.add('not-selected')
        }
    })
}