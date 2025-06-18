import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">thanawat.fun</h1>
        <p className="mt-1 text-sm">This is my personal blog.</p>
      </div>
      <Image
        src="/assets/profile.jpg"
        width={300}
        height={300}
        alt="Profile Picture"
        style={{ borderRadius: "50%" }}
      />
      <div className=""></div>
    </main>
  );
}
