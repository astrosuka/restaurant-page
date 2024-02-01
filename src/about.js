export default function about() {
    const content = document.querySelector('#content');

    const title = document.createElement('h1');
    title.textContent = "About";

    const text = document.createElement('p');
    text.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime eius accusamus quidem tempora laboriosam velit, vel inventore ipsam ducimus incidunt numquam saepe officiis id tenetur excepturi, quae, nobis dolore quaerat!
    Culpa hic, soluta esse dignissimos sunt maxime, at quam iusto temporibus, laborum non alias incidunt quo atque totam impedit nam. Molestiae unde ratione dolorum laudantium amet, quo tenetur pariatur deleniti!
    Veniam velit nisi deserunt dignissimos facilis. Similique quos qui fugiat, magni cum repellendus illum, asperiores explicabo voluptate expedita hic consequuntur repellat natus necessitatibus corrupti eum iure, mollitia ea nobis numquam?
    Labore dolorum laboriosam repellendus minus atque dignissimos quasi fugiat non, quod esse tenetur nesciunt ipsam! Ea qui, iste quas facilis aspernatur maiores est eum quisquam enim quidem quae explicabo earum.
    Modi, quasi quidem, ullam explicabo doloribus ipsa iste aperiam perspiciatis perferendis sed inventore quam eligendi hic, veritatis consequuntur voluptatem quia minus? Aspernatur tempora pariatur iste ea ratione, minus ipsam voluptatibus?`

    content.append(title, text);
}