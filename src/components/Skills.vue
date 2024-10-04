<template>
  <div class="row">
    <div
      class="item col-6 col-lg-3"
      v-for="(skill, index) in skills"
      :key="index"
    >
      <div class="item-inner">
        <div class="item-icon">
          <template v-for="(icon, iconIndex) in skill.icons" :key="iconIndex">
            <i :class="icon" class="me-2"></i>
            <!-- Add margin if needed -->
          </template>
        </div>
        <h3 class="item-title">{{ skill.title }}</h3>
        <div class="item-desc">
          {{ skill.description }}
        </div>
      </div>
      <!--//item-inner-->
    </div>
    <!--//item-->
  </div>
  <!--//row-->
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          icons: ["fa-brands fa-js-square"], // Single icon
          title: "Vanilla JavaScript",
          description:
            "A fundamental programming language that enables interactive web content and dynamic web applications.",
        },
        {
          icons: ["fa-brands fa-vuejs"], // Single icon
          title: "Vue",
          description:
            "A progressive JavaScript framework for building user interfaces, allowing for a reactive data-binding approach.",
        },
        {
          icons: ["fa-brands fa-node-js"], // Single icon
          title: "Node.js",
          description:
            "A runtime environment that allows you to execute JavaScript on the server side, enabling full-stack development.",
        },
        {
          icons: ["fa-brands fa-npm"], // Single icon
          title: "npm",
          description:
            "The package manager for JavaScript, providing a vast ecosystem of libraries and tools to enhance your development workflow.",
        },
        {
          icons: ["fa-brands fa-html5", "fa-brands fa-css3-alt"], // Multiple icons
          title: "HTML & CSS",
          description:
            "The backbone of web development, HTML structures the content while CSS styles it, creating visually appealing websites.",
        },
        {
          icons: ["fa-brands fa-sass", "fa-brands fa-less"], // Multiple icons
          title: "Sass & LESS",
          description:
            "CSS preprocessors that introduce variables, nesting, and other features to write more maintainable and scalable styles.",
        },
      ],
    };
  },
};
</script>
