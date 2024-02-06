import { getAllMovies } from "@/lib/actions/movies.action";

export default async function Home() {
  const data = await getAllMovies();

  return (
    <section className=" w-full h-full border border-red-200 text-white ">
      {data?.map((show, i) => <p key={i}>{show.title}</p>)}
    </section>
  );
}
