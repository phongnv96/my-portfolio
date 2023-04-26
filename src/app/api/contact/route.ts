import { NextResponse } from 'next/server';

import { errorHandler } from '../error-handler';
import { ContactInfosRepo } from './contac-repo';

export async function POST(request: Request) {
  const body = await request.json();
  try {
    await ContactInfosRepo.create(body);
  } catch (error) {
    return new Response("Error!", {
      status: 500,
      statusText: JSON.stringify(error),
    });
  }
  return NextResponse.json({ message: "create success!" });
}

async function getAllContacts(req: any, res: any) {
  const data = await ContactInfosRepo.getAll();
  return NextResponse.json(data);
}

export async function GET(req: any, res: any) {
  try {
    // global middleware
    // await jwtMiddleware(req, res);
    // route handler
    return await getAllContacts(req, res);
  } catch (err) {
    // global error handler
    return errorHandler(err, res);
  }
}
