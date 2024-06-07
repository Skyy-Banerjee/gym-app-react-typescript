import Logo from '@/assets/Logo.png'

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-primary-100 py-16'>
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
      <div className="mt-16 basis-1/2 md:mt-0">
      <img src={Logo} alt="evogym-logo" />
      <p className='my-5'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, mollitia ipsam tenetur quia qui in earum sapiente cupiditate eum doloribus perferendis deleniti harum labore iusto commodi quisquam quis neque officiis!
      </p>
      <p>©️ Evogym All Rights Reserved, {currentYear}.</p>
      </div>
      <div className="mt-16 basis-1/4 md:mt-0">
      <h4 className="font-bold">Links</h4>
      <p className="my-5">Lorem, ipsum dolor.</p>
      <p className="my-5">Um doloribus perferendis.</p>
      <p>Mollitia ipsam</p>
      </div>
      <div className="mt-16 basis-1/4 md:mt-0">
      <h4 className="font-bold">Contact Us</h4>
      <p className="my-5">Quis neque officiis amet, consectetur.</p>
      <p>(033)244-1139</p>
      
      </div>
      
    </div>
    </footer>
  )
}

export default Footer
