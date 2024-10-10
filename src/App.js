import React, { useRef } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import Intro from './components/Intro';
import VideoTestimonials from './components/VideoTestimonials';
import Features from './components/Features';
import FeaturedOn from './components/FeaturedOn';
import CTA from './components/CTA';
import Testimonials1 from './components/Testimonials1';
import Testimonials2 from './components/Testimonials2';
import Faqs from './components/Faqs';
import ApiSection from './components/ApiSection';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const featuresRef = useRef(null); // Create a ref for the Features section

  // Function to scroll to Features section
  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Google Tag Manager (noscript) */}
      <noscript>{`
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NCHCWM2"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      `}</noscript>
      {/* End Google Tag Manager (noscript) */}
      <Helmet>
        
        <script>{`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NCHCWM2');
      `}</script>
      <script>{`
              ;(function (w, r) {
                      w._rwq = r
                      w[r] =
                      w[r] ||
                      function () {
                              ;(w[r].q = w[r].q || []).push(arguments)
                      }
              })(window, "rewardful")
      `}</script>
      
      <script async src="https://r.wdfl.co/rw.js" data-rewardful="77cb34"></script>
      
      <script>{`
              const couponExceptions = new Map()

              couponExceptions
              .set("PODLOVE10", {
                      expires: new Date("Mon April 3 2023 23:59:59 GMT-7")
              })
              .set("PODIUM15OFF", {
                      expires: new Date("Tue May 9 2023 23:59:59 GMT-7")})

              function getQueryParam(name) {
                      const urlParams = new URLSearchParams(window.location.search)
                      return urlParams.get(name)
              }

              function getCouponId() {
                      return (
                              getQueryParam("stripeCouponId") ??
                              getQueryParam("special") ??
                              getQueryParam("code") ??
                              getQueryParam("coupon") ??
                              getQueryParam("vibe")
                      )
              }

              function setCookie(
                      name,
                      value,
                      days = 90,
                      domain,
                      specificExpiryDate = null
              ) {
                      const date = new Date()

                      if (specificExpiryDate && specificExpiryDate instanceof Date) {
                              date.setTime(specificExpiryDate.getTime())
                      } else {
                              date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
                      }

                      const expires = "expires=" + date.toUTCString()
                      document.cookie =
                              name + "=" + value + ";" + expires + ";path=/;domain=" + domain
              }

              function setRefCookie() {
                      const ref = getQueryParam("ref")
                      if (ref) {
                              setCookie("ref", ref, 30, ".podium.page")
                      }
              }

              function setCouponCookies() {
                      const stripeCouponId = getCouponId()

                      if (stripeCouponId) {
                              const couponException = couponExceptions.get(stripeCouponId)
                              if (couponException) {
                                      const specificExpiryDate = couponException.expires
                                      setCookie(
                                              "stripe-coupon-id",
                                              stripeCouponId,
                                              undefined,
                                              ".podium.page",
                                              specificExpiryDate
                                      )
                              } else {
                                      setCookie("stripe-coupon-id", stripeCouponId, 90, ".podium.page")
                              }
                      }
              }
              
              document.addEventListener("DOMContentLoaded", setRefCookie)
              document.addEventListener("DOMContentLoaded", setCouponCookies)

              function closePromoAlert() {
                      document.querySelector(".promo-alert").style.display = "none"
                      document.querySelector(".promo-overlay").style.display = "none"
              }

              document.addEventListener("DOMContentLoaded", () => {
                      const promoCode = getCouponId()
                      if (promoCode) {
                              showPromoAlert(promoCode)
                      }
                      document
                              .getElementById("close-promo-alert")
                              .addEventListener("click", closePromoAlert)
              })
      `}</script>

      <script id="profitwell-js" data-pw-auth="43ee5ad0113a019bd89119654345c3b5">{`
              (function(i,s,o,g,r,a,m){i[o]=i[o]||function(){(i[o].q=i[o].q||[]).push(arguments)};
              a=s.createElement(g);m=s.getElementsByTagName(g)[0];a.async=1;a.src=r+'?auth='+
              s.getElementById(o+'-js').getAttribute('data-pw-auth');m.parentNode.insertBefore(a,m);
              })(window,document,'profitwell','script','https://public.profitwell.com/js/profitwell.js');

              profitwell('start', {});
      `}</script>
      {/* Heap Analytics */}
      <script type="text/javascript">{`
          (window.heap = window.heap || []),
            (heap.load = function (e, t) {
              (window.heap.appid = e), (window.heap.config = t = t || {});
              var r = document.createElement("script");
              (r.type = "text/javascript"),
                (r.async = !0),
                (r.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js");
              var a = document.getElementsByTagName("script")[0];
              a.parentNode.insertBefore(r, a);
              for (
                var n = function (e) {
                    return function () {
                      heap.push([e].concat(Array.prototype.slice.call(arguments, 0)));
                    };
                  },
                  p = [
                    "addEventProperties",
                    "addUserProperties",
                    "clearEventProperties",
                    "identify",
                    "resetIdentity",
                    "removeEventProperty",
                    "setEventProperties",
                    "track",
                    "unsetEventProperty",
                  ],
                  o = 0;
                o < p.length;
                o++
              )
                heap[p[o]] = n(p[o]);
            });
          heap.load("1763421435");
        `}</script>

        {/* Meta Pixel Code */}
        <script>{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '823192439489061');
          fbq('track', 'PageView');
        `}</script>
        <noscript>{`
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=823192439489061&ev=PageView&noscript=1"/>
        `}</noscript>

        {/* Twitter Conversion Tracking */}
        <script>{`
          !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          twq('config','ogpyl');
        `}</script>

        {/* Intercom Script */}
        <script async>{`
          window.intercomSettings = {
            api_base: "https://api-iam.intercom.io",
            app_id: "pvurijy3"
          };
        `}</script>

        <script async>{`
          (function(){
            var w=window;
            var ic=w.Intercom;
            if(typeof ic==="function"){
              ic('reattach_activator');
              ic('update',w.intercomSettings);
            }else{
              var d=document;
              var i=function(){i.c(arguments);};
              i.q=[];
              i.c=function(args){i.q.push(args);};
              w.Intercom=i;
              var l=function(){
                var s=d.createElement('script');
                s.type='text/javascript';
                s.async=true;
                s.src='https://widget.intercom.io/widget/pvurijy3';
                var x=d.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s,x);
              };
              if(document.readyState==='complete'){
                l();
              }else if(w.attachEvent){
                w.attachEvent('onload',l);
              }else{
                w.addEventListener('load',l,false);
              }
            }
          })();
        `}</script>

        {/* LinkedIn Script */}
        <script type="text/javascript">{`
          _linkedin_partner_id = "5421508";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}</script>

        <script type="text/javascript">{`
          (function(l) {
            if (!l){
              window.lintrk = function(a,b){
                window.lintrk.q.push([a,b]);
              };
              window.lintrk.q=[]
            }
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}</script>

        <noscript>{`
          <img height="1" width="1" style={{display:'none'}} alt="" src="https://px.ads.linkedin.com/collect/?pid=5421508&fmt=gif" />
        `}</noscript>
      </Helmet>
      <header className='absolute sticky top-0 z-50'>
        <Header scrollToFeatures={scrollToFeatures} /> {/* Pass the scroll function */}
      </header>
      <main>
        <Intro />
        <VideoTestimonials />
        <div ref={featuresRef}> {/* Attach ref to Features section */}
          <Features />
        </div>
        <FeaturedOn />
        <CTA />
        <Testimonials1 />
        <Faqs />
        <Testimonials2 />
        <CTA />
        <ApiSection />
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default App;
