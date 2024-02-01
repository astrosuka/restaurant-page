export default function menu() {
    const content = document.querySelector('#content');

    for (let i = 0; i <10; i++) {
        let item = document.createElement('div');
        let title = document.createElement('h2');
        title.textContent = `Menu Item #${i + 1}`
        let text = document.createElement('p');
        text.textContent = 'blabla';
        item.append(title, text);
        content.appendChild(item);
    }
}