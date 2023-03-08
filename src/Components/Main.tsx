import Carousels from './Carousels'
import Members from './Carousels/Members'

const Main: React.FC<{}> = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center flex-col text-center">
        <h1 className="uppercase lg:text-8xl md:text-6xl sm:text-5xl text-3xl font-bold italic select-none">
          AspireCoders
        </h1>
        <p className="mt-5 w-1/2 pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          fugit ducimus quod officia impedit, culpa dolorem harum a, minus
          tempora soluta aliquid sit facilis at nesciunt vitae quo id quia?
        </p>
      </section>

      {/* Intro & Description */}
      <section className="min-h-screen flex items-center">
        <div className="container h-full px-5 md:px-8 mx-auto flex space-y-5 md:space-y-0 md:space-x-5 py-5 flex-col md:flex-row">
          <div className="border w-full border-opacity-10 border-white rounded-lg p-5 hover:text-black hover:bg-white transition-all cursor-pointer">
            <h1 className="text-3xl font-bold">Who are we?</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis, explicabo.
            </p>
          </div>
          <div className="border w-full border-opacity-10 border-white rounded-lg p-5 hover:text-black hover:bg-white transition-all cursor-pointer">
            <h1 className="text-3xl font-bold">What do we do?</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis, explicabo.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="min-h-screen border-t-[1px] py-20 border-t-white">
        <h1 className="uppercase text-4xl font-semibold text-center mb-5">
          Projects
        </h1>

        <Carousels />
      </section>

      {/* Community */}
      <section className="min-h-screen border-t-[1px] py-20 border-t-white">
        <h1 className="uppercase text-4xl font-semibold text-center mb-5">
          Community
        </h1>

        <Carousels />

        <h1 className="uppercase text-4xl font-semibold text-center mt-20 mb-5">
          AspireCoders Founder
        </h1>

        <div className="container h-full px-5 md:px-8 mx-auto flex space-y-5 md:space-y-0 md:space-x-5 py-5 flex-col md:flex-row mb-10">
          <div className="border w-full border-opacity-20 border-white rounded-lg p-5 flex items-center flex-col md:flex-row">
            <div>
              {/* Image PlaceHolder */}
              <div className="w-[180px] h-[180px] bg-white rounded-full flex items-center justify-center text-black">
                Image Placeholder
              </div>
            </div>
            <div className="ml-8">
              <h1 className="text-3xl font-bold">Priyanshu T</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto accusamus consequatur, incidunt, impedit non enim
                eligendi asperiores quod unde repellendus voluptatibus, rem
                ipsum deserunt praesentium. Voluptates nisi veniam architecto
                earum?
              </p>
            </div>
          </div>
        </div>

        <h1 className="uppercase text-4xl font-semibold text-center mt-12">
          AspireCoders Co-Founder
        </h1>
        <div className="container h-full px-5 md:px-8 mx-auto flex space-y-5 md:space-y-0 md:space-x-5 py-5 flex-col md:flex-row mb-10">
          <div className="border w-full border-opacity-20 border-white rounded-lg p-5 flex items-center flex-col md:flex-row">
            <div>
              {/* Image PlaceHolder */}
              <div className="w-[180px] h-[180px] bg-white rounded-full flex items-center justify-center text-black">
                Image Placeholder
              </div>
            </div>
            <div className="ml-8">
              <h1 className="text-3xl font-bold">Laya Ranjith</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto accusamus consequatur, incidunt, impedit non enim
                eligendi asperiores quod unde repellendus voluptatibus, rem
                ipsum deserunt praesentium. Voluptates nisi veniam architecto
                earum?
              </p>
            </div>
          </div>
        </div>

        <h1 className="uppercase text-4xl font-semibold text-center mt-12">
          Important Members
        </h1>
        <div className="container h-full px-5 md:px-8 mx-auto flex space-y-5 md:space-y-0 md:space-x-5 py-5 flex-col md:flex-row mb-10">
          <div className="border w-full border-opacity-20 border-white rounded-lg p-5 hover:text-black hover:bg-white transition-all cursor-pointer">
            <h1 className="text-3xl font-bold">Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis, explicabo.
            </p>
          </div>
          <div className="border w-full border-opacity-20 border-white rounded-lg p-5 hover:text-black hover:bg-white transition-all cursor-pointer">
            <h1 className="text-3xl font-bold">Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis, explicabo.
            </p>
          </div>
          <div className="border w-full border-opacity-20 border-white rounded-lg p-5 hover:text-black hover:bg-white transition-all cursor-pointer">
            <h1 className="text-3xl font-bold">Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis, explicabo.
            </p>
          </div>
        </div>

        <h2 className="text-3xl text-center font-semibold uppercase mb-5">
          Other Members
        </h2>
        <Members />
      </section>

      {/* Contacts Us */}
      <section className="border-t-[1px] py-20 border-t-white space-y-5">
        <h1 className="uppercase text-5xl font-semibold text-center mb-10">
          Contact us for your Projects
        </h1>

        <div className="container h-full px-5 md:px-8 mx-auto flex space-y-5 md:space-y-0 md:space-x-5 flex-col md:flex-row">
          <div className="border w-full border-opacity-10 border-white rounded-lg p-5 hover:text-black hover:bg-white transition-all cursor-pointer">
            <h1 className="text-3xl font-bold">Contact Details</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis, explicabo.
            </p>
          </div>
          <div className="border w-full border-opacity-10 border-white rounded-lg p-5 hover:text-black hover:bg-white transition-all cursor-pointer">
            <h1 className="text-3xl font-bold">Join our community</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis, explicabo.
            </p>
          </div>
        </div>
        <div className="container h-full px-5 md:px-8 mx-auto flex space-y-5 md:space-y-0 md:space-x-5 flex-col md:flex-row">
          <div className="border w-full border-opacity-10 border-white rounded-lg p-5 hover:text-black hover:bg-white transition-all cursor-pointer">
            <h1 className="text-3xl font-bold">Social Accounts</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis, explicabo.
            </p>
          </div>
          <div className="border w-full border-opacity-10 border-white rounded-lg p-5 hover:text-black hover:bg-white transition-all cursor-pointer">
            <h1 className="text-3xl font-bold">Become Sponsors</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis, explicabo.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
