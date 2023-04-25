import { NextResponse } from 'next/server';

export { errorHandler };

function errorHandler(err: any, res: any) {
    if (typeof (err) === 'string') {
        // custom application error
        const is404 = err.toLowerCase().endsWith('not found');
        const statusCode = is404 ? 404 : 400;
        return res.status(statusCode).json({ message: err });
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return NextResponse.json({ message: 'Auth required' }, { status: 401 })
    }

    // default to 500 server error
    console.error(err);
    return res.status(500).json({ message: err.message });
}