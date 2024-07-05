export default function BoardGamePage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <h1>This is the {params.slug} page</h1>
    </>
  );
}
