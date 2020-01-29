define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/google_fonts/google_fonts', 'packages/smooth_star_rating/smooth_star_rating'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__google_fonts__google_fonts, packages__smooth_star_rating__smooth_star_rating) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const floating_action_button = packages__flutter__material.src__material__floating_action_button;
  const icons = packages__flutter__material.src__material__icons;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const google_fonts = packages__google_fonts__google_fonts.google_fonts;
  const smooth_star_rating = packages__smooth_star_rating__smooth_star_rating.smooth_star_rating;
  const foodtabs = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let doubleToNull = () => (doubleToNull = dart.constFn(dart.fnType(core.Null, [core.double])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 40,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 49,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 63,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 26,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "allowHalfRating",
        [_Location_column]: 23,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onRatingChanged",
        [_Location_column]: 23,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "starCount",
        [_Location_column]: 23,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rating",
        [_Location_column]: 23,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderColor",
        [_Location_column]: 23,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 23,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "spacing",
        [_Location_column]: 23,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 32,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 34,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 32,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 43,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 48,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "heroTag",
        [_Location_column]: 23,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mini",
        [_Location_column]: 23,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 23,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72, C73 || CT.C73, C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/foodtabs.dart"
      });
    }
  });
  foodtabs.FoodTab = class FoodTab extends framework.StatefulWidget {
    createState() {
      return new foodtabs._FoodTabState.new();
    }
  };
  (foodtabs.FoodTab.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    foodtabs.FoodTab.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = foodtabs.FoodTab.prototype;
  dart.addTypeTests(foodtabs.FoodTab);
  dart.setMethodSignature(foodtabs.FoodTab, () => ({
    __proto__: dart.getMethods(foodtabs.FoodTab.__proto__),
    createState: dart.fnType(foodtabs._FoodTabState, [])
  }));
  dart.setLibraryUri(foodtabs.FoodTab, "package:online_reservation/foodtabs.dart");
  const _buildListItem = dart.privateName(foodtabs, "_buildListItem");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
  let C8;
  let C9;
  let C10;
  let C7;
  let C6;
  let C13;
  let C12;
  let C11;
  let C16;
  let C17;
  let C18;
  let C19;
  let C15;
  let C14;
  let C22;
  let C21;
  let C20;
  let C25;
  let C26;
  let C24;
  let C23;
  let C29;
  let C30;
  let C31;
  let C32;
  let C33;
  let C34;
  let C35;
  let C36;
  let C28;
  let C27;
  let C39;
  let C40;
  let C38;
  let C37;
  let C43;
  let C42;
  let C41;
  let C46;
  let C47;
  let C45;
  let C44;
  let C50;
  let C49;
  let C48;
  let C53;
  let C54;
  let C52;
  let C51;
  let C57;
  let C56;
  let C55;
  let C60;
  let C61;
  let C59;
  let C58;
  let C64;
  let C65;
  let C63;
  let C62;
  let C68;
  let C67;
  let C66;
  let C71;
  let C72;
  let C73;
  let C74;
  let C75;
  let C70;
  let C69;
  let C78;
  let C79;
  let C77;
  let C76;
  let C82;
  let C83;
  let C81;
  let C80;
  foodtabs._FoodTabState = class _FoodTabState extends framework.State$(foodtabs.FoodTab) {
    build(context) {
      return new scaffold.Scaffold.new({body: new scroll_view.ListView.new({children: JSArrayOfWidget().of([framework.Widget._check(this[_buildListItem]("Delicious hot dog", 4.0, "6", "assets/hotdog.png")), framework.Widget._check(this[_buildListItem]("Cheese pizza", 5.0, "12", "assets/pizza.png"))]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    }
    [_buildListItem](foodName, rating, price, imgPath) {
      return new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(15.0), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new container.Container.new({width: 210.0, child: new basic.Row.new({children: JSArrayOfWidget().of([new container.Container.new({height: 75.0, width: 75.0, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(7.0), color: new ui.Color.new(4294960095)}), child: new basic.Center.new({child: new image.Image.asset(imgPath, {height: 50.0, width: 50.0, $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new text.Text.new(foodName, {style: google_fonts.GoogleFonts.notoSans({fontSize: 14.0, fontWeight: ui.FontWeight.w400}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), new smooth_star_rating.SmoothStarRating.new({allowHalfRating: false, onRatingChanged: dart.fn(v => {
                        }, doubleToNull()), starCount: core.int._check(dart.dsend(rating, 'toInt', [])), rating: core.double._check(rating), color: new ui.Color.new(4294955331), borderColor: new ui.Color.new(4294955331), size: 15.0, spacing: 0.0, $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("$" + dart.notNull(price), {style: google_fonts.GoogleFonts.lato({fontSize: 16.0, fontWeight: ui.FontWeight.w600, textStyle: new text_style.TextStyle.new({color: new ui.Color.new(4294348159)})}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), new basic.SizedBox.new({width: 3.0, $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), new text.Text.new("$" + "18", {style: google_fonts.GoogleFonts.lato({fontSize: 12.0, decoration: ui.TextDecoration.lineThrough, fontWeight: ui.FontWeight.w600, textStyle: new text_style.TextStyle.new({color: colors.Colors.grey.withOpacity(0.4)})}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44})]), $creationLocationd_0dea112b090073317d4: C48 || CT.C48})]), $creationLocationd_0dea112b090073317d4: C51 || CT.C51})]), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), new floating_action_button.FloatingActionButton.new({heroTag: foodName, mini: true, onPressed: dart.fn(() => {
              }, VoidToNull()), child: new basic.Center.new({child: new icon.Icon.new(icons.Icons.add, {color: colors.Colors.white, $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), backgroundColor: new ui.Color.new(4294868330), $creationLocationd_0dea112b090073317d4: C69 || CT.C69})]), $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80});
    }
  };
  (foodtabs._FoodTabState.new = function() {
    foodtabs._FoodTabState.__proto__.new.call(this);
    ;
  }).prototype = foodtabs._FoodTabState.prototype;
  dart.addTypeTests(foodtabs._FoodTabState);
  dart.setMethodSignature(foodtabs._FoodTabState, () => ({
    __proto__: dart.getMethods(foodtabs._FoodTabState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildListItem]: dart.fnType(dart.dynamic, [core.String, dart.dynamic, core.String, core.String])
  }));
  dart.setLibraryUri(foodtabs._FoodTabState, "package:online_reservation/foodtabs.dart");
  dart.trackLibraries("packages/online_reservation/foodtabs", {
    "package:online_reservation/foodtabs.dart": foodtabs
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["foodtabs.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAMiC;IAAe;;;;;;EAChD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,kCACC,wCACc,8CAChB,qBAAe,qBAAqB,KAAK,KAAK,+CAC9C,qBAAe,gBAAgB,KAAK,MAAM;IAIlD;qBAEsB,UAAU,QAAe,OAAc;AAC3D,YAAO,iCACe,+BAAI,cACjB,sCACgC,+CACnB,sBAChB,oCACS,cACA,6BACa,sBAChB,qCACU,aACD,kBACK,oDACiB,wCAAS,aAC7B,iBAAM,sBAER,6BACQ,sBAAM,OAAO,WAAU,aAAa,+KAGrD,+BAAgB,+DAChB,0CACyC,yCACrB,sBAChB,kBACE,QAAQ,UACW,6CACP,kBACa,+EAG3B,8DACmB,wBACA,QAAC;uEACA,WAAP,MAAM,4CACT,MAAM,UACP,iBAAM,0BACA,iBAAM,mBACb,eACG,8DAEX,6BACoB,sBAChB,kBACE,AAAK,mBAAE,KAAK,WACO,yCACP,kBACa,+BACZ,qCACF,iBAAM,0EAInB,+BAAgB,8DAChB,kBACE,AAAK,MAAE,cACY,yCACP,kBACiB,2CACJ,+BACZ,qCACK,AAAK,+BAAY,6SAWnD,8DACqB,QAAQ,QACX,iBACK;uCACJ,6BACE,kBAAW,yBAAmB,wJAEtB,iBAAM;IAK3C;;;;;EAEF","file":"foodtabs.ddc.js"}');
  // Exports:
  return {
    foodtabs: foodtabs
  };
});

//# sourceMappingURL=foodtabs.ddc.js.map
