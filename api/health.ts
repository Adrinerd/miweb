export default async function handler(req: any, res: any) {
    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        env: {
            node_env: process.env.NODE_ENV
        },
        message: 'API is working!'
    });
}
