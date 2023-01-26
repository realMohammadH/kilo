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
    icon: `./assets/icons/phone.svg`,
    cardTitle: "Built to Go",
    cardSubTitle: `With portability planned from the get-go,
    you can harness all the power with a single thumb -- left or right!`,
  },
  {
    icon: `./assets/icons/lang.svg`,
    cardTitle: "Speaks like You",
    cardSubTitle: `Organically written in nearly a dozen languages at launch.
    Don't believe us? This page is too!`,
  },
  {
    icon: `./assets/icons/person.svg`,
    cardTitle: "Made for Mortals",
    cardSubTitle: `Easy to learn and a breeze to master, for anyone. 
    Accessibility-first, simple to its core, and WCAG 2.0 compliant.`,
  },
]);

const socialIcons = ref([
  {
    id: "1",
    iconPath: `./assets/icons/instagram.svg`,
  },
  {
    id: "2",
    iconPath: `./assets/icons/facebook.svg`,
  },
  {
    id: "3",
    iconPath: `./assets/icons/twitter.svg`,
  },
  {
    id: "4",
    iconPath: `./assets/icons/tiktok.svg`,
  },
  {
    id: "5",
    iconPath: `./assets/icons/linkedin.svg`,
  },
]);

const footerNavLinks = ref([
  { title: "Press" },
  { title: "Status" },
  { title: "Privacy for Humans" },
  { title: "Privacy Policy" },
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
        borderBottom: props.borderBottom,
      },
    },
    slots
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

