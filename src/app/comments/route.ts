import { comments } from "./data";

export async function GET() {
  return new Response(JSON.stringify(comments));
}

export async function POST(request: Request) {
  const data = await request.json();
  comments.push(data);
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
