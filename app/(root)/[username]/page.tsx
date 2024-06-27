export default function ProfilePage({ params }:{ params: { username: string } }) {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center gap-40">
      <h3>{params.username}</h3>
    </main>
  );
};