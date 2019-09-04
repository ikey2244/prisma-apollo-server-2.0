const Query = {
    users(parent, args, { prisma }, info) {
        return prisma.users()
    }
}

export { Query as default }