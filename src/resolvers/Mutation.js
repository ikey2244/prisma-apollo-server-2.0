const Mutation = {
    createUser(parent, args, { prisma }) {
        // create a user with all the arguments passed in
        return prisma.createUser({ ...args.data })
    },
    createPost(parent, args, { prisma }) {
        // create a post with all the arguments passed in
        // connect an author to that post
        return prisma.createPost({
            ...args.data,
            author: {
                connect: {
                    id: args.id
                }
            }
        })
    }
}

export default Mutation