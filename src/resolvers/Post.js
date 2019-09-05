const Post = {
    // implimenting relations with prisma client
    // https://www.prisma.io/tutorials/a-guide-to-common-resolver-patterns-ct08/
    author(parent, args, { prisma }) {
        return prisma.post({ id: parent.id }).author()
    }
}

export default Post