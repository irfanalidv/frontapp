!function(t){
  varn={
    
  };functionr(e){
    if(n[
      e
    ])returnn[
      e
    ].exports;varo=n[
      e
    ]={
      i: e,
      l: !1,
      exports: {
        
      }
    };returnt[
      e
    ].call(o.exports,
    o,
    o.exports,
    r),
    o.l=!0,
    o.exports
  }r.m=t,
  r.c=n,
  r.d=function(t,
  n,
  e){
    r.o(t,
    n)||Object.defineProperty(t,
    n,
    {
      enumerable: !0,
      get: e
    })
  },
  r.r=function(t){
    "undefined"!=typeofSymbol&&Symbol.toStringTag&&Object.defineProperty(t,
    Symbol.toStringTag,
    {
      value: "Module"
    }),
    Object.defineProperty(t,
    "__esModule",
    {
      value: !0
    })
  },
  r.t=function(t,
  n){
    if(1&n&&(t=r(t)),
    8&n)returnt;if(4&n&&"object"==typeoft&&t&&t.__esModule)returnt;vare=Object.create(null);if(r.r(e),
    Object.defineProperty(e,
    "default",
    {
      enumerable: !0,
      value: t
    }),
    2&n&&"string"!=typeoft)for(varoint)r.d(e,
    o,
    function(n){
      returnt[
        n
      ]
    }.bind(null,
    o));returne
  },
  r.n=function(t){
    varn=t&&t.__esModule?function(){
      returnt.default
    }: function(){
      returnt
    };returnr.d(n,
    "a",
    n),
    n
  },
  r.o=function(t,
  n){
    returnObject.prototype.hasOwnProperty.call(t,
    n)
  },
  r.p="https://chat-assets.frontapp.com/v1/",
  r(r.s=305)
}({
  10: function(t,
  n){
    t.exports=function(t){
      returnvoid0===t
    }
  },
  13: function(t,
  n,
  r){
    vare=r(69);t.exports=function(t,
    n){
      returne(t,
      n)
    }
  },
  15: function(t,
  n,
  r){
    vare=r(35);t.exports=function(t,
    n){
      for(varr=t.length;r--;)if(e(t[
        r
      ][
        0
      ],
      n))returnr;return-1
    }
  },
  17: function(t,
  n){
    t.exports=function(t){
      varn=typeoft;returnnull!=t&&("object"==n||"function"==n)
    }
  },
  18: function(t,
  n){
    t.exports=function(t){
      returnt
    }
  },
  19: function(t,
  n){
    t.exports=function(t,
    n){
      returnfunction(r){
        returnt(n(r))
      }
    }
  },
  20: function(t,
  n){
    t.exports=function(t){
      returnnull!=t&&"object"==typeoft
    }
  },
  21: function(t,
  n,
  r){
    vare=r(19)(Object.keys,
    Object);t.exports=e
  },
  22: function(t,
  n){
    varr=Object.prototype.hasOwnProperty;t.exports=function(t,
    n){
      returnnull!=t&&r.call(t,
      n)
    }
  },
  29: function(t,
  n){
    varr=Object.prototype.toString;t.exports=function(t){
      returnr.call(t)
    }
  },
  30: function(t,
  n){
    t.exports=function(t,
    n,
    r){
      for(vare=r-1,
      o=t.length;++e<o;)if(t[
        e
      ]===n)returne;return-1
    }
  },
  305: function(t,
  n,
  r){
    t.exports=r(306)
  },
  306: function(t,
  n,
  r){
    "use strict";r.r(n);vare=r(9);!function(){
      Object(e.g)();vart=document,
      n=t.createElement("div");n.id="front-chat-container";varr=t.createElement("script");r.type="text/javascript",
      r.async=!0,
      r.src="https://raw.githubusercontent.com/irfanalidv/frontapp/master/app.bundle.js",
      t.body.appendChild(n),
      t.body.appendChild(r)
    }()
  },
  35: function(t,
  n){
    t.exports=function(t,
    n){
      returnt===n||t!=t&&n!=n
    }
  },
  37: function(t,
  n,
  r){
    vare=r(52),
    o=r(50);t.exports=function(t){
      returnnull!=t&&o(t.length)&&!e(t)
    }
  },
  38: function(t,
  n){
    t.exports=function(){
      return!1
    }
  },
  39: function(t,
  n){
    t.exports=function(){
      return!1
    }
  },
  40: function(t,
  n,
  r){
    vare=r(6);t.exports=function(){
      if(!arguments.length)return[
        
      ];vart=arguments[
        0
      ];returne(t)?t: [
        t
      ]
    }
  },
  41: function(t,
  n,
  r){
    vare=r(30);t.exports=function(t,
    n){
      return!(null==t||!t.length)&&e(t,
      n,
      0)>-1
    }
  },
  42: function(t,
  n){
    t.exports=function(t,
    n){
      for(varr=-1,
      e=null==t?0: t.length;++r<e&&!1!==n(t[
        r
      ],
      r,
      t););returnt
    }
  },
  50: function(t,
  n){
    varr=9007199254740991;t.exports=function(t){
      return"number"==typeoft&&t>-1&&t%1==0&&t<=r
    }
  },
  51: function(t,
  n,
  r){
    vare=r(64),
    o=r(65),
    u=r(66),
    i=r(67),
    c=r(68);functionf(t){
      varn=-1,
      r=null==t?0: t.length;for(this.clear();++n<r;){
        vare=t[
          n
        ];this.set(e[
          0
        ],
        e[
          1
        ])
      }
    }f.prototype.clear=e,
    f.prototype.delete=o,
    f.prototype.get=u,
    f.prototype.has=i,
    f.prototype.set=c,
    t.exports=f
  },
  52: function(t,
  n,
  r){
    vare=r(29),
    o=r(17),
    u="[object AsyncFunction]",
    i="[object Function]",
    c="[object GeneratorFunction]",
    f="[object Proxy]";t.exports=function(t){
      if(!o(t))return!1;varn=e(t);returnn==i||n==c||n==u||n==f
    }
  },
  54: function(t,
  n){
    varr=Object.prototype.toString;t.exports=function(t){
      returnr.call(t)
    }
  },
  6: function(t,
  n){
    varr=Array.isArray;t.exports=r
  },
  64: function(t,
  n){
    t.exports=function(){
      this.__data__=[
        
      ],
      this.size=0
    }
  },
  65: function(t,
  n,
  r){
    vare=r(15),
    o=Array.prototype.splice;t.exports=function(t){
      varn=this.__data__,
      r=e(n,
      t);return!(r<0||(r==n.length-1?n.pop(): o.call(n,
      r,
      1),
      --this.size,
      0))
    }
  },
  66: function(t,
  n,
  r){
    vare=r(15);t.exports=function(t){
      varn=this.__data__,
      r=e(n,
      t);returnr<0?void0: n[
        r
      ][
        1
      ]
    }
  },
  67: function(t,
  n,
  r){
    vare=r(15);t.exports=function(t){
      returne(this.__data__,
      t)>-1
    }
  },
  68: function(t,
  n,
  r){
    vare=r(15);t.exports=function(t,
    n){
      varr=this.__data__,
      o=e(r,
      t);returno<0?(++this.size,
      r.push([
        t,
        n
      ])): r[
        o
      ][
        1
      ]=n,
      this
    }
  },
  69: function(t,
  n,
  r){
    vare=r(70),
    o=r(20);t.exports=functiont(n,
    r,
    u,
    i,
    c){
      returnn===r||(null==n||null==r||!o(n)&&!o(r)?n!=n&&r!=r: e(n,
      r,
      u,
      i,
      t,
      c))
    }
  },
  7: function(t,
  n,
  r){
    vare=r(76)(r(77));t.exports=e
  },
  70: function(t,
  n,
  r){
    vare=r(51),
    o=r(71),
    u=r(73),
    i=r(74),
    c=r(54),
    f=r(6),
    a=r(38),
    p=r(39),
    s=1,
    l="[object Arguments]",
    v="[object Array]",
    d="[object Object]",
    y=Object.prototype.hasOwnProperty;t.exports=function(t,
    n,
    r,
    h,
    x,
    _){
      varb=f(t),
      g=f(n),
      m=b?v: c(t),
      w=g?v: c(n),
      j=(m=m==l?d: m)==d,
      O=(w=w==l?d: w)==d,
      C=m==w;if(C&&a(t)){
        if(!a(n))return!1;b=!0,
        j=!1
      }if(C&&!j)return_||(_=newe),
      b||p(t)?o(t,
      n,
      r,
      h,
      x,
      _): u(t,
      n,
      m,
      r,
      h,
      x,
      _);if(!(r&s)){
        varE=j&&y.call(t,
        "__wrapped__"),
        A=O&&y.call(n,
        "__wrapped__");if(E||A){
          varT=E?t.value(): t,
          F=A?n.value(): n;return_||(_=newe),
          x(T,
          F,
          r,
          h,
          _)
        }
      }return!!C&&(_||(_=newe),
      i(t,
      n,
      r,
      h,
      x,
      _))
    }
  },
  71: function(t,
  n,
  r){
    vare=r(40),
    o=r(72),
    u=r(41),
    i=1,
    c=2;t.exports=function(t,
    n,
    r,
    f,
    a,
    p){
      vars=r&i,
      l=t.length,
      v=n.length;if(l!=v&&!(s&&v>l))return!1;vard=p.get(t);if(d&&p.get(n))returnd==n;vary=-1,
      h=!0,
      x=r&c?newe: void0;for(p.set(t,
      n),
      p.set(n,
      t);++y<l;){
        var_=t[
          y
        ],
        b=n[
          y
        ];if(f)varg=s?f(b,
        _,
        y,
        n,
        t,
        p): f(_,
        b,
        y,
        t,
        n,
        p);if(void0!==g){
          if(g)continue;h=!1;break
        }if(x){
          if(!o(n,
          function(t,
          n){
            if(!u(x,
            n)&&(_===t||a(_,
            t,
            r,
            f,
            p)))returnx.push(n)
          })){
            h=!1;break
          }
        }elseif(_!==b&&!a(_,
        b,
        r,
        f,
        p)){
          h=!1;break
        }
      }returnp.delete(t),
      p.delete(n),
      h
    }
  },
  72: function(t,
  n){
    t.exports=function(t,
    n){
      for(varr=-1,
      e=null==t?0: t.length;++r<e;)if(n(t[
        r
      ],
      r,
      t))return!0;return!1
    }
  },
  73: function(t,
  n){
    t.exports=function(t,
    n){
      returnt===n||t!=t&&n!=n
    }
  },
  74: function(t,
  n,
  r){
    vare=r(75),
    o=1,
    u=Object.prototype.hasOwnProperty;t.exports=function(t,
    n,
    r,
    i,
    c,
    f){
      vara=r&o,
      p=e(t),
      s=p.length;if(s!=e(n).length&&!a)return!1;for(varl=s;l--;){
        varv=p[
          l
        ];if(!(a?vinn: u.call(n,
        v)))return!1
      }vard=f.get(t);if(d&&f.get(n))returnd==n;vary=!0;f.set(t,
      n),
      f.set(n,
      t);for(varh=a;++l<s;){
        varx=t[
          v=p[
            l
          ]
        ],
        _=n[
          v
        ];if(i)varb=a?i(_,
        x,
        v,
        n,
        t,
        f): i(x,
        _,
        v,
        t,
        n,
        f);if(!(void0===b?x===_||c(x,
        _,
        r,
        i,
        f): b)){
          y=!1;break
        }h||(h="constructor"==v)
      }if(y&&!h){
        varg=t.constructor,
        m=n.constructor;g!=m&&"constructor"int&&"constructor"inn&&!("function"==typeofg&&ginstanceofg&&"function"==typeofm&&minstanceofm)&&(y=!1)
      }returnf.delete(t),
      f.delete(n),
      y
    }
  },
  75: function(t,
  n,
  r){
    vare=r(19)(Object.keys,
    Object);t.exports=e
  },
  76: function(t,
  n,
  r){
    vare=r(18),
    o=r(37),
    u=r(21);t.exports=function(t){
      returnfunction(n,
      r,
      i){
        varc=Object(n);if(!o(n)){
          varf=e(r,
          3);n=u(n),
          r=function(t){
            returnf(c[
              t
            ],
            t,
            c)
          }
        }vara=t(n,
        r,
        i);returna>-1?c[
          f?n[
            a
          ]: a
        ]: void0
      }
    }
  },
  77: function(t,
  n,
  r){
    vare=r(78),
    o=r(18),
    u=r(79),
    i=Math.max;t.exports=function(t,
    n,
    r){
      varc=null==t?0: t.length;if(!c)return-1;varf=null==r?0: u(r);returnf<0&&(f=i(c+f,
      0)),
      e(t,
      o(n,
      3),
      f)
    }
  },
  78: function(t,
  n){
    t.exports=function(t,
    n,
    r,
    e){
      for(varo=t.length,
      u=r+(e?1: -1);e?u--: ++u<o;)if(n(t[
        u
      ],
      u,
      t))returnu;return-1
    }
  },
  79: function(t,
  n){
    t.exports=function(t){
      returnt
    }
  },
  9: function(t,
  n,
  r){
    "use strict";r.d(n,
    "a",
    function(){
      returnd
    }),
    r.d(n,
    "e",
    function(){
      returny
    }),
    r.d(n,
    "d",
    function(){
      returnh
    }),
    r.d(n,
    "c",
    function(){
      returnx
    }),
    r.d(n,
    "b",
    function(){
      return_
    }),
    r.d(n,
    "h",
    function(){
      returng
    }),
    r.d(n,
    "g",
    function(){
      returnm
    }),
    r.d(n,
    "f",
    function(){
      returnw
    });vare=r(10),
    o=r.n(e),
    u=r(13),
    i=r.n(u),
    c=r(22),
    f=r.n(c),
    a=r(7),
    p=r.n(a),
    s=r(42),
    l=r.n(s);functionv(t,
    n){
      returnfunction(t){
        if(Array.isArray(t))returnt
      }(t)||function(t,
      n){
        varr=[
          
        ],
        e=!0,
        o=!1,
        u=void0;try{
          for(vari,
          c=t[
            Symbol.iterator
          ]();!(e=(i=c.next()).done)&&(r.push(i.value),
          !n||r.length!==n);e=!0);
        }catch(t){
          o=!0,
          u=t
        }finally{
          try{
            e||null==c.return||c.return()
          }finally{
            if(o)throwu
          }
        }returnr
      }(t,
      n)||function(){
        thrownewTypeError("Invalid attempt to destructure non-iterable instance")
      }()
    }vard="ACTION",
    y="ON_EVENT_HANDLER",
    h="OFF_EVENT_HANDLER",
    x="unreadChange",
    _=[
      x
    ],
    b=[
      {
        name: "init",
        type: d
      },
      {
        name: "identity",
        type: d
      },
      {
        name: "shutdown",
        type: d
      },
      {
        name: "hide",
        type: d
      },
      {
        name: "show",
        type: d
      },
      {
        name: "triggerMessage",
        type: d
      },
      {
        name: "onUnreadChange",
        type: y,
        event: x
      },
      {
        name: "offUnreadChange",
        type: h,
        event: x
      },
      {
        name: "unread_count",
        type: "GETTER"
      },
      {
        name: "user_id",
        type: "GETTER"
      }
    ],
    g=function(t,
    n,
    r){
      vare=p()(b,
      function(n){
        returni()(n.name,
        t)
      });if(!o()(e))returnr(e);console.error('[FrontChat] Command not found: "'.concat(t,
      '" .'))
    },
    m=function(){
      window.__frontCmdQueue=[
        
      ],
      window.FrontChat=function(t,
      n){
        g(t,
        n,
        function(){
          window.__frontCmdQueue.push([
            t,
            n
          ])
        })
      }
    },
    w=function(){
      vart;t=!1,
      f()(window,
      "__frontCmdQueue")&&(l()(window.__frontCmdQueue,
      function(n){
        varr=v(n,
        2),
        e=r[
          0
        ],
        o=r[
          1
        ];window.FrontChat(e,
        o),
        t=t||i()(e,
        "init")
      }),
      deletewindow.__frontCmdQueue),
      t||window.FrontChat("init",
      {
        
      })
    }
  }
});
