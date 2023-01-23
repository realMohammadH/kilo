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

const cardInfo = ref([
  {
    icon: `
      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.48438C7 3.82753 8.34315 2.48438 10 2.48438H22C23.6569 2.48438 25 3.82753 25 5.48438V27.4844C25 29.1413 23.6569 30.4844 22 30.4844H10C8.34315 30.4844 7 29.1413 7 27.4844V5.48438ZM17.5 25.4844C17.5 24.656 16.8284 23.9844 16 23.9844C15.1716 23.9844 14.5 24.656 14.5 25.4844V25.4944C14.5 26.3228 15.1716 26.9944 16 26.9944C16.8284 26.9944 17.5 26.3228 17.5 25.4944V25.4844Z" fill="#A6A9BB"/>
      </svg>
    `,
    cardTitle: "Built to Go",
    cardSubTitle: `With portability planned from the get-go,
    you can harness all the power with a single thumb -- left or right!`,
  },
  {
    icon: `
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_43297)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.32812 3.48438C4.67128 3.48438 3.32812 4.82753 3.32812 6.48438V18.4844C3.32812 20.1413 4.67128 21.4844 6.32812 21.4844H11.3281V26.4844C11.3281 28.1413 12.6712 29.4844 14.3281 29.4844H26.3281C27.985 29.4844 29.3281 28.1413 29.3281 26.4844V14.4844C29.3281 12.8275 27.985 11.4844 26.3281 11.4844H21.3281V6.48438C21.3281 4.82753 19.985 3.48438 18.3281 3.48438H6.32812ZM6.32812 19.4844H11.3281V15.4844H10.3281V16.4844C10.3281 17.0367 9.8804 17.4844 9.32812 17.4844C8.77585 17.4844 8.32812 17.0367 8.32812 16.4844V11.4844C8.32812 9.27524 10.119 7.48438 12.3281 7.48438C14.5372 7.48438 16.3281 9.27524 16.3281 11.4844H19.3281V6.48438C19.3281 5.9321 18.8804 5.48438 18.3281 5.48438H6.32812C5.77585 5.48438 5.32812 5.9321 5.32812 6.48438V18.4844C5.32812 19.0367 5.77585 19.4844 6.32812 19.4844ZM12.3281 9.48438C13.4327 9.48438 14.3281 10.3798 14.3281 11.4844C13.0219 11.4844 11.9106 12.3192 11.4988 13.4844H10.3281V11.4844C10.3281 10.3798 11.2235 9.48438 12.3281 9.48438ZM21.3281 15.4844C21.3281 14.9321 20.8804 14.4844 20.3281 14.4844C19.7758 14.4844 19.3281 14.9321 19.3281 15.4844V16.4844H16.3281C15.7758 16.4844 15.3281 16.9321 15.3281 17.4844C15.3281 18.0367 15.7758 18.4844 16.3281 18.4844H21.0061C20.9878 18.5378 20.9688 18.5924 20.9489 18.6481C20.6554 19.4698 20.1963 20.4935 19.5281 21.3844C19.0572 22.0123 18.2289 22.5525 17.4229 22.9527C17.0348 23.1454 16.6804 23.2919 16.424 23.3897C16.2962 23.4384 16.194 23.4746 16.1255 23.4981C16.0913 23.5098 16.0656 23.5183 16.0495 23.5236L16.0326 23.529L16.0309 23.5296C15.5042 23.6941 15.2093 24.2545 15.3733 24.7816C15.5374 25.3089 16.0979 25.6033 16.6253 25.4392L16.3281 24.4844C16.6253 25.4392 16.6251 25.4393 16.6253 25.4392L16.6273 25.4386L16.6304 25.4376L16.6395 25.4347L16.6696 25.425C16.6946 25.4169 16.7297 25.4052 16.7737 25.3902C16.8616 25.36 16.9855 25.3161 17.1369 25.2583C17.4385 25.1432 17.854 24.9716 18.3124 24.744C18.9325 24.4361 19.6919 23.9965 20.3513 23.4148C21.1693 24.1136 22.1856 24.6497 23.9322 25.4027C24.4394 25.6213 25.0278 25.3874 25.2464 24.8803C25.465 24.3731 25.2311 23.7847 24.724 23.5661C23.0241 22.8333 22.2117 22.3826 21.6185 21.8674C22.1798 20.9689 22.5711 20.0522 22.8323 19.3207C22.9441 19.0077 23.0337 18.7241 23.1036 18.4844H24.3281C24.8804 18.4844 25.3281 18.0367 25.3281 17.4844C25.3281 16.9321 24.8804 16.4844 24.3281 16.4844H21.3281V15.4844Z" fill="#A6A9BB"/>
      </g>
      <defs>
      <clipPath id="clip0_1_43297">
      <rect width="32" height="32" fill="white" transform="translate(0.328125 0.484375)"/>
      </clipPath>
      </defs>
      </svg>
    `,
    cardTitle: "Speaks like You",
    cardSubTitle: `Organically written in nearly a dozen languages at launch.
    Don't believe us? This page is too!`,
  },
  {
    icon: `
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_43303)">
      <path d="M16.6562 2.48438C14.4471 2.48438 12.6562 4.27523 12.6562 6.48438C12.6562 8.69351 14.4471 10.4844 16.6562 10.4844C18.8653 10.4844 20.6562 8.69351 20.6562 6.48438C20.6562 4.27523 18.8653 2.48438 16.6562 2.48438Z" fill="#A6A9BB"/>
      <path d="M5.78841 10.4933C5.24097 10.4202 4.73801 10.8049 4.66502 11.3523C4.59202 11.8998 4.97664 12.4027 5.52408 12.4757L12.1064 13.3534L11.663 21.3342L9.6861 29.242C9.55215 29.7778 9.87791 30.3207 10.4137 30.4546C10.9495 30.5886 11.4924 30.2628 11.6263 29.727L13.437 22.4845H19.8754L21.6861 29.727C21.82 30.2628 22.3629 30.5886 22.8987 30.4546C23.4345 30.3207 23.7603 29.7778 23.6263 29.242L21.6494 21.3342L21.206 13.3534L27.7884 12.4757C28.3358 12.4027 28.7204 11.8998 28.6474 11.3523C28.5744 10.8049 28.0715 10.4202 27.524 10.4933L20.0898 11.4845H13.2226L5.78841 10.4933Z" fill="#A6A9BB"/>
      </g>
      <defs>
      <clipPath id="clip0_1_43303">
      <rect width="32" height="32" fill="white" transform="translate(0.65625 0.484375)"/>
      </clipPath>
      </defs>
      </svg>
    `,
    cardTitle: "Made for Mortals",
    cardSubTitle: `Easy to learn and a breeze to master, for anyone. 
    Accessibility-first, simple to its core, and WCAG 2.0 compliant.`,
  },
]);

