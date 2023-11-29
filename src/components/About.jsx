export default function About() {
  return (
    <section className="container">
      <div className="flex">
        <div className="w-1/2 ml-4">
          <img
            className="w-48 h-60 object-cover object-top rounded-xl"
            src="https://assets.karyakarsa.com/image-5f228fa63e6f7.jpg@800w.jpg"
            alt="foto saya"
          />
        </div>
        <div className="w-1/2">
          <h3>ABOUT ME</h3>
          <p className="text-sm my-2 text-gray-400">saya adalah gamaliel</p>
          <div className="flex gap-6">
            <a
              className="py-2 px-6 my-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md w-max text-white"
              href="#previous-projects"
            >
              HIRE ME
            </a>

            <a
              className="py-2 px-6 my-5 border-2 border-blue-700 rounded-md w-max text-white"
              href="#previous-projects"
            >
              RESUME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
