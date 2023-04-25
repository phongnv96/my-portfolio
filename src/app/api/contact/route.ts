import { NextResponse } from "next/server";
import { ContactInfosRepo } from "./contac-repo";

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

export async function GET() {
  try {
    const data = await ContactInfosRepo.getAll();
    return NextResponse.json(data);
  } catch (error) {
    return new Response("Error get all!", {
      status: 500,
    });
  }
}
