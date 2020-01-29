define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/google_fonts/google_fonts'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__google_fonts__google_fonts) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const icons = packages__flutter__material.src__material__icons;
  const colors = packages__flutter__material.src__material__colors;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_shadow = packages__flutter__src__painting___network_image_web.src__painting__box_shadow;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const google_fonts = packages__google_fonts__google_fonts.google_fonts;
  const burguerpage = Object.create(dart.library);
  const $toString = dartx.toString;
  const $toUpperCase = dartx.toUpperCase;
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(box_shadow.BoxShadow)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 28,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 34,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 43,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 58,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 25,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 25,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 25,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 23,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "right",
        [_Location_column]: 23,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 20,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 15
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61, C62 || CT.C62], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 42,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65, C66 || CT.C66], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 20,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/burguerpage.dart"
      });
    }
  });
  const imgPath$ = dart.privateName(burguerpage, "BurguerPage.imgPath");
  const foodName$ = dart.privateName(burguerpage, "BurguerPage.foodName");
  const pricePerItem$ = dart.privateName(burguerpage, "BurguerPage.pricePerItem");
  const heroTag$ = dart.privateName(burguerpage, "BurguerPage.heroTag");
  burguerpage.BurguerPage = class BurguerPage extends framework.StatefulWidget {
    get imgPath() {
      return this[imgPath$];
    }
    set imgPath(value) {
      super.imgPath = value;
    }
    get foodName() {
      return this[foodName$];
    }
    set foodName(value) {
      super.foodName = value;
    }
    get pricePerItem() {
      return this[pricePerItem$];
    }
    set pricePerItem(value) {
      super.pricePerItem = value;
    }
    get heroTag() {
      return this[heroTag$];
    }
    set heroTag(value) {
      super.heroTag = value;
    }
    createState() {
      return new burguerpage._BurguerPageState.new();
    }
  };
  (burguerpage.BurguerPage.new = function(opts) {
    let imgPath = opts && 'imgPath' in opts ? opts.imgPath : null;
    let foodName = opts && 'foodName' in opts ? opts.foodName : null;
    let pricePerItem = opts && 'pricePerItem' in opts ? opts.pricePerItem : null;
    let heroTag = opts && 'heroTag' in opts ? opts.heroTag : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[imgPath$] = imgPath;
    this[foodName$] = foodName;
    this[pricePerItem$] = pricePerItem;
    this[heroTag$] = heroTag;
    burguerpage.BurguerPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = burguerpage.BurguerPage.prototype;
  dart.addTypeTests(burguerpage.BurguerPage);
  dart.setMethodSignature(burguerpage.BurguerPage, () => ({
    __proto__: dart.getMethods(burguerpage.BurguerPage.__proto__),
    createState: dart.fnType(burguerpage._BurguerPageState, [])
  }));
  dart.setLibraryUri(burguerpage.BurguerPage, "package:online_reservation/burguerpage.dart");
  dart.setFieldSignature(burguerpage.BurguerPage, () => ({
    __proto__: dart.getFields(burguerpage.BurguerPage.__proto__),
    imgPath: dart.finalFieldType(dart.dynamic),
    foodName: dart.finalFieldType(dart.dynamic),
    pricePerItem: dart.finalFieldType(dart.dynamic),
    heroTag: dart.finalFieldType(dart.dynamic)
  }));
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C7;
  let C8;
  let C5;
  let C4;
  let C11;
  let C12;
  let C10;
  let C9;
  let C15;
  let C14;
  let C13;
  let C18;
  let C19;
  let C20;
  let C21;
  let C17;
  let C16;
  let C24;
  let C25;
  let C23;
  let C22;
  let C28;
  let C27;
  let C26;
  let C31;
  let C32;
  let C33;
  let C34;
  let C30;
  let C29;
  let C37;
  let C38;
  let C39;
  let C36;
  let C35;
  let C42;
  let C41;
  let C40;
  let C45;
  let C46;
  let C44;
  let C43;
  let C49;
  let C50;
  let C48;
  let C47;
  let C53;
  let C52;
  let C51;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C54;
  let C57;
  let C58;
  let C56;
  let C55;
  let C61;
  let C62;
  let C60;
  let C59;
  let C65;
  let C66;
  let C64;
  let C63;
  let C69;
  let C70;
  let C68;
  let C67;
  let C73;
  let C72;
  let C71;
  let C76;
  let C75;
  let C74;
  let C79;
  let C78;
  let C77;
  let C82;
  let C81;
  let C80;
  burguerpage._BurguerPageState = class _BurguerPageState extends framework.State$(burguerpage.BurguerPage) {
    build(context) {
      return new scaffold.Scaffold.new({body: new scroll_view.ListView.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(15.0), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.menu, {color: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new basic.Stack.new({children: JSArrayOfWidget().of([new container.Container.new({height: 45.0, width: 45.0, color: colors.Colors.transparent, $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new container.Container.new({height: 40.0, width: 40.0, decoration: new box_decoration.BoxDecoration.new({boxShadow: JSArrayOfBoxShadow().of([new box_shadow.BoxShadow.new({color: new ui.Color.new(4294868330).withOpacity(0.3), blurRadius: 6.0, spreadRadius: 4.0, offset: new ui.Offset.new(0.0, 4.0)})]), color: new ui.Color.new(4294868330), shape: box_border.BoxShape.circle}), child: new basic.Center.new({child: new icon.Icon.new(icons.Icons.shopping_cart, {color: colors.Colors.white, $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), new basic.Positioned.new({top: 1.0, right: 4.0, child: new container.Container.new({height: 12.0, width: 12.0, decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.white, shape: box_border.BoxShape.circle}), child: new basic.Center.new({child: new text.Text.new("1", {style: google_fonts.GoogleFonts.notoSans({fontSize: 7.0, textStyle: new text_style.TextStyle.new({color: colors.Colors.red})}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35})]), $creationLocationd_0dea112b090073317d4: C40 || CT.C40})]), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), new basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), new basic.Padding.new({padding: C54 || CT.C54, child: new text.Text.new("SUPER", {style: google_fonts.GoogleFonts.notoSans({fontWeight: ui.FontWeight.w800, fontSize: 27.0}), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), new basic.Padding.new({padding: C54 || CT.C54, child: new text.Text.new(dart.toString(this.widget.foodName)[$toUpperCase](), {style: google_fonts.GoogleFonts.notoSans({fontWeight: ui.FontWeight.w800, fontSize: 27.0}), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), new basic.SizedBox.new({height: 40.0, $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, $creationLocationd_0dea112b090073317d4: C74 || CT.C74})]), $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80});
    }
  };
  (burguerpage._BurguerPageState.new = function() {
    burguerpage._BurguerPageState.__proto__.new.call(this);
    ;
  }).prototype = burguerpage._BurguerPageState.prototype;
  dart.addTypeTests(burguerpage._BurguerPageState);
  dart.setMethodSignature(burguerpage._BurguerPageState, () => ({
    __proto__: dart.getMethods(burguerpage._BurguerPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(burguerpage._BurguerPageState, "package:online_reservation/burguerpage.dart");
  dart.trackLibraries("packages/online_reservation/burguerpage", {
    "package:online_reservation/burguerpage.dart": burguerpage
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["burguerpage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKQ;;;;;;IAAS;;;;;;IAAU;;;;;;IAAa;;;;;;;AAKH;IAAmB;;;QAHpC;QAAa;QAAc;QAAkB;;IAA7C;IAAa;IAAc;IAAkB;AAA/D;;EAAwE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAQ9C;AACxB,YAAO,kCACC,wCACc,sBAChB,gCACsB,+BAAI,cACjB,sCACgC,+CACnB,sBAChB,kBAAW,0BAAoB,4EAC/B,+BACoB,sBAChB,qCACU,aACD,aACO,kFAEhB,qCACU,aACD,kBACK,iDACC,yBACT,qCACS,AAAkB,iBAAZ,wBAAwB,kBACzB,mBACE,aACN,kBAAO,KAAK,iBAGjB,iBAAM,oBACG,qCAEX,6BACE,kBAAW,mCAA6B,8LAGnD,+BACO,YACE,YACA,qCACG,aACD,kBACK,6CACI,4BACE,qCAEX,6BACE,kBACL,aACmB,6CACP,gBACC,qCAAwB,0aAWvD,gCAAiB,+DACjB,sDAES,kBACL,iBACmB,+CACM,8BAAgB,0HAI7C,sDAES,kBACW,AAAW,cAA3B,AAAO,+CACY,+CACM,8BAAgB,0HAI7C,gCAAiB,+DACjB,sCACuC;IAK/C;;;;;EACF","file":"burguerpage.ddc.js"}');
  // Exports:
  return {
    burguerpage: burguerpage
  };
});

//# sourceMappingURL=burguerpage.ddc.js.map