const icon = (props, { slots }) => {
  return h(
    "span",
    {
      class: ["icon", props.className],
      style: {
        display: "block",
        width: "24px",
        height: "24px",
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
    [h(icon), ...(slots ? slots : [])]
  );
};

const joinButton = ({ slots }) => {
  let mySlots = slots;
  const defaultValue = "Join private preview";
  if (!slots) {
    mySlots = defaultValue;
  }
  return h(
    "a",
    {
      class: "join-button",
      display: "block",
      style: {
        backgroundColor: "var(--primary-color)",
        color: "white",
        border: "none",
        borderRadius: "6px",
        padding: "12px 16.5px",
        fontWeight: "600",
      },
    },
    mySlots
  );
};

const watchButton = ({ slots }) => {
  let mySlots = slots;
  const defaultValue = "Watch trailer";
  if (!slots) {
    mySlots = defaultValue;
  }
  return h(
    "a",
    {
      class: "watch-button",
      display: "block",
      style: {
        backgroundColor: "white",
        color: "var(--primary-color)",
        border: "solid 1px",
        borderColor: "var(--primary-color)",
        borderRadius: "6px",
        padding: "11px 15.5px",
        fontWeight: "600",
      },
    },
    mySlots
  );
};

const ActionButtons = () => {
  return h(
    "div",
    {
      class: "action-buttons",
      style: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
      },
    },
    [h(joinButton), h(watchButton)]
  );
};

const myList = (props, { slots }) => {
  return h(
    "ul",
    {
      class: ["list-items", props.className],
      style: {
        display: "flex",
        alignItems: "center",
        gap: props.contentGap,
      },
    },
    slots
  );
};

const navList = (props, { slots }) => {
  return h(
    "ul",
    {
      class: "navbar-list",
      style: {
        display: "flex",
        alignItems: " center",
        height: props.height,
        width: props.width,
        gap: props.gap,
      },
    },
    slots
  );
};

const navItem = (props, { slots }) => {
  return h(
    "li",
    {
      class: "navbar-item",
      style: {
        margin: props.margin,
      },
    },
    slots
  );
};

const navLink = (props, { slots }) => {
  return h(
    "a",
    {
      class: "navbar-link",
      style: {
        fontSize: "14px",
        color: "#565C75",
        fontWeight: props.fontWeight,
      },
    },
    slots
  );
};

const regularText = (props, { slots }) => {
  return h(
    props.tag,
    {
      class: [props.className],
      style: {
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
      },
    },
    slots
  );
};

const regularContainer = (props, { slots }) => {
  if (!props.tag) {
    console.error("The 'tag' prop is required.");
    return;
  }
  return h(
    props.tag,
    {
      class: [props.className],
      style: {
        width: props.width,
        height: props.height,
        padding: props.padding,
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
  <header>
    <container>
      <nav class="navbar">
        <navList height="100%" width="100%">
          <icon className="logo"></icon>
          <navItem>
            <navList gap="16px">
              <navItem></navItem>
              <navItem>
                <navLink fontWeight="600">EN</navLink>
              </navItem>
              <joinButton></joinButton>
            </navList>
          </navItem>
        </navList>
      </nav>
    </container>
  </header>
  <main>
    <mySection className="hero" height="743px" contentPadding="0 0 80px 0">
      <container>
        <Flexbox>
          <contentWrapper>
            <section-sub-title font-size="48px" line-height="48px">
              Kilo. <br />
              Social for the Antisocial
            </section-sub-title>
            <section-description margin-bottom="36px">
              It's no secret that time is your most valuable resource.
              Introducing the fastest, easiest, most affordable way to <br />
              weave stories throughout all of your marketing channels.
            </section-description>
            <ActionButtons> </ActionButtons>
          </contentWrapper>
        </Flexbox>
      </container>
    </mySection>
    <mySection
      class="planning"
      contentPadding="80px 0"
      borderBottom="1px solid #000000"
    >
      <container>
        <contentWrapper contentAlign="center">
          <section-title>Content Planning</section-title>
          <section-sub-title> Schedule and Simplify Content </section-sub-title>
          <section-description>
            You're busy and content planning is a slog, but with Kilo's tool set
            you can context-shift with ease.
          </section-description>
        </contentWrapper>
        <imageWrapper>
          <img
            src="./assets/images/planingSectionBg.png"
            alt="content planning"
          />
        </imageWrapper>
      </container>
    </mySection>
    <mySection contentPadding="80px 0">
      <container>
        <flexbox>
          <imageWrapper>
            <img src="./assets/images/content-publish.png" alt="" />
          </imageWrapper>
          <contentWrapper contentPadding="0 0 0 82px">
            <section-title>Content Publishing</section-title>

            <section-sub-title>
              Craft stories once, <br />
              omnishare them with ease.
            </section-sub-title>

            <section-description>
              No more spending large portions of time⁠⁠-⁠⁠sharing to different
              networks. Bulk upload your media and share to all in a
              single click!
            </section-description>
          </contentWrapper>
        </flexbox>
      </container>
    </mySection>
    <mySection contentPadding="80px 0" backgroundColor="var(--tertiary-color)">
      <container>
        <flexbox align-items="flex-start" justify-content="space-between">
          <contentWrapper>
            <section-title>Content Sharing</section-title>

            <section-sub-title>
              Bring a human touch <br />
              back to storytelling.
            </section-sub-title>

            <section-description>
              Sharing between networks is no longer painful. Kilo queues shares
              from anywhere⁠⁠-⁠⁠to anywhere in milliseconds, without feeling
              like a robot.
            </section-description>
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
            <section-title>Social Media Analytics</section-title>

            <section-sub-title>
              BPlan your next campaign using machine learning guided metrics.
            </section-sub-title>

            <section-description>
              Merge real time insights from more than 10 networks and let Kilo
              plan the best text, tags, and times. Else, stream to Google
              Analytics, MixPanel, Amplitude, or the tool of your choice
              with ease!
            </section-description>
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
            <section-title>More for Less</section-title>

            <section-sub-title> Make a long story short. </section-sub-title>

            <section-description>
              Take charge of your content buffer with Kilo's tool suite,
              designed from the ground-up to increase meaningful impact while
              reducing effort and tedium.
            </section-description>
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
          <section-sub-title margin
            >Frequently Asked Question</section-sub-title
          >
          <regularContainer
            v-for="q in questions"
            tag="div"
            padding="28px 0"
            className="questionText"
            width="995px"
          >
            <flexbox justify-content="space-between">
              <regularText tag="p" fontSize="24px" fontWeight="600">
                {{ q }}
              </regularText>
              <icon>
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
              </icon>
            </flexbox>
          </regularContainer>
        </flexbox>
      </container>
    </mySection>
    <mySection
      class="access"
      contentPadding="80px 0 80px 110px"
      borderBottom="solid 1px #E4E7F3"
    >
      <container>
        <contentWrapper margin="25px">
          <section-title>Get Exclusive Access</section-title>

          <section-sub-title>
            Inspire without being influenced
          </section-sub-title>

          <section-description>
            Give yourself the gift of jumping from project-to-project, knowing
            that your marketing automation pipeline is thriving. Limited seats
            available.
          </section-description>
        </contentWrapper>
        <ActionButtons></ActionButtons>
      </container>
    </mySection>
  </main>
  <footer>
    <container containerPadding="80px 0">
      <flexbox justify-content="space-between">
        <myList>
          <icon v-for="icon in socialIcons">
            <svg>
              <use :href="icon.iconPath"></use>
            </svg>
          </icon>
        </myList>
        <navList>
          <navItem v-for="link in footerNavLinks">
            <navLink>{{ link.title }}</navLink>
          </navItem>
          <navItem>
            <p>© 2022 Kilo</p>
          </navItem>
        </navList>
      </flexbox>
    </container>
  </footer>
</template>

<style scoped>
header {
  position: absolute;
  top: 40px;
  right: 0;
  left: 0;
  z-index: 999;
}
.navbar {
  height: 72px;
  width: 555px;
  background: white;
  border-radius: 12px;
  border: 1px solid #e4e7f3;
  box-shadow: 0px 5px 10px 0px #e4e7f3;
}

.navbar .join-button {
  padding: 10px 12px !important;
  background: white !important;
  border: 1px solid !important;
  border-color: var(--primary-color) !important;
  color: var(--primary-color) !important;
}

.hero {
  background-image: url(./assets/images/hero-bg.png);
  object-fit: cover;
  background-repeat: no-repeat;
}
.planning .content-wrapper {
  margin: 0 auto;
  margin-bottom: 40px;
}
footer .navbar-list *:not(:last-child) {
  margin-right: 20px;
}
footer .navbar-list:last-child p {
  font-size: 14px;
  font-weight: 600;
}
.question .sectionSubTitle {
  margin-bottom: 25px;
}
.questionText {
  border-top: 1px solid #e4e7f3;
}
</style>
