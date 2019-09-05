const Query = {
    user(parent, args, { prisma }) {
        return prisma.user({ id: args.id })
    },
    users(parent, args, { prisma }) {
        return prisma.users()
    },
    posts(parent, args, { prisma }) {
        return prisma.posts()
    }
}

export default Query