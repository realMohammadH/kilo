<script setup>
import { h, ref } from "vue";
import Flexbox from "./components/layouts/Flexbox.vue";
import container from "./components/inlineComponents/Container.js";
import contentWrapper from "./components/inlineComponents/ContentWrapper.js";
import SectionTitle from "./components/section/SectionTitle.vue";
import SectionSubTitle from "./components/section/SectionSubTitle.vue";
import SectionDescription from "./components/section/SectionDescription.vue";
import imageWrapper from "./components/inlineComponents/ImageWrapper.js";
import Card from "./components/layouts/Card.vue";
const sectionPadding = ref("0 0 80px 0");
// const contentSharingImages = ref([
//   "./assets/images/"
// ])

const mySection = (props, { slots }) => {
  return h(
    "section",
    {
      class: ["section", props.className],
      style: {
        padding: props.contentPadding,
        height: props.height,
        backgroundColor: props.backgroundColor,
      },
    },
    slots.default()
  );
};

const cardTitle = (props, { slots }) => {
  return h(
    "h3",
    {
      class: "card-title",
      style: {
        fontSize: "24px",
        margin: "0 0 8px 0",
      },
    },
    slots
  );
};

const cardSubTitle = (props, { slots }) => {
  return h(
    "p",
    {
      class: "card-sub_title",
      style: {
        fontSize: "16px",
        lineHeight: "28px",
      },
    },
    slots
  );
};

// const card = (props, { slots }) => {
//   return h(
//     "article",
//     {
//       class: "card",
//       style: {
//         height: props.cardHeight,
//         width: props.cardWidth,
//       },
//     },
//     slots
//   );
// };

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
    <mySection className="hero" height="743px" contentPadding="0 0 80px 0">
      <container>
        <Flexbox>
          <contentWrapper>
            <template #sectionTitle> </template>
            <template #sectionSubTitle>
              <section-sub-title font-size="48px" line-height="48px">
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
    <mySection class="planning" contentPadding="0 0 80px 0">
      <container>
        <contentWrapper contentAlign="center">
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
        <imageWrapper>
          <img
            src="./assets/images/planingSectionBg.png"
            alt="content planning"
          />
        </imageWrapper>
      </container>
    </mySection>
    <mySection contentPadding="0 0 80px 0">
      <container>
        <flexbox>
          <imageWrapper>
            <img src="./assets/images/content-publish.png" alt="" />
          </imageWrapper>
          <contentWrapper contentPadding="0 0 0 82px">
            <template #sectionTitle>
              <section-title>Content Publishing</section-title>
            </template>
            <template #sectionSubTitle>
              <section-sub-title>
                Craft stories once, <br />
                omnishare them with ease.
              </section-sub-title>
            </template>
            <template #sectionDescription>
              <section-description>
                No more spending large portions of time⁠⁠-⁠⁠sharing to different
                networks. Bulk upload your media and share to all in a
                single click!
              </section-description>
            </template>
          </contentWrapper>
        </flexbox>
      </container>
    </mySection>
    <mySection contentPadding="80px 0" backgroundColor="var(--tertiary-color)">
      <container>
        <flexbox align-items="flex-start">
          <contentWrapper>
            <template #sectionTitle>
              <section-title>Content Sharing</section-title>
            </template>
            <template #sectionSubTitle>
              <section-sub-title>
                Bring a human touch <br />
                back to storytelling.
              </section-sub-title>
            </template>
            <template #sectionDescription>
              <section-description>
                Sharing between networks is no longer painful. Kilo queues
                shares from anywhere⁠⁠-⁠⁠to anywhere in milliseconds, without
                feeling like a robot.
              </section-description>
            </template>
          </contentWrapper>
          <imageWrapper>
            <img src="./assets/images/sharing-image.png" alt="" />
          </imageWrapper>
        </flexbox>
      </container>
    </mySection>
    <mySection contentPadding="80px 0">
      <container>
        <flexbox>
          <imageWrapper>
            <img src="./assets/images/social-media-analytics.png" alt="" />
          </imageWrapper>
          <contentWrapper contentPadding="0 0 0 82px">
            <template #sectionTitle>
              <section-title>Social Media Analytics</section-title>
            </template>
            <template #sectionSubTitle>
              <section-sub-title>
                BPlan your next campaign using machine learning guided metrics.
              </section-sub-title>
            </template>
            <template #sectionDescription>
              <section-description>
                Merge real time insights from more than 10 networks and let Kilo
                plan the best text, tags, and times. Else, stream to Google
                Analytics, MixPanel, Amplitude, or the tool of your choice
                with ease!
              </section-description>
            </template>
          </contentWrapper>
        </flexbox>
      </container>
    </mySection>
    <mySection>
      <container
        containerBackGround="var(--tertiary-color)"
        containerPadding="64px"
      >
        <flexbox flow="column" gap="64px" align-items="baseline">
          <contentWrapper>
            <template #sectionTitle>
              <section-title>More for Less</section-title>
            </template>
            <template #sectionSubTitle>
              <section-sub-title> Make a long story short. </section-sub-title>
            </template>
            <template #sectionDescription>
              <section-description>
                Take charge of your content buffer with Kilo's tool suite,
                designed from the ground-up to increase meaningful impact while
                reducing effort and tedium.
              </section-description>
            </template>
          </contentWrapper>
          <flexbox gap="33px">
            <card
              content-padding="32px 32px 0"
              card-height="438px"
              backgroundColor="white"
            >
              <template #image-icon>
                <imageWrapper figureWidth="100%" figureHeight="50%">
                  <img src="./assets/images/card-img-1.png" alt="" />
                </imageWrapper>
              </template>
              <template #title>
                <cardTitle> A.I. Search </cardTitle>
              </template>
              <template #description>
                <section-description>
                  Power to the power users. Just start typing and navigate, find
                  posts by image content, tags, texts, or even run tasks.
                </section-description>
              </template>
            </card>
            <card
              content-padding="32px 32px 0"
              card-height="438px"
              backgroundColor="white"
            >
              <template #image-icon>
                <imageWrapper>
                  <img src="./assets/images/card-img-1.png" alt="" />
                </imageWrapper>
              </template>
              <template #title>
                <cardTitle> A.I. Search </cardTitle>
              </template>
              <template #description>
                <section-description>
                  Power to the power users. Just start typing and navigate, find
                  posts by image content, tags, texts, or even run tasks.
                </section-description>
              </template>
            </card>
          </flexbox>
          <flexbox> </flexbox>
        </flexbox>
      </container>
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
