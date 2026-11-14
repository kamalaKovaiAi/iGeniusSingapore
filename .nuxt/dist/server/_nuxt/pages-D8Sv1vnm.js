import { ref, defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "C:/xampp/htdocs/kamalaiGenius/iGeniusSingapore/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "../server.mjs";
import { u as useHead } from "./v3-DDM0RGUx.js";
import "C:/xampp/htdocs/kamalaiGenius/iGeniusSingapore/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/xampp/htdocs/kamalaiGenius/iGeniusSingapore/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs";
import "C:/xampp/htdocs/kamalaiGenius/iGeniusSingapore/node_modules/.pnpm/h3@1.15.11/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/xampp/htdocs/kamalaiGenius/iGeniusSingapore/node_modules/.pnpm/defu@6.1.7/node_modules/defu/dist/defu.mjs";
import "C:/xampp/htdocs/kamalaiGenius/iGeniusSingapore/node_modules/.pnpm/ufo@1.6.4/node_modules/ufo/dist/index.mjs";
import "C:/xampp/htdocs/kamalaiGenius/iGeniusSingapore/node_modules/.pnpm/@unhead+vue@2.1.17_vue@3.5.45_typescript@5.9.3_/node_modules/@unhead/vue/dist/index.mjs";
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = (() => {
  console.error(intervalError);
});
function useCarousel(totalSlides = 3, intervalMs = 3500) {
  const currentSlide = ref(0);
  const isPaused = ref(false);
  let timer = null;
  function nextSlide() {
    currentSlide.value = (currentSlide.value + 1) % totalSlides;
    if (!isPaused.value) {
      startTimer();
    }
  }
  function prevSlide() {
    currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
    if (!isPaused.value) {
      startTimer();
    }
  }
  function goToSlide(index) {
    currentSlide.value = index;
    if (!isPaused.value) {
      startTimer();
    }
  }
  function startTimer() {
    stopTimer();
    if (!isPaused.value) {
      timer = setInterval();
    }
  }
  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function togglePause() {
    isPaused.value = !isPaused.value;
    if (isPaused.value) {
      stopTimer();
    } else {
      startTimer();
    }
  }
  function pause() {
    stopTimer();
  }
  function resume() {
    if (!isPaused.value) {
      startTimer();
    }
  }
  return {
    currentSlide,
    isPaused,
    nextSlide,
    prevSlide,
    goToSlide,
    togglePause,
    pause,
    resume,
    startTimer,
    stopTimer
  };
}
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HeroCarousel",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "preload", as: "image", href: "/images/hero-1.jpg" },
        { rel: "preload", as: "image", href: "/images/hero-2.jpg" },
        { rel: "preload", as: "image", href: "/images/hero-3.jpg" }
      ]
    });
    const { currentSlide, isPaused } = useCarousel(3, 3500);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "hero",
        "aria-roledescription": "carousel",
        "aria-label": "Featured highlights",
        id: "hero",
        tabindex: "0"
      }, _attrs))}><div class="slides" id="slides"><article class="${ssrRenderClass(["slide", "slide-1", { active: unref(currentSlide) === 0 }])}"${ssrRenderAttr("aria-hidden", unref(currentSlide) !== 0)} aria-label="1 of 3"><div class="slide-bg" style="${ssrRenderStyle({ "--hero-photo": `url('/images/hero-1.jpg')` })}" aria-hidden="true"></div><div class="container slide-inner"><div><span class="eyebrow-tag">Microsoft Authorized Partner</span><h1>Office 365, Azure and Dynamics 365, set up and supported.</h1><p class="lead">Plan, deploy and manage your Microsoft cloud with a team that works around the clock.</p><div class="btn-row"><a class="btn btn-primary" href="#contact">Start your project</a><a class="btn btn-ghost" href="#services">Explore Microsoft services</a></div></div><div class="slide-card" aria-hidden="true"><div class="stat">380+</div><div class="stat-label">Projects delivered</div><div class="stat">50+</div><div class="stat-label">Microsoft experts</div></div></div></article><article class="${ssrRenderClass(["slide", "slide-2", { active: unref(currentSlide) === 1 }])}"${ssrRenderAttr("aria-hidden", unref(currentSlide) !== 1)} aria-label="2 of 3"><div class="slide-bg" style="${ssrRenderStyle({ "--hero-photo": `url('/images/hero-2.jpg')` })}" aria-hidden="true"></div><div class="container slide-inner"><div><span class="eyebrow-tag">Hosting and domains</span><h1>Reliable hosting and domains for every website you run.</h1><p class="lead">From shared hosting and WordPress to dedicated servers, pick the plan that fits your traffic.</p><div class="btn-row"><a class="btn btn-primary" href="#services">View hosting plans</a><a class="btn btn-ghost" href="#services">Register a domain</a></div></div><div class="slide-card" aria-hidden="true"><div class="stat">480+</div><div class="stat-label">Customers served</div><div class="stat">48+</div><div class="stat-label">Countries</div></div></div></article><article class="${ssrRenderClass(["slide", "slide-3", { active: unref(currentSlide) === 2 }])}"${ssrRenderAttr("aria-hidden", unref(currentSlide) !== 2)} aria-label="3 of 3"><div class="slide-bg" style="${ssrRenderStyle({ "--hero-photo": `url('/images/hero-3.jpg')` })}" aria-hidden="true"></div><div class="container slide-inner"><div><span class="eyebrow-tag">24x7 support</span><h1>Your services stay up, all day, every day of the year.</h1><p class="lead">Our dedicated teams monitor, secure and back up your systems around the clock.</p><div class="btn-row"><a class="btn btn-primary" href="#contact">Talk to our team</a><a class="btn btn-ghost" href="#services">Backup and security</a></div></div><div class="slide-card" aria-hidden="true"><div class="stat">24x7</div><div class="stat-label">Dedicated support</div><div class="stat">120+</div><div class="stat-label">Employees worldwide</div></div></div></article></div><div class="carousel-controls"><div class="container"><div class="dots" role="group" aria-label="Choose slide"><!--[-->`);
      ssrRenderList(3, (idx) => {
        _push(`<button class="dot" type="button"${ssrRenderAttr("aria-current", unref(currentSlide) === idx - 1)}${ssrRenderAttr("aria-label", `Show slide ${idx}`)}></button>`);
      });
      _push(`<!--]--></div><div class="arrows"><button class="pause-btn" type="button">${ssrInterpolate(unref(isPaused) ? "Play" : "Pause")}</button><button class="arrow" type="button" aria-label="Previous slide">←</button><button class="arrow" type="button" aria-label="Next slide">→</button></div></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroCarousel.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const statsData = [
  { value: "480+", label: "Customers" },
  { value: "50+", label: "Microsoft experts" },
  { value: "380+", label: "Projects" },
  { value: "48+", label: "Countries" },
  { value: "120+", label: "Employees" }
];
const partnersData = [
  "Microsoft",
  "Amazon Web Services",
  "Salesforce",
  "Zoho",
  "GitHub",
  "Google",
  "QuickBooks",
  "Microsoft Cloud"
];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "StatsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = statsData;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "block alt",
        "aria-labelledby": "achieve-title"
      }, _attrs))}><div class="container"><div class="section-head"><h2 id="achieve-title">Trusted by businesses across the world</h2><p>Our track record, built over years of delivering cloud, hosting and business software projects.</p></div><div class="stats"><!--[-->`);
      ssrRenderList(unref(stats), (stat, index) => {
        _push(`<div class="stat-box"><strong>${ssrInterpolate(stat.value)}</strong><span>${ssrInterpolate(stat.label)}</span></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StatsSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const servicesData = [
  {
    id: "domains",
    icon: "D",
    title: "Domain Registration",
    description: "Choose a unique, memorable name for your website and register it with us, including country-specific domains.",
    link: "#"
  },
  {
    id: "hosting",
    icon: "H",
    title: "Web Hosting",
    description: "Make your website reachable on the internet with dependable shared, WordPress, VPS and dedicated hosting.",
    link: "#"
  },
  {
    id: "aws",
    icon: "A",
    title: "AWS Cloud",
    description: "Build, deploy and manage applications with a wide range of AWS services, scaled to your needs.",
    link: "#"
  },
  {
    id: "bizapps",
    icon: "Z",
    title: "Business Applications",
    description: "Streamline sales, marketing, finance, HR and IT with CRM, ERP and productivity platforms.",
    link: "#"
  }
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ServicesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const services = servicesData;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "block",
        "aria-labelledby": "services-title",
        id: "services"
      }, _attrs))}><div class="container"><div class="section-head"><h2 id="services-title">Services built for growing businesses</h2><p>Everything from getting online to running enterprise cloud platforms, delivered by one partner.</p></div><div class="cards"><!--[-->`);
      ssrRenderList(unref(services), (service) => {
        _push(`<article class="card"><div class="icon" aria-hidden="true">${ssrInterpolate(service.icon)}</div><h3>${ssrInterpolate(service.title)}</h3><p>${ssrInterpolate(service.description)}</p><a class="more"${ssrRenderAttr("href", service.link)}>Learn more →</a></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServicesSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "block alt",
    "aria-labelledby": "why-title"
  }, _attrs))}><div class="container split"><div><div class="section-head" style="margin-bottom:0;"><h2 id="why-title">A partner that stays with you after go-live</h2><p>We combine certified Microsoft expertise with responsive support, so projects are delivered well and kept running well.</p></div><ul class="checklist"><li>Microsoft authorized partner for Office 365, Azure and Dynamics 365</li><li>Migration planning for email, files, collaboration and line-of-business apps</li><li>Security monitoring, backup and disaster recovery included in our plans</li><li>Support teams available 24 hours a day, 7 days a week</li></ul></div><div class="process" aria-label="How we work"><div class="process-step"><h3>1. Discuss your goals</h3><p>We learn about your organization, your needs and the outcomes you want.</p></div><div class="process-step"><h3>2. Design the solution</h3><p>We review integration options and compliance requirements, then recommend a plan.</p></div><div class="process-step"><h3>3. Build, migrate and test</h3><p>We implement, streamline and test the project before it goes live for your team.</p></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProcessSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PartnersSection",
  __ssrInlineRender: true,
  setup(__props) {
    const partners = partnersData;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "block",
        "aria-labelledby": "partners-title"
      }, _attrs))}><div class="container"><div class="section-head"><h2 id="partners-title">Technology partners</h2><p>We work with leading platforms so you get the right tool for each job.</p></div><div class="partners"><!--[-->`);
      ssrRenderList(unref(partners), (partner, index) => {
        _push(`<div class="partner">${ssrInterpolate(partner)}</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PartnersSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "block alt",
    "aria-labelledby": "contact-title",
    id: "contact"
  }, _attrs))}><div class="container"><div class="section-head"><h2 id="contact-title">Get in touch</h2><p>Have a project in mind? Reach out and let&#39;s discuss how we can help.</p></div><div class="contact-grid"><div class="contact-item"><h3>Email</h3><a href="mailto:info@igeniusai.com">info@igeniusai.com</a></div><div class="contact-item"><h3>Phone</h3><a href="tel:+14157999321">+1 415 799 9321</a></div><div class="contact-item"><h3>Office</h3><p>iGenius Singapore<br>Technology &amp; Cloud Operations</p></div></div><div class="cta-band" style="margin-top:2.5rem;"><div><h2>Partner with us to build a resilient business</h2><p>Our dedicated teams work 24 x 7, 365 days a year, so your services stay up all the time.</p></div><div class="btn-row"><a class="btn btn-primary" href="mailto:info@igeniusai.com">Get in touch</a></div></div><div class="newsletter" style="margin-top:2.5rem;"><h3 style="margin:0 0 .4rem;color:var(--navy);">Subscribe to our newsletter</h3><p style="margin:0 0 1rem;color:var(--muted);">Stay informed about our latest updates by email.</p><form><label for="sub-email" class="sr-only" style="position:absolute;left:-9999px;">Email address</label><input id="sub-email" type="email" name="email" placeholder="Your email address" autocomplete="email" required><button type="submit">Subscribe</button></form></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "iGenius Singapore | Microsoft, Cloud and Hosting Solutions",
      meta: [
        {
          name: "description",
          content: "iGenius Singapore: Microsoft authorized partner for Office 365, Azure, Dynamics 365, with domains, web hosting, AWS Cloud, and 24x7 support."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroCarousel = _sfc_main$6;
      const _component_StatsSection = _sfc_main$5;
      const _component_ServicesSection = _sfc_main$4;
      const _component_ProcessSection = __nuxt_component_3;
      const _component_PartnersSection = _sfc_main$2;
      const _component_ContactSection = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HeroCarousel, null, null, _parent));
      _push(ssrRenderComponent(_component_StatsSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ServicesSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ProcessSection, null, null, _parent));
      _push(ssrRenderComponent(_component_PartnersSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ContactSection, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=pages-D8Sv1vnm.js.map
