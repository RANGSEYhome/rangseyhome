<template>
  <div class="main-wrapper">
    <section class="cta-section theme-bg-light py-5">
      <div class="container single-col-max-width">
        <h2 class="heading text-center">
          About This Project: Portfolio Website
        </h2>
        <div class="project-intro text-center">
          <p class="mb-0 lead">Rangsey HENG's Portfolio Website</p>
        </div>
      </div>
      <!--//container-->
    </section>
    <section class="project px-3 py-5 p-md-5">
      <div class="container">
        <div class="project-meta theme-bg-light p-4">
          <div class="row g-4 g-lg-5">
            <div class="col-md-5 col-lg-4 col-xxl-3 d-none d-md-block">
              <img
                class="project-thumb img-fluid rounded"
                src="assets/images/project/project-4.jpg"
                alt=""
              />
            </div>
            <!--//col-->
            <div class="col-12 col-md-7 col-lg-8 col-xxl-9">
              <div class="client-info">
                <h3 class="client-name font-weight-bold mb-4">
                  Submited to Instructor: Kheang Kim Ang
                </h3>
                <ul class="client-meta list-unstyled">
                  <li class="mb-2">
                    <i class="fas fa-school fa-fw me-2"></i
                    ><strong>School:</strong> Institute of Digital Governance
                    (IDG)
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-graduation-cap fa-fw me-2"></i
                    ><strong>Course:</strong> Front-end Vue.js
                  </li>
                </ul>
                <div class="client-bio mb-4">
                  Rangsey HENG's Portfolio Website: A Vue.js-based showcase of
                  web development, UX/UI design, and frontend technology skills.
                </div>
                <h4 class="subheading mb-3">Project Requirements</h4>
                <ul class="mb-0">
                  <li class="mb-2">Vue.js-based portfolio website</li>
                  <li class="mb-2">At least 5 pages (with route)</li>
                  <li class="mb-2">Call API</li>
                  <li class="mb-2">Translate UI elements</li>
                  <li class="mb-2">
                    <a
                      href="https://rangsey-portfolio.netlify.app/"
                      target="_blank"
                      >Deploy to Netlify</a
                    >
                  </li>
                  <li class="mb-2">
                    <a
                      href="https://github.com/RANGSEYhome/rangseyhome"
                      target="_blank"
                      >Link to Github repository</a
                    >
                  </li>
                </ul>
              </div>
              <!--//client-info-->
            </div>
            <!--//col-->
          </div>
          <!--//row-->
        </div>
        <!--//project-meta-->
        <div class="project-sections py-5">
          <div class="project-section mb-5">
            <h3 class="project-section-title mb-3">Project Overview</h3>
            <p>
              This portfolio website project was a requirement for completion of
              the Frontend Vue.js class taught by instructor Kheang KimAng. The
              primary objective was to create a personal portfolio website using
              Vue.js and various dependencies, while applying design principles
              and fundamental web development techniques.
            </p>
          </div>
          <!--//project-section-->

          <div class="project-section mb-5">
            <h3 class="project-section-title">Acknowledgement</h3>
            <p>
              I would like to express my heartfelt appreciation to the dedicated
              instructors who have made this portfolio website project a
              reality. First and foremost, I am incredibly grateful to
              instructor
              <strong>Kheang Kim Ang</strong>, whose unwavering support and
              sense of responsibility have been instrumental in guiding me
              through the Frontend Vue.js class. His invaluable mentorship has
              enabled me to navigate complex concepts with confidence. I would
              also like to extend my gratitude to instructor
              <strong>Ngoun Seyha</strong> for sharing his expertise in UX/UI
              design. His wealth of knowledge has been a cornerstone in shaping
              my understanding of design principles and best practices. Lastly,
              I am deeply thankful to instructor <strong>Usha Rani</strong>,
              whose passion for teaching served as a beacon of inspiration,
              motivating me to return to coding and grow in this ever-evolving
              field. Her solid foundation in Basic Web concepts has been pivotal
              in developing my skills and building confidence in my abilities.
              The collective wisdom, guidance, and dedication of these
              remarkable instructors have not only contributed to the successful
              completion of this project but also instilled a deep appreciation
              for the art and science of web development and design.
            </p>
            <p>
              I would like to take this opportunity to express my sincere
              gratitude to the Ministry of Post and Telecommunications (MPTC),
              the Cambodia Academy of Digital Technology (CADT), and the
              Institute of Digital Governance (IDG) for providing the
              comprehensive Full-Stack Software Development course. This program
              has been instrumental in equipping me with the essential skills
              and knowledge needed to excel in the field of web development.
            </p>
            <p>
              Furthermore, I would like to express my profound gratitude to the
              creators and contributors of the Vue.js framework, the portfolio
              theme, and the various dependencies that have played an
              instrumental role in the success of this project. Their unwavering
              commitment to developing and maintaining these vital resources has
              been invaluable in transforming my vision into a reality. I am
              thankful for the talented individuals who designed the visually
              appealing
              <a
                class="theme-link"
                href="https://themes.3rdwavemedia.com/"
                target="_blank"
                >portfolio theme</a
              >, which has significantly enhanced the overall aesthetic of the
              website. Their creativity and attention to detail have ensured
              that my portfolio stands out from the crowd. The dedication and
              collaborative spirit of these individuals and communities are a
              testament to the power of open-source innovation in advancing the
              web development ecosystem. Their invaluable contributions have
              made it possible for projects like mine to come to fruition, and
              for that, I am truly grateful.
            </p>
            <p>
              Last but not least, I appreciate the constant support and
              encouragement from my family, friends, and fellow learners
              throughout this journey. Their unwavering belief in my abilities
              has been a driving force behind my dedication to acquiring new
              skills and overcoming challenges in this ever-evolving field.
            </p>
          </div>
          <!--//project-section-->
          <hr />
          <blockquote class="blockquote m-lg-5 py-3 ps-4 px-lg-5">
            <p class="mb-2">
              IF YOU CAN WRITE "HELLO WORLD" YOU CAN CHANGE THE WORLD
            </p>
            <footer class="blockquote-footer mt-0">Raghu Venkatesh</footer>
          </blockquote>
          <hr class="mb-5" />
          <div class="project-section mb-5">
            <h3 class="project-section-title mb-3">Dependencies</h3>
            <p>Dependencies used in this project include:</p>
            <pre><code>
  "dependencies": {
    "axios": "^1.7.7",
    "core-js": "^3.8.3",
    "date-fns": "^4.1.0",
    "highlight.js": "^11.10.0",
    "html2pdf.js": "^0.10.2",
    "imagesloaded": "^5.0.0",
    "isotope-layout": "^3.0.6",
    "js-cookie": "^3.0.5",
    "pinia": "^2.2.4",
    "tiny-slider": "^2.9.4",
    "vee-validate": "^4.13.2",
    "vue": "^3.2.13",
    "vue-i18n": "^9.14.1",
    "vue-router": "^4.4.5",
    "yup": "^1.4.0"
  },
          </code></pre>
            <h5 class="my-3">Dependencies usage:</h5>
            <ol class="mb-5">
              <li class="mb-2">
                Axios: For making HTTP requests and managing API responses.
              </li>
              <li class="mb-2">
                Core-js: To provide compatibility with older JavaScript
                environments.
              </li>
              <li class="mb-2">Date-fns: For date and time manipulation.</li>
              <li class="mb-2">
                Highlight.js: To add syntax highlighting functionality for code
                snippets.
              </li>
              <li class="mb-2">
                Html2pdf.js: To convert HTML content to PDF format.
              </li>
              <li class="mb-2">
                ImagesLoaded: For handling image loading events and callbacks.
              </li>
              <li class="mb-2">
                Isotope-layout: To create dynamic and interactive layouts with
                filtering and sorting capabilities.
              </li>
              <li class="mb-2">
                Js-cookie: For managing cookies with a simple API.
              </li>
              <li class="mb-2">
                Pinia: For managing application state in Vue.js.
              </li>
              <li class="mb-2">
                Tiny-slider: To implement touch-enabled and responsive sliders.
              </li>
              <li class="mb-2">
                Vee-validate: For form validation within Vue.js applications.
              </li>
              <li class="mb-2">
                Vue-i18n: To add internationalization support to Vue.js
                applications.
              </li>
              <li class="mb-2">
                Vue-router: For handling client-side routing and navigation.
              </li>
              <li class="mb-2">
                Yup: For object schema validation with an expressive syntax.
              </li>
            </ol>
          </div>
          <div class="project-section mb-5">
            <h3 class="project-section-title">Project Features</h3>
            <p>
              This portfolio website project is a Vue.js-based platform
              showcasing web development proficiency through API integration, UI
              translation, form validation, relative date display, resume
              download features, and Netlify deployment.
            </p>
            <div class="col-12 mb-5">
              <img
                class="img-fluid rounded"
                src="assets/images/project/dark-mode.png"
                alt="image"
              />
            </div>
            <div class="row mt-5">
              <div class="col-12 col-lg-6 mb-5">
                <img
                  class="img-fluid rounded"
                  src="assets/images/project/cv-1.png"
                  alt="image"
                />
              </div>
              <div class="col-12 col-lg-6 mb-5">
                <img
                  class="img-fluid rounded"
                  src="assets/images/project/cv-2.png"
                  alt="image"
                />
              </div>
            </div>
            <div class="col-12 mb-5">
              <img
                class="img-fluid rounded"
                src="assets/images/project/form-validation.png"
                alt="image"
              />
            </div>
            <div class="row mt-5">
              <div class="col-12 col-lg-6 mb-5">
                <img
                  class="img-fluid rounded"
                  src="assets/images/project/blog-post-1.png"
                  alt="image"
                />
              </div>
              <div class="col-12 col-lg-6 mb-5">
                <img
                  class="img-fluid rounded"
                  src="assets/images/project/blog-post-2.png"
                  alt="image"
                />
              </div>
            </div>
            <div class="col-12 mb-5">
              <img
                class="img-fluid rounded"
                src="assets/images/project/previous-next-post.png"
                alt="image"
              />
            </div>
            <p>List of important features in this project:</p>
            <ul>
              <li>
                UI Translation (i18n): Implements Vue-i18n for multilingual
                support, enabling users to switch between languages seamlessly.
              </li>
              <li>
                Dark Mode & Language Toggle: Utilizes Vue-i18n and Js-cookie to
                enable users to switch between light and dark themes, and
                remember their preferred language settings.
              </li>
              <li>
                API Integration: Incorporates dummy JSON data to demonstrate API
                consumption and data handling.
              </li>
              <li>
                Relative Date Display for Blog Posts: Uses Date-fns to present
                dates in a relative format, enhancing user experience and
                understanding.
              </li>
              <li>
                Blog Post Navigation: Allow user to navigate to previous blog
                post and next blog post within the post they are currently
                reading.
              </li>
              <li>
                Resume Download with Html2pdf.js: Enables users to download a
                resume in PDF format by leveraging the Html2pdf.js library,
                providing easy access to essential information.
              </li>
              <li>
                Form Validation with Yup: Employs Yup for efficient and
                expressive object schema validation, ensuring accurate user
                input and data integrity.
              </li>
              <li>
                Netlify Deployment: Successfully deployed on Netlify, ensuring
                accessibility and optimal performance.
              </li>
            </ul>
            <h5>Project Sitemap</h5>
            <ul>
              <li><router-link to="/">About Me (Home)</router-link></li>
              <li><router-link to="/resume">Resume</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
              <li><router-link to="/blog">Blog</router-link></li>
              <li>
                <router-link to="/about-project"
                  >About This Project</router-link
                >
              </li>
            </ul>
          </div>
          <!--//project-section-->
          <hr />
          <div class="project-section mb-5">
            <h3 class="project-section-title">
              Full-Stack Software Development
            </h3>
            <p>
              <small
                >Cambodia Academy of Digital Technology (CADT), Institute of
                Digital Governance (IDG)</small
              >
            </p>
            <table class="table table-striped my-5">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Course</th>
                  <th scope="col">Instructor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>UX/UI Design</td>
                  <td>Mr. Ngoun Seyha</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Basic Web Development</td>
                  <td>Mrs. Usha Rani</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Frontend Vue.Js</td>
                  <td>Mr. Kheang KimAng</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Database</td>
                  <td>Mr. Lay Leangsros</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Backend Node.Js</td>
                  <td>Mr. Kheang Kim Ang</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>DevOps</td>
                  <td>Mr. Kheang Kim Ang</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Mobile Application</td>
                  <td>Mr. Kheang Kim Ang</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="project-section mb-5">
            <h3 class="project-section-title mb-3">Front-end Vue.js</h3>
          </div>
          <!--//project-section-->
          <figure class="blog-banner">
            <img
              class="img-fluid"
              src="assets/images/blog/blog-post-banner.jpg"
              alt="image"
            />
            <figcaption class="mt-2 text-center image-caption">
              Image Credit:
              <a
                class="theme-link"
                href="https://www.idg.edu.kh/"
                target="_blank"
                >IDG (CADT)</a
              >
            </figcaption>
          </figure>
          <hr />
          <div class="project-section mb-5">
            <h3 class="project-section-title mb-3">
              មកស្ដាប់បទពិសោធន៍លោកគ្រូ ឃាង គឹមអាង អំពីជីវិតជាអ្នក IT
            </h3>
            <h5 class="my-3">
              ៧ ឆ្នាំនៃជីវិតជាអ្នក IT | 7 Years of ITer Life | TFD
            </h5>
            <p>
              តើមានអ្វីកើតឡើងក្រោយពីខ្ញុំសំរេចដើរលើវិថី IT ក្នុងរយៈពេល ៧
              ឆ្នាំមកនេះ? ខ្ញុំបញ្ចប់ការសិក្សា បាក់ឌុបនៅវិទ្យាល័យច្បារអំពៅ
              នៅចុងឆ្នាំ២០១៥ ពេលនោះខ្ញុំសំរេចចិត្តចូលរៀន
              វិស្វកម្មបច្ចេកវិទ្យាព័ត៍មាន
              នៅសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ។នៅក្នុងវីដេអូនេះខ្ញុំនឹង
              ចែករំលែកពីជិវិតរបស់ខ្ញុំទាំង ការសិក្សា ស្នេហា នឹង ឧបសគ្គ
              ក្នុងរយៈពេល ៧ ឆ្នាំកន្លងមកនេះ។
            </p>
            <p>
              What happened after I chose the way of Tech during these 7 years?
              I graduated from Char Ampov Highschool in late 2015. I decided to
              be enrolled in the information technology department (ITE) at the
              Royal University of Phnom Penh (RUPP). In this video, I will share
              with you guys about what happened to my life afterward including
              study issues, love, and other obstacles in these 7 years.
            </p>
            <div class="ratio ratio-16x9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/8mWv1hUCYWQ?si=luLlfHGe0DoVUnAL"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <!--//project-section-->
          <div class="client-quote">
            <div class="quote-holder">
              <blockquote class="quote-content">
                ខ្ញុំគិតថា ភាពជោគជ័យមិនមែនស្ថិតលើការទទួលបានរង្វាន់ម្តងៗនោះទេ
                ភាពជោគជ័យគឺជាដំណើរការវិវត្តទៅមុខ មានន័យថា
                យើងចេះដួលងើបនិងកែប្រែខ្លួនឯង
                ទទួលស្គាល់ចំណុចខ្វះខាតនៅចំពោះមុខការបរាជ័យ។
              </blockquote>
              <i class="fas fa-quote-left"></i>
            </div>
            <!--//quote-holder-->
            <div class="source-holder">
              <div class="source-profile">
                <img
                  src="assets/images/clients/kheang-kim-ang.jpg"
                  alt="image"
                  class="rounded-circle"
                />
              </div>
              <div class="meta">
                <div class="name">Kheang Kim Ang</div>
                <div class="info">Founder, Teaching For Devs (TFD)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <PromotionText></PromotionText>
  </div>
  <!--//main-wrapper-->
</template>

<script>
import PromotionText from "@/components/PromotionText.vue";
import { initializeIsotope } from "@/assets/js/js-customized";
import hljs from "highlight.js";
import Cookies from "js-cookie";
import { formatDistanceToNow } from "date-fns";
import { km } from "date-fns/locale";

export default {
  components: {
    PromotionText,
  },
  data() {
    return {
      date: "2024-10-06",
    };
  },
  mounted() {
    initializeIsotope();
    hljs.highlightAll();
  },
  methods: {
    getRelativeDate(dateString) {
      const date = new Date(dateString);
      if (Cookies.get("lang") === "en") {
        return formatDistanceToNow(date, { addSuffix: true });
      } else {
        return formatDistanceToNow(date, { locale: km });
      }
    },
  },
};
</script>
