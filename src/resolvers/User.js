const User = {
    // implimenting relations with prisma client
    // https://www.prisma.io/tutorials/a-guide-to-common-resolver-patterns-ct08/
    posts(parent, args, { prisma }) {
        return prisma.user({ id: parent.id }).posts()
    }
}

export default User