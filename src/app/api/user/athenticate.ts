import { NextResponse } from 'next/server';

import { apiHandler } from '../api-handler';
import { usersRepo } from './user-repo';

export default apiHandler({
    post: authenticate
});

async function authenticate(req: Request) {
    const body = await req.json();
    const user = await usersRepo.authenticate(body);
    return NextResponse.json(user);
}