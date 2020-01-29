define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const icon$ = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const icons = packages__flutter__material.src__material__icons;
  const theme = packages__flutter__material.src__material__theme;
  const material = packages__flutter__material.src__material__material;
  const colors = packages__flutter__material.src__material__colors;
  const box$ = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const wrap = packages__flutter__src__rendering__animated_size.src__rendering__wrap;
  const drag_details = packages__flutter__src__gestures__arena.src__gestures__drag_details;
  const smooth_star_rating = Object.create(dart.library);
  const $round = dartx.round;
  const $toDouble = dartx.toDouble;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let DragUpdateDetailsToNull = () => (DragUpdateDetailsToNull = dart.constFn(dart.fnType(core.Null, [drag_details.DragUpdateDetails])))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let intToWidget = () => (intToWidget = dart.constFn(dart.fnType(framework.Widget, [core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 33,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/smooth_star_rating/smooth_star_rating.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/smooth_star_rating/smooth_star_rating.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 32,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/smooth_star_rating/smooth_star_rating.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHorizontalDragUpdate",
        [_Location_column]: 7,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/smooth_star_rating/smooth_star_rating.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 11,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "spacing",
        [_Location_column]: 11,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/smooth_star_rating/smooth_star_rating.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/smooth_star_rating/smooth_star_rating.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C1;
  let C0;
  let C7;
  let C8;
  let C9;
  let C6;
  let C5;
  let C12;
  let C13;
  let C14;
  let C11;
  let C10;
  let C17;
  let C18;
  let C19;
  let C16;
  let C15;
  let C22;
  let C23;
  let C24;
  let C21;
  let C20;
  let C27;
  let C28;
  let C26;
  let C25;
  const starCount$ = dart.privateName(smooth_star_rating, "SmoothStarRating.starCount");
  const rating$ = dart.privateName(smooth_star_rating, "SmoothStarRating.rating");
  const onRatingChanged$ = dart.privateName(smooth_star_rating, "SmoothStarRating.onRatingChanged");
  const color$ = dart.privateName(smooth_star_rating, "SmoothStarRating.color");
  const borderColor$ = dart.privateName(smooth_star_rating, "SmoothStarRating.borderColor");
  const size$ = dart.privateName(smooth_star_rating, "SmoothStarRating.size");
  const allowHalfRating$ = dart.privateName(smooth_star_rating, "SmoothStarRating.allowHalfRating");
  const filledIconData$ = dart.privateName(smooth_star_rating, "SmoothStarRating.filledIconData");
  const halfFilledIconData$ = dart.privateName(smooth_star_rating, "SmoothStarRating.halfFilledIconData");
  const defaultIconData$ = dart.privateName(smooth_star_rating, "SmoothStarRating.defaultIconData");
  const spacing$ = dart.privateName(smooth_star_rating, "SmoothStarRating.spacing");
  smooth_star_rating.SmoothStarRating = class SmoothStarRating extends framework.StatelessWidget {
    get starCount() {
      return this[starCount$];
    }
    set starCount(value) {
      super.starCount = value;
    }
    get rating() {
      return this[rating$];
    }
    set rating(value) {
      super.rating = value;
    }
    get onRatingChanged() {
      return this[onRatingChanged$];
    }
    set onRatingChanged(value) {
      super.onRatingChanged = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get borderColor() {
      return this[borderColor$];
    }
    set borderColor(value) {
      super.borderColor = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get allowHalfRating() {
      return this[allowHalfRating$];
    }
    set allowHalfRating(value) {
      super.allowHalfRating = value;
    }
    get filledIconData() {
      return this[filledIconData$];
    }
    set filledIconData(value) {
      super.filledIconData = value;
    }
    get halfFilledIconData() {
      return this[halfFilledIconData$];
    }
    set halfFilledIconData(value) {
      super.halfFilledIconData = value;
    }
    get defaultIconData() {
      return this[defaultIconData$];
    }
    set defaultIconData(value) {
      super.defaultIconData = value;
    }
    get spacing() {
      return this[spacing$];
    }
    set spacing(value) {
      super.spacing = value;
    }
    buildStar(context, index) {
      let t0, t0$, t0$0;
      let icon = null;
      if (dart.notNull(index) >= dart.notNull(this.rating)) {
        icon = new icon$.Icon.new(this.defaultIconData != null ? this.defaultIconData : icons.Icons.star_border, {color: (t0 = this.borderColor, t0 == null ? theme.Theme.of(context).primaryColor : t0), size: this.size, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
      } else if (dart.notNull(index) > dart.notNull(this.rating) - (dart.test(this.allowHalfRating) ? 0.5 : 1.0) && dart.notNull(index) < dart.notNull(this.rating)) {
        icon = new icon$.Icon.new(this.halfFilledIconData != null ? this.halfFilledIconData : icons.Icons.star_half, {color: (t0$ = this.color, t0$ == null ? theme.Theme.of(context).primaryColor : t0$), size: this.size, $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
      } else {
        icon = new icon$.Icon.new(this.filledIconData != null ? this.filledIconData : icons.Icons.star, {color: (t0$0 = this.color, t0$0 == null ? theme.Theme.of(context).primaryColor : t0$0), size: this.size, $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
      }
      return new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
          if (this.onRatingChanged != null) this.onRatingChanged(dart.notNull(index) + 1.0);
        }, VoidToNull()), onHorizontalDragUpdate: dart.fn(dragDetails => {
          let box = box$.RenderBox._check(context.findRenderObject());
          let _pos = box.globalToLocal(dragDetails.globalPosition);
          let i = dart.notNull(_pos.dx) / dart.notNull(this.size);
          let newRating = dart.test(this.allowHalfRating) ? i : i[$round]()[$toDouble]();
          if (newRating > dart.notNull(this.starCount)) {
            newRating = this.starCount[$toDouble]();
          }
          if (newRating < 0) {
            newRating = 0.0;
          }
          if (this.onRatingChanged != null) this.onRatingChanged(newRating);
        }, DragUpdateDetailsToNull()), child: icon, $creationLocationd_0dea112b090073317d4: C15 || CT.C15});
    }
    build(context) {
      return new material.Material.new({color: colors.Colors.transparent, child: new basic.Wrap.new({alignment: wrap.WrapAlignment.start, spacing: this.spacing, children: ListOfWidget().generate(this.starCount, dart.fn(index => this.buildStar(context, index), intToWidget())), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25});
    }
  };
  (smooth_star_rating.SmoothStarRating.new = function(opts) {
    let starCount = opts && 'starCount' in opts ? opts.starCount : 5;
    let spacing = opts && 'spacing' in opts ? opts.spacing : 0;
    let rating = opts && 'rating' in opts ? opts.rating : 0;
    let defaultIconData = opts && 'defaultIconData' in opts ? opts.defaultIconData : null;
    let onRatingChanged = opts && 'onRatingChanged' in opts ? opts.onRatingChanged : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let borderColor = opts && 'borderColor' in opts ? opts.borderColor : null;
    let size = opts && 'size' in opts ? opts.size : 25;
    let filledIconData = opts && 'filledIconData' in opts ? opts.filledIconData : null;
    let halfFilledIconData = opts && 'halfFilledIconData' in opts ? opts.halfFilledIconData : null;
    let allowHalfRating = opts && 'allowHalfRating' in opts ? opts.allowHalfRating : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[starCount$] = starCount;
    this[spacing$] = spacing;
    this[rating$] = rating;
    this[defaultIconData$] = defaultIconData;
    this[onRatingChanged$] = onRatingChanged;
    this[color$] = color;
    this[borderColor$] = borderColor;
    this[size$] = size;
    this[filledIconData$] = filledIconData;
    this[halfFilledIconData$] = halfFilledIconData;
    this[allowHalfRating$] = allowHalfRating;
    smooth_star_rating.SmoothStarRating.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    if (!(this.rating != null)) dart.assertFailed(null, "org-dartlang-app:///packages/smooth_star_rating/smooth_star_rating.dart", 34, 12, "this.rating != null");
  }).prototype = smooth_star_rating.SmoothStarRating.prototype;
  dart.addTypeTests(smooth_star_rating.SmoothStarRating);
  dart.setMethodSignature(smooth_star_rating.SmoothStarRating, () => ({
    __proto__: dart.getMethods(smooth_star_rating.SmoothStarRating.__proto__),
    buildStar: dart.fnType(framework.Widget, [framework.BuildContext, core.int]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(smooth_star_rating.SmoothStarRating, "package:smooth_star_rating/smooth_star_rating.dart");
  dart.setFieldSignature(smooth_star_rating.SmoothStarRating, () => ({
    __proto__: dart.getFields(smooth_star_rating.SmoothStarRating.__proto__),
    starCount: dart.finalFieldType(core.int),
    rating: dart.finalFieldType(core.double),
    onRatingChanged: dart.finalFieldType(dart.fnType(dart.void, [core.double])),
    color: dart.finalFieldType(ui.Color),
    borderColor: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    allowHalfRating: dart.finalFieldType(core.bool),
    filledIconData: dart.finalFieldType(icon_data.IconData),
    halfFilledIconData: dart.finalFieldType(icon_data.IconData),
    defaultIconData: dart.finalFieldType(icon_data.IconData),
    spacing: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/smooth_star_rating/smooth_star_rating", {
    "package:smooth_star_rating/smooth_star_rating.dart": smooth_star_rating
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["smooth_star_rating.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQY;;;;;;IACG;;;;;;IACc;;;;;;IACf;;;;;;IACA;;;;;;IACC;;;;;;IACF;;;;;;IACI;;;;;;IACA;;;;;;IAEX;;;;;;IACS;;;;;;cAiBiB,SAAa;;AACpC;AACL,UAAU,aAAN,KAAK,kBAAI;AAKV,QAJD,OAAW,mBACT,AAAgB,wBAAG,OAAO,uBAAwB,kCAC/B,6BAAZ,OAAqB,AAAY,eAAT,OAAO,4BAChC;YAEH,KAAU,aAAN,KAAK,IAAU,aAAP,0BAAU,wBAAkB,MAAM,QAC3C,aAAN,KAAK,iBAAG;AAKT,QAJD,OAAW,mBACT,AAAmB,2BAAG,OAAO,0BAA2B,gCAC3C,yBAAN,OAAe,AAAY,eAAT,OAAO,6BAC1B;;AAOP,QAJD,OAAW,mBACT,AAAe,uBAAG,OAAO,sBAAuB,2BACnC,2BAAN,OAAe,AAAY,eAAT,OAAO,8BAC1B;;AAIV,YAAW,kDACF;AACL,cAAS,wBAAmB,MAAM,AAA4B,qBAAN,aAAN,KAAK,IAAG;kDAEpC,QAAC;AACb,0CAAM,AAAQ,OAAD;AACnB,qBAAO,AAAI,GAAD,eAAe,AAAY,WAAD;AACpC,kBAAY,aAAR,AAAK,IAAD,oBAAM;AACd,oCAAY,wBAAkB,CAAC,GAAG,AAAE,AAAQ,CAAT;AACvC,cAAI,AAAU,SAAD,gBAAG;AACkB,YAAhC,YAAY,AAAU;;AAExB,cAAI,AAAU,SAAD,GAAG;AACC,YAAf,YAAY;;AAEd,cAAS,wBAAmB,MAAM,AAA0B,qBAAV,SAAS;8CAEtD,IAAI;IAEf;UAG0B;AACxB,YAAW,mCACK,kCACH,+BACkB,mCAChB,wBACK,wBACV,gBAAW,QAAC,SAAU,eAAU,OAAO,EAAE,KAAK;IAE1D;;;QArEO;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;;IAVA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;AAXP;AAaE,UAAY,AAAO,eAAG;EACxB","file":"smooth_star_rating.ddc.js"}');
  // Exports:
  return {
    smooth_star_rating: smooth_star_rating
  };
});

//# sourceMappingURL=smooth_star_rating.ddc.js.map
