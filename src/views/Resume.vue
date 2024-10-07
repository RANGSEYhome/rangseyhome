<template>
  <div class="main-wrapper">
    <section class="cta-section theme-bg-light py-5">
      <div class="container text-center single-col-max-width">
        <h2 class="heading mb-3">{{ $t("OnlineCv") }}</h2>
        <button @click="downloadPDF" class="btn btn-primary">
          <i class="fas fa-file-pdf me-2"></i>{{ $t("DownloadCv") }}
        </button>
      </div>
      <!--//container-->
    </section>
    <div class="container resume-container px-3 px-lg-5 my-5">
      <article
        id="pdf-section"
        class="resume-wrapper mx-auto theme-bg-light p-5 shadow-lg"
      >
        <div class="resume-header">
          <div class="row align-items-center">
            <div class="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
              <h2 class="resume-name mb-0 text-uppercase">Rangsey HENG</h2>
              <div class="resume-tagline mb-3 mb-md-0">
                Full-stack developer, and content writer and marketer
              </div>
            </div>
            <!--//resume-title-->
            <div class="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
              <ul class="list-unstyled mb-0">
                <li class="mb-2">
                  <i class="fas fa-phone-square fa-fw fa-lg me-2"></i
                  ><a class="resume-link" href="tel:070 794 158">070 794 158</a>
                </li>
                <li class="mb-2">
                  <i class="fas fa-envelope-square fa-fw fa-lg me-2"></i
                  ><a class="resume-link" href="mailto:info.rangsey@gmail.com"
                    >info.rangsey@gmail.com</a
                  >
                </li>
                <li class="mb-2">
                  <i class="fas fa-globe fa-fw fa-lg me-2"></i
                  ><a
                    class="resume-link"
                    href="https:/rangseyhome.blogspot.com"
                    target="_blank"
                    >rangseyhome.blogspot.com</a
                  >
                </li>
                <li class="mb-0">
                  <i class="fas fa-map-marker-alt fa-fw fa-lg me-2"></i>Phnom
                  Penh, Cambodia
                </li>
              </ul>
            </div>
            <!--//resume-contact-->
          </div>
          <!--//row-->
        </div>
        <!--//resume-header-->
        <hr />
        <div class="resume-intro py-3">
          <div class="row align-items-center">
            <div class="col-12 col-md-3 col-xl-2 text-center">
              <img
                class="resume-profile-image mb-3 mb-md-0 me-md-5 ms-md-0 rounded mx-auto"
                src="/assets/images/resume-profile.png"
                alt="image"
              />
            </div>

            <div class="col text-start">
              <p class="mb-0">
                Rangsey HENG is a talented professional with a multifaceted
                career that encompasses web development, content creation, and
                marketing. As a full-stack developer, he has demonstrated
                expertise in building high-quality and user-friendly web and
                mobile applications through responsive design and e-commerce
                solutions. Additionally, Rangsey has showcased his creative
                talents as a content writer and marketer, producing engaging
                articles, blog posts, and social media content to effectively
                communicate brand messaging and connect with target audiences.
                His ability to seamlessly blend technical skills with creative
                storytelling has made him a valuable contributor in the digital
                landscape.
              </p>
            </div>
            <!--//col-->
          </div>
        </div>
        <!--//resume-intro-->
        <hr />
        <div class="resume-body">
          <div class="row">
            <div class="resume-main col-12 col-lg-8 col-xl-9 pe-0 pe-lg-5">
              <section class="work-section py-3">
                <h3 class="text-uppercase resume-section-heading mb-4">
                  Work Experiences
                </h3>
                <div class="item mb-3">
                  <div class="item-heading row align-items-center mb-2">
                    <h4
                      class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0"
                    >
                      Full-stack Developer
                    </h4>
                    <div
                      class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end"
                    >
                      Freelance | 2024 - Present
                    </div>
                  </div>
                  <div class="item-content">
                    <p>
                      Developed and maintained high-quality web and mobile
                      applications using responsive design and e-commerce
                      solutions.
                    </p>
                    <ul class="resume-list">
                      <li>
                        Implemented full-stack development techniques to create
                        user-friendly applications.
                      </li>
                      <li>
                        Designed responsive and visually appealing web pages for
                        diverse clients.
                      </li>
                      <li>
                        Developed and optimized e-commerce solutions for
                        businesses to enhance online sales and customer
                        experience.
                      </li>
                    </ul>
                  </div>
                </div>
                <!--//item-->
                <div class="item mb-3">
                  <div class="item-heading row align-items-center mb-2">
                    <h4
                      class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0"
                    >
                      Content Writer and Marketer
                    </h4>
                    <div
                      class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end"
                    >
                      Freelance | 2019 - Present
                    </div>
                  </div>
                  <div class="item-content">
                    <p>
                      Crafted engaging and informative content for various
                      platforms to communicate brand messaging and captivate
                      target audiences.
                    </p>
                    <ul class="resume-list">
                      <li>
                        Wrote compelling blog posts, articles, and social media
                        content to engage readers.
                      </li>
                      <li>
                        Optimized content for search engines and social media
                        platforms to increase visibility and audience
                        engagement.
                      </li>
                    </ul>
                  </div>
                </div>
                <!--//item-->
                <div class="item mb-3">
                  <div class="item-heading row align-items-center mb-2">
                    <h4
                      class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0"
                    >
                      Graphic Designer
                    </h4>
                    <div
                      class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end"
                    >
                      Freelancer | 2019 - Present
                    </div>
                  </div>
                  <div class="item-content">
                    <p>
                      Designed visually appealing graphic designs for logos,
                      branding materials, and web and app designs.
                    </p>
                    <ul class="resume-list">
                      <li>
                        Conceptualized and created logos and branding materials
                        that align with the client's vision and target audience.
                      </li>
                      <li>
                        Designed visually appealing web and app designs to
                        enhance user experience and engagement.
                      </li>
                    </ul>
                  </div>
                </div>
                <!--//item-->
                <div class="item">
                  <div class="item-heading row align-items-center mb-2">
                    <h4
                      class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0"
                    >
                      SEO and Social Media Management
                    </h4>
                    <div
                      class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end"
                    >
                      Freelance | 2014 - Present
                    </div>
                  </div>
                  <div class="item-content">
                    <p>
                      Optimized online presence through search engine
                      optimization, social media management, and email marketing
                      campaigns.
                    </p>
                    <ul class="resume-list">
                      <li>
                        Conducted keyword research and implemented SEO
                        strategies to improve search engine rankings.
                      </li>
                      <li>
                        Managed social media accounts and created engaging
                        content to boost brand awareness and follower
                        engagement.
                      </li>
                    </ul>
                  </div>
                </div>
                <!--//item-->
              </section>
              <!--//work-section-->

              <section class="project-section py-3">
                <h3 class="text-uppercase resume-section-heading mb-4">
                  Projects
                </h3>
                <div class="item mb-3">
                  <div class="item-heading row align-items-center mb-2">
                    <h4
                      class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0"
                    >
                      Rangsey HENG's Portfolio Website
                    </h4>
                    <div
                      class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end"
                    >
                      Full-stack development
                    </div>
                  </div>
                  <div class="item-content">
                    <p>
                      Developed a visually appealing, user-friendly, and
                      SEO-optimized portfolio website using Vue.js to showcase
                      expertise in web development, content creation, digital
                      marketing, and graphic design.
                    </p>
                  </div>
                </div>
                <!--//item-->
                <div class="item">
                  <div class="item-heading row align-items-center mb-2">
                    <h4
                      class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0"
                    >
                      RANGSEYhome Blog
                    </h4>
                    <div
                      class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end"
                    >
                      Content creation and SEO
                    </div>
                  </div>
                  <div class="item-content">
                    <p>
                      Developed a content-rich and engaging blog to share
                      insights, knowledge, and experiences in web development,
                      content creation, digital marketing, and graphic design.
                      Successfully implemented SEO optimization techniques,
                      resulting in increased organic search traffic and a
                      growing readership. Designed an intuitive user interface
                      and comment section to foster interaction and community
                      engagement. Learn more,
                      <a
                        href="https://rangseyhome.blogspot.com/"
                        target="_blank"
                        class="theme-link"
                      >
                        visit my blog now</a
                      >.
                    </p>
                  </div>
                </div>
                <!--//item-->
                <div class="item">
                  <div class="item-heading row align-items-center mb-2">
                    <h4
                      class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0"
                    >
                      Social Media Engagement - Facebook Page
                    </h4>
                    <div
                      class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end"
                    >
                      Social media and content creation
                    </div>
                  </div>
                  <div class="item-content">
                    <p>
                      Managed and grew a Facebook page dedicated to web
                      development, content creation, digital marketing, and
                      graphic design. Implemented engaging content strategies,
                      resulting in increased follower count, post engagement,
                      and community interaction. Created visually appealing
                      graphics and utilized Facebook analytics to optimize post
                      reach and performance.
                    </p>
                  </div>
                </div>
                <!--//item-->
              </section>
              <!--//project-section-->
            </div>
            <!--//resume-main-->
            <aside
              class="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4"
            >
              <section class="skills-section py-3">
                <h3 class="text-uppercase resume-section-heading mb-4">
                  Skills
                </h3>
                <div class="item">
                  <h4 class="item-title">Technical</h4>
                  <ul class="list-unstyled resume-skills-list">
                    <li class="mb-2">HTML/CSS/JavaScript/Vue</li>
                    <li class="mb-2">Node.js/ASP.NET</li>
                    <li class="mb-2">Object-oriented design</li>
                  </ul>
                </div>
                <!--//item-->
                <div class="item">
                  <h4 class="item-title">Professional</h4>
                  <ul class="list-unstyled resume-skills-list">
                    <li class="mb-2">Strong problem solver</li>
                    <li>Good time management</li>
                  </ul>
                </div>
                <!--//item-->
              </section>
              <!--//skills-section-->
              <section class="education-section py-3">
                <h3 class="text-uppercase resume-section-heading mb-4">
                  Education
                </h3>
                <ul class="list-unstyled resume-education-list">
                  <li class="mb-3">
                    <div class="resume-degree font-weight-bold">
                      Master of Management of Technology (MOT)
                    </div>
                    <div class="resume-degree-org text-muted">
                      National University of Management
                    </div>
                    <div class="resume-degree-time text-muted">2023 - 2024</div>
                  </li>
                  <li>
                    <div class="resume-degree font-weight-bold">
                      BA in Business Information System (BIS)
                    </div>
                    <div class="resume-degree-org text-muted">
                      Paññāsāstra University of Cambodia
                    </div>
                    <div class="resume-degree-time text-muted">2012 - 2018</div>
                  </li>
                </ul>
              </section>
              <!--//education-section-->
              <section class="education-section py-3">
                <h3 class="text-uppercase resume-section-heading mb-4">
                  Awards
                </h3>
                <ul class="list-unstyled resume-awards-list">
                  <li class="mb-3">
                    <div class="font-weight-bold">Full-stack development</div>
                    <div class="text-muted">IDG, CADT (2024)</div>
                  </li>
                  <li>
                    <div class="font-weight-bold">Award Donec Sodales</div>
                    <div class="text-muted">Oracle Aenean (2017)</div>
                  </li>
                </ul>
              </section>
              <!--//education-section-->
              <section class="skills-section py-3">
                <h3 class="text-uppercase resume-section-heading mb-4">
                  Languages
                </h3>
                <ul class="list-unstyled resume-lang-list">
                  <li class="mb-2">
                    Khmer <span class="text-muted">(Native)</span>
                  </li>
                  <li>
                    English <span class="text-muted">(Professional)</span>
                  </li>
                </ul>
              </section>
              <!--//certificates-section-->
              <section class="skills-section py-3">
                <h3 class="text-uppercase resume-section-heading mb-4">
                  Interests
                </h3>
                <ul class="list-unstyled resume-interests-list mb-0">
                  <li class="mb-2">Reading</li>
                  <li class="mb-2">Writing</li>
                  <li class="mb-2">Photography</li>
                </ul>
              </section>
              <!--//certificates-section-->
            </aside>
            <!--//resume-aside-->
          </div>
          <!--//row-->
        </div>
        <!--//resume-body-->
        <hr />
        <div class="resume-footer text-center">
          <ul
            class="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted"
          >
            <li class="list-inline-item mb-lg-0 me-3">
              <a class="resume-link" href="https://github.com/RANGSEYhome"
                ><i
                  class="fa-brands fa-github-square fa-2x me-2"
                  data-fa-transform="down-4"
                ></i
                ><span class="d-none d-lg-inline-block text-muted"
                  >github.com/RANGSEYhome</span
                ></a
              >
            </li>
            <li class="list-inline-item mb-lg-0 me-3">
              <a class="resume-link" href="https://linkedin.com/in/RANGSEYhome"
                ><i
                  class="fa-brands fa-linkedin fa-2x me-2"
                  data-fa-transform="down-4"
                ></i
                ><span class="d-none d-lg-inline-block text-muted"
                  >linkedin.com/in/RANGSEYhome</span
                ></a
              >
            </li>
            <li class="list-inline-item mb-lg-0 me-lg-3">
              <a class="resume-link" href="https://youtube.com/@RANGSEYhome"
                ><i
                  class="fa-brands fa-square-youtube fa-2x me-2"
                  data-fa-transform="down-4"
                ></i
                ><span class="d-none d-lg-inline-block text-muted"
                  >youtube.com/@RANGSEYhome</span
                ></a
              >
            </li>
          </ul>
        </div>
        <!--//resume-footer-->
      </article>
    </div>
    <!--//container-->
    <PromotionText></PromotionText>
  </div>
