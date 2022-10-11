const users = [
    { id: 167464, firstName: "Jimmy", lastName: "Arnold", email: "jimmya@gmail.com", },
    { id: 578447, firstName: "Martha", lastName: "Goldman", email: "gold@hotmail.com", },
    { id: 864578, firstName: "Tim", lastName: "Burton", email: "timmy.hotmail.com", }
    ,];

    const Ol = document.createElement('ol')
    users.forEach(({firstName, id},i)=> {
    Ol.innerHTML += `<li style="list-style:none" data-id="${id}">${firstName}</li>`
})

document.body.appendChild(Ol)