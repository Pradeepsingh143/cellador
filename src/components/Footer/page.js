import React from 'react'

export default function Footer() {
  return (
    <footer>
          {/* contact section */}
      <section className="contact bg-dark-background py-4 lg:py-32" id="contact">
        <div className="container md:flex">
          <div className="contact__details py-10 2xl:ml-0 w-full md:w-1/2 flex flex-col justify-center lg:mr-32">
            <h2 className="w-fit border-b-4 border-white border-double text-xl md:text-2xl text-white tracking-wider leading-10 uppercase font-semibold">Contact Us</h2>
            <div className="call mt-6">
            <h3 className="text-lg md:text-xl text-white tracking-wider uppercase font-semibold mt-4">Call Us</h3>
            <h3 className="text-md text-white tracking-wider font-sans leading-8 uppercase opacity-90">(530)328-0431</h3>
            </div>
            <div className="address mt-10">
            <h3 className="text-lg md:text-xl text-white tracking-wider leading-10 uppercase font-semibold">Our Address</h3>
            <p className="text-md text-white tracking-wider font-sans leading-8 uppercase opacity-90">1401 21st street suite 5241, Sacramento California 95811</p>
            </div>
          </div>
          <div className="map w-full md:w-1/2">
          <div style={{width: "100%"}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.026564040602!2d-73.56674982496719!3d40.76144047138622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28733cb58c8c9%3A0x1e4387c5b3ece409!2s191%20Urban%20Ave%2C%20Westbury%2C%20NY%2011590%2C%20USA!5e0!3m2!1sen!2sin!4v1689347462783!5m2!1sen!2sin" width="100%" height="450" allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="our address"
          className="rounded-2xl"
          ></iframe>
          </div>
          </div>
        </div>
      </section>
    </footer>
  )
}