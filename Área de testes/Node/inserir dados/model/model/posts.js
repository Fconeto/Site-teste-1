module.exports = {

    posts: [
        {id: "eu",
         title: "Teste do mural",
          description: "Descrição"
        },
    
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {

        this.posts.push({ id: generateID(), title, description});

    },

    deletePost(title, description) {

        this.posts.pop({title, description});

    }

}

function generateID() {
    return Math.random().toString(36).substring(2, 9);
}