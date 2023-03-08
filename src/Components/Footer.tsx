const footerContent = [
  'Home',
  'Testimonials',
  'Services & Features',
  'Accordions & Tabs',
  'Menu Ideas',
]

const Footer: React.FC<{}> = () => {
  return (
    <footer className="bg-violet-800 text-sm">
      <div className="container mx-auto p-10 flex space-x-8">
        <div className="w-full">
          <h2 className="uppercase text-3xl font-bold italic mb-8">
            AspireCoders
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus nisi obcaecati ad. Dignissimos maxime nesciunt sit amet
            labore velit! Nostrum?
          </p>
        </div>
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-5">Fast Link</h2>
          <ul className="footer-nav space-y-3">
            {footerContent.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-5">Blog</h2>
          <ul className="footer-nav space-y-3">
            {footerContent.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-5">Contact Info</h2>
          <ul className="footer-nav space-y-3">
            {footerContent.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-violet-900">
        <div className="container mx-auto px-10 py-5 flex justify-between">
          <div>
            Copyright &copy;2023 TeamAspireCoders | Designed by{' '}
            <a
              className="text-violet-400 hover:text-violet-600"
              href="https://github.com/blank-09"
              target={'_blank'}
            >
              Priyanshu T
            </a>
          </div>
          <div className="space-x-10">
            <a href="#">
              <i className="fab opacity-70 hover:opacity-100 fa-pinterest"></i>
            </a>
            <a href="#">
              <i className="fab opacity-70 hover:opacity-100 fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab opacity-70 hover:opacity-100 fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab opacity-70 hover:opacity-100 fa-dribbble"></i>
            </a>
            <a href="#">
              <i className="fab opacity-70 hover:opacity-100 fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
