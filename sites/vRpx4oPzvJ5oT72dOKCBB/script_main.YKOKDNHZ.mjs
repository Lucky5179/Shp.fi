import{Aa as S,G as g,H as m,I as u,J as b,K as y,L as _,M as v,O as k,Q as F,S as E,e as c,ea as I,h,ha as P,qa as w}from"./chunk-R2F25RPH.mjs";import"./chunk-2TUB4ERK.mjs";import{c as t}from"./chunk-RIUMFBNJ.mjs";var L="default"in m?g:m,d={},V=L;d.createRoot=V.createRoot;d.hydrateRoot=V.hydrateRoot;var x=d.createRoot,D=d.hydrateRoot;var f={augiA20Il:{elements:{},page:u(()=>import("./fmb5oTSzj4Fj7opRSEwC1DHuweys3Dw3wnsqO5zFNVM.2XRHBI36.mjs")),path:"/"}},H=[{code:"en",id:"default",name:"English",slug:""}];async function z({routeId:a,pathVariables:o,localeId:r}){await f[a].page.preload();let n=c(P,{isWebsite:!0,routeId:a,pathVariables:o,routes:f,collectionUtils:{},framerSiteId:"bac3037013e87db466ed616bf8a472f08f3c38a9f51b14cd185c17ba767db6d2",notFoundPage:u(()=>import("./SitesNotFoundPage.js@1.1-OUEJ7MAW.mjs")),isReducedMotion:void 0,localeId:r,locales:H,preserveQueryParams:void 0}),s=c(I,{children:n,value:{enableAsyncURLUpdates:!1,useGranularSuspense:!0,wrapUpdatesInTransitions:!1}});return c(b,{children:s,value:{routes:{}}})}var U=typeof document<"u";if(U){t.__framer_importFromPackage=(o,r)=>()=>c(F,{error:'Package component not supported: "'+r+'" in "'+o+'"'}),t.process={...t.process,env:{...t.process?t.process.env:void 0,NODE_ENV:"production"}},t.__framer_events=t.__framer_events||[],E();let a=document.getElementById("main");"framerHydrateV2"in a.dataset?O(!0,a):O(!1,a)}function M(){U&&t.__framer_events.push(arguments)}async function O(a,o){try{let R=function(e,B){let l=B?.componentStack;console.warn("Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches.",e,l),!(Math.random()>.01)&&M("published_site_load_recoverable_error",{message:String(e),componentStack:l,stack:l?void 0:e instanceof Error&&typeof e.stack=="string"?e.stack:null})},r,n,s,i;if(a){let e=JSON.parse(o.dataset.framerHydrateV2);r=e.routeId,n=e.localeId,s=e.pathVariables,i=e.breakpoints}else{let e=k(f,decodeURIComponent(location.pathname),!0,H);r=e.routeId,n=e.localeId,s=e.pathVariables}let p=await z({routeId:r,localeId:n,pathVariables:s});a?(S("framer-rewrite-breakpoints",()=>{w(i),t.__framer_onRewriteBreakpoints?.(i)}),h(()=>{y(),v(),_(),D(o,p,{onRecoverableError:R})})):x(o,{onRecoverableError:R}).render(p)}catch(r){throw M("published_site_load_error",{message:String(r),stack:r instanceof Error&&typeof r.stack=="string"?r.stack:null}),r}}export{z as getPageRoot};
//# sourceMappingURL=script_main.YKOKDNHZ.mjs.map