/*! Buefy v0.9.19 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Notification = {}));
}(this, function (exports) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var config = {
    defaultContainerElement: null,
    defaultIconPack: 'mdi',
    defaultIconComponent: null,
    defaultIconPrev: 'chevron-left',
    defaultIconNext: 'chevron-right',
    defaultLocale: undefined,
    defaultDialogConfirmText: null,
    defaultDialogCancelText: null,
    defaultSnackbarDuration: 3500,
    defaultSnackbarPosition: null,
    defaultToastDuration: 2000,
    defaultToastPosition: null,
    defaultNotificationDuration: 2000,
    defaultNotificationPosition: null,
    defaultTooltipType: 'is-primary',
    defaultTooltipDelay: null,
    defaultSidebarDelay: null,
    defaultInputAutocomplete: 'on',
    defaultDateFormatter: null,
    defaultDateParser: null,
    defaultDateCreator: null,
    defaultTimeCreator: null,
    defaultDayNames: null,
    defaultMonthNames: null,
    defaultFirstDayOfWeek: null,
    defaultUnselectableDaysOfWeek: null,
    defaultTimeFormatter: null,
    defaultTimeParser: null,
    defaultModalCanCancel: ['escape', 'x', 'outside', 'button'],
    defaultModalScroll: null,
    defaultDatepickerMobileNative: true,
    defaultTimepickerMobileNative: true,
    defaultNoticeQueue: true,
    defaultInputHasCounter: true,
    defaultTaginputHasCounter: true,
    defaultUseHtml5Validation: true,
    defaultDropdownMobileModal: true,
    defaultFieldLabelPosition: null,
    defaultDatepickerYearsRange: [-100, 10],
    defaultDatepickerNearbyMonthDays: true,
    defaultDatepickerNearbySelectableMonthDays: false,
    defaultDatepickerShowWeekNumber: false,
    defaultDatepickerWeekNumberClickable: false,
    defaultDatepickerMobileModal: true,
    defaultTrapFocus: true,
    defaultAutoFocus: true,
    defaultButtonRounded: false,
    defaultSwitchRounded: true,
    defaultCarouselInterval: 3500,
    defaultTabsExpanded: false,
    defaultTabsAnimated: true,
    defaultTabsType: null,
    defaultStatusIcon: true,
    defaultProgrammaticPromise: false,
    defaultLinkTags: ['a', 'button', 'input', 'router-link', 'nuxt-link', 'n-link', 'RouterLink', 'NuxtLink', 'NLink'],
    defaultImageWebpFallback: null,
    defaultImageLazy: true,
    defaultImageResponsive: true,
    defaultImageRatio: null,
    defaultImageSrcsetFormatter: null,
    defaultBreadcrumbTag: 'a',
    defaultBreadcrumbAlign: 'is-left',
    defaultBreadcrumbSeparator: '',
    defaultBreadcrumbSize: 'is-medium',
    customIconPacks: null
  };
  var VueInstance;

  /**
   * Merge function to replace Object.assign with deep merging possibility
   */

  var isObject = function isObject(item) {
    return _typeof(item) === 'object' && !Array.isArray(item);
  };

  var mergeFn = function mergeFn(target, source) {
    var deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (deep || !Object.assign) {
      var isDeep = function isDeep(prop) {
        return isObject(source[prop]) && target !== null && target.hasOwnProperty(prop) && isObject(target[prop]);
      };

      var replaced = Object.getOwnPropertyNames(source).map(function (prop) {
        return _defineProperty({}, prop, isDeep(prop) ? mergeFn(target[prop], source[prop], deep) : source[prop]);
      }).reduce(function (a, b) {
        return _objectSpread2({}, a, {}, b);
      }, {});
      return _objectSpread2({}, target, {}, replaced);
    } else {
      return Object.assign(target, source);
    }
  };

  var merge = mergeFn;
  function removeElement(el) {
    if (typeof el.remove !== 'undefined') {
      el.remove();
    } else if (typeof el.parentNode !== 'undefined' && el.parentNode !== null) {
      el.parentNode.removeChild(el);
    }
  }

  var mdiIcons = {
    sizes: {
      'default': 'mdi-24px',
      'is-small': null,
      'is-medium': 'mdi-36px',
      'is-large': 'mdi-48px'
    },
    iconPrefix: 'mdi-'
  };

  var faIcons = function faIcons() {
    var faIconPrefix = config && config.defaultIconComponent ? '' : 'fa-';
    return {
      sizes: {
        'default': null,
        'is-small': null,
        'is-medium': faIconPrefix + 'lg',
        'is-large': faIconPrefix + '2x'
      },
      iconPrefix: faIconPrefix,
      internalIcons: {
        'information': 'info-circle',
        'alert': 'exclamation-triangle',
        'alert-circle': 'exclamation-circle',
        'chevron-right': 'angle-right',
        'chevron-left': 'angle-left',
        'chevron-down': 'angle-down',
        'eye-off': 'eye-slash',
        'menu-down': 'caret-down',
        'menu-up': 'caret-up',
        'close-circle': 'times-circle'
      }
    };
  };

  var getIcons = function getIcons() {
    var icons = {
      mdi: mdiIcons,
      fa: faIcons(),
      fas: faIcons(),
      far: faIcons(),
      fad: faIcons(),
      fab: faIcons(),
      fal: faIcons(),
      'fa-solid': faIcons(),
      'fa-regular': faIcons(),
      'fa-light': faIcons(),
      'fa-thin': faIcons(),
      'fa-duotone': faIcons(),
      'fa-brands': faIcons()
    };

    if (config && config.customIconPacks) {
      icons = merge(icons, config.customIconPacks, true);
    }

    return icons;
  };

  var script = {
    name: 'BIcon',
    props: {
      type: [String, Object],
      component: String,
      pack: String,
      icon: String,
      size: String,
      customSize: String,
      customClass: String,
      both: Boolean // This is used internally to show both MDI and FA icon

    },
    computed: {
      iconConfig: function iconConfig() {
        var allIcons = getIcons();
        return allIcons[this.newPack];
      },
      iconPrefix: function iconPrefix() {
        if (this.iconConfig && this.iconConfig.iconPrefix) {
          return this.iconConfig.iconPrefix;
        }

        return '';
      },

      /**
      * Internal icon name based on the pack.
      * If pack is 'fa', gets the equivalent FA icon name of the MDI,
      * internal icons are always MDI.
      */
      newIcon: function newIcon() {
        return "".concat(this.iconPrefix).concat(this.getEquivalentIconOf(this.icon));
      },
      newPack: function newPack() {
        return this.pack || config.defaultIconPack;
      },
      newType: function newType() {
        if (!this.type) return;
        var splitType = [];

        if (typeof this.type === 'string') {
          splitType = this.type.split('-');
        } else {
          for (var key in this.type) {
            if (this.type[key]) {
              splitType = key.split('-');
              break;
            }
          }
        }

        if (splitType.length <= 1) return;

        var _splitType = splitType,
            _splitType2 = _toArray(_splitType),
            type = _splitType2.slice(1);

        return "has-text-".concat(type.join('-'));
      },
      newCustomSize: function newCustomSize() {
        return this.customSize || this.customSizeByPack;
      },
      customSizeByPack: function customSizeByPack() {
        if (this.iconConfig && this.iconConfig.sizes) {
          if (this.size && this.iconConfig.sizes[this.size] !== undefined) {
            return this.iconConfig.sizes[this.size];
          } else if (this.iconConfig.sizes.default) {
            return this.iconConfig.sizes.default;
          }
        }

        return null;
      },
      useIconComponent: function useIconComponent() {
        return this.component || config.defaultIconComponent;
      }
    },
    methods: {
      /**
      * Equivalent icon name of the MDI.
      */
      getEquivalentIconOf: function getEquivalentIconOf(value) {
        // Only transform the class if the both prop is set to true
        if (!this.both) {
          return value;
        }

        if (this.iconConfig && this.iconConfig.internalIcons && this.iconConfig.internalIcons[value]) {
          return this.iconConfig.internalIcons[value];
        }

        return value;
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"icon",class:[_vm.newType, _vm.size]},[(!_vm.useIconComponent)?_c('i',{class:[_vm.newPack, _vm.newIcon, _vm.newCustomSize, _vm.customClass]}):_c(_vm.useIconComponent,{tag:"component",class:[_vm.customClass],attrs:{"icon":[_vm.newPack, _vm.newIcon],"size":_vm.newCustomSize}})],1)};
  var __vue_staticRenderFns__ = [];

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Icon = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  var MessageMixin = {
    components: _defineProperty({}, Icon.name, Icon),
    // deprecated, to replace with default 'value' in the next breaking change
    model: {
      prop: 'active',
      event: 'update:active'
    },
    props: {
      active: {
        type: Boolean,
        default: true
      },
      title: String,
      closable: {
        type: Boolean,
        default: true
      },
      message: String,
      type: String,
      hasIcon: Boolean,
      size: String,
      icon: String,
      iconPack: String,
      iconSize: String,
      autoClose: {
        type: Boolean,
        default: false
      },
      duration: {
        type: Number,
        default: 2000
      },
      progressBar: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        isActive: this.active,
        remainingTime: this.duration / 1000,
        // in seconds
        newIconSize: this.iconSize || this.size || 'is-large'
      };
    },
    watch: {
      active: function active(value) {
        this.isActive = value;
      },
      isActive: function isActive(value) {
        if (value) {
          this.setAutoClose();
          this.setDurationProgress();
        } else {
          if (this.timer) {
            clearTimeout(this.timer);
          }
        }
      }
    },
    computed: {
      /**
       * Icon name (MDI) based on type.
       */
      computedIcon: function computedIcon() {
        if (this.icon) {
          return this.icon;
        }

        switch (this.type) {
          case 'is-info':
            return 'information';

          case 'is-success':
            return 'check-circle';

          case 'is-warning':
            return 'alert';

          case 'is-danger':
            return 'alert-circle';

          default:
            return null;
        }
      }
    },
    methods: {
      /**
       * Close the Message and emit events.
       */
      close: function close() {
        this.isActive = false;
        this.resetDurationProgress();
        this.$emit('close');
        this.$emit('update:active', false);
      },
      click: function click() {
        this.$emit('click');
      },

      /**
       * Set timer to auto close message
       */
      setAutoClose: function setAutoClose() {
        var _this = this;

        if (this.autoClose) {
          this.timer = setTimeout(function () {
            if (_this.isActive) {
              _this.close();
            }
          }, this.duration);
        }
      },
      setDurationProgress: function setDurationProgress() {
        var _this2 = this;

        if (this.progressBar) {
          /**
           * Runs every one second to set the duration passed before
           * the alert will auto close to show it in the progress bar (Remaining Time)
           */
          this.$buefy.globalNoticeInterval = setInterval(function () {
            if (_this2.remainingTime !== 0) {
              _this2.remainingTime -= 1;
            } else {
              _this2.resetDurationProgress();
            }
          }, 1000);
        }
      },
      resetDurationProgress: function resetDurationProgress() {
        var _this3 = this;

        /**
         * Wait until the component get closed and then reset
         **/
        setTimeout(function () {
          _this3.remainingTime = _this3.duration / 1000;
          clearInterval(_this3.$buefy.globalNoticeInterval);
        }, 100);
      }
    },
    mounted: function mounted() {
      this.setAutoClose();
    }
  };

  //
  var script$1 = {
    name: 'BNotification',
    mixins: [MessageMixin],
    props: {
      position: String,
      ariaCloseLabel: String,
      animation: {
        type: String,
        default: 'fade'
      }
    }
  };

  /* script */
  const __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.animation}},[_c('article',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],staticClass:"notification",class:[_vm.type, _vm.position],on:{"click":_vm.click}},[(_vm.closable)?_c('button',{staticClass:"delete",attrs:{"type":"button","aria-label":_vm.ariaCloseLabel},on:{"click":_vm.close}}):_vm._e(),(_vm.$slots.default || _vm.message)?_c('div',{staticClass:"media"},[(_vm.computedIcon && _vm.hasIcon)?_c('div',{staticClass:"media-left"},[_c('b-icon',{attrs:{"icon":_vm.computedIcon,"pack":_vm.iconPack,"size":_vm.newIconSize,"both":"","aria-hidden":""}})],1):_vm._e(),_c('div',{staticClass:"media-content"},[(_vm.$slots.default)?[_vm._t("default")]:[_c('p',{staticClass:"text",domProps:{"innerHTML":_vm._s(_vm.message)}})]],2)]):_vm._e(),(_vm.progressBar)?_c('b-progress',{attrs:{"value":_vm.remainingTime - 1,"max":_vm.duration / 1000 - 1,"type":_vm.type,"rounded":false}}):_vm._e()],1)])};
  var __vue_staticRenderFns__$1 = [];

    /* style */
    const __vue_inject_styles__$1 = undefined;
    /* scoped */
    const __vue_scope_id__$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Notification = normalizeComponent_1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      undefined,
      undefined
    );

  var NoticeMixin = {
    props: {
      type: {
        type: String,
        default: 'is-dark'
      },
      message: [String, Array],
      duration: Number,
      queue: {
        type: Boolean,
        default: undefined
      },
      indefinite: {
        type: Boolean,
        default: false
      },
      pauseOnHover: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'is-top',
        validator: function validator(value) {
          return ['is-top-right', 'is-top', 'is-top-left', 'is-bottom-right', 'is-bottom', 'is-bottom-left'].indexOf(value) > -1;
        }
      },
      container: String
    },
    data: function data() {
      return {
        isActive: false,
        isPaused: false,
        parentTop: null,
        parentBottom: null,
        newContainer: this.container || config.defaultContainerElement
      };
    },
    computed: {
      correctParent: function correctParent() {
        switch (this.position) {
          case 'is-top-right':
          case 'is-top':
          case 'is-top-left':
            return this.parentTop;

          case 'is-bottom-right':
          case 'is-bottom':
          case 'is-bottom-left':
            return this.parentBottom;
        }
      },
      transition: function transition() {
        switch (this.position) {
          case 'is-top-right':
          case 'is-top':
          case 'is-top-left':
            return {
              enter: 'fadeInDown',
              leave: 'fadeOut'
            };

          case 'is-bottom-right':
          case 'is-bottom':
          case 'is-bottom-left':
            return {
              enter: 'fadeInUp',
              leave: 'fadeOut'
            };
        }
      }
    },
    methods: {
      pause: function pause() {
        if (this.pauseOnHover && !this.indefinite) {
          this.isPaused = true;
          clearInterval(this.$buefy.globalNoticeInterval);
        }
      },
      removePause: function removePause() {
        if (this.pauseOnHover && !this.indefinite) {
          this.isPaused = false;
          this.close();
        }
      },
      shouldQueue: function shouldQueue() {
        var queue = this.queue !== undefined ? this.queue : config.defaultNoticeQueue;
        if (!queue) return false;
        return this.parentTop.childElementCount > 0 || this.parentBottom.childElementCount > 0;
      },
      click: function click() {
        this.$emit('click');
      },
      close: function close() {
        var _this = this;

        if (!this.isPaused) {
          clearTimeout(this.timer);
          this.isActive = false;
          this.$emit('close'); // Timeout for the animation complete before destroying

          setTimeout(function () {
            _this.$destroy();

            removeElement(_this.$el);
          }, 150);
        }
      },
      timeoutCallback: function timeoutCallback() {
        return this.close();
      },
      showNotice: function showNotice() {
        var _this2 = this;

        if (this.shouldQueue()) this.correctParent.innerHTML = '';
        this.correctParent.insertAdjacentElement('afterbegin', this.$el);
        this.isActive = true;

        if (!this.indefinite) {
          this.timer = setTimeout(function () {
            return _this2.timeoutCallback();
          }, this.newDuration);
        }
      },
      setupContainer: function setupContainer() {
        this.parentTop = document.querySelector((this.newContainer ? this.newContainer : 'body') + '>.notices.is-top');
        this.parentBottom = document.querySelector((this.newContainer ? this.newContainer : 'body') + '>.notices.is-bottom');
        if (this.parentTop && this.parentBottom) return;

        if (!this.parentTop) {
          this.parentTop = document.createElement('div');
          this.parentTop.className = 'notices is-top';
        }

        if (!this.parentBottom) {
          this.parentBottom = document.createElement('div');
          this.parentBottom.className = 'notices is-bottom';
        }

        var container = document.querySelector(this.newContainer) || document.body;
        container.appendChild(this.parentTop);
        container.appendChild(this.parentBottom);

        if (this.newContainer) {
          this.parentTop.classList.add('has-custom-container');
          this.parentBottom.classList.add('has-custom-container');
        }
      }
    },
    beforeMount: function beforeMount() {
      this.setupContainer();
    },
    mounted: function mounted() {
      this.showNotice();
    }
  };

  //
  var script$2 = {
    name: 'BNotificationNotice',
    mixins: [NoticeMixin],
    data: function data() {
      return {
        newDuration: this.duration || config.defaultNotificationDuration
      };
    },
    methods: {
      close: function close() {
        var _this = this;

        if (!this.isPaused) {
          clearTimeout(this.timer);
          this.$refs.notification.isActive = false;
          this.$emit('close'); // Timeout for the animation complete before destroying

          setTimeout(function () {
            _this.$destroy();

            removeElement(_this.$el);
          }, 150);
        }
      }
    }
  };

  /* script */
  const __vue_script__$2 = script$2;

  /* template */
  var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-notification',_vm._b({ref:"notification",on:{"click":_vm.click,"close":_vm.close},nativeOn:{"mouseenter":function($event){return _vm.pause($event)},"mouseleave":function($event){return _vm.removePause($event)}}},'b-notification',_vm.$options.propsData,false),[_vm._t("default")],2)};
  var __vue_staticRenderFns__$2 = [];

    /* style */
    const __vue_inject_styles__$2 = undefined;
    /* scoped */
    const __vue_scope_id__$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var NotificationNotice = normalizeComponent_1(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      undefined,
      undefined
    );

  var use = function use(plugin) {
    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(plugin);
    }
  };
  var registerComponent = function registerComponent(Vue, component) {
    Vue.component(component.name, component);
  };
  var registerComponentProgrammatic = function registerComponentProgrammatic(Vue, property, component) {
    if (!Vue.prototype.$buefy) Vue.prototype.$buefy = {};
    Vue.prototype.$buefy[property] = component;
  };

  var localVueInstance;
  var NotificationProgrammatic = {
    open: function open(params) {
      var parent;

      if (typeof params === 'string') {
        params = {
          message: params
        };
      }

      var defaultParam = {
        position: config.defaultNotificationPosition || 'is-top-right'
      };

      if (params.parent) {
        parent = params.parent;
        delete params.parent;
      }

      var slot;

      if (Array.isArray(params.message)) {
        slot = params.message;
        delete params.message;
      } // fix animation


      params.active = false;
      var propsData = merge(defaultParam, params);
      var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || VueInstance;
      var NotificationNoticeComponent = vm.extend(NotificationNotice);
      var component = new NotificationNoticeComponent({
        parent: parent,
        el: document.createElement('div'),
        propsData: propsData
      });

      if (slot) {
        component.$slots.default = slot;
        component.$forceUpdate();
      } // fix animation


      component.$children[0].isActive = true;
      return component;
    }
  };
  var Plugin = {
    install: function install(Vue) {
      localVueInstance = Vue;
      registerComponent(Vue, Notification);
      registerComponentProgrammatic(Vue, 'notification', NotificationProgrammatic);
    }
  };
  use(Plugin);

  exports.BNotification = Notification;
  exports.NotificationProgrammatic = NotificationProgrammatic;
  exports.default = Plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
