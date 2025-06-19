import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">thanawat.fun</h1>
        <p className="mt-1 text-sm">This is my personal blog.</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="aero-image-profile">
          <Image
            src="/assets/profile.jpg"
            width={300}
            height={300}
            alt="Profile Picture"
            className="rounded-full"
          />
        </div>
      </div>
      <button className="aero-button hover:brightness-110 transition-all duration-300">ตรงใจสุด ๆ</button>
      <div className=""></div>
    </main>
  );
}
