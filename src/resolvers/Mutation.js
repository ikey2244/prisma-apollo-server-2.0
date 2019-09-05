const Mutation = {
    createPost(parent, args, { prisma }) {
        return prisma.createPost({ ...args.data })
    }
}