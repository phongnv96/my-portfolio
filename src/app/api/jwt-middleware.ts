//@ts-ignore
import { expressjwt } from 'express-jwt';
import util from 'util';

export { jwtMiddleware };

function jwtMiddleware(req: any, res: any) {
    const middleware = expressjwt({ secret: process.env.SECRET_KEY || '', algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/api/users/register',
            '/api/users/authenticate'
        ]
    });

    return util.promisify(middleware)(req, res);
}