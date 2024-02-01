export default function homePage() {
    const content = document.querySelector('#content');
    
    const image = document.createElement('img');
    image.setAttribute('src', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    image.setAttribute('width', '800');
    image.setAttribute('alt', 'a dish with fresh vegetables');
    
    const title = document.createElement('h1');
    title.textContent = 'My Restaurant';

    const description = document.createElement('p');
    description.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde deleniti reprehenderit a similique qui iste reiciendis quis voluptatem velit! Inventore illo rerum libero debitis alias assumenda omnis et corrupti veritatis.';

    content.append(title, description, image);
}