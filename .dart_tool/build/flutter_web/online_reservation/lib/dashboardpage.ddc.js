define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/google_fonts/google_fonts', 'packages/online_reservation/foodtabs', 'packages/online_reservation/burguerpage'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__google_fonts__google_fonts, packages__online_reservation__foodtabs, packages__online_reservation__burguerpage) {
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
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const heroes = packages__flutter__src__widgets__actions.src__widgets__heroes;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const tab_controller = packages__flutter__material.src__material__tab_controller;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const icons = packages__flutter__material.src__material__icons;
  const colors = packages__flutter__material.src__material__colors;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const input_border = packages__flutter__material.src__material__input_border;
  const tabs = packages__flutter__material.src__material__tabs;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const page = packages__flutter__material.src__material__page;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_shadow = packages__flutter__src__painting___network_image_web.src__painting__box_shadow;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const image_resolution = packages__flutter__src__painting___network_image_web.src__painting__image_resolution;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const google_fonts = packages__google_fonts__google_fonts.google_fonts;
  const foodtabs = packages__online_reservation__foodtabs.foodtabs;
  const burguerpage = packages__online_reservation__burguerpage.burguerpage;
  const dashboardpage = Object.create(dart.library);
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(box_shadow.BoxShadow)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToBurguerPage = () => (BuildContextToBurguerPage = dart.constFn(dart.fnType(burguerpage.BurguerPage, [framework.BuildContext])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 28,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 34,
        [_Location_line]: 32,
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
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 36,
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
        [_Location_column]: 17,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 31,
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
        [_Location_column]: 20,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 15
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 58,
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
        [_Location_column]: 11,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 20,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 42,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 50,
        [_Location_line]: 88,
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
        [_Location_column]: 31,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 83,
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
        [_Location_column]: 22,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 20,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58, C59 || CT.C59], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62, C63 || CT.C63], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 20,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 15,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 108,
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
        [_Location_column]: 20,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 20,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C85 || CT.C85,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 15,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isScrollable",
        [_Location_column]: 15,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicatorColor",
        [_Location_column]: 15,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelColor",
        [_Location_column]: 15,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "unselectedLabelColor",
        [_Location_column]: 15,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelStyle",
        [_Location_column]: 15,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "unselectedLabelStyle",
        [_Location_column]: 15,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tabs",
        [_Location_column]: 15,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105, C106 || CT.C106, C107 || CT.C107, C108 || CT.C108, C109 || CT.C109, C110 || CT.C110, C111 || CT.C111], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114, C115 || CT.C115], widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C113 || CT.C113,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C117() {
      return C117 = dart.constList([], widget_inspector._Location);
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 15,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127, C128 || CT.C128], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.constList([C131 || CT.C131], widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C130 || CT.C130,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.constList([C134 || CT.C134], widget_inspector._Location);
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C133 || CT.C133,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "heroTag",
        [_Location_column]: 47,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "foodName",
        [_Location_column]: 66,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pricePerItem",
        [_Location_column]: 86,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "imgPath",
        [_Location_column]: 107,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137, C138 || CT.C138, C139 || CT.C139, C140 || CT.C140], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C136 || CT.C136,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 40,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 49,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 62,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.constList([C143 || CT.C143, C144 || CT.C144, C145 || CT.C145], widget_inspector._Location);
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C142 || CT.C142,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 184,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148], widget_inspector._Location);
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.constList([C151 || CT.C151, C152 || CT.C152, C153 || CT.C153, C154 || CT.C154], widget_inspector._Location);
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C150 || CT.C150,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 176,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tag",
        [_Location_column]: 17,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.constList([C157 || CT.C157, C158 || CT.C158], widget_inspector._Location);
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C156 || CT.C156,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.constList([C161 || CT.C161], widget_inspector._Location);
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C160 || CT.C160,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 188,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.constList([C164 || CT.C164, C165 || CT.C165], widget_inspector._Location);
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C163 || CT.C163,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 189,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 22,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.constList([C168 || CT.C168, C169 || CT.C169], widget_inspector._Location);
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C167 || CT.C167,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 196,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.constList([C172 || CT.C172, C173 || CT.C173], widget_inspector._Location);
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C171 || CT.C171,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.constList([C176 || CT.C176, C177 || CT.C177, C178 || CT.C178, C179 || CT.C179], widget_inspector._Location);
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C175 || CT.C175,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.constList([C182 || CT.C182, C183 || CT.C183], widget_inspector._Location);
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C181 || CT.C181,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.constList([C186 || CT.C186, C187 || CT.C187], widget_inspector._Location);
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C185 || CT.C185,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 156,
        [_Location_file]: "org-dartlang-app:///packages/online_reservation/dashboardpage.dart"
      });
    }
  });
  dashboardpage.DashboardPage = class DashboardPage extends framework.StatefulWidget {
    createState() {
      return new dashboardpage._DashboardPageState.new();
    }
  };
  (dashboardpage.DashboardPage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    dashboardpage.DashboardPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dashboardpage.DashboardPage.prototype;
  dart.addTypeTests(dashboardpage.DashboardPage);
  dart.setMethodSignature(dashboardpage.DashboardPage, () => ({
    __proto__: dart.getMethods(dashboardpage.DashboardPage.__proto__),
    createState: dart.fnType(dashboardpage._DashboardPageState, [])
  }));
  dart.setLibraryUri(dashboardpage.DashboardPage, "package:online_reservation/dashboardpage.dart");
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
  let C16;
  let C14;
  let C13;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C17;
  let C20;
  let C21;
  let C19;
  let C18;
  let C24;
  let C25;
  let C23;
  let C22;
  let C28;
  let C29;
  let C27;
  let C26;
  let C32;
  let C33;
  let C31;
  let C30;
  let C36;
  let C35;
  let C34;
  let C39;
  let C40;
  let C38;
  let C37;
  let C43;
  let C42;
  let C41;
  let C46;
  let C47;
  let C48;
  let C45;
  let C44;
  let C51;
  let C52;
  let C50;
  let C49;
  let C55;
  let C54;
  let C53;
  let C58;
  let C59;
  let C57;
  let C56;
  let C62;
  let C63;
  let C61;
  let C60;
  let C66;
  let C65;
  let C64;
  const _buildListItem = dart.privateName(dashboardpage, "_buildListItem");
  let C69;
  let C70;
  let C68;
  let C67;
  let C73;
  let C74;
  let C72;
  let C71;
  let C77;
  let C76;
  let C75;
  let C80;
  let C79;
  let C78;
  let C83;
  let C82;
  let C81;
  let C86;
  let C85;
  let C84;
  let C89;
  let C88;
  let C87;
  let C92;
  let C91;
  let C90;
  let C95;
  let C94;
  let C93;
  let C98;
  let C97;
  let C96;
  let C101;
  let C100;
  let C99;
  let C104;
  let C105;
  let C106;
  let C107;
  let C108;
  let C109;
  let C110;
  let C111;
  let C103;
  let C102;
  let C114;
  let C115;
  let C113;
  let C112;
  let C117;
  let C116;
  let C118;
  let C119;
  let C120;
  let C123;
  let C124;
  let C122;
  let C121;
  let C127;
  let C128;
  let C126;
  let C125;
  let C131;
  let C130;
  let C129;
  let C134;
  let C133;
  let C132;
  let C137;
  let C138;
  let C139;
  let C140;
  let C136;
  let C135;
  let C143;
  let C144;
  let C145;
  let C142;
  let C141;
  let C148;
  let C147;
  let C146;
  let C151;
  let C152;
  let C153;
  let C154;
  let C150;
  let C149;
  let C157;
  let C158;
  let C156;
  let C155;
  let C161;
  let C160;
  let C159;
  let C164;
  let C165;
  let C163;
  let C162;
  let C168;
  let C169;
  let C167;
  let C166;
  let C172;
  let C173;
  let C171;
  let C170;
  let C176;
  let C177;
  let C178;
  let C179;
  let C175;
  let C174;
  let C182;
  let C183;
  let C181;
  let C180;
  let C186;
  let C187;
  let C185;
  let C184;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(dashboardpage.DashboardPage) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(dashboardpage.DashboardPage)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(dashboardpage.DashboardPage));
  dashboardpage._DashboardPageState = class _DashboardPageState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      super.initState();
      this.tabController = new tab_controller.TabController.new({vsync: this, length: 4});
    }
    build(context) {
      return new scaffold.Scaffold.new({body: new scroll_view.ListView.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(15.0), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.menu, {color: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new container.Container.new({height: 50.0, width: 50.0, decoration: new box_decoration.BoxDecoration.new({boxShadow: JSArrayOfBoxShadow().of([new box_shadow.BoxShadow.new({color: colors.Colors.grey.withOpacity(0.3), blurRadius: 6.0, spreadRadius: 4.0, offset: new ui.Offset.new(0.0, 3.0)})]), color: new ui.Color.new(4291225598), shape: box_border.BoxShape.circle, image: new decoration_image.DecorationImage.new({image: new image_resolution.AssetImage.new("assets/tuxedo.png"), fit: box_fit.BoxFit.contain})}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4})]), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), new basic.Padding.new({padding: C17 || CT.C17, child: new text.Text.new("SEARCH FOR", {style: google_fonts.GoogleFonts.notoSans({fontWeight: ui.FontWeight.w800, fontSize: 27.0}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), new basic.Padding.new({padding: C17 || CT.C17, child: new text.Text.new("RECIPES", {style: google_fonts.GoogleFonts.notoSans({fontWeight: ui.FontWeight.w800, fontSize: 27.0}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), new basic.SizedBox.new({height: 25.0, $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 15.0, right: 15.0}), child: new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 5.0}), decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.grey.withOpacity(0.1), borderRadius: new border_radius.BorderRadius.circular(10.0)}), child: new text_field.TextField.new({decoration: new input_decorator.InputDecoration.new({hintText: "Search", hintStyle: google_fonts.GoogleFonts.notoSans({fontSize: 14.0}), border: input_border.InputBorder.none, fillColor: colors.Colors.grey.withOpacity(0.5), prefixIcon: new icon.Icon.new(icons.Icons.search, {color: colors.Colors.grey, $creationLocationd_0dea112b090073317d4: C37 || CT.C37})}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), new basic.Padding.new({padding: C17 || CT.C17, child: new text.Text.new("Recommended", {style: google_fonts.GoogleFonts.notoSans({fontWeight: ui.FontWeight.w500, fontSize: 18.0}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), new basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), new container.Container.new({height: 200.0, child: new scroll_view.ListView.new({scrollDirection: basic_types.Axis.horizontal, children: JSArrayOfWidget().of([framework.Widget._check(this[_buildListItem]("Hamburg", "assets/burger.png", "21", new ui.Color.new(4294961606), new ui.Color.new(4292515153))), framework.Widget._check(this[_buildListItem]("Chips", "assets/fries.png", "15", new ui.Color.new(4290962430), new ui.Color.new(4285172906))), framework.Widget._check(this[_buildListItem]("Donuts", "assets/doughnut.png", "15", new ui.Color.new(4292344538), new ui.Color.new(4283878526)))]), $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 15.0}), child: new tabs.TabBar.new({controller: this.tabController, isScrollable: true, indicatorColor: colors.Colors.transparent, labelColor: colors.Colors.black, unselectedLabelColor: colors.Colors.grey.withOpacity(0.5), labelStyle: google_fonts.GoogleFonts.notoSans({fontSize: 16.0, fontWeight: ui.FontWeight.w700}), unselectedLabelStyle: google_fonts.GoogleFonts.notoSans({fontSize: 12.0, fontWeight: ui.FontWeight.w500}), tabs: JSArrayOfWidget().of([new tabs.Tab.new({child: new text.Text.new("FEATURED", {$creationLocationd_0dea112b090073317d4: C78 || CT.C78}), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), new tabs.Tab.new({child: new text.Text.new("COMBO", {$creationLocationd_0dea112b090073317d4: C84 || CT.C84}), $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), new tabs.Tab.new({child: new text.Text.new("FAVORITES", {$creationLocationd_0dea112b090073317d4: C90 || CT.C90}), $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), new tabs.Tab.new({child: new text.Text.new("RECOMMENDED", {$creationLocationd_0dea112b090073317d4: C96 || CT.C96}), $creationLocationd_0dea112b090073317d4: C99 || CT.C99})]), $creationLocationd_0dea112b090073317d4: C102 || CT.C102}), $creationLocationd_0dea112b090073317d4: C112 || CT.C112}), new container.Container.new({height: dart.notNull(media_query.MediaQuery.of(context).size.height) - 450.0, child: new tabs.TabBarView.new({controller: this.tabController, children: JSArrayOfWidget().of([new foodtabs.FoodTab.new({$creationLocationd_0dea112b090073317d4: C116 || CT.C116}), new foodtabs.FoodTab.new({$creationLocationd_0dea112b090073317d4: C118 || CT.C118}), new foodtabs.FoodTab.new({$creationLocationd_0dea112b090073317d4: C119 || CT.C119}), new foodtabs.FoodTab.new({$creationLocationd_0dea112b090073317d4: C120 || CT.C120})]), $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), $creationLocationd_0dea112b090073317d4: C125 || CT.C125})]), $creationLocationd_0dea112b090073317d4: C129 || CT.C129}), $creationLocationd_0dea112b090073317d4: C132 || CT.C132});
    }
    [_buildListItem](foodName, imgPath, price, bgColor, textColor) {
      return new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 15.0}), child: new ink_well.InkWell.new({onTap: dart.fn(() => {
            navigator.Navigator.of(this.context).push(dart.dynamic, new page.MaterialPageRoute.new({builder: dart.fn(context => new burguerpage.BurguerPage.new({heroTag: foodName, foodName: foodName, pricePerItem: price, imgPath: imgPath, $creationLocationd_0dea112b090073317d4: C135 || CT.C135}), BuildContextToBurguerPage())}));
          }, VoidToNull()), child: new container.Container.new({height: 175.0, width: 150.0, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(15.0), color: bgColor}), child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new heroes.Hero.new({tag: foodName, child: new container.Container.new({height: 75.0, width: 75.0, decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.white, shape: box_border.BoxShape.circle}), child: new basic.Center.new({child: new image.Image.asset(imgPath, {height: 50.0, width: 50.0, $creationLocationd_0dea112b090073317d4: C141 || CT.C141}), $creationLocationd_0dea112b090073317d4: C146 || CT.C146}), $creationLocationd_0dea112b090073317d4: C149 || CT.C149}), $creationLocationd_0dea112b090073317d4: C155 || CT.C155}), new basic.SizedBox.new({height: 25.0, $creationLocationd_0dea112b090073317d4: C159 || CT.C159}), new text.Text.new(foodName, {style: google_fonts.GoogleFonts.notoSans({fontSize: 17.0, color: textColor}), $creationLocationd_0dea112b090073317d4: C162 || CT.C162}), new text.Text.new("$" + dart.notNull(price), {style: google_fonts.GoogleFonts.notoSans({fontSize: 17.0, color: textColor}), $creationLocationd_0dea112b090073317d4: C166 || CT.C166})]), $creationLocationd_0dea112b090073317d4: C170 || CT.C170}), $creationLocationd_0dea112b090073317d4: C174 || CT.C174}), $creationLocationd_0dea112b090073317d4: C180 || CT.C180}), $creationLocationd_0dea112b090073317d4: C184 || CT.C184});
    }
  };
  (dashboardpage._DashboardPageState.new = function() {
    this.tabController = null;
    dashboardpage._DashboardPageState.__proto__.new.call(this);
    ;
  }).prototype = dashboardpage._DashboardPageState.prototype;
  dart.addTypeTests(dashboardpage._DashboardPageState);
  dart.setMethodSignature(dashboardpage._DashboardPageState, () => ({
    __proto__: dart.getMethods(dashboardpage._DashboardPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildListItem]: dart.fnType(dart.dynamic, [core.String, core.String, core.String, ui.Color, ui.Color])
  }));
  dart.setLibraryUri(dashboardpage._DashboardPageState, "package:online_reservation/dashboardpage.dart");
  dart.setFieldSignature(dashboardpage._DashboardPageState, () => ({
    __proto__: dart.getFields(dashboardpage._DashboardPageState.__proto__),
    tabController: dart.fieldType(tab_controller.TabController)
  }));
  dart.trackLibraries("packages/online_reservation/dashboardpage", {
    "package:online_reservation/dashboardpage.dart": dashboardpage
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dashboardpage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAOuC;IAAqB;;;;;;EAC5D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AASqB,MAAX;AAC+C,MAArD,qBAAgB,6CAAqB,cAAc;IACrD;UAG0B;AACxB,YAAO,kCACC,wCACc,sBAChB,gCACsB,+BAAI,cACjB,sCACgC,+CACnB,sBAChB,kBAAW,0BAAoB,4EAC/B,qCACU,aACD,kBACK,iDACC,yBACT,qCACgB,AAAK,+BAAY,kBACnB,mBACE,aACN,kBAAO,KAAK,iBAGjB,iBAAM,oBACG,mCACT,iDACE,oCAAW,2BACN,qMAOxB,sDAES,kBACL,sBACmB,+CACM,8BAAgB,0HAG7C,sDAES,kBACL,mBACmB,+CACM,8BAAgB,0HAG7C,gCAAiB,+DAEjB,gCACsB,uCAAW,aAAa,eACrC,sCACe,uCAAW,mBACnB,6CACI,AAAK,+BAAY,oBACJ,wCAAS,gBAE/B,0CACO,mDACA,qBACa,6CAAmB,gBACtB,0CACF,AAAK,+BAAY,kBACvB,kBAAW,4BAAqB,0PAKpD,gCAAiB,+DACjB,sDAES,kBACL,uBACmB,+CACM,8BAAgB,0HAI7C,gCAAiB,+DACjB,qCACU,cACD,+CACiB,uCACJ,8CAChB,qBAAe,WAAW,qBAAqB,MAAM,iBAAM,aAAa,iBAAM,uCAC9E,qBAAe,SAAS,oBAAoB,MAAM,iBAAM,aAAa,iBAAM,uCAC3E,qBAAe,UAAU,uBAAuB,MAAM,iBAAM,aAAa,iBAAM,mIAIrF,gCAAiB,+DACjB,gCACsB,uCAAW,eACxB,iCACO,kCACE,sBACS,uCACJ,2CACU,AAAK,+BAAY,kBACtB,6CACZ,kBAA6B,4CAEP,6CACtB,kBAA6B,4BAE3B,sBACZ,yBAAW,kBAAK,+HAChB,yBAAW,kBAAK,4HAChB,yBAAW,kBAAK,gIAChB,yBAAW,kBAAK,0PAItB,qCAC6C,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,cACtC,qCACO,8BACM,sBAChB,qFACA,qFACA,qFACA;IAOd;qBAEsB,UAAiB,SAAgB,OAAa,SAAe;AACjF,YAAO,iCACe,uCAAW,eACxB,iCACE;AAGH,YAFQ,AAAY,uBAAT,iCAAc,yCAChB,QAAC,WAAY,0CAAqB,QAAQ,YAAY,QAAQ,gBAAgB,KAAK,WAAW,OAAO;mCAG3G,qCACG,cACD,mBACK,oDACiB,wCAAS,cAC7B,OAAO,WAET,yCACgC,yCACnB,sBAChB,0BACO,QAAQ,SACN,qCACG,aACD,kBACK,6CACI,4BACE,qCAEX,6BACQ,sBAAM,OAAO,WAAU,aAAY,kPAItD,gCAAiB,iEACjB,kBACE,QAAQ,UACW,6CACP,aACH,SAAS,+DAGpB,kBACE,AAAK,mBAAE,KAAK,WACO,6CACP,aACH,SAAS;IAQhC;;;IAnMc;;;EAoMhB","file":"dashboardpage.ddc.js"}');
  // Exports:
  return {
    dashboardpage: dashboardpage
  };
});

//# sourceMappingURL=dashboardpage.ddc.js.map
