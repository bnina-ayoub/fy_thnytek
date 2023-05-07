import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
    const {email, password} = req.query;

    try {
        const newUer = await prisma.users.create({
            data: {
                email,
                password,
            },
        });

        res.json({ user: newUer, error: null });
    } catch (error) {
        res.json({ error: error.message, user: null });
    }
}