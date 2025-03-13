import Attribution from "@/components/attribution";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 h-screen w-full bg-yellow">
      <div className="flex flex-col justify-center items-start  p-4 w-xs rounded-xl bg-white border-2 shadow">
        <div className="relative w-full h-[170px] mb-4 rounded-lg overflow-hidden">
          <Image
            src="/images/illustration-article.svg"
            alt="article image"
            fill
            className="object-cover"
          />
        </div>

        <section className="text-sm">
          <p className="w-fit py-1 px-2 rounded-sm bg-yellow figtree-bold">
            Learning
          </p>
          <p className="my-2 text-gray-500">Published 21 Dec 2023</p>
          <h1 className="my-3 text-lg text-gray-950 hover:text-yellow figtree-bold">
            HTML & CSS foundations
          </h1>
          <p className="my-2 text-gray-500">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>

          <div className="flex justify-start items-center gap-3">
            <div className="relative inline-block h-[40px] w-[40px]">
              <Image
                src="/images/image-avatar.webp"
                alt="avatar"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <p className="inline-block align-middle text-gray-950 figtree-bold">
              Greg Hooper
            </p>
          </div>
        </section>
      </div>

      <Attribution />
    </div>
  );
}
