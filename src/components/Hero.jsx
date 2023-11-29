import Banner from "./Banner";

export default function Hero() {
  return (
    <section className="container justify-center min-h-screen">
      <Banner />
      <div className="flex flex-col justify-between py-2">
        <p>uki</p>
        <h2 className="text-xl font-semibold ">SLOGAN</h2>
        <h2 className="text-xl font-semibold ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
          tempora, fugiat cum maiores officia est quis quia. Animi quidem
          officia expedita asperiores veritatis in id placeat, quia blanditiis!
          Eaque, eum.
        </h2>
        <h2 className="text-xl font-semibold ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni illum
          iusto veniam autem sunt asperiores, ex, tenetur aut voluptatum
          adipisci nobis. Natus voluptates porro sunt accusantium, autem illum
          assumenda commodi!
        </h2>
        <a
          className="py-1 px-3 my-5 bg-blue-600 rounded-md w-max text-white"
          href="#previous-projects"
        >
          Previous Projects
        </a>
      </div>
    </section>
  );
}