</template>

<script>
import PromotionText from "@/components/PromotionText.vue";
import html2pdf from "html2pdf.js";
import Cookies from "js-cookie";

export default {
  components: {
    PromotionText,
  },
  methods: {
    // Download PDF
    downloadPDF() {
      const element = document.getElementById("pdf-section");

      // fix color when download pdf on dark mode
      const isDarkMode = Cookies.get("mode") === "dark-mode"; // Check cookie for dark mode
      // Temporarily add the PDF style if dark mode is active
      if (isDarkMode) {
        element.classList.add("pdf-style");
      }

      // Create a PDF from the selected element with reduced or no margin
      html2pdf()
        .from(element)
        .set({
          margin: [48, 0, 48, 0], // Adjust margins as needed
          filename: "section-content.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: {
            unit: "px",
            // format: [element.offsetWidth, element.offsetWidth * 1.414],
            format: [
              element.offsetWidth + 160,
              (element.offsetWidth + 160) * 1.414,
            ],
            orientation: "portrait", // or "landscape" if needed
          },
        })
        .save()
        .then(() => {
          // Remove the PDF style after saving
          element.classList.remove("pdf-style");
        });
    },
  },
};
</script>

<style scoped>
/* fix color when download pdf on dark mode */
.pdf-style {
  color: rgba(255, 255, 255, 0.7) !important;
}
/* make resume profile round */
.rounded {
  border-radius: 50% !important;
}
</style>
