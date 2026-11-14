import { _ as __nuxt_component_0 } from './nuxt-link-B34IK1xU.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const navigationMenu = [
  {
    title: "Company",
    dropdown: [
      { label: "About Us", href: "#" },
      { label: "Accreditations & Awards", href: "#" },
      { label: "Our Customers", href: "#" },
      { label: "Industry Partners", href: "#" },
      { label: "Network & Data Centers", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Customer Support (24x7)", href: "#" }
    ]
  },
  {
    title: "Domain",
    dropdown: [
      { label: "Domain Registration", href: "#" },
      { label: "Country Domains", href: "#" },
      { label: "Domain Transfer", href: "#" }
    ]
  },
  {
    title: "Web Hosting",
    dropdown: [
      { label: "Shared Hosting", href: "#" },
      { label: "WordPress Hosting", href: "#" },
      { label: "VPS Hosting", href: "#" },
      { label: "Dedicated Server Hosting", href: "#" },
      { label: "Reseller Hosting", href: "#" }
    ]
  },
  {
    title: "Microsoft",
    dropdown: [
      { label: "Office 365 Business", href: "#" },
      { label: "Azure Cloud", href: "#" },
      { label: "Microsoft 365 Enterprise", href: "#" },
      { label: "Microsoft Co-Pilot", href: "#" },
      { label: "Dynamics 365", href: "#" },
      { label: "Microsoft Migration", href: "#" }
    ]
  },
  {
    title: "Solutions",
    dropdown: [
      { label: "CRM & ERP Implementation", href: "#" },
      { label: "Google Workspace", href: "#" },
      { label: "AWS Cloud", href: "#" },
      { label: "Backup & Disaster Recovery", href: "#" },
      { label: "M365 Backup", href: "#" },
      { label: "Virtual Private Network", href: "#" },
      { label: "DDoS Protection", href: "#" },
      { label: "Server Security & Monitoring", href: "#" },
      { label: "SSL Certificates", href: "#" }
    ]
  },
  {
    title: "Contact",
    href: "#contact",
    isCta: true
  }
];
function useNavigation() {
  const isMenuOpen = ref(false);
  const activeDropdown = ref(null);
  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }
  function closeMenu() {
    isMenuOpen.value = false;
    activeDropdown.value = null;
  }
  function toggleDropdown(index) {
    if (activeDropdown.value === index) {
      activeDropdown.value = null;
    } else {
      activeDropdown.value = index;
    }
  }
  return {
    isMenuOpen,
    activeDropdown,
    toggleMenu,
    closeMenu,
    toggleDropdown
  };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const menuItems = navigationMenu;
    const { isMenuOpen, activeDropdown, closeMenu } = useNavigation();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "site-header" }, _attrs))}><div class="topbar"><div class="container"><span>Microsoft Authorized Partner for Office 365, Azure &amp; Dynamics 365</span><span><a href="mailto:info@igeniusai.com">info@igeniusai.com</a> \xA0|\xA0 <a href="tel:+14157999321">+1 415 799 9321</a></span></div></div><div class="container nav-wrap">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "brand",
        "aria-label": "iGenius Singapore home"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="brand-mark"${_scopeId}>iG</span><span${_scopeId}>iGenius</span>`);
          } else {
            return [
              createVNode("span", { class: "brand-mark" }, "iG"),
              createVNode("span", null, "iGenius")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="menu-toggle" type="button"${ssrRenderAttr("aria-expanded", unref(isMenuOpen))}> Menu </button><nav aria-label="Main navigation"><ul class="${ssrRenderClass(["menu", { open: unref(isMenuOpen) }])}" id="main-menu"><!--[-->`);
      ssrRenderList(unref(menuItems), (item, idx) => {
        _push(`<li class="${ssrRenderClass({ open: unref(activeDropdown) === idx })}">`);
        if (item.dropdown) {
          _push(`<!--[--><button type="button"${ssrRenderAttr("aria-expanded", unref(activeDropdown) === idx)}>${ssrInterpolate(item.title)}</button><ul class="dropdown"><!--[-->`);
          ssrRenderList(item.dropdown, (sub, sIdx) => {
            _push(`<li>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: sub.href,
              onClick: unref(closeMenu)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(sub.label)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(sub.label), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul><!--]-->`);
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.href || "#",
            class: { "nav-cta": item.isCta },
            onClick: unref(closeMenu)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav></div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "site-footer" }, _attrs))}><div class="container"><div class="footer-grid"><div><div class="brand-mark" style="width:40px;height:40px;font-size:1.1rem;margin-bottom:1rem;">iG</div><p style="margin:0;max-width:36ch;">Microsoft authorized partner for Office 365, Azure and Dynamics 365, with domains, hosting and 24x7 support.</p><div class="socials" aria-label="Social media"><a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener">f</a><a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener">X</a><a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener">in</a><a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener">\u25B6</a></div></div><div><h4>Company</h4><ul><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About Us`);
      } else {
        return [
          createTextVNode("About Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Careers`);
      } else {
        return [
          createTextVNode("Careers")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Our Customers`);
      } else {
        return [
          createTextVNode("Our Customers")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Customer Support`);
      } else {
        return [
          createTextVNode("Customer Support")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div><h4>Services</h4><ul><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Domains`);
      } else {
        return [
          createTextVNode("Domains")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Web Hosting`);
      } else {
        return [
          createTextVNode("Web Hosting")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Microsoft Cloud`);
      } else {
        return [
          createTextVNode("Microsoft Cloud")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`AWS Cloud`);
      } else {
        return [
          createTextVNode("AWS Cloud")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div><h4>Contact</h4><ul><li><a href="mailto:info@igeniusai.com">info@igeniusai.com</a></li><li><a href="tel:+14157999321">+1 415 799 9321</a></li><li>iGenius Singapore Operations</li></ul></div></div><div class="copyright"><span>\xA9 2007 to 2026 iGenius Singapore. All rights reserved.</span><span>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacy`);
      } else {
        return [
          createTextVNode("Privacy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` \xA0\xB7\xA0 `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Terms`);
      } else {
        return [
          createTextVNode("Terms")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = _sfc_main$2;
  const _component_TheFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(`<main id="main">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-CuYc5LfP.mjs.map
