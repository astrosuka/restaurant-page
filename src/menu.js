export default function menu() {
    const content = document.querySelector('#content');
    const title = document.createElement('h1');
    title.textContent = 'Menu';
    let menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menu-wrapper');
    
    content.append(title, menuWrapper);

    for (let i = 0; i <10; i++) {
        let item = document.createElement('div');
        let title = document.createElement('h2');
        title.textContent = `Menu Item #${i + 1}`
        let text = document.createElement('p');
        text.textContent = '🥗';
        item.append(title, text);
        menuWrapper.appendChild(item);
    }
}