export let blogs = [
    {
        postedOn: "December 21 2019 Saturday",
        title: "Welcome",
        content: `<p>Welcome to CodeYatra. Here, I will introduce you to my projects and share my thoughts through blogs. If you find any of my posts useful, please share widely.</p>
        <p>I think we are all capable of learning how to code. In fact, given the ubiquitous nature of coding in our lives, it makes us better participants in the world if we learn at least the basics of coding.</p>
        `
    },
    {
        postedOn: "December 21 2019 Saturday",
        title: "Why Learn Computing",
        content: `<p>Computers are everywhere.</p>`
    },
    {
        postedOn: "December 21 2019 Saturday",
        title: "My Second Post",
        content: `<p> This is my second post</p>`
    },
]

export let blogTitles = blogs.map(blog => blog.title)

