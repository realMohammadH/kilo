<script setup>
import Flexbox from "./components/layouts/Flexbox.vue";
import container from "./components/inlineComponents/Container.js";
import contentWrapper from "./components/inlineComponents/ContentWrapper.js";
import SectionTitle from "./components/section/SectionTitle.vue";
import SectionSubTitle from "./components/section/SectionSubTitle.vue";
import SectionDescription from "./components/section/SectionDescription.vue";
import { h } from "vue";

const mySection = (props, { slots }) => {
  return h(
    "section",
    {
      class: ["section", props.className],
      style: {
        padding: props.padding,
        height: props.height,
        backgroundColor: props.backgroundColor,
      },
    },
    slots.default()
  );
};

// const sectionTitle = () => {
//   return h(
//     "span",
//     {
//       class: "sectionTitle",
//       style: {
//         display: "block",
//         color: "var(--primary-color)",
//       },
//     },
//     slots.default()
//   );
// };
</script>

<template>
  <header></header>
  <main>
    <mySection className="hero" height="743px">
      <container>
        <Flexbox>
          <contentWrapper>
            <template #sectionTitle> </template>
            <template #sectionSubTitle>
              <section-sub-title font-size="48px">
                Kilo. <br />
                Social for the Antisocial
              </section-sub-title>
            </template>
            <template #sectionDescription>
              <section-description>
                It's no secret that time is your most valuable resource.
                Introducing the fastest, easiest, most affordable way to <br />
                weave stories throughout all of your marketing channels.
              </section-description>
            </template>
          </contentWrapper>
        </Flexbox>
      </container>
    </mySection>
    <mySection class="planning" padding="80px 0">
      <container>
        <contentWrapper align="center">
          <template #sectionTitle>
            <section-title>Content Planning</section-title>
          </template>
          <template #sectionSubTitle>
            <section-sub-title>
              Schedule and Simplify Content
            </section-sub-title>
          </template>
          <template #sectionDescription>
            <section-description>
              You're busy and content planning is a slog, but with Kilo's tool
              set you can context-shift with ease.
            </section-description>
          </template>
        </contentWrapper>
        <figure>
          <img src="./assets/images/planingSectionBg.png" alt="" />
        </figure>
      </container>
    </mySection>
    <mySection>
      <container> <flexbox></flexbox> </container>
    </mySection>
  </main>
  <footer>
    <container>
      <flexbox></flexbox>
    </container>
  </footer>
</template>

<style scoped>
.hero {
  background-image: url(./assets/images/hero-bg.png);
  object-fit: cover;
  background-repeat: no-repeat;
}

.planning .content-wrapper {
  margin: 0 auto;
  margin-bottom: 40px;
}
</style>
