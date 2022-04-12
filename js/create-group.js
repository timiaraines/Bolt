// var image = document.getElementById("group-image").value;
// var name = document.getElementById("group-name").value;
// var description = document.getElementById("group-purpose").value;

function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);

    const image = data.get('image');
    const name = data.get('name');
    const description = data.get('description');
    const value = Object.fromEntries(data.entries());
  
    console.log({ value });
}
  
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);