const questions = ref([
  "Why Kilo?",
  "Who is the team behind Kilo?",
  "What social networks are supported?",
  "When will Kilo be available?",
  "How much will Kilo cost?",
]);

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
        fontSize: props.fontSize,
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

const iconWrapper = (props, { slots }) => {
  return h(
    "span",
    {
      class: "icon",
      style: {
        display: "block",
        width: props.iconWidth,
        height: props.iconHeight,
      },
    },
    slots
  );
};

const listItem = ({ slots }) => {
  return h(
    "div",
    {
      class: "list-item",
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "28px 0",
      },
    },
    [h(iconWrapper), ...(slots ? slots : [])]
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
          <flexbox justify-content="space-between">
            <card
              content-padding="32px 32px 0"
              card-height="438px"
              card-width="513px"
              backgroundColor="white"
            >
              <template #image-icon>
                <imageWrapper figureWidth="100%" figureHeight="50%">
                  <img src="./assets/images/card-img-1.png" alt="" />
                </imageWrapper>
              </template>
              <template #title>
                <cardTitle fontSize="28px"> A.I. Search </cardTitle>
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
              card-width="513px"
              backgroundColor="white"
            >
              <template #image-icon>
                <imageWrapper>
                  <img src="./assets/images/card-img-2.png" alt="" />
                </imageWrapper>
              </template>
              <template #title>
                <cardTitle fontSize="28px"> A.I. Search </cardTitle>
              </template>
              <template #description>
                <section-description>
                  Power to the power users. Just start typing and navigate, find
                  posts by image content, tags, texts, or even run tasks.
                </section-description>
              </template>
            </card>
          </flexbox>
          <flexbox justify-content="space-between">
            <card v-for="c in cardInfo" card-height="164px" card-width="315px">
              <template #image-icon> </template>
              <template #title>
                <cardTitle fontSize="20px">{{ c.cardTitle }}</cardTitle>
              </template>
              <template #description>
                <cardSubTitle>
                  {{ c.cardSubTitle }}
                </cardSubTitle>
              </template>
            </card>
          </flexbox>
        </flexbox>
      </container>
    </mySection>
    <mySection class="question" contentPadding="80px 0">
      <container>
        <flexbox flow="column" align-items="start">
          <section-sub-title>Frequently Asked Question</section-sub-title>
          <listItem v-for="q in questions">
            <iconWrapper>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 10.9844L12 13.9844L9 10.9844"
                  stroke="#565C75"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </iconWrapper>
          </listItem>
        </flexbox>
      </container>
    </mySection>
    <mySection class="access" contentPadding="80px 0">
      <container>
        <contentWrapper>
          <template #sectionTitle>
            <section-title>Get Exclusive Access</section-title>
          </template>
          <template #sectionSubTitle>
            <section-sub-title>
              Inspire without being influenced
            </section-sub-title>
          </template>
          <template #sectionDescription>
            <section-description>
              Give yourself the gift of jumping from project-to-project, knowing
              that your marketing automation pipeline is thriving. Limited seats
              available.
            </section-description>
          </template>
        </contentWrapper>
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
