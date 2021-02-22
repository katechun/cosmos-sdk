(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{817:function(e,t,a){"use strict";a.r(t);var r=a(1),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"subspace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subspace"}},[e._v("#")]),e._v(" Subspace")]),e._v(" "),a("p",[a("code",[e._v("Subspace")]),e._v(" is a prefixed subspace of the parameter store. Each module who use the\nparameter store will take a "),a("code",[e._v("Subspace")]),e._v(", not the "),a("code",[e._v("Keeper")]),e._v(", to isolate permission to access.")]),e._v(" "),a("h2",{attrs:{id:"key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[e._v("#")]),e._v(" Key")]),e._v(" "),a("p",[e._v("Parameter keys are human readable alphanumeric strings. A parameter for the key\n"),a("code",[e._v('"ExampleParameter"')]),e._v(" is stored under "),a("code",[e._v('[]byte("SubspaceName" + "/" + "ExampleParameter")')]),e._v(",\nwhere "),a("code",[e._v('"SubspaceName"')]),e._v(" is the name of the subspace.")]),e._v(" "),a("p",[e._v("Subkeys are secondary parameter keys those are used along with a primary parameter key.\nSubkeys can be used for grouping or dynamic parameter key generation during runtime.")]),e._v(" "),a("h2",{attrs:{id:"keytable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keytable"}},[e._v("#")]),e._v(" KeyTable")]),e._v(" "),a("p",[e._v("All of the parameter keys that will be used should be registered at the compile\ntime. "),a("code",[e._v("KeyTable")]),e._v(" is essentially a "),a("code",[e._v("map[string]attribute")]),e._v(", where the "),a("code",[e._v("string")]),e._v(" is a parameter key.")]),e._v(" "),a("p",[e._v("Currently, "),a("code",[e._v("attribute")]),e._v(" only consists of "),a("code",[e._v("reflect.Type")]),e._v(", which indicates the parameter\ntype. It is needed even if the state machine has no error, because the paraeter\ncan be modified externally, for example via the governance.")]),e._v(" "),a("p",[e._v("Only primary keys have to be registered on the "),a("code",[e._v("KeyTable")]),e._v(". Subkeys inherit the\nattribute of the primary key.")]),e._v(" "),a("h2",{attrs:{id:"paramset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paramset"}},[e._v("#")]),e._v(" ParamSet")]),e._v(" "),a("p",[e._v("Modules often define a struct of parameters. Instead of calling methods with\neach of those parameters, when the struct implements "),a("code",[e._v("ParamSet")]),e._v(", it can be used\nwith the following methods:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("KeyTable.RegisterParamSet()")]),e._v(": registers all parameters in the struct")]),e._v(" "),a("li",[a("code",[e._v("Subspace.{Get, Set}ParamSet()")]),e._v(": Get to & Set from the struct")])]),e._v(" "),a("p",[e._v("The implementor should be a pointer in order to use "),a("code",[e._v("GetParamSet()")])])])}),[],!1,null,null,null);t.default=s.exports}}]);