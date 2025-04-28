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

// make a Patch request to update a comment

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } } // ✅ params is a plain object, not a Promise
) {
  const { id } = params; // ✅ No need to await
  const comment = comments.find((comment) => comment.id === parseInt(id));

  if (!comment) {
    return new Response("Comment not found", { status: 404 });
  }

  const data = await request.json();
  Object.assign(comment, data);

  return new Response(JSON.stringify(comment), {
    headers: { "Content-Type": "application/json" },
  });
}
