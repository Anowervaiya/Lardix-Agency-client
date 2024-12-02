import React from 'react'


function FAQ() {
  return (
    <div className=" px-6 my-16  max-w-[1440px] mx-auto">
      <div className="mt-10 mb-16">
        <div>
          <h1 className="text-xl text-blue-700 text-center font-bold ml-4 mb-4">
            Doubt
          </h1>
        </div>
        <div>
          <h1 className="text-4xl text-center font-bold ml-4">
          What is in your{' '}
            <span className="font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              {' '}
              Mind
            </span>
          </h1>
        </div>
        <div className="lg:w-3/4 mx-auto">
          <h1 className=" ml-6 mt-4 text-[#52525c]  text-center">
            Choose us for our expertise, innovative solutions, and
            client-centric approach. We deliver high-quality digital marketing,
            web development, SEO, app development, and graphic design services
            tailored to your business needs.
          </h1>
        </div>
      </div>
      <div className="flex  items-center flex-col lg:flex-row-reverse">
        <div className="flex-1">
          {' '}
          <img
            src="src/assets/faq.avif"
            className="w-full  h-[500px] lg:h-full"
          />
        </div>
        <div className="flex-1  text-center lg:text-start ">
          <div className="text-start  mx-auto lg:mx-0">
            <div className="space-y-4 *:border-2 *:border-slate-500 *:transition-all *:duration-500">
              <div className="collapse group focus-within:bg-slate-200 collapse-arrow">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="group-focus-within:text-blue-800 collapse-title text-xl font-medium">
                  What digital marketing services do you offer?
                </div>
                <div className="collapse-content">
                  <p>
                    We offer a comprehensive range of digital marketing
                    services, including SEO, social media marketing, paid
                    advertising (PPC), content marketing, influencer marketing,
                    email marketing, and analytics to help grow your brand
                    online.
                  </p>
                </div>
              </div>
              <div className="collapse group focus-within:bg-slate-200  collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title group-focus-within:text-blue-800  text-xl font-medium">
                  How long does it take to see results from SEO?
                </div>
                <div className="collapse-content">
                  <p>
                    SEO is a long-term strategy, and while some improvements can
                    be seen within a few months, significant results typically
                    take 3-6 months depending on competition, keywords, and the
                    scope of the project.
                  </p>
                </div>
              </div>
              <div className="collapse group  focus-within:bg-slate-200 collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title group-focus-within:text-blue-800  text-xl font-medium">
                  How can graphics design enhance my business?
                </div>
                <div className="collapse-content">
                  <p>
                    Our graphics design services create visually appealing
                    designs that capture your brand’s message, enhance user
                    engagement, and strengthen your marketing materials,
                    ensuring a memorable and consistent brand presence.
                  </p>
                </div>
              </div>
              <div className="collapse group focus-within:bg-slate-200 collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title group-focus-within:text-blue-800 text-xl font-medium">
                  What makes your web design services stand out?
                </div>
                <div className="collapse-content">
                  <p>
                    Our web design services focus on creating responsive,
                    user-friendly websites tailored to your brand’s identity,
                    with a focus on excellent user experience (UX) and seamless
                    functionality across devices.
                  </p>
                </div>
              </div>
              <div className="collapse group focus-within:bg-slate-200 collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title group-focus-within:text-blue-800 text-xl font-medium">
                  Can you help with both web and mobile app development?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes! We specialize in both custom web development and mobile
                    app development for iOS and Android, ensuring that your
                    digital presence is consistent and user-friendly across all
                    platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