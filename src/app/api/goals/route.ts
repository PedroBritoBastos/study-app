export async function GET() {
  const data = ["Goal 1", "Goal 2", "Goal 3"];
  return Response.json({
    goals: data,
  });
}
