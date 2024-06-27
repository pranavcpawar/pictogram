export default function DirectInboxPage(
  { params

  }: {
    params: {
      id: string
    },
  }) {
  return(
    <main className="w-full min-h-screen flex flex-col items-center justify-center gap-40">
      <h3>{params.id}</h3>
    </main>
  );
}