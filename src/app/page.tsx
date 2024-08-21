import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start md:px-16 gap-y-8 px-8 pb-8">
      <div className="flex flex-col gap-y-4 w-full">
        <div className="flex flex-row items-center gap-x-2">
          <Button>Populer</Button>
          <Button variant={'ghost'}>Rekomendasi</Button>
          <Button variant={'ghost'}>Terbaru</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 w-full gap-4">
          {
            Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="cursor-pointer rounded-xl border bg-card text-card-foreground shadow">
                <Image
                  src="https://cover.komiku.id/wp-content/uploads/2022/09/50kg-Cinderella-Panjang.png"
                  alt="Placeholder"
                  width={300}
                  height={300}
                  layout="responsive"
                  className="rounded-t-xl"
                />
                <div className="p-3">
                  <h2 className="text-md font-bold">Title</h2>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex flex-col gap-y-4 w-full">
        <div className="flex flex-row items-center gap-x-2">
          <Button>Manga</Button>
          <Button variant={'ghost'}>Manhwa</Button>
          <Button variant={'ghost'}>Manhua</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 w-full gap-4">
          {
            Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="cursor-pointer rounded-xl border bg-card text-card-foreground shadow">
                <Image
                  src="https://cover.komiku.id/wp-content/uploads/2022/09/50kg-Cinderella-Panjang.png"
                  alt="Placeholder"
                  width={300}
                  height={300}
                  layout="responsive"
                  className="rounded-t-xl"
                />
                <div className="p-3">
                  <h2 className="text-md font-bold">Title</h2>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  );
}
